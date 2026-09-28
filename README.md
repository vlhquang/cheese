# 🏎️ Học Viện Cờ Vua Ô Tô

Trang web dạy cờ vua cho trẻ em: 37 bài học có hình động trên bàn cờ, 16 cấp độ đấu với máy và chế độ giải đấu.
Toàn bộ chạy trên trình duyệt, không cần server hay cài đặt.

## Chạy thử

- **Trên web (đầy đủ 16 cấp Đấu AI):** deploy lên GitHub Pages (xem dưới) hoặc chạy một web server tĩnh bất kỳ,
  ví dụ `python3 -m http.server` rồi mở `http://localhost:8000`.
- **Mở trực tiếp file `index.html`:** Bản Đồ Học, Giải Đấu và Đấu AI cấp 1–8 vẫn chạy (kể cả khi không có mạng).
  Cấp 9–16 cần máy cờ Stockfish chạy trong Web Worker, mà trình duyệt thường chặn Worker khi mở bằng `file://`,
  nên các cấp này sẽ bị khóa (📶).

## Deploy lên GitHub Pages

1. Đưa toàn bộ thư mục lên repo: `index.html`, thư mục `engine/`, `LICENSE`, `README.md`.
2. Vào **Settings → Pages**, chọn nhánh (vd. `main`) và thư mục gốc `/`.
3. Mở địa chỉ GitHub Pages của repo, vào tab **⭐ Đấu AI**: thang cấp hiện "⏳ Đang tải máy cờ..." rồi mở khóa các cấp 9–16.

Không cần cấu hình header đặc biệt: bản Stockfish dùng ở đây là bản *lite single-threaded*, không cần
`SharedArrayBuffer` / COOP-COEP.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Toàn bộ ứng dụng (đã nhúng sẵn jQuery, chess.js, chessboard.js và ảnh quân cờ) |
| `engine/stockfish-19-lite-single.js` + `.wasm` | Máy cờ Stockfish.js 19 (bản lite, 1 luồng, ~1,8 MB) cho Đấu AI cấp 9–16 và gợi ý 💡 |
| `LICENSE` | Giấy phép GNU GPL v3 |

Hai file trong `engine/` phải nằm cạnh nhau và giữ nguyên tên: file `.js` tự tìm file `.wasm` cùng tên.

## Giấy phép

Dự án này phát hành theo **GNU General Public License v3.0** – xem [LICENSE](LICENSE).

### Thành phần bên thứ ba

| Thành phần | Giấy phép | Nguồn |
|---|---|---|
| Stockfish.js 19 (lite single-threaded), © 2026 Chess.com, LLC | GPLv3 | https://github.com/nmrugg/stockfish.js |
| Stockfish, © T. Romstad, M. Costalba, J. Kiiski, G. Linscott và cộng sự | GPLv3 | https://github.com/official-stockfish/Stockfish |
| chess.js 0.10.3 | BSD-2-Clause | https://github.com/jhlywa/chess.js |
| chessboard.js 1.0.0, © 2019 Chris Oakman | MIT | https://github.com/oakmac/chessboardjs |
| jQuery 3.6.0 | MIT | https://jquery.com |
| Ảnh quân cờ (bộ "wikipedia" đi kèm chessboard.js), vẽ bởi Colin M. L. Burnett | GFDL / BSD / GPL (đa giấy phép) | https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces |

Mã nguồn đầy đủ của Stockfish.js (kể cả cách biên dịch ra `.wasm`) có tại repo nmrugg/stockfish.js ở trên.
