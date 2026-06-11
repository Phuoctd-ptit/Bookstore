    const danhSachGoc = [
        { id: 1, title: "Đắc Nhân Tâm", author: "Dale Carnegie", category: "Phát triển bản thân", price: 86000, image: "https://cdn1.fahasa.com/media/catalog/product/d/n/dntttttuntitled.jpg" },
        { id: 2, title: "Nghĩ Giàu Và Làm Giàu", author: "Napoleon Hill", category: "Kinh doanh", price: 110000, image: "https://cdn1.fahasa.com/media/catalog/product/z/2/z2212144539430_cf14db45eb526b88be9d32fa9995a0d6.jpg" },
        { id: 3, title: "Clean Code - Mã Sạch", author: "Robert C. Martin", category: "Công nghệ", price: 320000, image: "https://cdn1.fahasa.com/media/catalog/product/8/9/8936107813361.jpg" },
        { id: 4, title: "Nhà Giả Kim", author: "Paulo Coelho", category: "Văn học", price: 69000, image: "https://cdn1.fahasa.com/media/catalog/product/i/m/image_195509_1_36793_1.jpg" },
        { id: 5, title: 'Sapiens - Lược Sử Loài Người', author: 'Yuval Noah Harari', category: 'Lịch sử', price: 200000, image: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935270703554.jpg' },
        { id: 6, title: 'Bí Mật Tư Duy Triệu Phú', author: 'T. Harv Eker', category: 'Kinh doanh', price: 90000, image: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_188995_1_1.jpg' },
        { id: 7, title: 'Bill Gates - Tham Vọng Lớn Lao Và Quá Trình Hình Thành Đế Chế Microsoft', author: 'James Wallace, Jim Erickson', category: 'Tiểu thuyết', price: 200000, image: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935251406115_1_1.jpg' },
        { id: 8, title: 'Người Giàu Nhất Thành Babylon', author: 'George Samuel Clason', category: 'Phát triển bản thân', price: 120000, image: 'https://cdn1.fahasa.com/media/catalog/product/n/g/nguoi-giau-nhat-thanh-babylon-full-t12-2024-outline-02.jpg' },
        { id: 9, title: 'Điều Ý Nghĩa Nhất', author: 'Jay Papasan Gary Keller', category: 'Phát triển bản thân', price: 90000, image: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935251419191.jpg' },
        { id: 10, title: 'Thao Túng Tâm Lý Khách Hàng Bằng Tâm Lý Học', author: 'Lý Hạo Hiên', category: 'Kinh doanh', price: 120000, image: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935246939444.jpg' },
        { id: 11, title: 'Đời Ngắn Đừng Ngủ Dài', author: 'Robin Sharma', category: 'Phát triển bản thân', price: 70000, image: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8934974190608.jpg' },
        { id: 12, title: 'Đàn Ông Sao Hỏa Đàn Bà Sao Kim', author: 'John Gray', category: 'Phát triển bản thân', price: 120000, image: 'https://cdn1.fahasa.com/media/catalog/product/i/m/image_183259.jpg' },
        { id: 13, title: 'The Subtle Art Of Not Giving A F*ck', author: 'Mark Manson', category: 'Phát triển bản thân', price: 530000, image: 'https://cdn1.fahasa.com/media/catalog/product/9/7/9780062457714.jpg' },
        { id: 14, title: 'The Subtle Art Of Not Giving A F*ck Journal', author: 'Mark Manson', category: 'Phát triển bản thân', price: 415000, image: 'https://cdn1.fahasa.com/media/catalog/product/9/7/9780008542474.jpg' },
        { id: 15, title: 'Think And Grow Rich', author: 'Napoleon Hill', category: 'Phát triển bản thân', price: 101000, image: 'https://cdn1.fahasa.com/media/catalog/product/t/h/think-and-grow-rich-13-nguyen-tac-nghi-giau-lam-giau_1.jpg' },
        { id: 16, title: 'Sherlock Holmes - Tập 5 - Con Chó Của Dòng Họ Baskerville Và Thung Lũng Kinh Hoàng', author: 'Arthur Conan Doyle', category: 'Tiểu thuyết', price: 125000, image: 'https://cdn1.fahasa.com/media/catalog/product/s/h/sherlock_holmes_-_con_cho_cua_do.jpg' },
        { id: 17, title: 'Tư Duy Tối Ưu - First Things First', author: 'Stephen R. Covey', category: 'Phát triển bản thân', price: 160000, image: "https://cdn1.fahasa.com/media/catalog/product/d/f/dfd.jpg" },
        { id: 18, title: 'Thú Tội', author: 'Minato Kanae', category: 'Tiểu thuyết', price: 80000, image: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8935235237247.jpg' },
        { id: 19, title: 'Án Mạng Trên Chuyến Tàu Tốc Hành Phương Đông', author: 'Agatha Christie', category: 'Tiểu thuyết', price: 95000, image: 'https://cdn1.fahasa.com/media/catalog/product/8/9/8934974177081.jpg' },
        { id: 20, title: 'White heat', author: 'Marco Pierre White', category: 'Nấu ăn', price: 750000, image: 'https://m.media-amazon.com/images/I/512tChk85sL._SX342_SY445_ML2_.jpg' }
      ];

      let mangGioHang = [];
      let currentUser = null;
      let authMode = "login";

      function dinhDangTien(soTien) {
        return soTien.toLocaleString("vi-VN") + "đ";
      }

      function hienThiModalAuth() {
        chuyenFormAuth("login");
        document.getElementById("auth-modal").style.display = "flex";
      }

      function anModalAuth() {
        document.getElementById("auth-modal").style.display = "none";
      }

      function chuyenFormAuth(mode) {
        authMode = mode;
        const form = document.getElementById("auth-form");
        form.reset();

        if (mode === "login") {
          document.getElementById("auth-modal-title").innerText = "🔐 Đăng Nhập";
          document.getElementById("group-reg-name").style.display = "none";
          document.getElementById("auth-name").removeAttribute("required");
          document.getElementById("btn-auth-submit").innerText = "Đăng Nhập";
          document.getElementById("auth-switch-text").innerHTML = `Chưa có tài khoản? <span onclick="chuyenFormAuth('register')">Đăng ký ngay</span>`;
        } else {
          document.getElementById("auth-modal-title").innerText = "📝 Đăng Ký Tài Khoản";
          document.getElementById("group-reg-name").style.display = "block";
          document.getElementById("auth-name").setAttribute("required", "true");
          document.getElementById("btn-auth-submit").innerText = "Đăng Ký";
          document.getElementById("auth-switch-text").innerHTML = `Đã có tài khoản? <span onclick="chuyenFormAuth('login')">Đăng nhập tại đây</span>`;
        }
      }

      function xuLySubmitAuth(e) {
        e.preventDefault();
        const username = document.getElementById("auth-username").value.trim();
        const password = document.getElementById("auth-password").value;
        let dsThanhVien = JSON.parse(localStorage.getItem("bs_users")) || [];

        if (authMode === "register") {
          const name = document.getElementById("auth-name").value.trim();
          let checkUser = dsThanhVien.find((u) => u.username === username);
          if (checkUser) {
            hienThiThongBaoNhanh("❌ Tên tài khoản này đã có người sử dụng!");
            return;
          }
          dsThanhVien.push({ username, password, name });
          localStorage.setItem("bs_users", JSON.stringify(dsThanhVien));
          hienThiThongBaoNhanh("🎉 Đăng ký thành công! Hãy đăng nhập nhé.");
          chuyenFormAuth("login");
        } else {
          let userValid = dsThanhVien.find((u) => u.username === username && u.password === password);
          if (!userValid) {
            hienThiThongBaoNhanh("❌ Sai tài khoản hoặc mật khẩu!");
            return;
          }
          currentUser = userValid;
          localStorage.setItem("bs_current_user", JSON.stringify(currentUser));
          hienThiThongBaoNhanh(`👋 Chào mừng ${currentUser.name} quay trở lại!`);
          anModalAuth();
          dongBoTrangThaiAuth();
          loadGioHangTheoUser();
        }
      }

      function handleAuthAction() {
        if (currentUser) {
          currentUser = null;
          mangGioHang = [];
          localStorage.removeItem("bs_current_user");
          hienThiThongBaoNhanh("Đã đăng xuất tài khoản.");
          dongBoTrangThaiAuth();
          capNhatGiaoDienVaLuuTru();
        } else {
          hienThiModalAuth();
        }
      }

      function dongBoTrangThaiAuth() {
        const userArea = document.getElementById("user-area");
        const btnAuth = document.getElementById("btn-auth-action");
        const banner = document.getElementById("welcome-banner");

        if (currentUser) {
          userArea.innerText = `Xin chào, ${currentUser.name}!`;
          btnAuth.innerText = "Đăng Xuất";
          banner.innerText = `Chào mừng ${currentUser.name} tới BookStore!`;
        } else {
          userArea.innerText = "";
          btnAuth.innerText = "Đăng Nhập";
          banner.innerText = "Chào mừng tới BookStore!";
        }
      }

      function loadGioHangTheoUser() {
        if (currentUser) {
          const keyGioHang = `gio_hang_${currentUser.username}`;
          const dataGio = localStorage.getItem(keyGioHang);
          mangGioHang = dataGio ? JSON.parse(dataGio) : [];
        } else {
          mangGioHang = [];
        }
        capNhatGiaoDienVaLuuTru();
      }

      function themVaoGio(idSach) {
        let sachTimDuoc = danhSachGoc.find((s) => s.id === idSach);
        if (!sachTimDuoc) return;

        let trungMuan = mangGioHang.find((item) => item.id === idSach);
        if (trungMuan) {
          trungMuan.soLuong += 1;
        } else {
          mangGioHang.push({
            id: sachTimDuoc.id,
            title: sachTimDuoc.title,
            price: sachTimDuoc.price,
            image: sachTimDuoc.image,
            soLuong: 1,
          });
        }
        capNhatGiaoDienVaLuuTru();
        hienThiThongBaoNhanh(`Đã thêm "${sachTimDuoc.title}" vào giỏ hàng!`);
      }

      function capNhatSoLuong(idSach, luongThayDoi) {
        let item = mangGioHang.find((i) => i.id === idSach);
        if (item) {
          item.soLuong += luongThayDoi;
          if (item.soLuong < 1) {
            xoaKhoiGio(idSach);
            return;
          }
        }
        capNhatGiaoDienVaLuuTru();
      }

      function xoaKhoiGio(idSach) {
        let index = mangGioHang.findIndex((i) => i.id === idSach);
        if (index !== -1) {
          const tenSach = mangGioHang[index].title;
          mangGioHang.splice(index, 1);
          hienThiThongBaoNhanh(`Đã xóa "${tenSach}" khỏi giỏ.`);
        }
        capNhatGiaoDienVaLuuTru();
      }

      function tinhTongTien() {
        return mangGioHang.reduce((total, item) => total + item.price * item.soLuong, 0);
      }

      function capNhatGiaoDienVaLuuTru() {
        if (currentUser) {
          const keyGioHang = `gio_hang_${currentUser.username}`;
          localStorage.setItem(keyGioHang, JSON.stringify(mangGioHang));
        }
        let tongSoLuong = mangGioHang.reduce((total, item) => total + item.soLuong, 0);
        document.getElementById("dem-so-luong").innerText = tongSoLuong;

        const tongTien = tinhTongTien();
        document.getElementById("tong-tien-nhan").innerText = dinhDangTien(tongTien);
        veGiaoDienGioHang();
      }

      function veGiaoDienGioHang() {
        const noiDungGio = document.getElementById("noi-dung-gio-hang");
        if (mangGioHang.length === 0) {
          noiDungGio.innerHTML = "<p style='text-align: center; color: #888; padding: 20px 0;'>Giỏ hàng trống rỗng! Hãy chọn vài cuốn sách nhé.</p>";
          return;
        }

        let htmlTichLuy = "";
        mangGioHang.forEach((item) => {
          htmlTichLuy += `
                    <div class="dong-gio-hang">
                        <img src="${item.image}" alt="${item.title}">
                        <div class="chi-tiet-dong">
                            <h4>${item.title}</h4>
                            <p>${dinhDangTien(item.price)}</p>
                        </div>
                        <div class="nut-tang-giam">
                            <button onclick="capNhatSoLuong(${item.id}, -1)">-</button>
                            <span>${item.soLuong}</span>
                            <button onclick="capNhatSoLuong(${item.id}, 1)">+</button>
                        </div>
                        <button class="btn-xoa-item" onclick="xoaKhoiGio(${item.id})">❌</button>
                    </div>
                `;
        });
        noiDungGio.innerHTML = htmlTichLuy;
      }

      function hienThiModalGioHang() { document.getElementById("gio-hang-modal").style.display = "flex"; }
      function anModalGioHang() { document.getElementById("gio-hang-modal").style.display = "none"; }

      function xoaToanBoGio() {
        if (mangGioHang.length === 0) {
          hienThiThongBaoNhanh("Giỏ hàng của bạn đã trống sẵn!");
          return;
        }
        mangGioHang = [];
        capNhatGiaoDienVaLuuTru();
        hienThiThongBaoNhanh("Đã dọn dẹp sạch giỏ hàng.");
      }

      function thanhToanDonHang() {
        if (!currentUser) {
          anModalGioHang();
          hienThiModalAuth();
          hienThiThongBaoNhanh("⚠️ Vui lòng đăng nhập để thực hiện thanh toán đơn hàng!");
          return;
        }
        if (mangGioHang.length === 0) {
          hienThiThongBaoNhanh("Giỏ hàng đang trống, chưa có gì để thanh toán!");
          return;
        }
        const tienPhaiTra = tinhTongTien();
        alert(`🎉 Chúc mừng ${currentUser.name}! Đặt hàng thành công.\nTổng tiền hóa đơn: ${dinhDangTien(tienPhaiTra)}`);
        mangGioHang = [];
        capNhatGiaoDienVaLuuTru();
        anModalGioHang();
      }


      function hienThiDanhSachSach(sachCanHienThi) {
        const vungChuaChinh = document.getElementById("vung-chua-danh-sach-sach"); 
        const thongBaoRong = document.getElementById("khong-tim-thay");
        vungChuaChinh.innerHTML = "";

        if (sachCanHienThi.length === 0) {
          thongBaoRong.style.display = "block";
          return;
        } else {
          thongBaoRong.style.display = "none";
        }


        sachCanHienThi.forEach((item) => {
          const theSach = document.createElement("div");
          theSach.className = "the-sach";
          theSach.innerHTML = `
                      <img class="anh-sach" src="${item.image}" alt="${item.title}">
                      <div class="thong-tin-sach">
                          <div>
                              <span class="the-loai-tag">${item.category}</span>
                              <div class="ten-sach">${item.title}</div>
                              <div class="tac-gia">Tác giả: ${item.author}</div>
                          </div>
                          <div class="gia-va-nut">
                              <span class="gia-tien">${dinhDangTien(item.price)}</span>
                              <button class="btn-them-gio" onclick="themVaoGio(${item.id})">➕ Mua</button>
                          </div>
                      </div>
                  `;
          vungChuaChinh.appendChild(theSach);
        });
      }

      function hienThiSachTheoDanhMuc(dsSach) {
        const vungDanhMuc = document.getElementById("vung-danh-muc");
        const thongBaoRong = document.getElementById("khong-tim-thay");

        vungDanhMuc.innerHTML = "";

        if (dsSach.length === 0) {
          thongBaoRong.style.display = "block";
          return;
        }

        thongBaoRong.style.display = "none";

        const cacDanhMuc = [...new Set(dsSach.map(book => book.category))];

        cacDanhMuc.forEach(danhMuc => {
          const sachTheoDanhMuc = dsSach.filter(book => book.category === danhMuc);

          const section = document.createElement("div");

          section.innerHTML = `
            <div class="main-list-title">
              <div class="title-bar"></div>
              ${danhMuc}
            </div>
            <div class="grid-sach">
              ${sachTheoDanhMuc.map(item => `
                <div class="the-sach">
                  <img class="anh-sach" src="${item.image}" alt="${item.title}">
                  <div class="thong-tin-sach">
                    <div>
                      <div class="ten-sach">${item.title}</div>
                      <div class="tac-gia">Tác giả: ${item.author}</div>
                    </div>
                    <div class="gia-va-nut">
                      <span class="gia-tien">${dinhDangTien(item.price)}</span>
                      <button class="btn-them-gio" onclick="themVaoGio(${item.id})">➕ Mua</button>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          `;

          vungDanhMuc.appendChild(section);
        });
      }


      function locDanhSachSach() {
        const tuKhoa = document.getElementById("o-tim-kiem").value.toLowerCase().trim();
        const danhMucChon = document.getElementById("loc-danh-muc").value;

        const ketQuaLoc = danhSachGoc.filter((book) => {
          const khopTuKhoa = book.title.toLowerCase().includes(tuKhoa) || book.author.toLowerCase().includes(tuKhoa);
          const khopDanhMuc = danhMucChon === "Tất cả" || book.category === danhMucChon;
          return khopTuKhoa && khopDanhMuc;
        });

        hienThiSachTheoDanhMuc(ketQuaLoc);
      }

      function datLaiBoLoc() {
        document.getElementById("o-tim-kiem").value = "";
        document.getElementById("loc-danh-muc").value = "Tất cả";
        hienThiSachTheoDanhMuc(danhSachGoc);
        hienThiThongBaoNhanh("Đã đặt lại bộ lọc!");
      }

      function hienThiThongBaoNhanh(tinNhan) {
        const thongBao = document.getElementById("thong-bao-noi");
        thongBao.innerText = tinNhan;
        thongBao.classList.add("hien-thi");
        setTimeout(function () {
          thongBao.classList.remove("hien-thi");
        }, 2500);
      }

      window.onload = function () {
        hienThiSachTheoDanhMuc(danhSachGoc);
        const userLuuTru = localStorage.getItem("bs_current_user");
        if (userLuuTru) {
          currentUser = JSON.parse(userLuuTru);
          dongBoTrangThaiAuth();
        }
        loadGioHangTheoUser();
      };