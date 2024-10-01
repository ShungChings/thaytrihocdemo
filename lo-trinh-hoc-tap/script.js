// Lắng nghe sự kiện submit của form và ngăn chặn hành động mặc định
document.getElementById('learning-path-form').addEventListener('submit', function(event) {
    event.preventDefault();
    generateLearningPath();
});

// Hàm generateLearningPath để tạo lộ trình học tập dựa trên các lựa chọn của người dùng
function generateLearningPath() {
    // Lấy giá trị từ các lựa chọn của người dùng
    const personality = document.getElementById('personality').value;
    const goals = document.getElementById('goals').value;
    const interest = document.getElementById('interest').value;

    // Biến pathSuggestions để lưu trữ lộ trình học tập được đề xuất
    let pathSuggestions = '';

    // Điều kiện để xác định lộ trình học tập dựa trên tính cách, mục tiêu và lĩnh vực quan tâm
    if (personality === 'logic') {

        if (goals === 'personal') {
            if (interest === 'math') {
                pathSuggestions = `
                  <h1>Lộ trình tự học thi đại học</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Xây dựng nền tảng (3 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Nắm vững kiến thức cơ bản và làm quen với phương pháp tự học.</p>

        <h3>Tuần 1-4: Lên kế hoạch học tập</h3>
        <ul>
            <li><span>Phân bổ thời gian:</span> Xác định thời gian học hàng ngày và mục tiêu cho từng tuần.</li>
            <li><span>Tạo lộ trình cá nhân:</span> Xác định các chủ đề chính và chia nhỏ thành các phần nhỏ dễ quản lý.</li>
        </ul>

        <h3>Tuần 5-8: Ôn tập kiến thức nền tảng</h3>
        <ul>
            <li><span>Ôn tập lý thuyết:</span> Xem lại các khái niệm toán học cơ bản từ lớp 10-12.</li>
            <li><span>Học theo chủ đề:</span> Tập trung vào từng chủ đề, hoàn thành bài tập lý thuyết và bài tập thực hành.</li>
        </ul>

        <h3>Tuần 9-12: Học qua sách và video</h3>
        <ul>
            <li><span>Sử dụng tài liệu:</span> Sử dụng sách tham khảo và tài liệu trực tuyến để học thêm.</li>
            <li><span>Học qua video:</span> Tìm kiếm video giải thích các khái niệm khó trên các kênh giáo dục.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Phát triển kỹ năng tự học (3 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Nâng cao khả năng tự giải bài và quản lý tiến độ học tập.</p>

        <h3>Tuần 13-16: Tự giải đề bài</h3>
        <ul>
            <li><span>Giải bài tập tự chọn:</span> Chọn các bài tập theo từng cấp độ từ dễ đến khó.</li>
            <li><span>Phân tích và sửa lỗi:</span> Sau khi giải, kiểm tra lại và phân tích lỗi sai để hiểu rõ hơn.</li>
        </ul>

        <h3>Tuần 17-20: Tự tạo môi trường học</h3>
        <ul>
            <li><span>Môi trường học:</span> Tạo không gian học tập yên tĩnh, không có yếu tố gây phân tâm.</li>
            <li><span>Tự đánh giá:</span> Đặt mục tiêu rõ ràng và kiểm tra tiến độ học tập mỗi tuần.</li>
        </ul>

        <h3>Tuần 21-24: Học qua việc giảng dạy</h3>
        <ul>
            <li><span>Giảng lại cho người khác:</span> Thử giải thích lại các khái niệm đã học cho người khác để củng cố kiến thức.</li>
            <li><span>Tham gia diễn đàn học tập:</span> Tham gia vào các nhóm học tập trực tuyến để trao đổi và hỏi đáp.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Luyện thi và kiểm tra (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Thực hành làm đề thi thử và tối ưu hóa cách giải đề.</p>

        <h3>Tuần 25-32: Luyện đề thi</h3>
        <ul>
            <li><span>Giải đề:</span> Làm các đề thi từ các năm trước và các đề thi thử.</li>
            <li><span>Kiểm tra thời gian:</span> Học cách phân bổ thời gian hợp lý khi làm bài thi.</li>
        </ul>

        <h3>Tuần 33-36: Kiểm tra tiến độ và điều chỉnh</h3>
        <ul>
            <li><span>Phản hồi:</span> Sau mỗi đề thi thử, đánh giá lại điểm yếu và cải thiện.</li>
            <li><span>Điều chỉnh lộ trình:</span> Tùy chỉnh kế hoạch học tập dựa trên kết quả thực tế để đạt hiệu quả cao nhất.</li>
        </ul>
    </div>
`;
            } else if (interest === 'science') {
                pathSuggestions = `
                     <h1>Lộ Trình Tự Học Thi Đại Học Các Môn Tự Nhiên</h1>
    <div class="timeline-container">
        <!-- Giai đoạn 1 -->
        <div class="timeline">
            <h2>1. Giai đoạn 1: Xây dựng nền tảng (3 tháng đầu)</h2>
            <p><strong>Mục tiêu:</strong> Nắm vững kiến thức cơ bản của Toán, Lý, Hóa và làm quen với phương pháp tự học.</p>

            <h3>Tuần 1-4: Lên kế hoạch học tập</h3>
            <ul>
                <li><span>Phân bổ thời gian:</span> Xác định thời gian học hàng ngày cho từng môn: Toán, Lý, Hóa.</li>
                <li><span>Tạo lộ trình cá nhân:</span> Xác định các chủ đề chính cho mỗi môn và chia nhỏ thành các phần dễ quản lý.</li>
            </ul>

            <h3>Tuần 5-8: Ôn tập kiến thức nền tảng môn Toán</h3>
            <ul>
                <li><span>Ôn tập lý thuyết:</span> Xem lại các khái niệm cơ bản về hàm số, đạo hàm, tích phân từ lớp 10-12.</li>
                <li><span>Học theo chủ đề:</span> Tập trung vào từng chủ đề như phương trình bậc hai, hình học không gian.</li>
            </ul>

            <h3>Tuần 9-12: Ôn tập kiến thức nền tảng môn Lý và Hóa</h3>
            <ul>
                <li><span>Môn Vật Lý:</span> Ôn tập về cơ học, điện học và các định luật cơ bản.</li>
                <li><span>Môn Hóa Học:</span> Ôn lại các khái niệm hóa học đại cương, hóa học hữu cơ.</li>
            </ul>
        </div>

        <!-- Giai đoạn 2 -->
        <div class="timeline">
            <h2>2. Giai đoạn 2: Phát triển kỹ năng tự học (3 tháng tiếp theo)</h2>
            <p><strong>Mục tiêu:</strong> Nâng cao khả năng giải bài tập và quản lý tiến độ học tập.</p>

            <h3>Tuần 13-16: Tự giải bài tập môn Toán</h3>
            <ul>
                <li><span>Giải bài tập tự chọn:</span> Chọn các bài tập về đạo hàm, tích phân và hình học từ dễ đến khó.</li>
                <li><span>Phân tích và sửa lỗi:</span> Kiểm tra lại bài và phân tích lỗi sai.</li>
            </ul>

            <h3>Tuần 17-20: Tự học Lý và Hóa thông qua bài tập</h3>
            <ul>
                <li><span>Môn Vật Lý:</span> Giải các bài tập về động lực học, nhiệt học và điện từ học.</li>
                <li><span>Môn Hóa Học:</span> Giải bài tập hóa học hữu cơ và vô cơ, đặc biệt là phần phản ứng oxi hóa-khử.</li>
            </ul>

            <h3>Tuần 21-24: Học qua việc giảng dạy và ôn tập tổng quát</h3>
            <ul>
                <li><span>Giảng lại cho người khác:</span> Thử giải thích lại các khái niệm đã học để củng cố kiến thức.</li>
                <li><span>Ôn tập lại:</span> Tạo hệ thống các kiến thức đã học cho từng môn.</li>
            </ul>
        </div>

        <!-- Giai đoạn 3 -->
        <div class="timeline">
            <h2>3. Giai đoạn 3: Luyện thi và kiểm tra (2 tháng cuối)</h2>
            <p><strong>Mục tiêu:</strong> Thực hành làm đề thi thử và tối ưu hóa cách giải đề.</p>

            <h3>Tuần 25-32: Luyện đề môn Toán, Lý, Hóa</h3>
            <ul>
                <li><span>Giải đề Toán:</span> Làm các đề thi từ các năm trước về các phần như hàm số, hình học.</li>
                <li><span>Giải đề Vật Lý và Hóa Học:</span> Thực hành với các đề về cơ học, điện học, hóa học hữu cơ và vô cơ.</li>
            </ul>

            <h3>Tuần 33-36: Kiểm tra tiến độ và điều chỉnh</h3>
            <ul>
                <li><span>Phản hồi:</span> Sau mỗi đề thi thử, đánh giá lại điểm yếu và cải thiện.</li>
                <li><span>Điều chỉnh lộ trình:</span> Tùy chỉnh kế hoạch học tập dựa trên kết quả thực tế để đạt hiệu quả cao nhất.</li>
            </ul>
        </div>
    </div>`;
            }
            else if (interest === 'literature') {
                pathSuggestions = `
                   <h1>Lộ Trình Tự Học Môn Văn</h1>


    <div class="timeline-container">
        <!-- Giai đoạn 1 -->
        <div class="timeline">
            <h2>1. Giai đoạn 1: Xây dựng nền tảng kiến thức (3 tháng đầu)</h2>
            <p><strong>Mục tiêu:</strong> Nắm vững kiến thức nền tảng của môn Văn, làm quen với việc phân tích các tác phẩm và luyện kỹ năng viết.</p>

            <h3>Tuần 1-4: Lên kế hoạch học tập và ôn tập tác phẩm cơ bản</h3>
            <ul>
                <li><span>Phân bổ thời gian:</span> Xác định thời gian học hàng ngày, cân bằng giữa việc đọc và viết.</li>
                <li><span>Đọc tác phẩm:</span> Đọc và phân tích các tác phẩm văn học chính từ chương trình học như "Vợ Nhặt", "Chí Phèo", "Hai Đứa Trẻ".</li>
                <li><span>Ghi chú:</span> Ghi chép các yếu tố chính: nội dung, nhân vật, bối cảnh, nghệ thuật của từng tác phẩm.</li>
            </ul>

            <h3>Tuần 5-8: Phân tích văn bản và rèn kỹ năng viết</h3>
            <ul>
                <li><span>Phân tích nhân vật:</span> Tập trung phân tích các nhân vật chính, các mâu thuẫn nội tâm và sự phát triển của họ.</li>
                <li><span>Kỹ năng viết:</span> Luyện viết đoạn văn ngắn phân tích nhân vật hoặc tình huống trong tác phẩm.</li>
            </ul>

            <h3>Tuần 9-12: Luyện viết bài văn nghị luận</h3>
            <ul>
                <li><span>Viết bài nghị luận xã hội:</span> Luyện viết bài nghị luận xã hội, tập trung vào các đề bài mang tính thời sự và nhân văn.</li>
                <li><span>Viết bài nghị luận văn học:</span> Viết các bài nghị luận phân tích tác phẩm văn học, chú ý đến lập luận và cách sử dụng dẫn chứng.</li>
            </ul>
        </div>

        <!-- Giai đoạn 2 -->
        <div class="timeline">
            <h2>2. Giai đoạn 2: Nâng cao kỹ năng phân tích và viết văn (3 tháng tiếp theo)</h2>
            <p><strong>Mục tiêu:</strong> Cải thiện khả năng phân tích sâu và kỹ năng viết bài văn dài.</p>

            <h3>Tuần 13-16: Luyện viết bài phân tích chi tiết</h3>
            <ul>
                <li><span>Phân tích nghệ thuật:</span> Phân tích các thủ pháp nghệ thuật, ngôn ngữ và biểu tượng trong các tác phẩm.</li>
                <li><span>Viết bài:</span> Luyện viết bài phân tích chi tiết các yếu tố nghệ thuật của tác phẩm.</li>
            </ul>

            <h3>Tuần 17-20: Luyện viết bài văn hoàn chỉnh</h3>
            <ul>
                <li><span>Viết bài:</span> Luyện viết các bài văn hoàn chỉnh, chú trọng vào việc lập dàn ý, mở bài và kết bài.</li>
                <li><span>Chỉnh sửa:</span> Tập thói quen kiểm tra và chỉnh sửa bài viết sau khi hoàn thành.</li>
            </ul>

            <h3>Tuần 21-24: Học qua việc giảng dạy và ôn tập tổng quát</h3>
            <ul>
                <li><span>Giảng lại cho người khác:</span> Thử giải thích lại các khái niệm đã học hoặc hướng dẫn người khác để củng cố kiến thức.</li>
                <li><span>Ôn tập:</span> Ôn lại toàn bộ kiến thức và thực hành viết bài trước kỳ thi.</li>
            </ul>
        </div>

        <!-- Giai đoạn 3 -->
        <div class="timeline">
            <h2>3. Giai đoạn 3: Luyện thi và kiểm tra (2 tháng cuối)</h2>
            <p><strong>Mục tiêu:</strong> Thực hành làm đề thi thử, cải thiện tốc độ làm bài và kỹ năng giải quyết đề thi.</p>

            <h3>Tuần 25-32: Luyện đề thi</h3>
            <ul>
                <li><span>Giải đề:</span> Làm các đề thi môn Văn từ các năm trước và các đề thi thử, chú ý đến thời gian làm bài.</li>
                <li><span>Phân tích đề:</span> Sau khi giải đề, phân tích lại để tìm hiểu những điểm chưa vững.</li>
            </ul>

            <h3>Tuần 33-36: Điều chỉnh và hoàn thiện kỹ năng làm bài</h3>
            <ul>
                <li><span>Kiểm tra tiến độ:</span> Đánh giá lại sự tiến bộ của mình sau mỗi bài thi thử, nhận diện điểm mạnh và điểm yếu.</li>
                <li><span>Điều chỉnh lộ trình:</span> Dựa trên kết quả thi thử, điều chỉnh chiến lược học tập và ôn thi cho phù hợp.</li>
            </ul>
        </div>
    </div>`;
            }
            else if (interest === 'technology') {
                pathSuggestions = `
                        <h1>Lộ Trình Tự Học Môn Công Nghệ</h1>
  

    <div class="timeline-container">
        <!-- Giai đoạn 1 -->
        <div class="timeline">
            <h2>1. Giai đoạn 1: Xây dựng nền tảng kiến thức (2 tháng đầu)</h2>
            <p><strong>Mục tiêu:</strong> Nắm vững kiến thức cơ bản về công nghệ và các chủ đề chính như hệ thống kỹ thuật, nông nghiệp công nghệ cao, điện tử học.</p>

            <h3>Tuần 1-4: Lên kế hoạch học tập và ôn tập lý thuyết cơ bản</h3>
            <ul>
                <li><span>Phân bổ thời gian:</span> Xác định thời gian học hàng ngày, chia đều giữa các chủ đề: cơ khí, điện tử, công nghệ sinh học.</li>
                <li><span>Ôn tập:</span> Đọc lại sách giáo khoa, ghi chú các khái niệm quan trọng như cấu tạo máy móc, hệ thống điện và kỹ thuật nông nghiệp.</li>
                <li><span>Thực hành:</span> Nghiên cứu các ứng dụng thực tiễn của kiến thức công nghệ, tìm hiểu qua tài liệu, video hướng dẫn.</li>
            </ul>

            <h3>Tuần 5-8: Học chuyên sâu về các hệ thống công nghệ</h3>
            <ul>
                <li><span>Hệ thống kỹ thuật:</span> Tìm hiểu chi tiết về các hệ thống máy móc, quy trình sản xuất trong công nghiệp.</li>
                <li><span>Điện tử:</span> Ôn lại lý thuyết về các linh kiện điện tử, cách lắp ráp mạch điện cơ bản.</li>
                <li><span>Nông nghiệp công nghệ cao:</span> Tìm hiểu về công nghệ trong sản xuất nông nghiệp như thủy canh, nhà kính, cảm biến tự động.</li>
            </ul>
        </div>

        <!-- Giai đoạn 2 -->
        <div class="timeline">
            <h2>2. Giai đoạn 2: Phát triển kỹ năng thực hành (2 tháng tiếp theo)</h2>
            <p><strong>Mục tiêu:</strong> Nâng cao kỹ năng thực hành và khả năng áp dụng kiến thức công nghệ vào thực tiễn.</p>

            <h3>Tuần 9-12: Thực hành với các dự án nhỏ</h3>
            <ul>
                <li><span>Dự án 1:</span> Thiết kế một hệ thống mạch điện cơ bản hoặc thực hành lắp ráp mạch điện nhỏ.</li>
                <li><span>Dự án 2:</span> Thực hiện mô hình sản xuất nông nghiệp như trồng cây bằng phương pháp thủy canh.</li>
            </ul>

            <h3>Tuần 13-16: Áp dụng lý thuyết vào các bài tập lớn</h3>
            <ul>
                <li><span>Thực hành:</span> Thực hiện các bài tập lớn về cơ khí, điện tử hoặc công nghệ sinh học với sự trợ giúp của tài liệu tham khảo.</li>
                <li><span>Đánh giá:</span> Phân tích kết quả thực hành, so sánh với lý thuyết và rút ra các bài học.</li>
            </ul>
        </div>

        <!-- Giai đoạn 3 -->
        <div class="timeline">
            <h2>3. Giai đoạn 3: Luyện thi và kiểm tra (2 tháng cuối)</h2>
            <p><strong>Mục tiêu:</strong> Luyện giải đề thi, cải thiện kỹ năng làm bài và chuẩn bị tốt nhất cho kỳ thi đại học.</p>

            <h3>Tuần 17-24: Luyện giải đề và ôn tập toàn diện</h3>
            <ul>
                <li><span>Giải đề:</span> Làm các đề thi thử từ các năm trước, tập trung vào các câu hỏi thực tiễn và lý thuyết trọng tâm.</li>
                <li><span>Kiểm tra thời gian:</span> Luyện cách phân bổ thời gian làm bài hợp lý, chú ý tới các câu hỏi mang tính áp dụng thực tế.</li>
                <li><span>Ôn tập:</span> Ôn lại toàn bộ kiến thức từ các chương chính và thực hành lại các kỹ năng đã học.</li>
            </ul>

            <h3>Tuần 25-28: Kiểm tra tiến độ và điều chỉnh</h3>
            <ul>
                <li><span>Phản hồi:</span> Sau mỗi đề thi thử, đánh giá lại điểm yếu, điểm mạnh và cải thiện những phần chưa tốt.</li>
                <li><span>Điều chỉnh lộ trình:</span> Điều chỉnh kế hoạch học tập và ôn luyện dựa trên kết quả thực tế.</li>
            </ul>
        </div>
    </div>`;
            }
        }
       if (goals === 'university') {
            if (interest === 'math') {
                pathSuggestions = `
                      <h1>Lộ trình học Toán thi đại học</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Nền tảng cơ bản (6 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Nắm vững kiến thức cơ bản, phát triển tư duy logic và cách tiếp cận bài toán.</p>

        <h3>Tuần 1-8: Đại số cơ bản</h3>
        <ul>
            <li><span>Số học:</span> Tập hợp, logic, phương trình và bất phương trình.</li>
            <li><span>Phương trình:</span> Giải phương trình bậc nhất, bậc hai, căn thức.</li>
        </ul>

        <h3>Tuần 9-16: Hàm số và đồ thị</h3>
        <ul>
            <li><span>Hàm số:</span> Khái niệm hàm số, miền xác định, miền giá trị.</li>
            <li><span>Đồ thị:</span> Vẽ đồ thị, phân tích giao điểm và tính đơn điệu.</li>
        </ul>

        <h3>Tuần 17-24: Hình học phẳng</h3>
        <ul>
            <li><span>Tam giác, đường tròn:</span> Các định lý, phép chứng minh.</li>
            <li><span>Hình học tọa độ:</span> Vẽ hình, tính toán diện tích, chu vi.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Nâng cao và ứng dụng (6 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Tăng cường khả năng giải quyết vấn đề phức tạp.</p>

        <h3>Tuần 25-32: Lượng giác</h3>
        <ul>
            <li><span>Công thức lượng giác:</span> Cơ bản và mở rộng.</li>
            <li><span>Phương trình:</span> Giải phương trình và bất phương trình lượng giác.</li>
        </ul>

        <h3>Tuần 33-40: Tổ hợp, xác suất</h3>
        <ul>
            <li><span>Tổ hợp, chỉnh hợp:</span> Lập công thức tính.</li>
            <li><span>Xác suất:</span> Bài toán đếm và xác suất.</li>
        </ul>

        <h3>Tuần 41-48: Hình học không gian</h3>
        <ul>
            <li><span>Khối đa diện:</span> Hình lăng trụ, hình nón, hình cầu.</li>
            <li><span>Diện tích, thể tích:</span> Tính toán các khối hình học không gian.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Luyện đề và chiến thuật làm bài (3 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Thành thạo giải đề thi và kiểm soát thời gian làm bài.</p>

        <h3>Tuần 49-56: Luyện đề thi đại học</h3>
        <ul>
            <li><span>Giải đề:</span> Từ dễ đến khó, phân loại bài toán.</li>
            <li><span>Chiến lược:</span> Xây dựng cách tiếp cận cho từng dạng bài.</li>
        </ul>

        <h3>Tuần 57-64: Kiểm tra tiến độ và chiến lược thi cử</h3>
        <ul>
            <li><span>Kiểm tra toàn diện:</span> Xác định điểm yếu và cải thiện.</li>
            <li><span>Phân bổ thời gian:</span> Chiến lược làm bài thi hiệu quả.</li>
        </ul>
    </div>
`;
            } else if (interest === 'science') {
                pathSuggestions = `
                    <h1>Lộ trình luyện tư duy logic cho môn khoa học tự nhiên</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Rèn nền tảng tư duy logic (3 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Nắm vững các khái niệm cơ bản, học cách phân tích vấn đề và phát triển kỹ năng tư duy logic.</p>

        <h3>Tuần 1-4: Xây dựng nền tảng tư duy</h3>
        <ul>
            <li><span>Phương pháp tư duy logic:</span> Học cách phân tích vấn đề theo hệ thống, chia nhỏ bài toán và lập kế hoạch giải quyết.</li>
            <li><span>Phát triển khả năng suy luận:</span> Thực hành với các bài toán đơn giản, tập trung vào lập luận và chứng minh.</li>
        </ul>

        <h3>Tuần 5-8: Rèn luyện tư duy qua bài tập thực tế</h3>
        <ul>
            <li><span>Giải bài tập lý thuyết:</span> Thực hành các bài toán lý thuyết cơ bản trong Toán, Lý, Hóa và Sinh.</li>
            <li><span>Phân tích vấn đề:</span> Học cách phân tích đề bài, nhận dạng dạng bài toán và lập chiến lược giải quyết.</li>
        </ul>

        <h3>Tuần 9-12: Ứng dụng tư duy vào các bài toán phức tạp</h3>
        <ul>
            <li><span>Giải bài toán phức tạp:</span> Thử sức với các bài toán yêu cầu suy luận sâu, lập luận dài và có nhiều bước giải.</li>
            <li><span>Tư duy đa chiều:</span> Khám phá nhiều cách tiếp cận khác nhau cho một bài toán.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Phát triển khả năng tư duy chiến lược (3 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Rèn luyện kỹ năng giải quyết vấn đề và áp dụng tư duy chiến lược vào bài thi đại học.</p>

        <h3>Tuần 13-16: Tư duy chiến lược khi giải bài</h3>
        <ul>
            <li><span>Phân tích đề thi:</span> Nghiên cứu các dạng bài thường gặp trong các môn khoa học tự nhiên.</li>
            <li><span>Chiến lược làm bài:</span> Phát triển chiến lược phân bổ thời gian, xử lý nhanh các dạng bài dễ và khó.</li>
        </ul>

        <h3>Tuần 17-20: Rèn luyện khả năng tổng hợp và phân tích</h3>
        <ul>
            <li><span>Tổng hợp kiến thức:</span> Ôn tập kiến thức toàn diện, hệ thống hóa các công thức và quy tắc quan trọng.</li>
            <li><span>Phân tích dữ liệu và đồ thị:</span> Học cách đọc và phân tích biểu đồ, đồ thị trong các môn Lý, Hóa, Sinh.</li>
        </ul>

        <h3>Tuần 21-24: Áp dụng tư duy logic vào các bài toán thực tế</h3>
        <ul>
            <li><span>Ứng dụng thực tế:</span> Giải quyết các bài toán có liên quan đến đời sống thực tế, áp dụng các khái niệm tự nhiên học vào các tình huống thực tế.</li>
            <li><span>Phát triển khả năng phản xạ nhanh:</span> Luyện tập với các bài toán tư duy nhanh để cải thiện tốc độ xử lý và sự nhạy bén.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Luyện đề và kiểm tra tư duy (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Luyện giải đề thi thử và hoàn thiện kỹ năng tư duy logic.</p>

        <h3>Tuần 25-32: Luyện đề thi logic</h3>
        <ul>
            <li><span>Luyện giải đề thi:</span> Làm các đề thi thử với độ khó tăng dần, tập trung vào khả năng suy luận logic.</li>
            <li><span>Phân tích kết quả:</span> Kiểm tra kết quả bài làm, phân tích lỗi sai và học cách tối ưu hóa cách làm bài.</li>
        </ul>

        <h3>Tuần 33-36: Kiểm tra và điều chỉnh chiến lược</h3>
        <ul>
            <li><span>Điều chỉnh chiến lược:</span> Dựa trên kết quả luyện đề để điều chỉnh phương pháp học và cách làm bài.</li>
            <li><span>Tăng cường phản xạ tư duy:</span> Tiếp tục rèn luyện với các bài toán yêu cầu tư duy nhanh và chính xác.</li>
        </ul>
    </div>`;
            }
            else if (interest === 'literature') {
                pathSuggestions = `
                     <h1>Lộ trình luyện tư duy logic môn Văn học</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Xây dựng nền tảng tư duy phản biện (2 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Phát triển khả năng tư duy logic, phân tích và phản biện từ các tác phẩm văn học.</p>

        <h3>Tuần 1-4: Phân tích tác phẩm văn học</h3>
        <ul>
            <li><span>Hiểu rõ cốt truyện và nhân vật:</span> Đọc kỹ và nắm bắt chi tiết từng tác phẩm, tập trung vào phân tích nội dung và ý nghĩa của các nhân vật.</li>
            <li><span>Phân tích cấu trúc tác phẩm:</span> Xác định cấu trúc và các yếu tố chính như cốt truyện, xung đột, và cao trào.</li>
        </ul>

        <h3>Tuần 5-8: Rèn luyện tư duy phản biện</h3>
        <ul>
            <li><span>Lập luận về giá trị của tác phẩm:</span> Tập trung vào phân tích các giá trị nội dung, nghệ thuật, và nhân văn của tác phẩm.</li>
            <li><span>Phản biện và tranh luận:</span> Viết các bài luận ngắn, lập luận theo nhiều góc nhìn khác nhau về cùng một tác phẩm.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Nâng cao kỹ năng phân tích và lập luận (2 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Phát triển khả năng lập luận và viết luận văn sắc bén, thể hiện tư duy logic qua từng bài viết.</p>

        <h3>Tuần 9-12: Phân tích đề bài và xây dựng dàn ý</h3>
        <ul>
            <li><span>Hiểu đề bài:</span> Tập trung vào việc hiểu rõ yêu cầu của đề bài, phân tích đề từ nhiều khía cạnh khác nhau.</li>
            <li><span>Lập dàn ý:</span> Học cách lập dàn ý chi tiết trước khi viết, xây dựng hệ thống luận điểm rõ ràng.</li>
        </ul>

        <h3>Tuần 13-16: Phát triển kỹ năng lập luận</h3>
        <ul>
            <li><span>Kết nối luận điểm:</span> Tập trung vào việc liên kết các luận điểm một cách chặt chẽ, hợp lý trong bài viết.</li>
            <li><span>Thể hiện ý kiến cá nhân:</span> Học cách thể hiện quan điểm cá nhân một cách mạnh mẽ và thuyết phục, không chỉ đơn thuần lặp lại các ý kiến có sẵn.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Luyện thi và hoàn thiện kỹ năng viết (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Luyện viết bài văn hoàn chỉnh và rèn luyện khả năng phân tích, tổng hợp cho kỳ thi đại học.</p>

        <h3>Tuần 17-24: Luyện viết bài văn hoàn chỉnh</h3>
        <ul>
            <li><span>Viết bài theo chủ đề:</span> Luyện viết các bài văn theo từng chủ đề, tập trung vào các dạng đề thường gặp trong kỳ thi đại học.</li>
            <li><span>Phản hồi và cải thiện:</span> Đọc lại bài viết, nhận phản hồi từ giáo viên hoặc bạn học, cải thiện cách diễn đạt và lập luận.</li>
        </ul>

        <h3>Tuần 25-32: Luyện giải đề thi</h3>
        <ul>
            <li><span>Giải đề thi thử:</span> Làm các đề thi thử từ các năm trước, kiểm tra khả năng phân tích và lập luận trong thời gian giới hạn.</li>
            <li><span>Hoàn thiện kỹ năng:</span> Dựa trên kết quả đề thi thử, hoàn thiện kỹ năng viết và tư duy logic, điều chỉnh cách trình bày để đạt điểm cao nhất.</li>
        </ul>
    </div>`;
            }
            else if (interest === 'technology') {
                pathSuggestions = `
                   <h1>Lộ trình luyện tư duy logic môn Công nghệ</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Nền tảng và phân tích vấn đề công nghệ (2 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Xây dựng nền tảng về tư duy công nghệ và phát triển khả năng phân tích, giải quyết các vấn đề kỹ thuật.</p>

        <h3>Tuần 1-4: Khái niệm cơ bản và các công cụ</h3>
        <ul>
            <li><span>Hiểu rõ các khái niệm nền tảng:</span> Nắm vững các khái niệm cơ bản về công nghệ thông tin, điện tử, lập trình, và hệ thống mạng.</li>
            <li><span>Các công cụ công nghệ:</span> Làm quen với các công cụ như phần mềm lập trình, phần mềm mô phỏng kỹ thuật số, và các ứng dụng công nghệ tiên tiến.</li>
        </ul>

        <h3>Tuần 5-8: Phân tích vấn đề công nghệ</h3>
        <ul>
            <li><span>Phân tích yêu cầu kỹ thuật:</span> Học cách phân tích các yêu cầu của dự án công nghệ, xác định mục tiêu và lập kế hoạch thực hiện.</li>
            <li><span>Giải quyết vấn đề qua ví dụ thực tiễn:</span> Sử dụng các bài tập thực tế để phân tích và tìm giải pháp cho các vấn đề kỹ thuật cơ bản.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Tư duy sáng tạo và tối ưu hóa giải pháp công nghệ (2 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Phát triển tư duy sáng tạo trong việc tìm kiếm các giải pháp mới và tối ưu hóa các quy trình công nghệ.</p>

        <h3>Tuần 9-12: Tư duy sáng tạo và phát triển ý tưởng</h3>
        <ul>
            <li><span>Tìm kiếm giải pháp sáng tạo:</span> Học cách sử dụng các phương pháp như brainstorming và phân tích SWOT để tìm kiếm giải pháp sáng tạo trong công nghệ.</li>
            <li><span>Phát triển ý tưởng:</span> Tạo và phát triển các dự án công nghệ nhỏ, áp dụng kiến thức học được để giải quyết các vấn đề thực tế.</li>
        </ul>

        <h3>Tuần 13-16: Tối ưu hóa quy trình và giải pháp</h3>
        <ul>
            <li><span>Tối ưu hóa giải pháp công nghệ:</span> Tập trung vào việc cải tiến và tối ưu hóa các giải pháp công nghệ hiện tại để đạt hiệu quả cao hơn.</li>
            <li><span>Phân tích độ phức tạp:</span> Học cách đánh giá và tối ưu hóa độ phức tạp của các thuật toán và quy trình công nghệ.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Thực hành dự án và kiểm tra kỹ năng (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Áp dụng tư duy logic vào việc phát triển dự án công nghệ và kiểm tra kỹ năng giải quyết vấn đề.</p>

        <h3>Tuần 17-24: Phát triển dự án công nghệ</h3>
        <ul>
            <li><span>Xây dựng dự án thực tế:</span> Phát triển một dự án công nghệ toàn diện (ví dụ: phần mềm, ứng dụng web, hệ thống nhúng) từ khâu ý tưởng đến thực hiện.</li>
            <li><span>Kiểm thử và sửa lỗi:</span> Học cách kiểm thử, phát hiện và sửa lỗi trong quá trình phát triển dự án.</li>
        </ul>

        <h3>Tuần 25-32: Kiểm tra và cải thiện kỹ năng</h3>
        <ul>
            <li><span>Luyện giải các bài toán kỹ thuật:</span> Làm các bài tập và bài toán kỹ thuật phức tạp để kiểm tra và cải thiện khả năng tư duy logic và giải quyết vấn đề.</li>
            <li><span>Đánh giá dự án:</span> Đánh giá lại dự án đã phát triển, phân tích những gì đã làm được và cách cải tiến trong tương lai.</li>
        </ul>
    </div>`;
            }

        }
   
       
      
    
      
    } else if (personality === 'creative') {
        if (goals === 'university') {
            if (interest === 'literature') {
                pathSuggestions = `
                    <h1>Lộ trình học sáng tạo môn Văn học</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Khơi dậy tư duy sáng tạo từ văn học cổ điển (2 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Xây dựng nền tảng văn học cổ điển, từ đó phát triển khả năng tư duy sáng tạo trong cách cảm nhận và phân tích tác phẩm.</p>

        <h3>Tuần 1-4: Đọc và cảm nhận tác phẩm cổ điển</h3>
        <ul>
            <li><span>Đọc kỹ các tác phẩm kinh điển:</span> Lựa chọn các tác phẩm văn học cổ điển (Nguyễn Du, Nam Cao, Tô Hoài...) để hiểu sâu sắc về nội dung và nghệ thuật.</li>
            <li><span>Phát triển cảm xúc cá nhân:</span> Ghi chú những cảm nhận cá nhân khi đọc từng đoạn văn và tự đặt câu hỏi về các ý tưởng mới từ tác phẩm.</li>
        </ul>

        <h3>Tuần 5-8: Viết sáng tạo dựa trên cảm nhận tác phẩm</h3>
        <ul>
            <li><span>Viết lại câu chuyện từ góc nhìn khác:</span> Thử viết lại cốt truyện hoặc một đoạn của tác phẩm từ góc nhìn của nhân vật phụ hay từ một bối cảnh khác.</li>
            <li><span>Sáng tác dựa trên cảm hứng:</span> Dựa trên tác phẩm gốc, sáng tạo ra một câu chuyện hoàn toàn mới với cảm hứng từ các chủ đề chính.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Phát triển kỹ năng phân tích sâu sắc và sáng tạo (2 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Rèn luyện khả năng phân tích sâu sắc, tìm kiếm ý nghĩa tiềm ẩn và thể hiện tư duy sáng tạo qua bài viết.</p>

        <h3>Tuần 9-12: Phân tích chuyên sâu các khía cạnh nghệ thuật</h3>
        <ul>
            <li><span>Phân tích phong cách nghệ thuật:</span> Nghiên cứu phong cách viết của từng tác giả, nhận biết các đặc trưng nghệ thuật của họ và lý giải chúng một cách sáng tạo.</li>
            <li><span>Phát hiện các yếu tố ẩn dụ:</span> Tập trung vào việc khám phá những ẩn dụ, hình ảnh biểu tượng và phân tích ý nghĩa tiềm ẩn của chúng.</li>
        </ul>

        <h3>Tuần 13-16: Sáng tạo qua bài viết phân tích</h3>
        <ul>
            <li><span>Viết bài phân tích sáng tạo:</span> Tập viết các bài luận phân tích tác phẩm với lối viết mới lạ, sử dụng hình ảnh, ẩn dụ và tư duy phản biện để tạo sự độc đáo.</li>
            <li><span>Liên kết với các tác phẩm hiện đại:</span> So sánh và liên hệ các tác phẩm văn học cổ điển với tác phẩm hiện đại, phát triển các ý tưởng sáng tạo từ sự tương đồng và khác biệt.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Luyện thi và hoàn thiện kỹ năng sáng tạo (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Hoàn thiện khả năng viết và tư duy sáng tạo để sẵn sàng cho kỳ thi đại học.</p>

        <h3>Tuần 17-24: Luyện viết bài văn sáng tạo</h3>
        <ul>
            <li><span>Viết theo chủ đề sáng tạo:</span> Thực hiện các bài viết theo chủ đề yêu cầu trong kỳ thi nhưng tạo điểm nhấn sáng tạo qua cách diễn đạt và lập luận.</li>
            <li><span>Đọc lại và tự phản biện:</span> Tự đọc lại các bài viết đã hoàn thành, phát hiện những điểm có thể sáng tạo hơn và điều chỉnh để cải thiện.</li>
        </ul>

        <h3>Tuần 25-32: Luyện giải đề thi đại học</h3>
        <ul>
            <li><span>Giải đề thi thử sáng tạo:</span> Thực hiện các đề thi thử, luyện tập cách tạo dấu ấn riêng trong bài làm, thể hiện sáng tạo qua cách tiếp cận và viết bài.</li>
            <li><span>Phản hồi từ giáo viên:</span> Nhận phản hồi từ giáo viên hoặc bạn bè, rút kinh nghiệm và hoàn thiện kỹ năng sáng tạo trong viết văn.</li>
        </ul>
    </div>`;
            } else if (interest === 'technology') {
                pathSuggestions = `
                    <h1>Lộ trình học sáng tạo môn Công nghệ</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Khởi đầu với kiến thức nền tảng và công nghệ cơ bản (2 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Nắm vững các kiến thức cơ bản về lập trình, điện tử và hệ thống công nghệ để làm cơ sở cho việc sáng tạo và ứng dụng.</p>

        <h3>Tuần 1-4: Kiến thức cơ bản và công cụ công nghệ</h3>
        <ul>
            <li><span>Lập trình căn bản:</span> Học các ngôn ngữ lập trình cơ bản như Python, C++ hoặc Java để phát triển tư duy logic và sáng tạo.</li>
            <li><span>Khám phá điện tử cơ bản:</span> Làm quen với các kiến thức cơ bản về mạch điện, linh kiện điện tử và hệ thống điều khiển.</li>
        </ul>

        <h3>Tuần 5-8: Thực hành và sáng tạo từ nền tảng</h3>
        <ul>
            <li><span>Dự án lập trình nhỏ:</span> Tự viết các chương trình nhỏ như máy tính đơn giản, hệ thống quản lý dữ liệu để áp dụng kiến thức lập trình đã học.</li>
            <li><span>Thiết kế mạch điện:</span> Thực hiện các dự án mạch điện tử đơn giản như hệ thống đèn LED, cảm biến nhiệt độ.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Phát triển và thử nghiệm sáng tạo (2 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Phát triển tư duy sáng tạo và ứng dụng các kiến thức vào việc phát triển dự án công nghệ.</p>

        <h3>Tuần 9-12: Phát triển dự án sáng tạo</h3>
        <ul>
            <li><span>Dự án lập trình nâng cao:</span> Tạo ra các chương trình phức tạp hơn như trò chơi, hệ thống quản lý, hoặc công cụ học tập bằng cách áp dụng kiến thức nâng cao.</li>
            <li><span>Thiết kế mạch tự động:</span> Làm các hệ thống điều khiển tự động, cảm biến thông minh hoặc robot đơn giản sử dụng công nghệ Arduino hoặc Raspberry Pi.</li>
        </ul>

        <h3>Tuần 13-16: Thử nghiệm và tối ưu hóa</h3>
        <ul>
            <li><span>Tối ưu hóa mã nguồn:</span> Phân tích và tối ưu hóa hiệu suất chương trình, học cách giải quyết các vấn đề hiệu suất và bảo trì mã.</li>
            <li><span>Cải tiến mạch điện:</span> Tinh chỉnh các dự án mạch điện đã thực hiện để đạt được hiệu quả cao hơn và tính năng mở rộng.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Thực hành và luyện thi (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Hoàn thiện kỹ năng thực hành, sáng tạo và chuẩn bị tốt cho kỳ thi đại học cũng như các cuộc thi chuyên môn.</p>

        <h3>Tuần 17-24: Thực hành dự án lớn</h3>
        <ul>
            <li><span>Phát triển dự án thực tiễn:</span> Chọn một dự án lớn (ứng dụng web, hệ thống IoT, hệ thống nhúng, hoặc game) và áp dụng các kỹ năng sáng tạo vào dự án này.</li>
            <li><span>Kiểm thử và phát triển:</span> Tìm hiểu cách kiểm thử, tìm lỗi và cải tiến giải pháp công nghệ cho dự án thực tiễn.</li>
        </ul>

        <h3>Tuần 25-32: Luyện đề thi và kiểm tra kỹ năng</h3>
        <ul>
            <li><span>Giải đề thi thử:</span> Làm các đề thi thử, tập trung vào các vấn đề kỹ thuật như lập trình và thiết kế mạch, kiểm tra lại tư duy sáng tạo và giải quyết vấn đề.</li>
            <li><span>Đánh giá dự án:</span> Tự đánh giá lại các dự án đã thực hiện, xác định điểm mạnh, điểm yếu và cải thiện kỹ năng.</li>
        </ul>
    </div>`;
            }
            else if (interest === 'science') {
                pathSuggestions = `
                     <h1>Lộ trình học sáng tạo môn Khoa học Tự nhiên</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Khám phá và hiểu sâu kiến thức nền tảng (2 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Xây dựng nền tảng kiến thức chắc chắn trong từng môn khoa học tự nhiên và khơi dậy tư duy sáng tạo trong việc khám phá các hiện tượng tự nhiên.</p>

        <h3>Tuần 1-4: Tìm hiểu các khái niệm nền tảng</h3>
        <ul>
            <li><span>Vật lý:</span> Nắm vững các định luật cơ bản (động học, điện học, quang học), học cách giải các bài toán cơ bản với tư duy logic.</li>
            <li><span>Hóa học:</span> Hiểu rõ các khái niệm về nguyên tử, phân tử, bảng tuần hoàn, các phản ứng hóa học cơ bản.</li>
            <li><span>Sinh học:</span> Học về cấu trúc tế bào, hệ thống cơ thể, di truyền học và tiến hóa.</li>
        </ul>

        <h3>Tuần 5-8: Áp dụng lý thuyết vào thực tiễn</h3>
        <ul>
            <li><span>Vật lý:</span> Thực hiện các thí nghiệm đơn giản tại nhà (như đo lực, đo tốc độ) để hiểu rõ hơn về các định luật vật lý.</li>
            <li><span>Hóa học:</span> Thử nghiệm các phản ứng hóa học đơn giản, tìm hiểu sự thay đổi trạng thái của chất.</li>
            <li><span>Sinh học:</span> Quan sát các quá trình sinh học tự nhiên như sự phát triển của cây hoặc hệ sinh thái nhỏ.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Phát triển tư duy sáng tạo và giải quyết vấn đề (2 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Rèn luyện khả năng phân tích, tư duy sáng tạo trong việc áp dụng kiến thức vào các tình huống thực tế và giải quyết các vấn đề khó.</p>

        <h3>Tuần 9-12: Phân tích và giải thích hiện tượng tự nhiên</h3>
        <ul>
            <li><span>Vật lý:</span> Giải thích các hiện tượng hàng ngày như chuyển động, lực hấp dẫn, phản xạ ánh sáng và áp dụng các khái niệm vật lý để giải thích.</li>
            <li><span>Hóa học:</span> Phân tích các phản ứng hóa học trong cuộc sống hàng ngày như quá trình nấu ăn, sự phân hủy và oxi hóa.</li>
            <li><span>Sinh học:</span> Hiểu sâu về quá trình quang hợp, hô hấp tế bào và hệ sinh thái.</li>
        </ul>

        <h3>Tuần 13-16: Giải quyết vấn đề bằng tư duy sáng tạo</h3>
        <ul>
            <li><span>Vật lý:</span> Thử sức với các bài toán vật lý nâng cao đòi hỏi cách tiếp cận sáng tạo, sử dụng phương pháp đồ thị hoặc mô hình hóa để giải quyết.</li>
            <li><span>Hóa học:</span> Giải quyết các bài toán phản ứng hóa học phức tạp hơn, tìm hiểu cách điều chế các hợp chất mới.</li>
            <li><span>Sinh học:</span> Áp dụng kiến thức di truyền học vào giải quyết các bài toán về di truyền và tiến hóa.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Luyện thi và hoàn thiện kỹ năng (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Hoàn thiện kỹ năng sáng tạo trong việc giải quyết bài tập, phát triển phương pháp học sáng tạo và tư duy phản biện để chuẩn bị cho kỳ thi đại học.</p>

        <h3>Tuần 17-24: Luyện tập và phát triển kỹ năng</h3>
        <ul>
            <li><span>Vật lý:</span> Thực hiện các bài tập nâng cao, thử sức với các bài toán đòi hỏi kết hợp nhiều kiến thức và tư duy sáng tạo để giải quyết.</li>
            <li><span>Hóa học:</span> Giải quyết các bài tập phản ứng hóa học nâng cao, phân tích sâu về các hợp chất hữu cơ và vô cơ.</li>
            <li><span>Sinh học:</span> Tìm hiểu và luyện tập với các câu hỏi lý thuyết về sinh học phân tử, hệ thống sinh thái và sự tiến hóa.</li>
        </ul>

        <h3>Tuần 25-32: Luyện giải đề thi đại học</h3>
        <ul>
            <li><span>Vật lý, Hóa học, Sinh học:</span> Làm các đề thi thử và kiểm tra kỹ năng giải quyết vấn đề nhanh, chính xác nhưng vẫn giữ được tư duy sáng tạo.</li>
            <li><span>Nhận phản hồi:</span> Nhận phản hồi từ giáo viên hoặc nhóm học tập để cải thiện kỹ năng và tìm kiếm cách tiếp cận mới trong giải bài tập.</li>
        </ul>
    </div>
`;
            }
         else if (interest === 'math') {
            pathSuggestions = `
                <h1>Lộ trình học sáng tạo thi đại học</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Khơi dậy sáng tạo (3 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Phát triển tư duy sáng tạo và khám phá các phương pháp học mới.</p>

        <h3>Tuần 1-4: Khám phá và ghi nhớ qua hình ảnh</h3>
        <ul>
            <li><span>Kỹ thuật sơ đồ tư duy:</span> Sử dụng sơ đồ tư duy để tổ chức và hệ thống hóa kiến thức.</li>
            <li><span>Học qua hình ảnh:</span> Kết hợp hình ảnh minh họa và màu sắc để dễ nhớ các khái niệm.</li>
        </ul>

        <h3>Tuần 5-8: Đặt câu hỏi và tìm câu trả lời</h3>
        <ul>
            <li><span>Học qua câu hỏi:</span> Đặt câu hỏi mở và phát triển khả năng tư duy phản biện.</li>
            <li><span>Tìm câu trả lời sáng tạo:</span> Khám phá nhiều cách tiếp cận khác nhau cho một vấn đề.</li>
        </ul>

        <h3>Tuần 9-12: Sáng tạo từ các lỗi sai</h3>
        <ul>
            <li><span>Phân tích lỗi:</span> Học từ lỗi sai để tìm ra giải pháp mới và độc đáo.</li>
            <li><span>Thử nghiệm nhiều cách giải:</span> Khuyến khích thử nghiệm nhiều phương pháp khác nhau cho cùng một bài toán.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Phát triển khả năng sáng tạo (3 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Áp dụng tư duy sáng tạo vào giải quyết bài toán phức tạp.</p>

        <h3>Tuần 13-16: Sáng tạo trong Toán học</h3>
        <ul>
            <li><span>Giải bài toán theo nhiều cách:</span> Tìm nhiều phương pháp khác nhau để giải cùng một bài toán.</li>
            <li><span>Ứng dụng thực tiễn:</span> Áp dụng các khái niệm Toán học vào thực tế để tăng cường khả năng sáng tạo.</li>
        </ul>

        <h3>Tuần 17-20: Sáng tạo trong phân tích dữ liệu</h3>
        <ul>
            <li><span>Phân tích xu hướng:</span> Sử dụng dữ liệu để tìm ra các quy luật mới.</li>
            <li><span>Thử nghiệm và suy đoán:</span> Đưa ra giả thuyết và kiểm tra bằng cách phân tích dữ liệu.</li>
        </ul>

        <h3>Tuần 21-24: Học từ sự sáng tạo của người khác</h3>
        <ul>
            <li><span>Nghiên cứu bài toán kinh điển:</span> Phân tích các cách giải sáng tạo của những bài toán kinh điển.</li>
            <li><span>Phát triển ý tưởng mới:</span> Lấy cảm hứng từ người khác để tạo ra cách giải riêng.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Áp dụng sáng tạo trong thi cử (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Sử dụng tư duy sáng tạo để giải quyết các dạng bài tập thi cử.</p>

        <h3>Tuần 25-32: Luyện sáng tạo khi giải đề</h3>
        <ul>
            <li><span>Sáng tạo khi giải đề:</span> Tìm cách tiếp cận bài toán nhanh và thông minh.</li>
            <li><span>Chiến lược linh hoạt:</span> Thay đổi chiến thuật làm bài để tối ưu hóa thời gian.</li>
        </ul>

        <h3>Tuần 33-36: Kiểm tra và điều chỉnh</h3>
        <ul>
            <li><span>Phản hồi:</span> Xem lại cách tiếp cận của mình và tối ưu hóa.</li>
            <li><span>Điều chỉnh:</span> Thay đổi phương pháp học nếu cần thiết để tăng hiệu quả.</li>
        </ul>
    </div>`;
        }
        } else if (goals === 'career') {
            if (interest === 'literature') {
                pathSuggestions = `
                    <h3>Lộ trình học tập:</h3>
                    <ul>
                        <li><strong>Viết sáng tạo:</strong> Khóa học về các kỹ thuật viết sáng tạo và phát triển ý tưởng.</li>
                        <li><strong>Biên tập:</strong> Nghiên cứu về các kỹ thuật biên tập và xuất bản.</li>
                        <li><strong>Xuất bản:</strong> Tập trung vào quy trình xuất bản và quản lý xuất bản.</li>
                    </ul>`;
            }
        }
    }  if (personality === 'creative') {
        if (goals === 'personal') {
            if (interest === 'literature') {
                pathSuggestions = `
                     <h3>COMMING SOON</h3>`;
            } else if (interest === 'technology') {
                pathSuggestions = `
                    <h3>COMMING SOON</h3>
                    `;
            }
            else if (interest === 'science') {
                pathSuggestions = `
                     <h1>Lộ Trình Tự Học Sáng Tạo Các Môn Khoa Học Tự Nhiên</h1>
   

    <div class="timeline-container">
        <!-- Giai đoạn 1 -->
        <div class="timeline">
            <h2>1. Giai đoạn 1: Xây dựng nền tảng lý thuyết (3 tháng đầu)</h2>
            <p><strong>Mục tiêu:</strong> Nắm vững các kiến thức cơ bản về toán học, vật lý, hóa học và sinh học. Học cách áp dụng các khái niệm vào thực tiễn.</p>

            <h3>Tuần 1-4: Lên kế hoạch học tập và phân bổ thời gian</h3>
            <ul>
                <li><span>Phân bổ thời gian:</span> Xác định thời gian học hàng ngày cho từng môn khoa học tự nhiên.</li>
                <li><span>Xây dựng lộ trình cá nhân:</span> Chia nhỏ từng môn học thành các chủ đề cụ thể, ví dụ: Toán học – Đại số, Hình học, Vật lý – Cơ học, Quang học, Hóa học – Hóa hữu cơ, Hóa vô cơ.</li>
                <li><span>Đọc tài liệu cơ bản:</span> Sử dụng sách giáo khoa, ghi chú và làm bài tập về lý thuyết căn bản.</li>
            </ul>

            <h3>Tuần 5-8: Ôn tập chuyên sâu theo từng môn</h3>
            <ul>
                <li><span>Toán học:</span> Tập trung vào các chủ đề quan trọng như Hàm số, Đạo hàm và Tích phân.</li>
                <li><span>Vật lý:</span> Ôn lại các nguyên lý cơ bản về động lực học, điện từ và nhiệt học.</li>
                <li><span>Hóa học:</span> Luyện tập các phản ứng hóa học, tính chất của các hợp chất hữu cơ và vô cơ.</li>
            </ul>

            <h3>Tuần 9-12: Học qua bài tập thực hành và ứng dụng thực tiễn</h3>
            <ul>
                <li><span>Bài tập thực hành:</span> Thực hiện các bài tập liên quan đến tính toán, thí nghiệm và kiểm tra lý thuyết đã học.</li>
                <li><span>Ứng dụng thực tiễn:</span> Tìm kiếm các bài tập ứng dụng liên quan đến đời sống, ví dụ: Tính toán năng lượng tiêu thụ, dự đoán phản ứng hóa học trong thực tiễn.</li>
            </ul>
        </div>

        <!-- Giai đoạn 2 -->
        <div class="timeline">
            <h2>2. Giai đoạn 2: Phát triển tư duy sáng tạo (3 tháng tiếp theo)</h2>
            <p><strong>Mục tiêu:</strong> Khám phá các phương pháp học sáng tạo, ứng dụng kiến thức khoa học để giải quyết vấn đề thực tế.</p>

            <h3>Tuần 13-16: Áp dụng tư duy sáng tạo vào giải bài tập</h3>
            <ul>
                <li><span>Phương pháp sáng tạo:</span> Tìm hiểu các phương pháp giải quyết vấn đề như phương pháp S.M.A.R.T, kỹ thuật Mind Mapping để tổ chức ý tưởng.</li>
                <li><span>Tự giải bài:</span> Chọn bài tập có mức độ khó tăng dần và tự mình tìm ra cách giải sáng tạo.</li>
            </ul>

            <h3>Tuần 17-20: Thực hành với dự án khoa học nhỏ</h3>
            <ul>
                <li><span>Dự án:</span> Thiết kế các dự án nhỏ như làm mô hình khoa học, thí nghiệm vật lý hoặc hóa học, hoặc áp dụng toán học vào lập trình.</li>
                <li><span>Phân tích kết quả:</span> Sau khi hoàn thành, đánh giá lại quá trình và rút ra các bài học về sáng tạo và kỹ thuật.</li>
            </ul>

            <h3>Tuần 21-24: Thử nghiệm với các phương pháp học mới</h3>
            <ul>
                <li><span>Phương pháp học:</span> Tìm hiểu và thử nghiệm các phương pháp học mới như Học qua video, Tham gia các diễn đàn học tập trực tuyến.</li>
                <li><span>Thảo luận nhóm:</span> Tham gia các nhóm học tập và trao đổi kiến thức, hỏi đáp và giải thích cho người khác để củng cố kiến thức.</li>
            </ul>
        </div>

        <!-- Giai đoạn 3 -->
        <div class="timeline">
            <h2>3. Giai đoạn 3: Luyện thi và kiểm tra (2 tháng cuối)</h2>
            <p><strong>Mục tiêu:</strong> Luyện giải đề thi thử và tối ưu hóa kỹ năng làm bài thi các môn khoa học tự nhiên.</p>

            <h3>Tuần 25-32: Luyện giải đề và cải thiện tốc độ làm bài</h3>
            <ul>
                <li><span>Giải đề thi thử:</span> Làm các đề thi từ các năm trước và đề thi thử online để nắm vững cấu trúc và dạng bài thi.</li>
                <li><span>Tối ưu hóa thời gian:</span> Luyện tập phân bổ thời gian làm bài hợp lý, tập trung vào những câu hỏi khó.</li>
            </ul>

            <h3>Tuần 33-36: Kiểm tra tiến độ và điều chỉnh chiến lược học tập</h3>
            <ul>
                <li><span>Đánh giá:</span> Sau mỗi đề thi, đánh giá lại điểm mạnh và điểm yếu, cải thiện kỹ năng làm bài.</li>
                <li><span>Điều chỉnh kế hoạch:</span> Điều chỉnh lộ trình học tập dựa trên kết quả thực tế, đảm bảo sự tiến bộ liên tục.</li>
            </ul>
        </div>
    </div>`;
            }
            else if (interest === 'math') {
                pathSuggestions = `
                    <h1>Lộ trình tự học thi đại học</h1>

    <!-- Giai đoạn 1 -->
    <div class="timeline">
        <h2>1. Giai đoạn 1: Xây dựng nền tảng (3 tháng đầu)</h2>
        <p><strong>Mục tiêu:</strong> Nắm vững kiến thức cơ bản và làm quen với phương pháp tự học.</p>

        <h3>Tuần 1-4: Lên kế hoạch học tập</h3>
        <ul>
            <li><span>Phân bổ thời gian:</span> Xác định thời gian học hàng ngày và mục tiêu cho từng tuần.</li>
            <li><span>Tạo lộ trình cá nhân:</span> Xác định các chủ đề chính và chia nhỏ thành các phần nhỏ dễ quản lý.</li>
        </ul>

        <h3>Tuần 5-8: Ôn tập kiến thức nền tảng</h3>
        <ul>
            <li><span>Ôn tập lý thuyết:</span> Xem lại các khái niệm toán học cơ bản từ lớp 10-12.</li>
            <li><span>Học theo chủ đề:</span> Tập trung vào từng chủ đề, hoàn thành bài tập lý thuyết và bài tập thực hành.</li>
        </ul>

        <h3>Tuần 9-12: Học qua sách và video</h3>
        <ul>
            <li><span>Sử dụng tài liệu:</span> Sử dụng sách tham khảo và tài liệu trực tuyến để học thêm.</li>
            <li><span>Học qua video:</span> Tìm kiếm video giải thích các khái niệm khó trên các kênh giáo dục.</li>
        </ul>
    </div>

    <!-- Giai đoạn 2 -->
    <div class="timeline">
        <h2>2. Giai đoạn 2: Phát triển kỹ năng tự học (3 tháng tiếp theo)</h2>
        <p><strong>Mục tiêu:</strong> Nâng cao khả năng tự giải bài và quản lý tiến độ học tập.</p>

        <h3>Tuần 13-16: Tự giải đề bài</h3>
        <ul>
            <li><span>Giải bài tập tự chọn:</span> Chọn các bài tập theo từng cấp độ từ dễ đến khó.</li>
            <li><span>Phân tích và sửa lỗi:</span> Sau khi giải, kiểm tra lại và phân tích lỗi sai để hiểu rõ hơn.</li>
        </ul>

        <h3>Tuần 17-20: Tự tạo môi trường học</h3>
        <ul>
            <li><span>Môi trường học:</span> Tạo không gian học tập yên tĩnh, không có yếu tố gây phân tâm.</li>
            <li><span>Tự đánh giá:</span> Đặt mục tiêu rõ ràng và kiểm tra tiến độ học tập mỗi tuần.</li>
        </ul>

        <h3>Tuần 21-24: Học qua việc giảng dạy</h3>
        <ul>
            <li><span>Giảng lại cho người khác:</span> Thử giải thích lại các khái niệm đã học cho người khác để củng cố kiến thức.</li>
            <li><span>Tham gia diễn đàn học tập:</span> Tham gia vào các nhóm học tập trực tuyến để trao đổi và hỏi đáp.</li>
        </ul>
    </div>

    <!-- Giai đoạn 3 -->
    <div class="timeline">
        <h2>3. Giai đoạn 3: Luyện thi và kiểm tra (2 tháng cuối)</h2>
        <p><strong>Mục tiêu:</strong> Thực hành làm đề thi thử và tối ưu hóa cách giải đề.</p>

        <h3>Tuần 25-32: Luyện đề thi</h3>
        <ul>
            <li><span>Giải đề:</span> Làm các đề thi từ các năm trước và các đề thi thử.</li>
            <li><span>Kiểm tra thời gian:</span> Học cách phân bổ thời gian hợp lý khi làm bài thi.</li>
        </ul>

        <h3>Tuần 33-36: Kiểm tra tiến độ và điều chỉnh</h3>
        <ul>
            <li><span>Phản hồi:</span> Sau mỗi đề thi thử, đánh giá lại điểm yếu và cải thiện.</li>
            <li><span>Điều chỉnh lộ trình:</span> Tùy chỉnh kế hoạch học tập dựa trên kết quả thực tế để đạt hiệu quả cao nhất.</li>
        </ul>
    </div>`;
            }
            else if (interest === 'literature') {
                pathSuggestions = `
                    <h3>Lộ trình học tập:</h3>
                    <ul>
                        <li><strong>Kỹ thuật phần mềm:</strong> Khóa học về các phương pháp phát triển phần mềm và quản lý dự án.</li>
                        <li><strong>Quản lý dự án:</strong> Nghiên cứu về các kỹ thuật quản lý dự án và lãnh đạo nhóm.</li>
                        <li><strong>An ninh mạng:</strong> Tập trung vào các kỹ thuật bảo mật và bảo vệ hệ thống mạng.</li>
                    </ul>`;
            }
        }
    } else if (personality === 'analytical') {
        if (goals === 'university') {
            if (interest === 'literature') {
                pathSuggestions = `
                    <h3>Lộ trình học tập:</h3>
                    <ul>
                        <li><strong>Văn học cổ điển:</strong> Khóa học về các tác phẩm văn học cổ điển và các tác giả nổi tiếng.</li>
                        <li><strong>Phân tích văn bản:</strong> Nghiên cứu về các phương pháp phân tích và diễn giải văn bản.</li>
                        <li><strong>Lý luận văn học:</strong> Tập trung vào các lý thuyết và phương pháp nghiên cứu văn học.</li>
                    </ul>`;
            } else if (interest === 'math') {
                pathSuggestions = `
                    <h3>Lộ trình học tập:</h3>
                    <ul>
                        <li><strong>Toán cao cấp:</strong> Khóa học về các chủ đề như tích phân, đạo hàm, và phương trình vi phân.</li>
                        <li><strong>Thống kê:</strong> Nghiên cứu về các phương pháp thống kê và phân tích dữ liệu.</li>
                        <li><strong>Giải tích:</strong> Tập trung vào các khái niệm giới hạn, chuỗi, và tích phân.</li>
                    </ul>`;
            }
        }
    } else {
        pathSuggestions = `
            <h3>Lộ trình học tập:</h3>
            <ul>
                <li>Các khóa học đa dạng phù hợp với sở thích và mục tiêu của bạn.</li>
            </ul>`;
    }

    // Hiển thị lộ trình học tập được đề xuất
    document.getElementById('path-suggestions').innerHTML = pathSuggestions;
    document.getElementById('recommendations').classList.remove('hidden');
}
