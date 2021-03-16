//Bước 1:
//Xác định các thông tin cần lấy từ người dùng
var loaiXe = 'uberX';
var soKm = '';
var thoiGianCho = '';

//Lấy thông tin loại xe 
// document.querySelector('#uberX').onclick = function (event) {
//     //event.target chính là thẻ xảy ra sự kiện
//     loaiXe = event.target.id;
//     console.log(loaiXe);
// }
// document.querySelector('#uberSUV').onclick = function (event) {
//     loaiXe = event.target.id;  
//     console.log(loaiXe);

// }
// document.querySelector('#uberBlack').onclick = function (event) {
//     loaiXe = event.target.id;
//     console.log(loaiXe);

// }

//Dom đến tất cả radio button 
var arrRadioButton = document.querySelectorAll('input[type="radio"]');
for(var i = 0 ;i<arrRadioButton.length;i++) {
    var tagRadio = arrRadioButton[i];
    //Định nghĩa sự kiện click cho từng nút radio. Lưu ý function này khi onclick mới thực hiện
    tagRadio.onclick = function (event) {
        loaiXe = event.target.id;
        console.log(loaiXe);
    }
}



//Cài đặt sự kiện cho nút tính tiền
document.querySelector('.contact100-form-btn').onclick = function() {
    
    //Lấy sokm và thời gian cho
    soKm = document.querySelector('#soKM').value;
    thoiGianCho = document.querySelector('#thoiGianCho').value;

    var tongTien = 0;
    //Sử dụng công thức if else để tính tiền
    switch(loaiXe) //switch so sánh = 
    {
        case 'uberX': {
            tongTien += 8000;
            if(soKm <= 20) {
                tongTien += (soKm - 1) * 12000;
            } else if(soKm > 20) {
                tongTien += 19 * 12000 + (soKm - 20) * 10000;
            }
            tongTien += thoiGianCho * 2000;
        };break;
        case 'uberSUV': {
            tongTien += 9000;
            if(soKm <= 20) {
                tongTien += (soKm - 1) * 14000;
            } else if(soKm > 20) {
                tongTien += 19 * 14000 + (soKm - 20) * 12000;
            }
            tongTien += thoiGianCho * 3000;

        };break;
        case 'uberBlack': {
            tongTien += 10000;
            if(soKm <= 20) {
                tongTien += (soKm - 1) * 16000;
            } else if(soKm > 20) {
                tongTien += 19 * 16000 + (soKm - 20) * 14000;
            }
            tongTien += thoiGianCho * 4000;
        };break;
    }
    //Hiển thị nội dung divThanhTien
    document.querySelector('#divThanhTien').style.display = 'block';
    document.querySelector('#xuatTien').innerHTML = tongTien.toLocaleString(); //hiển thị số thành chuỗi x.xxx.xxx
    // console.log(tongTien)
}
