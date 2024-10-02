import os
import json
import difflib
import speech_recognition as sr
from gtts import gTTS
import pygame
from datetime import datetime
import tkinter as tk
from tkinter import messagebox

# Hàm nhận diện giọng nói
def recognize_speech():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        status_label.config(text="Listening...")
        audio = recognizer.listen(source)
        try:
            text = recognizer.recognize_google(audio, language='vi-VN')
            status_label.config(text=f"Recognized: {text}")
            return text.lower()  # Trả về chữ thường để dễ so sánh
        except sr.UnknownValueError:
            status_label.config(text="Không nhận diện được giọng nói")
        except sr.RequestError:
            status_label.config(text="Lỗi kết nối với dịch vụ nhận diện giọng nói")
        return None

# Hàm chuyển văn bản thành giọng nói
def text_to_speech(text):
    tts = gTTS(text=text, lang='vi')
    save_path = os.path.join(os.path.expanduser("~"), "Documents", "response.mp3")

    # Xóa tệp nếu đã tồn tại
    if os.path.exists(save_path):
        os.remove(save_path)

    tts.save(save_path)
    pygame.mixer.init()
    pygame.mixer.music.load(save_path)
    pygame.mixer.music.play()
    while pygame.mixer.music.get_busy():
        continue

    # Giải phóng tệp âm thanh
    pygame.mixer.music.unload()

    # Xóa tệp sau khi phát xong
    if os.path.exists(save_path):
        os.remove(save_path)

# Hàm lấy ngày hiện tại
def get_current_date():
    today = datetime.now()
    return today.strftime("%d/%m/%Y")

# Hàm đọc dữ liệu từ file JSON
def load_data_from_json(file_path):
    if not os.path.exists(file_path):
        messagebox.showerror("Error", f"Không tìm thấy file '{file_path}'")
        return []

    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data.get('data', [])

# Hàm tìm kiếm câu hỏi gần đúng
def find_best_match(user_input, data):
    questions = [item['question'] for item in data]
    best_match = difflib.get_close_matches(user_input, questions, n=1, cutoff=0.6)
    
    if best_match:
        for item in data:
            if item['question'] == best_match[0]:
                return item['answer']
    return None

# Hàm kiểm tra câu nói để thoát chương trình
def check_exit_conditions(user_input):
    exit_phrases = ["tạm biệt", "cảm ơn"]  # Các cụm từ thoát chương trình
    for phrase in exit_phrases:
        if phrase in user_input:
            return True
    return False

# UI Initialization
def start_ui():
    global status_label, response_label

    # Khởi tạo cửa sổ chính
    window = tk.Tk()
    window.title("Thầy Trí Học 4.0")

    # Nhãn hiển thị trạng thái
    status_label = tk.Label(window, text="Nhấn nút để bắt đầu nhận diện giọng nói", font=("Arial", 12))
    status_label.pack(pady=10)

    # Nút để nhận diện giọng nói
    record_button = tk.Button(window, text="Nhận diện giọng nói", command=process_speech_input, font=("Arial", 12))
    record_button.pack(pady=10)

    # Nhãn hiển thị phản hồi
    response_label = tk.Label(window, text="", font=("Arial", 12), wraplength=400)
    response_label.pack(pady=10)

    # Khởi động giao diện người dùng
    window.mainloop()

# Xử lý input giọng nói
def process_speech_input():
    user_input = recognize_speech()
    if user_input:
        if check_exit_conditions(user_input):
            response = "Không có gì. Nếu bạn cần giúp gì hãy gọi tôi!"
            text_to_speech(response)
            response_label.config(text=response)
            status_label.config(text="Thầy Trí Học 4.0: Kết thúc.")
            return

        response = find_best_match(user_input, data)
        if response:
            if "{date}" in response:
                response = response.replace("{date}", get_current_date())
        else:
            response = "Xin lỗi, tôi chưa hiểu câu hỏi của bạn."

        response_label.config(text=response)
        text_to_speech(response)

# Load dữ liệu JSON
data_file_path = 'data.json'
data = load_data_from_json(data_file_path)

# Chạy UI
if __name__ == "__main__":
    start_ui()
