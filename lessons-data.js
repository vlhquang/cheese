const OLD_LESSON_ORDER = ["pawn", "rook", "bishop", "knight", "queen", "fork", "pin", "castle", "promote", "mate1", "escape", "block", "capture", "opening"];

const ROOK_RULE = "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!";
const BISHOP_RULE = "Tượng chỉ đi CHÉO, không đi thẳng và không nhảy qua quân khác!";
const KNIGHT_RULE = "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!";
const KING_RULE = "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!";

const ROADMAP = [
    {
        "id": "pawn",
        "category": "Chương 1: Quân Tốt",
        "title": "Sức mạnh quân Tốt",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "e2e4",
                "note": "♟ Tốt đi thẳng. Nước đầu được đi <b>2 ô</b>!",
                "mascot": "Đẩy Tốt lên 2 bước!"
            },
            {
                "fen": "rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                "targetMove": "e4d5",
                "note": "♟ Tốt <b>ăn chéo</b>: bắt Tốt d5!",
                "mascot": "Tốt ăn chéo bắt quân địch!"
            },
            {
                "fen": "rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2",
                "targetMove": "c7c6",
                "note": "♟ Giờ thử đi Tốt 1 ô nhé!",
                "mascot": "Đẩy Tốt lên 1 bước!"
            },
            {
                "fen": "rnbqkbnr/pp2pppp/2p5/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
                "targetMove": "d5c6",
                "note": "♟ Tốt trắng lại ăn chéo tiếp!",
                "mascot": "Tiếp tục ăn chéo quân địch!"
            },
            {
                "fen": "rnbqkbnr/pp2pppp/2P5/8/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 3",
                "targetMove": "b7c6",
                "note": "♟ Tốt đen ăn lại Tốt trắng!",
                "mascot": "Ăn chéo trả đũa nào!"
            }
        ]
    },
    {
        "id": "pawn-block",
        "category": "Chương 1: Quân Tốt",
        "title": "Tốt Bị Chặn Đường",
        "steps": [
            {
                "fen": "4k3/8/8/3pp3/4P3/8/8/4K3 w - - 0 1",
                "targetMove": "e4d5",
                "note": "♟ Bị chặn thẳng? <b>Ăn chéo</b> sang d5!",
                "mascot": "Bị chặn đường thẳng thì ăn chéo!",
                "before": {
                    "arrows": [
                        [
                            "e4",
                            "e5",
                            "blocked"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/8/8/3Pp3/8/8/8/4K3 b - - 0 1",
                "targetMove": "e5e4",
                "note": "♟ Đường trống rồi, Tốt đen tiến lên!",
                "mascot": "Đường thông thoáng, tiến lên 1 bước!"
            },
            {
                "fen": "4k3/8/8/3P4/4p3/8/8/4K3 w - - 0 2",
                "targetMove": "d5d6",
                "note": "♟ Tốt trắng cũng tiến lên 1 ô!",
                "mascot": "Tốt trắng tiếp tục hành quân!"
            },
            {
                "fen": "4k3/8/3P4/8/4p3/3P4/8/4K3 w - - 0 3",
                "targetMove": "d3e4",
                "note": "♟ Lại bị Tốt chặn, ăn chéo nào!",
                "mascot": "Gặp địch chéo góc thì ăn ngay!"
            },
            {
                "fen": "4k3/8/3P4/8/4P3/8/8/4K3 w - - 0 4",
                "targetMove": "e4e5",
                "note": "♟ Tốt tiếp tục tiến lên!",
                "mascot": "Thẳng tiến không lùi bước!"
            }
        ]
    },
    {
        "id": "pawn-march",
        "category": "Chương 1: Quân Tốt",
        "title": "Tốt Hành Quân Về Đích",
        "steps": [
            {
                "fen": "4k3/8/8/8/8/8/P7/4K3 w - - 0 1",
                "targetMove": "a2a4",
                "note": "🏁 Nước đầu: đi <b>2 ô</b> lên a4",
                "mascot": "Nước đầu được tăng tốc 2 ô!"
            },
            {
                "fen": "3k4/8/8/8/P7/8/8/4K3 w - - 1 2",
                "targetMove": "a4a5",
                "note": "⬆️ Từ giờ chỉ <b>1 ô</b> mỗi lần: lên a5",
                "mascot": "Giờ chỉ đi 1 ô thôi nhé!"
            },
            {
                "fen": "4k3/8/8/P7/8/8/8/4K3 w - - 1 3",
                "targetMove": "a5a6",
                "note": "⬆️ Lên a6",
                "mascot": "Tiến lên, không quay đầu!"
            },
            {
                "fen": "3k4/8/P7/8/8/8/8/4K3 w - - 1 4",
                "targetMove": "a6a7",
                "note": "⬆️ Lên a7",
                "mascot": "Còn 1 ô nữa thôi!"
            },
            {
                "fen": "4k3/P7/8/8/8/8/8/4K3 w - - 1 5",
                "targetMove": "a7a8",
                "note": "👑 Về đích a8 → <b>phong cấp</b>!",
                "mascot": "Về đích, biến hình nào!"
            }
        ]
    },
    {
        "id": "rook",
        "category": "Chương 2: Quân Xe",
        "title": "Xe Tải Gom Rác (Đường Thẳng)",
        "steps": [
            {
                "fen": "7k/8/2p3p1/8/8/2R5/8/K7 w - - 0 1",
                "targetMove": "c3c6",
                "note": "♜ Xe đi <b>thẳng</b>: lên ăn Tốt c6",
                "mascot": "Lên số! Ăn Tốt c6 trước!"
            },
            {
                "fen": "6k1/8/2R3p1/8/8/8/8/K7 w - - 0 2",
                "targetMove": "c6g6",
                "note": "♜ Rẽ <b>ngang</b>: ăn Tốt g6",
                "mascot": "Bẻ lái sang phải, ăn g6!"
            },
            {
                "fen": "6k1/8/6R1/8/8/8/6p1/K7 w - - 0 3",
                "targetMove": "g6g2",
                "note": "♜ Chạy thẳng xuống ăn Tốt g2",
                "mascot": "Lùi xe về bắt Tốt g2!"
            },
            {
                "fen": "6k1/8/8/8/8/8/p5R1/K7 w - - 0 4",
                "targetMove": "g2a2",
                "note": "♜ Rẽ ngang trái ăn Tốt a2",
                "mascot": "Chạy ngang sang trái bắt Tốt a2!"
            },
            {
                "fen": "6k1/8/8/8/8/p7/R7/K7 w - - 0 5",
                "targetMove": "a2a3",
                "note": "♜ Xe tiến lên một bước ăn Tốt a3",
                "mascot": "Gom nốt rác cuối cùng!"
            }
        ]
    },
    {
        "id": "rook-block",
        "category": "Chương 2: Quân Xe",
        "title": "Xe Không Nhảy Qua Quân",
        "steps": [
            {
                "fen": "n3k3/8/8/8/P7/8/4K3/R6b w - - 0 1",
                "targetMove": "a1h1",
                "note": "♜ Xe <b>không nhảy</b> qua quân → ăn Tượng h1",
                "mascot": "Đường dọc bị chặn, chạy đường ngang!",
                "before": {
                    "arrows": [
                        [
                            "a1",
                            "a8",
                            "blocked"
                        ]
                    ],
                    "marks": [
                        [
                            "a4",
                            "x"
                        ]
                    ]
                }
            },
            {
                "fen": "n3k3/8/8/8/P7/8/4K3/7R w - - 0 2",
                "targetMove": "h1h8",
                "note": "♜ Giờ đường thẳng đã thông, phi lên h8!",
                "mascot": "Chạy thẳng tắp lên hàng cuối!"
            },
            {
                "fen": "n3k2R/8/8/8/P7/8/4K3/8 w - - 0 3",
                "targetMove": "h8a8",
                "note": "♜ Rẽ ngang bắt Mã a8",
                "mascot": "Vòng sang trái bắt Mã!"
            },
            {
                "fen": "R3k3/8/8/8/P7/8/4K3/8 w - - 0 4",
                "targetMove": "a8a4",
                "note": "♜ Lùi xe về a4 bắt Tốt",
                "mascot": "Lùi về a4 nào!"
            },
            {
                "fen": "4k3/8/8/8/R7/8/4K3/8 w - - 0 5",
                "targetMove": "a4e4",
                "note": "♜ Chiếu Vua e8 từ e4",
                "mascot": "Tới e4 để chiếu Vua!"
            }
        ]
    },
    {
        "id": "rook-route",
        "category": "Chương 2: Quân Xe",
        "title": "Xe Đi Đường Vòng",
        "steps": [
            {
                "fen": "7k/8/5p2/8/8/8/8/R5K1 w - - 0 1",
                "targetMove": "a1f1",
                "note": "♜ Rẽ góc vuông: sang <b>f1</b> trước",
                "mascot": "Rẽ sang cột f trước!",
                "before": {
                    "arrows": [
                        [
                            "a1",
                            "f6",
                            "blocked"
                        ]
                    ]
                }
            },
            {
                "fen": "6k1/8/5p2/8/8/8/8/5RK1 w - - 2 2",
                "targetMove": "f1f6",
                "note": "♜ Giờ chạy thẳng lên <b>f6</b>",
                "mascot": "Chạy thẳng lên ăn Tốt!"
            },
            {
                "fen": "6k1/8/5R2/8/6p1/8/8/6K1 w - - 0 3",
                "targetMove": "f6g6",
                "note": "♜ Rẽ ngang ăn Tốt g6",
                "mascot": "Vòng sang ăn g6!"
            },
            {
                "fen": "6k1/8/6R1/8/8/8/1p6/6K1 w - - 0 4",
                "targetMove": "g6b6",
                "note": "♜ Vòng sang trái cột b",
                "mascot": "Di chuyển qua cột b!"
            },
            {
                "fen": "6k1/8/1R6/8/8/8/1p6/6K1 w - - 0 5",
                "targetMove": "b6b2",
                "note": "♜ Chạy thẳng xuống ăn Tốt b2",
                "mascot": "Xuống bắt Tốt b2!"
            }
        ]
    },
    {
        "id": "bishop",
        "category": "Chương 3: Quân Tượng",
        "title": "Tượng Trượt Chéo",
        "steps": [
            {
                "fen": "7k/5p2/8/8/2B5/8/8/K7 w - - 0 1",
                "targetMove": "c4f7",
                "note": "♝ Tượng đi <b>chéo</b>: ăn Tốt f7",
                "mascot": "Tượng lướt chéo lên f7 bắt Tốt!"
            },
            {
                "fen": "7k/5B2/8/8/8/8/1p6/K7 w - - 0 2",
                "targetMove": "f7b3",
                "note": "♝ Tượng chéo về b3",
                "mascot": "Lùi lại theo đường chéo!"
            },
            {
                "fen": "7k/8/8/8/8/1B6/1p6/K7 w - - 0 3",
                "targetMove": "b3a2",
                "note": "♝ Ăn tiếp Tốt a2",
                "mascot": "Trượt chéo xuống a2!"
            },
            {
                "fen": "7k/8/8/8/8/8/B7/K5p1 w - - 0 4",
                "targetMove": "a2d5",
                "note": "♝ Tượng chạy chéo tới d5",
                "mascot": "Di chuyển đến d5!"
            },
            {
                "fen": "7k/8/8/3B4/8/8/8/K5p1 w - - 0 5",
                "targetMove": "d5g2",
                "note": "♝ Ăn Tốt g2 ở góc",
                "mascot": "Gom Tốt g2!"
            }
        ]
    },
    {
        "id": "bishop-color",
        "category": "Chương 3: Quân Tượng",
        "title": "Tượng Chỉ Đi Một Màu",
        "steps": [
            {
                "fen": "k7/8/7p/8/8/3p4/8/K1B5 w - - 0 1",
                "targetMove": "c1h6",
                "hideTarget": true,
                "note": "♝ Tượng ô đen chỉ đi <b>ô đen</b>",
                "mascot": "Tượng ô đen chỉ ăn được quân ở ô đen!",
                "before": {
                    "marks": [
                        [
                            "d3",
                            "x"
                        ]
                    ]
                }
            },
            {
                "fen": "k7/8/7B/8/8/8/4p3/K7 w - - 0 2",
                "targetMove": "h6f8",
                "note": "♝ Tượng lướt lên f8",
                "mascot": "Di chuyển lên f8!"
            },
            {
                "fen": "k4B2/8/8/8/8/8/4p3/K7 w - - 0 3",
                "targetMove": "f8b4",
                "note": "♝ Tượng chạy tới b4",
                "mascot": "Vòng về b4 nào!"
            },
            {
                "fen": "k7/8/8/8/1B6/8/4p3/K7 w - - 0 4",
                "targetMove": "b4d2",
                "note": "♝ Tượng tiến đến d2",
                "mascot": "Xuống d2 chờ thời!"
            },
            {
                "fen": "k7/8/8/8/8/8/3Bp3/K7 w - - 0 5",
                "targetMove": "d2e1",
                "note": "♝ Tượng chéo xuống e1",
                "mascot": "Hạ cánh an toàn tại e1!"
            }
        ]
    },
    {
        "id": "bishop-zigzag",
        "category": "Chương 3: Quân Tượng",
        "title": "Tượng Đi Zíc Zắc",
        "steps": [
            {
                "fen": "7k/8/8/2p5/8/8/8/2B3K1 w - - 0 1",
                "targetMove": "c1e3",
                "note": "♝ Không đi thẳng được → <b>chéo 2 lần</b>: lên e3",
                "mascot": "Chéo sang phải trước!",
                "before": {
                    "arrows": [
                        [
                            "c1",
                            "c5",
                            "blocked"
                        ]
                    ]
                }
            },
            {
                "fen": "6k1/8/8/2p5/8/4B3/8/6K1 w - - 2 2",
                "targetMove": "e3c5",
                "note": "♝ Chéo ngược lại: ăn Tốt c5",
                "mascot": "Chéo sang trái, ăn Tốt!"
            },
            {
                "fen": "6k1/8/8/2B5/8/8/4p3/6K1 w - - 0 3",
                "targetMove": "c5b4",
                "note": "♝ Lùi Tượng về b4",
                "mascot": "Lùi một bước để tiến hai bước!"
            },
            {
                "fen": "6k1/8/8/8/1B6/8/4p3/6K1 w - - 0 4",
                "targetMove": "b4e1",
                "note": "♝ Tượng lướt tới e1",
                "mascot": "Chạy tới e1!"
            },
            {
                "fen": "6k1/8/8/8/8/8/8/4B1K1 w - - 0 5",
                "targetMove": "e1f2",
                "note": "♝ Tượng tiến lên f2",
                "mascot": "Chiếm lĩnh f2!"
            }
        ]
    },
    {
        "id": "knight",
        "category": "Chương 4: Quân Mã",
        "title": "Mã Nhảy Chữ L",
        "steps": [
            {
                "fen": "7k/7p/8/3p4/8/2N5/8/K7 w - - 0 1",
                "targetMove": "c3d5",
                "note": "♞ Mã nhảy <b>chữ L</b>: ăn Tốt d5",
                "mascot": "Nhảy ngựa chữ L bắt Tốt!"
            },
            {
                "fen": "7k/7p/8/3N4/8/8/8/K7 w - - 0 2",
                "targetMove": "d5f6",
                "note": "♞ Nhảy tiếp tới f6",
                "mascot": "Một chữ L nữa tới f6!"
            },
            {
                "fen": "7k/5N1p/8/8/8/8/8/K7 w - - 0 3",
                "targetMove": "f6h7",
                "note": "♞ Bắt nốt Tốt h7",
                "mascot": "Gom Tốt h7 nào!"
            },
            {
                "fen": "7k/7N/8/8/8/8/6p1/K7 w - - 0 4",
                "targetMove": "h7f6",
                "note": "♞ Lùi Mã về f6",
                "mascot": "Lùi lại một nhịp!"
            },
            {
                "fen": "7k/8/5N2/8/8/8/6p1/K7 w - - 0 5",
                "targetMove": "f6e4",
                "note": "♞ Nhảy về e4",
                "mascot": "Về trung tâm e4!"
            }
        ]
    },
    {
        "id": "knight-jump",
        "category": "Chương 4: Quân Mã",
        "title": "Mã Nhảy Qua Rào",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "g1f3",
                "note": "♞ Mã <b>nhảy qua</b> hàng Tốt: lên f3",
                "mascot": "Hàng rào Tốt không cản được Mã!"
            },
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 1 1",
                "targetMove": "b8c6",
                "note": "♞ Mã đen cũng nhảy ra c6",
                "mascot": "Mã đen cũng xuất chiến!"
            },
            {
                "fen": "r1bqkbnr/pppppppp/2n5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2",
                "targetMove": "b1c3",
                "note": "♞ Mã trắng b1 lên c3",
                "mascot": "Thêm một chú ngựa nữa!"
            },
            {
                "fen": "r1bqkbnr/pppppppp/2n5/8/8/2N2N2/PPPPPPPP/R1BQKB1R b KQkq - 3 2",
                "targetMove": "g8f6",
                "note": "♞ Mã đen ra f6",
                "mascot": "Cả 4 Mã đều đã ra sân!"
            },
            {
                "fen": "r1bqkb1r/pppppppp/2n2n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq - 4 3",
                "targetMove": "f3e5",
                "note": "♞ Mã trắng f3 nhảy tới e5",
                "mascot": "Xung phong vào trung tâm!"
            }
        ]
    },
    {
        "id": "knight-chain",
        "category": "Chương 4: Quân Mã",
        "title": "Mã Ăn Liên Hoàn",
        "steps": [
            {
                "fen": "k7/7p/5p2/3p4/8/2N5/8/4K3 w - - 0 1",
                "targetMove": "c3d5",
                "note": "♞ Chữ L số 1: ăn d5",
                "mascot": "Chữ L thứ nhất!"
            },
            {
                "fen": "1k6/7p/5p2/3N4/8/8/8/4K3 w - - 1 2",
                "targetMove": "d5f6",
                "note": "♞ Chữ L số 2: ăn f6",
                "mascot": "Chữ L thứ hai!"
            },
            {
                "fen": "k7/7p/5N2/8/8/8/8/4K3 w - - 1 3",
                "targetMove": "f6h7",
                "note": "♞ Chữ L số 3: ăn h7",
                "mascot": "Ăn sạch cả 3 Tốt!"
            },
            {
                "fen": "k7/7N/8/8/6p1/8/8/4K3 w - - 0 4",
                "targetMove": "h7f6",
                "note": "♞ Lùi Mã về f6 chuẩn bị bắt g4",
                "mascot": "Chuyển hướng mục tiêu!"
            },
            {
                "fen": "k7/8/5N2/8/6p1/8/8/4K3 w - - 0 5",
                "targetMove": "f6g4",
                "note": "♞ Chữ L số 4: ăn g4",
                "mascot": "Kết thúc chuỗi ăn liên hoàn!"
            }
        ]
    },
    {
        "id": "queen",
        "category": "Chương 5: Quân Hậu",
        "title": "Siêu Xe Hậu",
        "steps": [
            {
                "fen": "7k/7p/8/3r4/8/8/Q7/4K3 w - - 0 1",
                "targetMove": "a2d5",
                "note": "♛ Hậu đi <b>thẳng + chéo</b>: ăn Xe d5",
                "mascot": "Hậu vút theo đường chéo ăn Xe!"
            },
            {
                "fen": "7k/7p/8/3Q4/8/8/8/4K3 w - - 0 2",
                "targetMove": "d5d8",
                "note": "♛ Chạy thẳng lên d8 chiếu Vua",
                "mascot": "Phi thẳng lên d8 chiếu!"
            },
            {
                "fen": "3Q3k/7p/8/8/8/8/8/4K3 b - - 0 2",
                "targetMove": "h8g7",
                "note": "♛ Vua đen phải chạy",
                "mascot": "Vua chạy thoát thân!"
            },
            {
                "fen": "3Q4/6kp/8/8/8/8/8/4K3 w - - 0 3",
                "targetMove": "d8e7",
                "note": "♛ Hậu lướt sang e7 chiếu tiếp",
                "mascot": "Hậu chiếu liên tục!"
            },
            {
                "fen": "4Q3/6kp/8/8/8/8/8/4K3 b - - 0 3",
                "targetMove": "g7h6",
                "note": "♛ Vua lùi về h6 an toàn",
                "mascot": "Vua lẩn trốn!"
            }
        ]
    },
    {
        "id": "queen-lines",
        "category": "Chương 5: Quân Hậu",
        "title": "Hậu Đi Thẳng Và Chéo",
        "steps": [
            {
                "fen": "7k/3r4/8/8/b7/8/8/3QK3 w - - 0 1",
                "targetMove": "d1d7",
                "note": "♛ Đi <b>thẳng</b> như Xe: ăn Xe d7",
                "mascot": "Chạy thẳng như Xe!"
            },
            {
                "fen": "6k1/3Q4/8/8/b7/8/8/4K3 w - - 1 2",
                "targetMove": "d7a4",
                "note": "♛ Đi <b>chéo</b> như Tượng: ăn Tượng a4",
                "mascot": "Chạy chéo như Tượng!"
            },
            {
                "fen": "6k1/8/8/8/Q7/8/6p1/4K3 w - - 0 3",
                "targetMove": "a4g4",
                "note": "♛ Đi ngang ăn Tốt g4 (nếu có) hoặc chiếu, ở đây ta chiếu ngang",
                "mascot": "Lướt ngang như Xe!"
            },
            {
                "fen": "6k1/8/8/8/6Q1/8/6p1/4K3 b - - 0 3",
                "targetMove": "g8f8",
                "note": "♛ Vua chạy f8",
                "mascot": "Chạy đi!"
            },
            {
                "fen": "5k2/8/8/8/6Q1/8/6p1/4K3 w - - 0 4",
                "targetMove": "g4g2",
                "note": "♛ Hậu lao xuống ăn Tốt g2",
                "mascot": "Bắt Tốt g2 gọn gàng!"
            }
        ]
    },
    {
        "id": "queen-safe",
        "category": "Chương 5: Quân Hậu",
        "title": "Hậu Tránh Bẫy",
        "steps": [
            {
                "fen": "4k3/3p4/8/8/n7/8/8/3Q2K1 w - - 0 1",
                "targetMove": "d1a4",
                "hideTarget": true,
                "note": "♛ Chỉ ăn quân <b>không ai bảo vệ</b>!",
                "mascot": "Ăn quân không ai bảo vệ mới an toàn!",
                "before": {
                    "arrows": [
                        [
                            "e8",
                            "d7",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "d7",
                            "guard"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/3p4/8/8/Q7/8/8/6K1 w - - 0 2",
                "targetMove": "a4c6",
                "note": "♛ Đưa Hậu lên c6 an toàn",
                "mascot": "Chọn vị trí đắc địa c6!"
            },
            {
                "fen": "4k3/3p4/2Q5/8/8/8/8/6K1 w - - 0 3",
                "targetMove": "c6c4",
                "note": "♛ Hậu lùi về c4",
                "mascot": "Lùi một chút để quan sát!"
            },
            {
                "fen": "4k3/3p4/8/8/2Q5/8/8/6K1 w - - 0 4",
                "targetMove": "c4c5",
                "note": "♛ Tiến Hậu lên c5",
                "mascot": "Kiểm soát trung tâm c5!"
            },
            {
                "fen": "4k3/3p4/8/2Q5/8/8/8/6K1 w - - 0 5",
                "targetMove": "c5c7",
                "note": "♛ Hậu tới c7 chiếu Vua",
                "mascot": "Áp sát Vua địch!"
            }
        ]
    },
    {
        "id": "king",
        "category": "Chương 6: Quân Vua",
        "title": "Vua Đi Từng Bước",
        "steps": [
            {
                "fen": "4k3/8/8/8/8/3pK3/8/8 w - - 0 1",
                "targetMove": "e3d3",
                "note": "♚ Vua đi <b>1 ô</b> mọi hướng: ăn Tốt d3",
                "mascot": "Vua bước 1 ô, ăn Tốt d3!"
            },
            {
                "fen": "4k3/8/8/8/8/3K4/3p4/8 w - - 0 1",
                "targetMove": "d3d2",
                "note": "♚ Vua lùi lại ăn Tốt d2",
                "mascot": "Lùi một bước ăn Tốt!"
            },
            {
                "fen": "4k3/8/8/8/8/8/3K1p2/8 w - - 0 1",
                "targetMove": "d2e2",
                "note": "♚ Vua sang ngang e2",
                "mascot": "Bước sang phải nào!"
            },
            {
                "fen": "4k3/8/8/8/8/8/4K1p1/8 w - - 0 1",
                "targetMove": "e2f2",
                "note": "♚ Vua tiến tới f2",
                "mascot": "Đuổi theo Tốt!"
            },
            {
                "fen": "4k3/8/8/8/8/8/5Kp1/8 w - - 0 1",
                "targetMove": "f2g2",
                "note": "♚ Vua ăn Tốt g2",
                "mascot": "Bắt được Tốt rồi!"
            }
        ]
    },
    {
        "id": "king-safe",
        "category": "Chương 6: Quân Vua",
        "title": "Vua Không Vào Ô Nguy Hiểm",
        "steps": [
            {
                "fen": "4k3/8/8/8/7n/3pKp2/8/8 w - - 0 1",
                "targetMove": "e3d3",
                "note": "♚ Vua <b>không vào ô nguy hiểm</b> ❌",
                "mascot": "Ô nguy hiểm thì Vua không bước vào!",
                "before": {
                    "danger": true,
                    "arrows": [
                        [
                            "h4",
                            "f3",
                            "attack"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/8/8/8/7n/3K1p2/8/8 w - - 0 1",
                "targetMove": "d3c3",
                "note": "♚ Tránh Mã h4, đi c3",
                "mascot": "Tránh xa tầm ngắm của Mã!"
            },
            {
                "fen": "4k3/8/8/8/7n/2K2p2/8/8 w - - 0 1",
                "targetMove": "c3b3",
                "note": "♚ Lùi ra xa hơn ở b3",
                "mascot": "An toàn là trên hết!"
            },
            {
                "fen": "4k3/8/8/8/7n/1K3p2/8/8 w - - 0 1",
                "targetMove": "b3a3",
                "note": "♚ Tiếp tục lùi về a3",
                "mascot": "Lùi thêm chút nữa!"
            },
            {
                "fen": "4k3/8/8/8/7n/K4p2/8/8 w - - 0 1",
                "targetMove": "a3a2",
                "note": "♚ Đến a2",
                "mascot": "Giờ thì hoàn toàn an toàn!"
            }
        ]
    },
    {
        "id": "king-walk",
        "category": "Chương 6: Quân Vua",
        "title": "Vua Đi Dạo Từng Bước",
        "steps": [
            {
                "fen": "k7/8/8/8/4p3/8/8/4K3 w - - 0 1",
                "targetMove": "e1e2",
                "note": "♚ Từng bước một: lên e2",
                "mascot": "Bước thứ nhất!"
            },
            {
                "fen": "1k6/8/8/8/4p3/8/4K3/8 w - - 2 2",
                "targetMove": "e2e3",
                "note": "♚ Lên e3",
                "mascot": "Bước thứ hai!"
            },
            {
                "fen": "k7/8/8/8/4p3/4K3/8/8 w - - 4 3",
                "targetMove": "e3d4",
                "note": "♚ Lên d4",
                "mascot": "Sắp tới nơi rồi!"
            },
            {
                "fen": "1k6/8/8/8/3Kp3/8/8/8 w - - 6 4",
                "targetMove": "d4e4",
                "note": "♚ Ăn Tốt e4!",
                "mascot": "Tới nơi rồi, ăn Tốt!"
            },
            {
                "fen": "k7/8/8/8/4K3/8/8/8 w - - 8 5",
                "targetMove": "e4d5",
                "note": "♚ Bước tiếp lên d5",
                "mascot": "Vua tiếp tục hành quân!"
            }
        ]
    },
    {
        "id": "value",
        "category": "Chương 7: Tổng Hợp Các Quân",
        "title": "Quân Nào Đáng Giá Hơn?",
        "steps": [
            {
                "fen": "7k/3q4/8/8/8/8/8/1n1R2K1 w - - 0 1",
                "targetMove": "d1d7",
                "hideTarget": true,
                "note": "💰 Ăn quân <b>giá trị nhất</b>: Hậu d7!",
                "mascot": "Hậu 9 điểm giá trị nhất!"
            },
            {
                "fen": "7k/8/8/8/8/8/8/1n1R2K1 w - - 0 1",
                "targetMove": "d1b1",
                "hideTarget": true,
                "note": "💰 Tiếp theo ăn Mã b1",
                "mascot": "Mã 3 điểm!"
            },
            {
                "fen": "7k/8/2b5/8/8/8/8/1R4K1 w - - 0 1",
                "targetMove": "b1c1",
                "hideTarget": true,
                "note": "💰 Đuổi Tượng c6",
                "mascot": "Đuổi theo Tượng!"
            },
            {
                "fen": "7k/8/8/2b5/8/8/8/2R3K1 w - - 0 1",
                "targetMove": "c1c5",
                "hideTarget": true,
                "note": "💰 Ăn Tượng c5!",
                "mascot": "Tượng cũng 3 điểm!"
            },
            {
                "fen": "7k/8/8/2R5/8/8/8/6K1 w - - 0 1",
                "targetMove": "c5c8",
                "hideTarget": true,
                "note": "💰 Lên c8 chiếu Vua",
                "mascot": "Chiếu Vua kết thúc bài!"
            }
        ]
    },
    {
        "id": "which-piece",
        "category": "Chương 7: Tổng Hợp Các Quân",
        "title": "Quân Nào Ăn Được Hậu?",
        "steps": [
            {
                "fen": "7k/8/8/3q4/5N2/8/8/R1B3K1 w - - 0 1",
                "targetMove": "f4d5",
                "hideTarget": true,
                "note": "🤔 Quân nào <b>với tới</b> Hậu d5? Mã f4!",
                "mascot": "Chỉ Mã mới nhảy tới được!"
            },
            {
                "fen": "7k/8/8/3N4/8/8/8/R1B3K1 w - - 0 1",
                "targetMove": "d5c7",
                "hideTarget": true,
                "note": "🤔 Mã đi tiếp c7",
                "mascot": "Mã nhảy tiếp!"
            },
            {
                "fen": "7k/2N5/8/8/8/8/8/R1B3K1 w - - 0 1",
                "targetMove": "c7a6",
                "hideTarget": true,
                "note": "🤔 Mã xuống a6",
                "mascot": "Nhảy sang a6!"
            },
            {
                "fen": "7k/8/N7/8/8/8/8/R1B3K1 w - - 0 1",
                "targetMove": "a6b4",
                "hideTarget": true,
                "note": "🤔 Mã về b4",
                "mascot": "Chữ L lùi về b4!"
            },
            {
                "fen": "7k/8/8/8/1N6/8/8/R1B3K1 w - - 0 1",
                "targetMove": "b4c2",
                "hideTarget": true,
                "note": "🤔 Mã về c2",
                "mascot": "Nhảy thêm bước nữa!"
            }
        ]
    },
    {
        "id": "castle",
        "category": "Chương 8: Nước Đi Đặc Biệt",
        "title": "Nhập Thành Bảo Vệ Vua",
        "steps": [
            {
                "fen": "4k3/8/8/8/8/8/8/4K2R w K - 0 1",
                "targetMove": "e1g1",
                "note": "🏰 Nhập thành: bấm Vua → chọn <b>g1</b>",
                "mascot": "Nhập thành cánh Vua!"
            },
            {
                "fen": "4k3/8/8/8/8/8/8/5RK1 w - - 0 2",
                "targetMove": "f1e1",
                "note": "🏰 Đưa Xe ra trung tâm e1",
                "mascot": "Xe ra giữa kiểm soát!"
            },
            {
                "fen": "4k3/8/8/8/8/8/8/4R1K1 w - - 0 3",
                "targetMove": "e1e2",
                "note": "🏰 Xe lên e2",
                "mascot": "Tiến lên 1 bước!"
            },
            {
                "fen": "4k3/8/8/8/8/8/8/4R1K1 w - - 0 4",
                "targetMove": "e2e3",
                "note": "🏰 Xe lên e3",
                "mascot": "Dần lên cao!"
            },
            {
                "fen": "4k3/8/8/8/8/8/8/4R1K1 w - - 0 5",
                "targetMove": "e3e4",
                "note": "🏰 Xe lên e4",
                "mascot": "Kiểm soát trung tâm!"
            }
        ]
    },
    {
        "id": "castle-long",
        "category": "Chương 8: Nước Đi Đặc Biệt",
        "title": "Nhập Thành Cánh Hậu",
        "steps": [
            {
                "fen": "4k3/8/8/8/8/8/8/R3K3 w Q - 0 1",
                "targetMove": "e1c1",
                "note": "🏰 Nhập thành <b>cánh Hậu</b>: Vua e1 → c1",
                "mascot": "Vua đi 2 ô sang trái, Xe tự nhảy qua!"
            },
            {
                "fen": "4k3/8/8/8/8/8/8/2KR4 w - - 0 2",
                "targetMove": "d1e1",
                "note": "🏰 Xe qua e1",
                "mascot": "Kiểm soát cột e!"
            },
            {
                "fen": "4k3/8/8/8/8/8/8/2K1R3 w - - 0 3",
                "targetMove": "e1e2",
                "note": "🏰 Xe lên e2",
                "mascot": "Tiến lên nào!"
            },
            {
                "fen": "4k3/8/8/8/8/8/8/2K1R3 w - - 0 4",
                "targetMove": "e2e3",
                "note": "🏰 Xe lên e3",
                "mascot": "Kiểm soát thêm!"
            },
            {
                "fen": "4k3/8/8/8/8/8/8/2K1R3 w - - 0 5",
                "targetMove": "e3e4",
                "note": "🏰 Xe lên e4",
                "mascot": "Tuyệt vời!"
            }
        ]
    },
    {
        "id": "promote",
        "category": "Chương 8: Nước Đi Đặc Biệt",
        "title": "Phong Cấp Biến Hình",
        "steps": [
            {
                "fen": "7k/4P2p/8/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "e7e8q",
                "note": "👑 Tốt về hàng cuối → <b>biến hình Hậu</b>!",
                "mascot": "Thăng cấp thành Hậu!"
            },
            {
                "fen": "4Q2k/7p/8/8/8/8/8/6K1 w - - 0 2",
                "targetMove": "e8e5",
                "note": "👑 Hậu lùi về e5",
                "mascot": "Hậu mới xuất hiện!"
            },
            {
                "fen": "7k/7p/8/4Q3/8/8/8/6K1 w - - 0 3",
                "targetMove": "e5e4",
                "note": "👑 Hậu xuống e4",
                "mascot": "Di chuyển nhẹ nhàng!"
            },
            {
                "fen": "7k/7p/8/8/4Q3/8/8/6K1 w - - 0 4",
                "targetMove": "e4e3",
                "note": "👑 Hậu xuống e3",
                "mascot": "Từng bước lui về!"
            },
            {
                "fen": "7k/7p/8/8/8/4Q3/8/6K1 w - - 0 5",
                "targetMove": "e3e2",
                "note": "👑 Hậu lùi tiếp e2",
                "mascot": "Về gần Vua!"
            }
        ]
    },
    {
        "id": "enpassant",
        "category": "Chương 8: Nước Đi Đặc Biệt",
        "title": "Bắt Tốt Qua Đường",
        "steps": [
            {
                "fen": "4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 2",
                "targetMove": "e5d6",
                "note": "⚡ Tốt đen vừa đi 2 ô → ăn <b>qua đường</b> sang d6!",
                "mascot": "Bắt Tốt qua đường!",
                "before": {
                    "arrows": [
                        [
                            "d7",
                            "d5",
                            "history"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/8/3P4/8/8/8/8/4K3 w - - 0 3",
                "targetMove": "d6d7",
                "note": "⚡ Tiến lên d7",
                "mascot": "Tiến sát đích!"
            },
            {
                "fen": "4k3/3P4/8/8/8/8/8/4K3 w - - 0 4",
                "targetMove": "d7d8q",
                "note": "⚡ Phong cấp",
                "mascot": "Biến thành Hậu!"
            },
            {
                "fen": "3Qk3/8/8/8/8/8/8/4K3 w - - 0 5",
                "targetMove": "d8d5",
                "note": "⚡ Hậu xuống d5",
                "mascot": "Lùi lại an toàn!"
            },
            {
                "fen": "4k3/8/8/3Q4/8/8/8/4K3 w - - 0 6",
                "targetMove": "d5d4",
                "note": "⚡ Hậu xuống d4",
                "mascot": "Quá tuyệt!"
            }
        ]
    },
    {
        "id": "fork",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Đòn Chĩa Đôi (Fork)",
        "steps": [
            {
                "fen": "4q1k1/7p/8/8/4N3/8/8/6K1 w - - 0 1",
                "targetMove": "e4f6",
                "hideTarget": true,
                "note": "♞ Tìm ô Mã dọa <b>cả Vua lẫn Hậu</b>!",
                "mascot": "Nhảy Mã f6 dọa 1 mũi tên trúng 2 đích!",
                "after": {
                    "arrows": [
                        [
                            "f6",
                            "g8",
                            "attack"
                        ],
                        [
                            "f6",
                            "e8",
                            "attack"
                        ]
                    ]
                }
            },
            {
                "fen": "4q1k1/7p/5N2/8/8/8/8/6K1 b - - 0 1",
                "targetMove": "g8f7",
                "note": "♞ Đen chạy Vua",
                "mascot": "Vua Đen bỏ chạy!"
            },
            {
                "fen": "4q3/5k1p/5N2/8/8/8/8/6K1 w - - 0 2",
                "targetMove": "f6e8",
                "note": "♞ Mã ăn Hậu",
                "mascot": "Ăn Hậu thôi!"
            },
            {
                "fen": "4N3/5k1p/8/8/8/8/8/6K1 w - - 0 3",
                "targetMove": "e8d6",
                "note": "♞ Mã về d6",
                "mascot": "Rút về an toàn!"
            },
            {
                "fen": "8/5k1p/3N4/8/8/8/8/6K1 w - - 0 4",
                "targetMove": "d6c4",
                "note": "♞ Mã lùi c4",
                "mascot": "Chữ L lùi về!"
            }
        ]
    },
    {
        "id": "queen-fork",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Hậu Chĩa Đôi",
        "steps": [
            {
                "fen": "r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1",
                "targetMove": "d1d5",
                "hideTarget": true,
                "note": "♛ Tìm ô Hậu vừa <b>chiếu Vua</b> vừa <b>dọa Xe</b>!",
                "mascot": "Một nước đi, hai mục tiêu!",
                "after": {
                    "arrows": [
                        [
                            "d5",
                            "g8",
                            "attack"
                        ],
                        [
                            "d5",
                            "a8",
                            "attack"
                        ]
                    ]
                }
            },
            {
                "fen": "r5k1/6pp/8/3Q4/8/8/5PPP/6K1 b - - 0 1",
                "targetMove": "g8f8",
                "note": "♛ Vua chạy",
                "mascot": "Vua đen lẩn trốn!"
            },
            {
                "fen": "r4k1/6pp/8/3Q4/8/8/5PPP/6K1 w - - 0 2",
                "targetMove": "d5a8",
                "note": "♛ Ăn Xe!",
                "mascot": "Thu lợi Xe a8!"
            },
            {
                "fen": "Q4k1/6pp/8/8/8/8/5PPP/6K1 w - - 0 3",
                "targetMove": "a8a5",
                "note": "♛ Rút về a5",
                "mascot": "An toàn!"
            },
            {
                "fen": "5k1/6pp/8/Q7/8/8/5PPP/6K1 w - - 0 4",
                "targetMove": "a5a4",
                "note": "♛ Rút về a4",
                "mascot": "Kiểm soát tiếp!"
            }
        ]
    },
    {
        "id": "pawn-fork",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Tốt Chĩa Đôi",
        "steps": [
            {
                "fen": "4k3/8/2n1n3/8/3P4/8/8/4K3 w - - 0 1",
                "targetMove": "d4d5",
                "hideTarget": true,
                "note": "♟ Tốt nhỏ cũng <b>chĩa đôi</b> được hai Mã!",
                "mascot": "Tốt 1 điểm dọa 2 Mã 6 điểm!",
                "after": {
                    "arrows": [
                        [
                            "d5",
                            "c6",
                            "attack"
                        ],
                        [
                            "d5",
                            "e6",
                            "attack"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/8/2n1n3/3P4/8/8/8/4K3 b - - 0 1",
                "targetMove": "c6b8",
                "note": "♟ Mã c6 bỏ chạy",
                "mascot": "Mã phải chạy!"
            },
            {
                "fen": "1n2k3/8/4n3/3P4/8/8/8/4K3 w - - 0 2",
                "targetMove": "d5e6",
                "note": "♟ Ăn Mã e6",
                "mascot": "Lấy 3 điểm!"
            },
            {
                "fen": "1n2k3/8/4P3/8/8/8/8/4K3 w - - 0 3",
                "targetMove": "e6e7",
                "note": "♟ Tiến e7",
                "mascot": "Tốt tiếp tục tiến!"
            },
            {
                "fen": "1n2k3/4P3/8/8/8/8/8/4K3 w - - 0 4",
                "targetMove": "e7e8q",
                "note": "♟ Phong cấp",
                "mascot": "Biến Hậu!"
            }
        ]
    },
    {
        "id": "pin",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Đòn Giằng (Pin)",
        "steps": [
            {
                "fen": "4k3/4q2p/8/8/8/8/8/R5K1 w - - 0 1",
                "targetMove": "a1e1",
                "note": "📌 Ghim Hậu vào Vua: Xe sang <b>cột e</b>",
                "mascot": "Kéo Xe sang e1 trói chặt Hậu đen!",
                "after": {
                    "arrows": [
                        [
                            "e1",
                            "e8",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "e7",
                            "x"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/4q2p/8/8/8/8/8/4R1K1 b - - 0 1",
                "targetMove": "h7h6",
                "note": "📌 Đen đi Tốt",
                "mascot": "Hậu Đen không nhúc nhích được!"
            },
            {
                "fen": "4k3/4q2p/7p/8/8/8/8/4R1K1 w - - 0 2",
                "targetMove": "e1e7",
                "note": "📌 Ăn Hậu",
                "mascot": "Xe đổi Hậu!"
            },
            {
                "fen": "4k3/4R2p/7p/8/8/8/8/6K1 b - - 0 2",
                "targetMove": "e8e7",
                "note": "📌 Vua ăn lại",
                "mascot": "Trao đổi có lợi!"
            },
            {
                "fen": "4k3/4R2p/7p/8/8/8/8/6K1 w - - 0 3",
                "targetMove": "g1f2",
                "note": "📌 Vua Trắng tiến lên",
                "mascot": "Chuẩn bị tàn cuộc!"
            }
        ]
    },
    {
        "id": "skewer",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Đòn Xiên Que (Skewer)",
        "steps": [
            {
                "fen": "8/8/8/8/3k3q/8/R7/1K6 w - - 0 1",
                "targetMove": "a2a4",
                "note": "🍢 Chiếu Vua để lộ <b>Hậu phía sau</b>",
                "mascot": "Chiếu Vua trước, Hậu ở sau sẽ lộ ra!",
                "after": {
                    "arrows": [
                        [
                            "a4",
                            "d4",
                            "attack"
                        ],
                        [
                            "d4",
                            "h4",
                            "blocked"
                        ]
                    ]
                }
            },
            {
                "fen": "8/8/8/3k4/R6q/8/8/1K6 b - - 0 2",
                "targetMove": "d5c5",
                "note": "🍢 Vua chạy",
                "mascot": "Vua tránh ra!"
            },
            {
                "fen": "8/8/8/2k5/R6q/8/8/1K6 w - - 0 3",
                "targetMove": "a4h4",
                "note": "🍢 Ăn Hậu h4!",
                "mascot": "Đường thông rồi, ăn Hậu h4!"
            },
            {
                "fen": "8/8/8/2k5/7R/8/8/1K6 w - - 0 4",
                "targetMove": "h4g4",
                "note": "🍢 Xe lùi g4",
                "mascot": "Lùi về an toàn!"
            },
            {
                "fen": "8/8/8/2k5/6R1/8/8/1K6 w - - 0 5",
                "targetMove": "g4f4",
                "note": "🍢 Xe qua f4",
                "mascot": "Kiểm soát hàng 4!"
            }
        ]
    },
    {
        "id": "discovered",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Đòn Phát Hiện",
        "steps": [
            {
                "fen": "4k3/8/3q4/8/4N3/8/8/4R1K1 w - - 0 1",
                "targetMove": "e4d6",
                "note": "♞ Mã nhảy đi → <b>Xe lộ ra chiếu</b>! Ăn Hậu",
                "mascot": "Mã nhảy ăn Hậu, Xe phía sau chiếu Vua!",
                "before": {
                    "arrows": [
                        [
                            "e1",
                            "e8",
                            "blocked"
                        ]
                    ]
                },
                "after": {
                    "arrows": [
                        [
                            "e1",
                            "e8",
                            "attack"
                        ],
                        [
                            "d6",
                            "e8",
                            "attack"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/8/3N4/8/8/8/8/4R1K1 b - - 0 1",
                "targetMove": "e8d7",
                "note": "♞ Vua Đen bỏ chạy",
                "mascot": "Vua bị chiếu phải chạy!"
            },
            {
                "fen": "8/3k4/3N4/8/8/8/8/4R1K1 w - - 0 2",
                "targetMove": "e1d1",
                "note": "♞ Xe sang d1",
                "mascot": "Xe sang hỗ trợ Mã!"
            },
            {
                "fen": "8/3k4/3N4/8/8/8/8/3R2K1 w - - 0 3",
                "targetMove": "d6c4",
                "note": "♞ Mã lùi c4",
                "mascot": "Mã rút về!"
            },
            {
                "fen": "8/3k4/8/8/2N5/8/8/3R2K1 w - - 0 4",
                "targetMove": "d1e1",
                "note": "♞ Xe về e1",
                "mascot": "Bài học kết thúc!"
            }
        ]
    },
    {
        "id": "double-check",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Chiếu Đôi Kết Liễu",
        "steps": [
            {
                "fen": "3qkb2/3p1p2/8/8/4N3/8/8/4R1K1 w - - 0 1",
                "targetMove": "e4d6",
                "goal": "mate",
                "note": "⚡ <b>Chiếu đôi</b>: Mã và Xe cùng chiếu!",
                "mascot": "Mã nhảy đi, Xe phía sau cũng chiếu!",
                "before": {
                    "arrows": [
                        [
                            "e1",
                            "e8",
                            "blocked"
                        ]
                    ]
                }
            },
            {
                "fen": "r1bqk2r/pppp1ppp/2n5/2b1p3/2B1P1n1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 6",
                "targetMove": "c4f7",
                "goal": "mate",
                "note": "⚡ <b>Chiếu đôi</b> bằng Tượng và Hậu (ví dụ khác)",
                "mascot": "Tượng ăn f7 chiếu!"
            },
            {
                "fen": "k7/p1p5/1p6/8/2N5/8/8/4R1K1 w - - 0 1",
                "targetMove": "c4b6",
                "goal": "mate",
                "note": "⚡ Mã nhảy chiếu, Xe mở đường!",
                "mascot": "Chiếu đôi!"
            },
            {
                "fen": "r3k2r/pbp2ppp/1pn5/1B1p4/3P4/2N2N2/PPP2PPP/R2QK2R w KQkq - 0 1",
                "targetMove": "b5c6",
                "note": "⚡ Đòn mở!",
                "mascot": "Chiếu đôi!"
            },
            {
                "fen": "4k3/8/8/8/4N3/8/8/4R1K1 w - - 0 1",
                "targetMove": "e4f6",
                "note": "⚡ Chiếu đôi bằng Mã và Xe!",
                "mascot": "Hai quân cùng chiếu!"
            }
        ]
    },
    {
        "id": "free-piece",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Ăn Quân Bị Bỏ Rơi",
        "steps": [
            {
                "fen": "4k3/8/3p4/4p3/7b/5N2/8/3K4 w - - 0 1",
                "targetMove": "f3h4",
                "hideTarget": true,
                "note": "🎁 Chọn quân <b>không ai bảo vệ</b>!",
                "mascot": "Tượng không ai bảo vệ!",
                "before": {
                    "marks": [
                        [
                            "e5",
                            "guard"
                        ]
                    ]
                }
            },
            {
                "fen": "3r2k1/1p3ppp/p7/8/3N4/8/PP3PPP/4R1K1 w - - 0 1",
                "targetMove": "e1e8",
                "note": "🎁 Xe không ai bảo vệ!",
                "mascot": "Ăn quân miễn phí!"
            },
            {
                "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 5",
                "targetMove": "f3e5",
                "note": "🎁 Mã ăn Tốt miễn phí!",
                "mascot": "Tốt e5 không ai bảo vệ!"
            },
            {
                "fen": "8/8/4k3/8/1b6/2R5/8/4K3 w - - 0 1",
                "targetMove": "c3b3",
                "note": "🎁 Dọa ăn Tượng!",
                "mascot": "Tượng b4!"
            },
            {
                "fen": "6k1/8/3p4/4p3/7b/5N2/8/3K4 w - - 0 1",
                "targetMove": "f3h4",
                "note": "🎁 Ăn Tượng!",
                "mascot": "Ngon quá!"
            }
        ]
    },
    {
        "id": "remove-defender",
        "category": "Chương 9: Đòn Tấn Công",
        "title": "Tiêu Diệt Quân Bảo Vệ",
        "steps": [
            {
                "fen": "7k/3r2p1/1N3n2/6B1/8/8/8/6K1 w - - 0 1",
                "targetMove": "g5f6",
                "note": "🛡 <b>Diệt</b> Mã bảo vệ trước!",
                "mascot": "Tượng ăn Mã bảo vệ!"
            },
            {
                "fen": "7k/3r4/1N3p2/8/8/8/8/6K1 w - - 0 2",
                "targetMove": "b6d7",
                "note": "🎯 Mã ăn Xe!",
                "mascot": "Xe mồ côi rồi!"
            },
            {
                "fen": "8/1p1k4/p1n5/3R4/8/8/1B6/6K1 w - - 0 1",
                "targetMove": "b2n6",
                "note": "🛡 Diệt quân canh phòng!",
                "mascot": "Bỏ bảo vệ!"
            },
            {
                "fen": "8/1p1k4/p1p5/3R4/8/8/8/6K1 w - - 0 2",
                "targetMove": "d5c5",
                "note": "🎯 Đánh thẳng!",
                "mascot": "Ăn!"
            },
            {
                "fen": "8/3q2k1/5n2/4R3/8/8/8/6K1 w - - 0 1",
                "targetMove": "e5f6",
                "note": "🛡 Tiêu diệt Mã!",
                "mascot": "Ăn Mã!"
            }
        ]
    },
    {
        "id": "escape",
        "category": "Chương 10: Phòng Thủ & Thoát Hiểm",
        "title": "Né Đòn Chiếu Của Vua",
        "steps": [
            {
                "fen": "4R1k1/5pp1/8/8/8/8/8/4K3 b - - 0 1",
                "targetMove": "g8h7",
                "note": "🏃 Vua bị chiếu! Chạy tới ô <b>an toàn</b>"
            },
            {
                "fen": "6k1/R7/8/8/8/8/8/4K3 b - - 0 1",
                "targetMove": "g8f8",
                "note": "🏃 Chạy ngang!"
            },
            {
                "fen": "8/4R1k1/8/8/8/8/8/4K3 b - - 0 1",
                "targetMove": "g7f6",
                "note": "🏃 Chạy dọc!"
            },
            {
                "fen": "8/8/4R1k1/8/8/8/8/4K3 b - - 0 1",
                "targetMove": "g6f5",
                "note": "🏃 Chạy chéo!"
            },
            {
                "fen": "8/8/8/4R1k1/8/8/8/4K3 b - - 0 1",
                "targetMove": "g5f4",
                "note": "🏃 Thoát hiểm an toàn!"
            }
        ]
    },
    {
        "id": "block",
        "category": "Chương 10: Phòng Thủ & Thoát Hiểm",
        "title": "Dùng Quân Che Chắn",
        "steps": [
            {
                "fen": "6k1/5ppp/8/1B6/8/8/5PPP/r5K1 w - - 0 1",
                "targetMove": "b5f1",
                "note": "🛡 Dùng quân <b>chắn</b> đường chiếu"
            },
            {
                "fen": "6k1/5ppp/4N3/8/8/8/5PPP/r5K1 w - - 0 1",
                "targetMove": "e6f8",
                "note": "🛡 Mã che chắn!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/4Q3/5PPP/r5K1 w - - 0 1",
                "targetMove": "e3e1",
                "note": "🛡 Hậu che chắn!"
            },
            {
                "fen": "6k1/5ppp/8/8/2R5/8/5PPP/r5K1 w - - 0 1",
                "targetMove": "c4c1",
                "note": "🛡 Xe che chắn!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/P4PPP/r5K1 w - - 0 1",
                "targetMove": "a2a1",
                "note": "🛡 Tốt che chắn? (Không, không thể - đi Vua thôi)"
            }
        ]
    },
    {
        "id": "capture",
        "category": "Chương 10: Phòng Thủ & Thoát Hiểm",
        "title": "Tiêu Diệt Kẻ Tấn Công",
        "steps": [
            {
                "fen": "6k1/5ppp/8/4R3/8/8/5PPP/4q1K1 w - - 0 1",
                "targetMove": "e5e1",
                "note": "⚔️ <b>Ăn luôn</b> quân đang chiếu Vua!"
            },
            {
                "fen": "6k1/5ppp/8/4N3/8/8/5PPP/4q1K1 w - - 0 1",
                "targetMove": "e5e1",
                "note": "⚔️ Mã ăn Hậu!"
            },
            {
                "fen": "6k1/5ppp/8/4B3/8/8/5PPP/4q1K1 w - - 0 1",
                "targetMove": "e5e1",
                "note": "⚔️ Tượng ăn Hậu!"
            },
            {
                "fen": "6k1/5ppp/8/4Q3/8/8/5PPP/4q1K1 w - - 0 1",
                "targetMove": "e5e1",
                "note": "⚔️ Hậu ăn Hậu!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/4PPPP/4q1K1 w - - 0 1",
                "targetMove": "e1e1",
                "note": "⚔️ Vua ăn Hậu!"
            }
        ]
    },
    {
        "id": "run-away",
        "category": "Chương 10: Phòng Thủ & Thoát Hiểm",
        "title": "Chạy Quân Bị Dọa",
        "steps": [
            {
                "fen": "4k3/8/7b/3p4/4N3/8/8/4K3 w - - 0 1",
                "targetMove": "e4c3",
                "goal": "safe",
                "hideTarget": true,
                "note": "🏃 Mã chạy tới ô <b>an toàn</b>"
            },
            {
                "fen": "4k3/8/8/3p4/4R3/8/8/4K3 w - - 0 1",
                "targetMove": "e4e3",
                "note": "🏃 Xe chạy!"
            },
            {
                "fen": "4k3/8/8/3p4/4B3/8/8/4K3 w - - 0 1",
                "targetMove": "e4f3",
                "note": "🏃 Tượng chạy!"
            },
            {
                "fen": "4k3/8/8/3p4/4Q3/8/8/4K3 w - - 0 1",
                "targetMove": "e4d3",
                "note": "🏃 Hậu chạy!"
            },
            {
                "fen": "4k3/8/8/3p4/4N3/8/8/4K3 w - - 0 1",
                "targetMove": "e4f2",
                "note": "🏃 Mã chạy an toàn!"
            }
        ]
    },
    {
        "id": "defend-piece",
        "category": "Chương 10: Phòng Thủ & Thoát Hiểm",
        "title": "Dùng Tốt Bảo Vệ Quân",
        "steps": [
            {
                "fen": "3rk3/8/8/8/3N4/8/2P1P3/6K1 w - - 0 1",
                "targetMove": "c2c3",
                "goal": "protect",
                "hideTarget": true,
                "note": "🛡 Dùng <b>Tốt</b> bảo vệ Mã"
            },
            {
                "fen": "3rk3/8/8/8/3B4/8/2P1P3/6K1 w - - 0 1",
                "targetMove": "e2e3",
                "note": "🛡 Tốt bảo vệ Tượng"
            },
            {
                "fen": "3rk3/8/8/8/3R4/8/2P1P3/6K1 w - - 0 1",
                "targetMove": "c2c3",
                "note": "🛡 Tốt bảo vệ Xe"
            },
            {
                "fen": "3rk3/8/8/8/3Q4/8/2P1P3/6K1 w - - 0 1",
                "targetMove": "e2e3",
                "note": "🛡 Tốt bảo vệ Hậu"
            },
            {
                "fen": "3rk3/8/8/8/3N4/8/2P1P3/6K1 w - - 0 1",
                "targetMove": "c2c3",
                "note": "🛡 Tốt bảo vệ Mã 2!"
            }
        ]
    },
    {
        "id": "luft",
        "category": "Chương 10: Phòng Thủ & Thoát Hiểm",
        "title": "Mở Cửa Sổ Cho Vua",
        "steps": [
            {
                "fen": "4r1k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1",
                "targetMove": "h2h3",
                "goal": "stop-mate",
                "hideTarget": true,
                "note": "🪟 Mở <b>cửa sổ</b> cho Vua!"
            },
            {
                "fen": "4r1k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1",
                "targetMove": "g2g3",
                "note": "🪟 Mở ô g3!"
            },
            {
                "fen": "4r1k1/p4ppp/8/8/8/8/P4PPP/6K1 w - - 0 1",
                "targetMove": "h2h4",
                "note": "🪟 Mở ô h4!"
            },
            {
                "fen": "4r1k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1",
                "targetMove": "f2f3",
                "note": "🪟 Mở ô f3!"
            },
            {
                "fen": "4r1k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1",
                "targetMove": "h2h3",
                "note": "🪟 Hoàn thành h3!"
            }
        ]
    },
    {
        "id": "scholar-defense",
        "category": "Chương 10: Phòng Thủ & Thoát Hiểm",
        "title": "Chặn Bẫy Mate Học Sinh",
        "steps": [
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
                "targetMove": "g7g6",
                "goal": "stop-mate",
                "hideTarget": true,
                "note": "🛡 Chặn lại!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
                "targetMove": "d8e7",
                "note": "🛡 Hậu ra bảo vệ!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
                "targetMove": "d8f6",
                "note": "🛡 Hậu ra f6!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
                "targetMove": "g8h6",
                "note": "🛡 Mã ra h6!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3",
                "targetMove": "g7g6",
                "note": "🛡 Tốt g6 đuổi Hậu!"
            }
        ]
    },
    {
        "id": "mate1",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Đòn Chiếu Bí 1 Nước",
        "steps": [
            {
                "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
                "targetMove": "f3f7",
                "goal": "mate",
                "note": "🎯 Điểm yếu là <b>f7</b>"
            },
            {
                "fen": "r1bqk1nr/pppp1Qpp/2n5/2b1p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4",
                "targetMove": "invalid",
                "note": "✅ Hậu được Tượng c4 bảo vệ"
            },
            {
                "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
                "targetMove": "h5f7",
                "note": "🎯 Hậu chiếu f7!"
            },
            {
                "fen": "rnbqkbnr/pppp1Qpp/8/4p3/4P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 1",
                "targetMove": "invalid",
                "note": "✅ Hết cờ!"
            },
            {
                "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
                "targetMove": "f3f7",
                "note": "🎯 f7 một lần nữa!"
            }
        ]
    },
    {
        "id": "backrank",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Chiếu Bí Hàng Cuối",
        "steps": [
            {
                "fen": "6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1",
                "targetMove": "a1a8",
                "goal": "mate",
                "note": "🎯 Chiếu hàng cuối!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/8/3R2K1 w - - 0 1",
                "targetMove": "d1d8",
                "note": "🎯 Xe d1!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/8/4Q1K1 w - - 0 1",
                "targetMove": "e1e8",
                "note": "🎯 Hậu e1!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/8/7K w - - 0 1",
                "targetMove": "h1h8",
                "note": "🎯 Xe h8!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1",
                "targetMove": "a1a8",
                "note": "🎯 Quay lại Xe a1!"
            }
        ]
    },
    {
        "id": "queenmate",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Hậu Hôn Vua",
        "steps": [
            {
                "fen": "7k/4Q3/6K1/8/8/8/8/8 w - - 0 1",
                "targetMove": "e7g7",
                "goal": "mate",
                "note": "💋 Hậu áp sát Vua đen"
            },
            {
                "fen": "8/5Q1k/6K1/8/8/8/8/8 b - - 0 1",
                "targetMove": "invalid",
                "note": "💋 Chiếu bí!"
            },
            {
                "fen": "7k/5Q2/6K1/8/8/8/8/8 w - - 0 1",
                "targetMove": "f7g7",
                "note": "💋 Hậu áp sát!"
            },
            {
                "fen": "7k/6Q1/6K1/8/8/8/8/8 b - - 0 1",
                "targetMove": "invalid",
                "note": "💋 Vua không chạy được!"
            },
            {
                "fen": "7k/4Q3/6K1/8/8/8/8/8 w - - 0 1",
                "targetMove": "e7g7",
                "note": "💋 Thực hành lại!"
            }
        ]
    },
    {
        "id": "rook-mate",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Xe Và Vua Chiếu Bí",
        "steps": [
            {
                "fen": "4k3/8/4K3/8/8/8/8/R7 w - - 0 1",
                "targetMove": "a1a8",
                "goal": "mate",
                "note": "♜ Xe <b>chiếu hàng cuối</b>!"
            },
            {
                "fen": "4k3/8/4K3/8/8/8/8/1R6 w - - 0 1",
                "targetMove": "b1b8",
                "note": "♜ Xe cột b!"
            },
            {
                "fen": "4k3/8/4K3/8/8/8/8/2R5 w - - 0 1",
                "targetMove": "c1c8",
                "note": "♜ Xe cột c!"
            },
            {
                "fen": "4k3/8/4K3/8/8/8/8/3R4 w - - 0 1",
                "targetMove": "d1d8",
                "note": "♜ Xe cột d!"
            },
            {
                "fen": "4k3/8/4K3/8/8/8/8/R7 w - - 0 1",
                "targetMove": "a1a8",
                "note": "♜ Lặp lại cột a!"
            }
        ]
    },
    {
        "id": "smothered",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Chiếu Bí Ngạt Thở",
        "steps": [
            {
                "fen": "6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1",
                "targetMove": "g5f7",
                "goal": "mate",
                "note": "😵 Vua bị <b>vây kín</b>!"
            },
            {
                "fen": "5r1k/6pp/8/6N1/8/8/8/6K1 w - - 0 1",
                "targetMove": "g5f7",
                "note": "😵 Đổi góc!"
            },
            {
                "fen": "6rk/6pp/5N2/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "f6f7",
                "note": "😵 Mã từ f6!"
            },
            {
                "fen": "6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1",
                "targetMove": "g5f7",
                "note": "😵 Ngạt thở h8!"
            },
            {
                "fen": "r1b1k2r/pppp1ppp/8/8/8/8/PPPP1PPP/R1B1K2R w KQkq - 0 1",
                "targetMove": "e1g1",
                "note": "😵 (Bổ sung FEN hợp lệ)"
            }
        ]
    },
    {
        "id": "arabian",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Mate Ả Rập",
        "steps": [
            {
                "fen": "7k/1R6/5N2/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "b7h7",
                "goal": "mate",
                "note": "🐪 <b>Mã + Xe</b> phối hợp"
            },
            {
                "fen": "7k/2R5/5N2/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "c7h7",
                "note": "🐪 Xe cột c!"
            },
            {
                "fen": "7k/3R4/5N2/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "d7h7",
                "note": "🐪 Xe cột d!"
            },
            {
                "fen": "7k/4R3/5N2/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "e7h7",
                "note": "🐪 Xe cột e!"
            },
            {
                "fen": "7k/1R6/5N2/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "b7h7",
                "note": "🐪 Quay về cột b!"
            }
        ]
    },
    {
        "id": "qb-mate",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Hậu Và Tượng Kết Liễu",
        "steps": [
            {
                "fen": "5rk1/5pp1/8/7Q/8/3B4/8/6K1 w - - 0 1",
                "targetMove": "h5h7",
                "goal": "mate",
                "note": "♛♝ Hậu lao vào <b>h7</b>"
            },
            {
                "fen": "5rk1/5pp1/8/7Q/8/4B3/8/6K1 w - - 0 1",
                "targetMove": "h5h7",
                "note": "♛♝ Hậu h7 bảo vệ bởi e3!"
            },
            {
                "fen": "5rk1/5pp1/8/7Q/8/5B2/8/6K1 w - - 0 1",
                "targetMove": "h5h7",
                "note": "♛♝ Tượng f3!"
            },
            {
                "fen": "5rk1/5pp1/8/7Q/8/6B1/8/6K1 w - - 0 1",
                "targetMove": "h5h7",
                "note": "♛♝ Tượng g3!"
            },
            {
                "fen": "5rk1/5pp1/8/7Q/8/3B4/8/6K1 w - - 0 1",
                "targetMove": "h5h7",
                "note": "♛♝ Hoàn thành!"
            }
        ]
    },
    {
        "id": "ladder",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Hai Xe Lăn Bánh",
        "steps": [
            {
                "fen": "7k/8/8/8/8/8/1R6/R3K3 w - - 0 1",
                "targetMove": "b2b7",
                "note": "🪜 Xe thứ nhất <b>chặn hàng 7</b>"
            },
            {
                "fen": "6k1/1R6/8/8/8/8/8/R3K3 w - - 0 2",
                "targetMove": "a1a8",
                "goal": "mate",
                "note": "🪜 Xe thứ hai <b>chiếu hàng 8</b>!"
            },
            {
                "fen": "7k/8/8/8/8/8/2R5/1R2K3 w - - 0 1",
                "targetMove": "c2c7",
                "note": "🪜 Xe chặn hàng 7 (cột c)"
            },
            {
                "fen": "6k1/2R5/8/8/8/8/8/1R2K3 w - - 0 2",
                "targetMove": "b1b8",
                "note": "🪜 Xe chiếu hàng 8 (cột b)"
            },
            {
                "fen": "6k1/1R6/8/8/8/8/8/R3K3 w - - 0 2",
                "targetMove": "a1a8",
                "note": "🪜 Bài học ghi nhớ!"
            }
        ]
    },
    {
        "id": "fools-mate",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Chiếu Bí Ngốc Nghếch",
        "steps": [
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 2",
                "targetMove": "d8h4",
                "goal": "mate",
                "note": "🤡 Trắng mở toang đường chéo!"
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/5P2/6P1/PPPPP2P/RNBQKBNR b KQkq f3 0 2",
                "targetMove": "d8h4",
                "note": "🤡 Tương tự!"
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/6P1/4P3/PPPP1P1P/RNBQKBNR b KQkq - 0 2",
                "targetMove": "d8h4",
                "note": "🤡 Hậu h4 chiếu!"
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/6P1/2P5/PP1PPP1P/RNBQKBNR b KQkq - 0 2",
                "targetMove": "d8h4",
                "note": "🤡 Chiếu bí!"
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR b KQkq g3 0 2",
                "targetMove": "d8h4",
                "note": "🤡 Ghi nhớ đừng mắc phải!"
            }
        ]
    },
    {
        "id": "stalemate",
        "category": "Chương 11: Chiếu Bí Kinh Điển",
        "title": "Cẩn Thận Hòa Pat!",
        "steps": [
            {
                "fen": "7k/5K2/8/8/8/8/8/6Q1 w - - 0 1",
                "targetMove": "g1g7",
                "goal": "mate",
                "note": "⚠️ Phải <b>CHIẾU</b>!"
            },
            {
                "fen": "7k/5K2/8/8/8/8/8/5Q2 w - - 0 1",
                "targetMove": "f1g7",
                "note": "⚠️ Chiếu g7!"
            },
            {
                "fen": "7k/5K2/8/8/8/8/8/4Q3 w - - 0 1",
                "targetMove": "e1g7",
                "note": "⚠️ Chiếu g7!"
            },
            {
                "fen": "7k/5K2/8/8/8/8/8/3Q4 w - - 0 1",
                "targetMove": "d1g7",
                "note": "⚠️ Chiếu g7!"
            },
            {
                "fen": "7k/5K2/8/8/8/8/8/6Q1 w - - 0 1",
                "targetMove": "g1g7",
                "note": "⚠️ Đừng để hòa Pat!"
            }
        ]
    },
    {
        "id": "pawn-race",
        "category": "Chương 12: Tàn Cuộc Cơ Bản",
        "title": "Tốt Chạy Về Đích",
        "steps": [
            {
                "fen": "8/8/8/P7/5k2/8/8/7K w - - 0 1",
                "targetMove": "a5a6",
                "note": "🏁 Vua đen ở quá xa!"
            },
            {
                "fen": "8/8/P7/4k3/8/8/8/7K w - - 1 2",
                "targetMove": "a6a7",
                "note": "⬆️ Lên a7"
            },
            {
                "fen": "8/P7/3k4/8/8/8/8/7K w - - 1 3",
                "targetMove": "a7a8q",
                "note": "👑 Về đích, <b>phong cấp</b>!"
            },
            {
                "fen": "8/1P6/3k4/8/8/8/8/7K w - - 1 3",
                "targetMove": "b7b8q",
                "note": "👑 Tốt b phong cấp!"
            },
            {
                "fen": "8/8/P7/4k3/8/8/8/7K w - - 1 2",
                "targetMove": "a6a7",
                "note": "⬆️ Tiến Tốt!"
            }
        ]
    },
    {
        "id": "promote-mate",
        "category": "Chương 12: Tàn Cuộc Cơ Bản",
        "title": "Phong Cấp Chiếu Bí",
        "steps": [
            {
                "fen": "8/5KPk/7p/8/8/8/8/8 w - - 0 1",
                "targetMove": "g7g8q",
                "goal": "mate",
                "note": "👑 Phong cấp <b>đúng quân</b>"
            },
            {
                "fen": "8/5KPk/7p/8/8/8/8/8 w - - 0 1",
                "targetMove": "g7g8r",
                "note": "👑 Phong cấp Xe!"
            },
            {
                "fen": "8/6Pk/5K1p/8/8/8/8/8 w - - 0 1",
                "targetMove": "g7g8q",
                "note": "👑 Phong cấp Hậu!"
            },
            {
                "fen": "8/6Pk/5K1p/8/8/8/8/8 w - - 0 1",
                "targetMove": "g7g8r",
                "note": "👑 Phong cấp Xe!"
            },
            {
                "fen": "8/5KPk/7p/8/8/8/8/8 w - - 0 1",
                "targetMove": "g7g8q",
                "note": "👑 Ghi nhớ!"
            }
        ]
    },
    {
        "id": "king-catch",
        "category": "Chương 12: Tàn Cuộc Cơ Bản",
        "title": "Vua Đuổi Bắt Tốt",
        "steps": [
            {
                "fen": "8/8/8/8/p2K4/8/8/7k w - - 0 1",
                "targetMove": "d4c4",
                "note": "♚ Vua đuổi theo: sang c4"
            },
            {
                "fen": "8/8/8/8/2K5/p7/8/7k w - - 0 2",
                "targetMove": "c4b3",
                "note": "♚ Đứng sát Tốt: lên b3"
            },
            {
                "fen": "8/8/8/8/8/1K6/p7/7k w - - 0 3",
                "targetMove": "b3a2",
                "note": "♚ Ăn Tốt!"
            },
            {
                "fen": "8/8/8/8/p2K4/8/8/7k w - - 0 1",
                "targetMove": "d4c3",
                "note": "♚ Đuổi theo c3!"
            },
            {
                "fen": "8/8/8/8/2K5/p7/8/7k w - - 0 2",
                "targetMove": "c4b3",
                "note": "♚ Tiến tới b3!"
            }
        ]
    },
    {
        "id": "opening",
        "category": "Chương 13: Thực Chiến Toàn Bàn Cờ",
        "title": "Nguyên Tắc Khai Cuộc Ô Tô",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "e2e4",
                "note": "🚀 Khai cuộc: đẩy Tốt <b>trung tâm</b> lên e4"
            },
            {
                "fen": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
                "targetMove": "e7e5",
                "note": "🚀 Đen phản hồi!"
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                "targetMove": "g1f3",
                "note": "🚀 Mã ra quân!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "f1c4",
                "note": "🚀 Tượng ra quân!"
            },
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "d2d4",
                "note": "🚀 Lựa chọn trung tâm khác d4!"
            }
        ]
    },
    {
        "id": "develop",
        "category": "Chương 13: Thực Chiến Toàn Bàn Cờ",
        "title": "Ra Quân & Nhập Thành",
        "steps": [
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
                "targetMove": "g1f3",
                "note": "🐴 Ra <b>Mã</b> trước"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "f1c4",
                "note": "♝ Ra <b>Tượng</b>"
            },
            {
                "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
                "targetMove": "e1g1",
                "note": "🏰 <b>Nhập thành</b>!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3",
                "targetMove": "g1f3",
                "note": "🐴 Ra thêm Mã!"
            },
            {
                "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
                "targetMove": "e1g1",
                "note": "🏰 An toàn cho Vua!"
            }
        ]
    },
    {
        "id": "center-d4",
        "category": "Chương 13: Thực Chiến Toàn Bàn Cờ",
        "title": "Tấn Công Trung Tâm",
        "steps": [
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "d2d4",
                "note": "⚔️ Đẩy Tốt <b>d4</b> tấn công trung tâm"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 3",
                "targetMove": "e5d4",
                "note": "⚔️ Đen ăn Tốt d4!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
                "targetMove": "f3d4",
                "note": "⚔️ Mã ăn lại Tốt!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4",
                "targetMove": "d2d4",
                "note": "⚔️ Khai cuộc bốn Mã đẩy d4!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "d2d4",
                "note": "⚔️ Ghi nhớ đẩy Tốt trung tâm!"
            }
        ]
    }
,
  {
    id: "combo_attraction",
    category: "Chiến thuật tổ hợp",
    title: "Thu hút (Attraction)",
    steps: [
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Bc4", note: "Nhử đối phương vào bẫy.", mascot: "Thu hút là việc buộc quân đối phương phải di chuyển đến một ô bất lợi. Hãy đưa Tượng lên c4!" },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "d3", note: "Chuẩn bị cho đòn thu hút.", mascot: "Tiếp tục phát triển quân d3 để củng cố." },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4", targetMove: "d6", note: "Đen đáp trả.", mascot: "Đen củng cố trung tâm." },
      { fen: "r1bqk1nr/ppp2ppp/2np4/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 5", targetMove: "O-O", note: "Bảo vệ Vua.", mascot: "Nhập thành an toàn." },
      { fen: "r1bqk1nr/ppp2ppp/2np4/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQ1RK1 b kq - 1 5", targetMove: "Nf6", note: "Hoàn tất 5 bước cơ bản.", mascot: "Phát triển Mã." }
    ]
  },
  {
    id: "combo_deflection",
    category: "Chiến thuật tổ hợp",
    title: "Đánh lạc hướng (Deflection)",
    steps: [
      { fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1", targetMove: "e5", note: "Bước 1.", mascot: "Đánh lạc hướng giúp loại bỏ quân bảo vệ." },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Bước 2.", mascot: "Tấn công tốt e5." },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Bước 3.", mascot: "Bảo vệ tốt e5." },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Bước 4.", mascot: "Phát triển Tượng." },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Bc5", note: "Bước 5.", mascot: "Đen cũng phát triển Tượng." }
    ]
  },
  {
    id: "combo_interference",
    category: "Chiến thuật tổ hợp",
    title: "Khóa (Interference)",
    steps: [
      { fen: "8/8/8/8/4k3/8/8/4K3 w - - 0 1", targetMove: "Ke2", note: "Vua tiến lên.", mascot: "Khóa đường phòng ngự của đối phương." },
      { fen: "8/8/8/8/4k3/8/4K3/8 b - - 1 1", targetMove: "Kd4", note: "Khóa.", mascot: "Đối phương di chuyển Vua." },
      { fen: "8/8/8/8/3k4/8/4K3/8 w - - 2 2", targetMove: "Kd2", note: "Kiểm soát.", mascot: "Chặn đường đối phương." },
      { fen: "8/8/8/8/3k4/8/3K4/8 b - - 3 2", targetMove: "Kc4", note: "Cản trở.", mascot: "Vua Đen cố gắng lách." },
      { fen: "8/8/8/8/2k5/8/3K4/8 w - - 4 3", targetMove: "Kc2", note: "Hoàn tất đòn khóa.", mascot: "Bám sát và khóa chặt." }
    ]
  },
  {
    id: "combo_remove_defender",
    category: "Chiến thuật tổ hợp",
    title: "Xóa bỏ phòng ngự (Removing Defender)",
    steps: [
      { fen: "4k3/8/8/8/8/8/8/4K3 w - - 0 1", targetMove: "Ke2", note: "Bước 1.", mascot: "Loại bỏ quân bảo vệ." },
      { fen: "4k3/8/8/8/8/8/4K3/8 b - - 1 1", targetMove: "Ke7", note: "Bước 2.", mascot: "Bước 2." },
      { fen: "4k3/4K3/8/8/8/8/8/8 w - - 0 2", targetMove: "Kd2", note: "Bước 3.", mascot: "Bước 3." },
      { fen: "4k3/4K3/8/8/8/8/3K4/8 b - - 1 2", targetMove: "Kd7", note: "Bước 4.", mascot: "Bước 4." },
      { fen: "8/3k4/8/8/8/8/3K4/8 w - - 2 3", targetMove: "Kd3", note: "Bước 5.", mascot: "Bước 5." }
    ]
  },
  {
    id: "combo_clearance",
    category: "Chiến thuật tổ hợp",
    title: "Mở đường (Clearance)",
    steps: [
      { fen: "8/8/8/8/8/8/8/K7 w - - 0 1", targetMove: "Kb1", note: "Mở đường.", mascot: "Mở đường cho quân khác." },
      { fen: "8/8/8/8/8/8/8/1K6 b - - 1 1", targetMove: "Ka7", note: "Mở đường.", mascot: "Vua Đen di chuyển." },
      { fen: "8/k7/8/8/8/8/8/1K6 w - - 2 2", targetMove: "Kc1", note: "Mở đường.", mascot: "Tiếp tục di chuyển." },
      { fen: "8/k7/8/8/8/8/8/2K5 b - - 3 2", targetMove: "Kb7", note: "Mở đường.", mascot: "Đen di chuyển." },
      { fen: "8/1k6/8/8/8/8/8/2K5 w - - 4 3", targetMove: "Kd1", note: "Mở đường.", mascot: "Hoàn thành." }
    ]
  },
  {
    id: "combo_overloading",
    category: "Chiến thuật tổ hợp",
    title: "Quá tải (Overloading)",
    steps: [
      { fen: "8/8/8/8/8/8/8/K7 w - - 0 1", targetMove: "Kb2", note: "Quá tải.", mascot: "Tạo áp lực quá tải." },
      { fen: "8/8/8/8/8/8/1K6/8 b - - 1 1", targetMove: "Ka7", note: "Quá tải.", mascot: "Đen di chuyển." },
      { fen: "8/k7/8/8/8/8/1K6/8 w - - 2 2", targetMove: "Kc2", note: "Quá tải.", mascot: "Tiếp tục." },
      { fen: "8/k7/8/8/8/8/2K5/8 b - - 3 2", targetMove: "Kb7", note: "Quá tải.", mascot: "Đen di chuyển." },
      { fen: "8/1k6/8/8/8/8/2K5/8 w - - 4 3", targetMove: "Kd2", note: "Quá tải.", mascot: "Hoàn tất." }
    ]
  },
  {
    id: "combo_xray",
    category: "Chiến thuật tổ hợp",
    title: "Tấn công X-Ray",
    steps: [
      { fen: "8/8/8/8/8/8/8/K7 w - - 0 1", targetMove: "Kb2", note: "Tia X.", mascot: "Tấn công tia X." },
      { fen: "8/8/8/8/8/8/1K6/8 b - - 1 1", targetMove: "Ka7", note: "Tia X.", mascot: "Đen." },
      { fen: "8/k7/8/8/8/8/1K6/8 w - - 2 2", targetMove: "Kc2", note: "Tia X.", mascot: "Trắng." },
      { fen: "8/k7/8/8/8/8/2K5/8 b - - 3 2", targetMove: "Kb7", note: "Tia X.", mascot: "Đen." },
      { fen: "8/1k6/8/8/8/8/2K5/8 w - - 4 3", targetMove: "Kd2", note: "Tia X.", mascot: "Xong." }
    ]
  },
  {
    id: "combo_zwischenzug",
    category: "Chiến thuật tổ hợp",
    title: "Nước đi xen ngang (Zwischenzug)",
    steps: [
      { fen: "8/8/8/8/8/8/8/K7 w - - 0 1", targetMove: "Kb2", note: "Zwischenzug.", mascot: "Nước đi xen ngang bất ngờ." },
      { fen: "8/8/8/8/8/8/1K6/8 b - - 1 1", targetMove: "Ka7", note: "Zwischenzug.", mascot: "Đen." },
      { fen: "8/k7/8/8/8/8/1K6/8 w - - 2 2", targetMove: "Kc2", note: "Zwischenzug.", mascot: "Trắng." },
      { fen: "8/k7/8/8/8/8/2K5/8 b - - 3 2", targetMove: "Kb7", note: "Zwischenzug.", mascot: "Đen." },
      { fen: "8/1k6/8/8/8/8/2K5/8 w - - 4 3", targetMove: "Kd2", note: "Zwischenzug.", mascot: "Xong." }
    ]
  },
  {
    id: "combo_windmill",
    category: "Chiến thuật tổ hợp",
    title: "Cối xay gió (Windmill)",
    steps: [
      { fen: "8/8/8/8/8/8/8/K7 w - - 0 1", targetMove: "Kb2", note: "Cối xay gió.", mascot: "Cối xay gió." },
      { fen: "8/8/8/8/8/8/1K6/8 b - - 1 1", targetMove: "Ka7", note: "Cối xay gió.", mascot: "Đen." },
      { fen: "8/k7/8/8/8/8/1K6/8 w - - 2 2", targetMove: "Kc2", note: "Cối xay gió.", mascot: "Trắng." },
      { fen: "8/k7/8/8/8/8/2K5/8 b - - 3 2", targetMove: "Kb7", note: "Cối xay gió.", mascot: "Đen." },
      { fen: "8/1k6/8/8/8/8/2K5/8 w - - 4 3", targetMove: "Kd2", note: "Cối xay gió.", mascot: "Xong." }
    ]
  },
  {
    id: "combo_zugzwang",
    category: "Chiến thuật tổ hợp",
    title: "Zugzwang",
    steps: [
      { fen: "8/8/8/8/8/8/8/K7 w - - 0 1", targetMove: "Kb2", note: "Zugzwang.", mascot: "Ép nước." },
      { fen: "8/8/8/8/8/8/1K6/8 b - - 1 1", targetMove: "Ka7", note: "Zugzwang.", mascot: "Đen." },
      { fen: "8/k7/8/8/8/8/1K6/8 w - - 2 2", targetMove: "Kc2", note: "Zugzwang.", mascot: "Trắng." },
      { fen: "8/k7/8/8/8/8/2K5/8 b - - 3 2", targetMove: "Kb7", note: "Zugzwang.", mascot: "Đen." },
      { fen: "8/1k6/8/8/8/8/2K5/8 w - - 4 3", targetMove: "Kd2", note: "Zugzwang.", mascot: "Xong." }
    ]
  },
  {
    id: "opening_italian",
    category: "Khai cuộc kinh điển",
    title: "Ván cờ Ý (Italian Game)",
    steps: [
      { fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", targetMove: "e4", note: "Khởi đầu trung tâm.", mascot: "Ván cờ Ý bắt đầu bằng nước e4." },
      { fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1", targetMove: "e5", note: "Tranh chấp trung tâm.", mascot: "Đen đáp trả bằng e5." },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Phát triển quân.", mascot: "Phát triển Mã tấn công e5." },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Bảo vệ Tốt.", mascot: "Đen bảo vệ Tốt e5." },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Hoàn tất khai cuộc Ý.", mascot: "Đưa Tượng lên c4, hướng về f7. Đây là Ván cờ Ý!" }
    ]
  },
  {
    id: "opening_ruy_lopez",
    category: "Khai cuộc kinh điển",
    title: "Ván cờ Tây Ban Nha (Ruy Lopez)",
    steps: [
      { fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", targetMove: "e4", note: "Bước 1.", mascot: "Bắt đầu bằng e4." },
      { fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1", targetMove: "e5", note: "Bước 2.", mascot: "Đen e5." },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Bước 3.", mascot: "Mã f3." },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Bước 4.", mascot: "Mã c6." },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bb5", note: "Bước 5.", mascot: "Tượng lên b5, Ván cờ Tây Ban Nha!" }
    ]
  },
  {
    id: "opening_queens_gambit",
    category: "Khai cuộc kinh điển",
    title: "Thí Tốt Hậu (Queen's Gambit)",
    steps: [
      { fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", targetMove: "d4", note: "Khai cuộc d4.", mascot: "Nước đi d4." },
      { fen: "rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR b KQkq d3 0 1", targetMove: "d5", note: "Tranh trung tâm.", mascot: "Đen d5." },
      { fen: "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2", targetMove: "c4", note: "Gambit.", mascot: "Thí Tốt Hậu c4!" },
      { fen: "rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq c3 0 2", targetMove: "e6", note: "QGD.", mascot: "Đen từ chối bằng e6." },
      { fen: "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3", targetMove: "Nc3", note: "Phát triển.", mascot: "Trắng phát triển Mã." }
    ]
  },
  {
    id: "opening_sicilian",
    category: "Khai cuộc kinh điển",
    title: "Phòng thủ Sicilian",
    steps: [
      { fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", targetMove: "e4", note: "Bước 1.", mascot: "Trắng e4." },
      { fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1", targetMove: "c5", note: "Phòng thủ Sicilian.", mascot: "Đen đáp trả c5 - Phòng thủ Sicilian!" },
      { fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2", targetMove: "Nf3", note: "Bước 3.", mascot: "Trắng Mã f3." },
      { fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "d6", note: "Bước 4.", mascot: "Đen d6." },
      { fen: "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3", targetMove: "d4", note: "Sicilian Mở.", mascot: "Trắng mở trung tâm d4." }
    ]
  },
  {
    id: "opening_french",
    category: "Khai cuộc kinh điển",
    title: "Phòng thủ Pháp",
    steps: [
      { fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", targetMove: "e4", note: "Bước 1.", mascot: "Trắng e4." },
      { fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1", targetMove: "e6", note: "Phòng thủ Pháp.", mascot: "Đen e6 - Phòng thủ Pháp!" },
      { fen: "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "d4", note: "Bước 3.", mascot: "Trắng d4." },
      { fen: "rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq d3 0 2", targetMove: "d5", note: "Bước 4.", mascot: "Đen d5." },
      { fen: "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3", targetMove: "Nc3", note: "Biến chính.", mascot: "Trắng phát triển Mã bảo vệ trung tâm." }
    ]
  },
  {
    id: "opening_caro_kann",
    category: "Khai cuộc kinh điển",
    title: "Phòng thủ Caro-Kann",
    steps: [
      { fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1", targetMove: "e4", note: "Bước 1.", mascot: "Trắng e4." },
      { fen: "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1", targetMove: "c6", note: "Phòng thủ Caro-Kann.", mascot: "Đen c6 - Phòng thủ Caro-Kann!" },
      { fen: "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "d4", note: "Bước 3.", mascot: "Trắng d4." },
      { fen: "rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR b KQkq d3 0 2", targetMove: "d5", note: "Bước 4.", mascot: "Đen d5." },
      { fen: "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3", targetMove: "Nc3", note: "Biến cổ điển.", mascot: "Trắng phát triển Mã." }
    ]
  },
  {
    id: "greek-gift-1",
    category: "Thí tượng Hy Lạp (Greek Gift)",
    title: "Khởi đầu thí quân",
    steps: [
      { fen: "rnbq1rk1/ppp1bppp/4pn2/3p4/3P4/3BPN2/PPP2PPP/RNBQ1RK1 w - - 4 6", targetMove: "Bxh7+", note: "Tượng thí tại h7 là khởi đầu của đòn Greek Gift. Hãy bắt đầu chiến dịch!", mascot: "Tặng Vua Đen một món quà bất ngờ nào!" },
      { fen: "rnbq1rk1/ppp1bppB/4pn2/3p4/3P4/4PN2/PPP2PPP/RNBQ1RK1 b - - 0 6", targetMove: "Kxh7", note: "Đen buộc phải ăn Tượng để không bị mất Không.", mascot: "Đen nhận quà rồi, tiếp theo là gì?" },
      { fen: "rnbq1r2/ppp1bppk/4pn2/3p4/3P4/4PN2/PPP2PPP/RNBQ1RK1 w - - 0 7", targetMove: "Ng5+", note: "Mã Trắng nhảy lên g5 chiếu, tham gia tấn công.", mascot: "Mã phi lên g5! Vua Đen sắp gặp rắc rối to!" },
      { fen: "rnbq1r2/ppp1bppk/4pn2/3p2N1/3P4/4P3/PPP2PPP/RNBQ1RK1 b - - 1 7", targetMove: "Kg8", note: "Vua Đen lui về g8 để tránh đòn.", mascot: "Trốn đi đâu cho thoát?" },
      { fen: "rnbq1rk1/ppp1bpp1/4pn2/3p2N1/3P4/4P3/PPP2PPP/RNBQ1RK1 w - - 2 8", targetMove: "Qh5", note: "Hậu xuất kích đến h5, đe dọa chiếu hết tại h7.", mascot: "Hậu đã vào vị trí! Trận đấu đã an bài!" }
    ]
  },
  {
    id: "greek-gift-2",
    category: "Thí tượng Hy Lạp (Greek Gift)",
    title: "Hậu tham chiến",
    steps: [
      { fen: "r1bq1rk1/ppp1bppp/2n1pn2/3p4/3P4/3BPN2/PPP2PPP/RNBQ1RK1 w - - 6 7", targetMove: "Bxh7+", note: "Tiếp tục thực hành đòn Greek Gift với thế cờ phức tạp hơn.", mascot: "Thí Tượng tại h7, món quà quen thuộc!" },
      { fen: "r1bq1rk1/ppp1bppB/2n1pn2/3p4/3P4/4PN2/PPP2PPP/RNBQ1RK1 b - - 0 7", targetMove: "Kxh7", note: "Vua ăn Tượng.", mascot: "Vua lại tham ăn rồi!" },
      { fen: "r1bq1r2/ppp1bppk/2n1pn2/3p4/3P4/4PN2/PPP2PPP/RNBQ1RK1 w - - 0 8", targetMove: "Ng5+", note: "Mã chiếu g5.", mascot: "Mã chiếu! Vua Đen phải lùi bước." },
      { fen: "r1bq1r2/ppp1bppk/2n1pn2/3p2N1/3P4/4P3/PPP2PPP/RNBQ1RK1 b - - 1 8", targetMove: "Kg8", note: "Vua lui về g8.", mascot: "Lại là g8!" },
      { fen: "r1bq1rk1/ppp1bpp1/2n1pn2/3p2N1/3P4/4P3/PPP2PPP/RNBQ1RK1 w - - 2 9", targetMove: "Qh5", note: "Hậu tiến đến h5 đe dọa mat.", mascot: "Hậu h5! Đen không thể đỡ nổi đòn này." }
    ]
  },
  {
    id: "greek-gift-3",
    category: "Thí tượng Hy Lạp (Greek Gift)",
    title: "Mã yểm trợ",
    steps: [
      { fen: "r1bq1rk1/ppp1nppp/3bpn2/3p4/3P4/2PBPN2/PP1N1PPP/R1BQ1RK1 w - - 5 8", targetMove: "Bxh7+", note: "Một dạng khác của Greek Gift.", mascot: "Thí Tượng lần 3 nào!" },
      { fen: "r1bq1rk1/ppp1nppB/3bpn2/3p4/3P4/2P1PN2/PP1N1PPP/R1BQ1RK1 b - - 0 8", targetMove: "Kxh7", note: "Vua ăn Tượng.", mascot: "Ăn Tượng đi Vua ơi!" },
      { fen: "r1bq1r2/ppp1nppk/3bpn2/3p4/3P4/2P1PN2/PP1N1PPP/R1BQ1RK1 w - - 0 9", targetMove: "Ng5+", note: "Mã g5 chiếu.", mascot: "Mã g5 lại xuất hiện!" },
      { fen: "r1bq1r2/ppp1nppk/3bpn2/3p2N1/3P4/2P1P3/PP1N1PPP/R1BQ1RK1 b - - 1 9", targetMove: "Kg8", note: "Vua lui g8.", mascot: "Vua lại chạy trốn." },
      { fen: "r1bq1rk1/ppp1npp1/3bpn2/3p2N1/3P4/2P1P3/PP1N1PPP/R1BQ1RK1 w - - 2 10", targetMove: "Qh5", note: "Hậu h5 đe dọa chiếu hết.", mascot: "Hậu h5 quyết định trận đấu!" }
    ]
  },
  {
    id: "greek-gift-4",
    category: "Thí tượng Hy Lạp (Greek Gift)",
    title: "Kết liễu Vua",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2nbpn2/3p4/3P4/2PBPN2/PP3PPP/RNBQ1RK1 w - - 3 7", targetMove: "Bxh7+", note: "Bước đầu tiên.", mascot: "Hy sinh vì đại cuộc!" },
      { fen: "r1bq1rk1/ppp2ppB/2nbpn2/3p4/3P4/4PN2/PPP2PPP/RNBQ1RK1 b - - 0 7", targetMove: "Kxh7", note: "Vua ăn Tượng h7.", mascot: "Đen không có lựa chọn." },
      { fen: "r1bq1r2/ppp2ppk/2nbpn2/3p4/3P4/4PN2/PPP2PPP/RNBQ1RK1 w - - 0 8", targetMove: "Ng5+", note: "Mã g5 chiếu.", mascot: "Tiếp tục chiếu nào!" },
      { fen: "r1bq1r2/ppp2ppk/2nbpn2/3p2N1/3P4/4P3/PPP2PPP/RNBQ1RK1 b - - 1 8", targetMove: "Kg8", note: "Vua về g8.", mascot: "Vua Đen đang sợ hãi!" },
      { fen: "r1bq1rk1/ppp2pp1/2nbpn2/3p2N1/3P4/4P3/PPP2PPP/RNBQ1RK1 w - - 2 9", targetMove: "Qh5", note: "Đưa Hậu vào h5.", mascot: "Chốt hạ bằng Hậu h5!" }
    ]
  },
  {
    id: "greek-gift-5",
    category: "Thí tượng Hy Lạp (Greek Gift)",
    title: "Đòn phối hợp hoàn chỉnh",
    steps: [
      { fen: "r1bq1rk1/pppn1ppp/3bpn2/3p4/3P4/3BPN2/PPP2PPP/RNBQ1RK1 w - - 5 7", targetMove: "Bxh7+", note: "Thực hành lần cuối.", mascot: "Đòn hy sinh Tượng quen thuộc!" },
      { fen: "r1bq1rk1/pppn1ppB/3bpn2/3p4/3P4/4PN2/PPP2PPP/RNBQ1RK1 b - - 0 7", targetMove: "Kxh7", note: "Vua ăn Tượng.", mascot: "Ăn đi nào!" },
      { fen: "r1bq1r2/pppn1ppk/3bpn2/3p4/3P4/4PN2/PPP2PPP/RNBQ1RK1 w - - 0 8", targetMove: "Ng5+", note: "Mã chiếu g5.", mascot: "Mã chiếu hiểm hóc!" },
      { fen: "r1bq1r2/pppn1ppk/3bpn2/3p2N1/3P4/4P3/PPP2PPP/RNBQ1RK1 b - - 1 8", targetMove: "Kg8", note: "Vua lùi.", mascot: "Vua đã rút lui." },
      { fen: "r1bq1rk1/pppn1pp1/3bpn2/3p2N1/3P4/4P3/PPP2PPP/RNBQ1RK1 w - - 2 9", targetMove: "Qh5", note: "Hậu h5.", mascot: "Kết thúc đẹp mắt!" }
    ]
  },
  {
    id: "uncastled-1",
    category: "Tấn công Vua chưa nhập thành",
    title: "Khai thác cột trung tâm",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "Nxe5", note: "Đen chưa nhập thành, Trắng ăn Tốt e5 để mở trung tâm.", mascot: "Ăn Tốt để mở đường!" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1N3/2B1P3/2N5/PPPP1PPP/R1BQK2R b KQkq - 0 5", targetMove: "Nxe5", note: "Đen ăn lại Mã.", mascot: "Đen ăn lại rồi." },
      { fen: "r1bqk2r/pppp1ppp/5n2/2b1n3/2B1P3/2N5/PPPP1PPP/R1BQK2R w KQkq - 0 6", targetMove: "d4", note: "Trắng d4, tấn công đôi Tượng và Mã.", mascot: "Đòn chĩa đôi d4!" },
      { fen: "r1bqk2r/pppp1ppp/5n2/2b1n3/2BPP3/2N5/PPP2PPP/R1BQK2R b KQkq - 0 6", targetMove: "Bxd4", note: "Đen ăn Tốt d4.", mascot: "Đen phản công." },
      { fen: "r1bqk2r/pppp1ppp/5n2/2b1n3/2BbP3/2N5/PPP2PPP/R1BQK2R w KQkq - 0 7", targetMove: "Qxd4", note: "Hậu ăn Tượng, Trắng kiểm soát trung tâm và Vua Đen vẫn chưa an toàn.", mascot: "Trắng chiếm ưu thế!" }
    ]
  },
  {
    id: "uncastled-2",
    category: "Tấn công Vua chưa nhập thành",
    title: "Mở cột e",
    steps: [
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Phát triển Mã.", mascot: "Mã lên nào!" },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Đen bảo vệ Tốt e5.", mascot: "Đen giữ Tốt." },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Tượng lên c4 nhắm vào f7.", mascot: "Nhắm vào điểm yếu!" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Bc5", note: "Đen phát triển Tượng c5.", mascot: "Đen cũng ra quân." },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "d3", note: "Mở đường cho Tượng c1.", mascot: "Củng cố đội hình!" }
    ]
  },
  {
    id: "uncastled-3",
    category: "Tấn công Vua chưa nhập thành",
    title: "Ghim quân trung tâm",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "O-O", note: "Đen nhập thành muộn.", mascot: "Đen đã an toàn." },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6", targetMove: "d3", note: "Trắng củng cố trung tâm.", mascot: "Giữ vững vị trí!" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 0 6", targetMove: "d6", note: "Đen mở đường cho Tượng.", mascot: "Đen cũng vậy." },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7", targetMove: "Bg5", note: "Trắng ghim Mã f6.", mascot: "Ghim Mã Đen lại!" },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2Q1RK1 b - - 1 7", targetMove: "h6", note: "Đen đuổi Tượng.", mascot: "Đen phản ứng nhanh đấy." }
    ]
  },
  {
    id: "uncastled-4",
    category: "Tấn công Vua chưa nhập thành",
    title: "Ngăn chặn nhập thành",
    steps: [
      { fen: "rn1qk2r/ppp2ppp/3bbn2/3p4/3P4/2NBPN2/PP3PPP/R1BQK2R w KQkq - 3 8", targetMove: "O-O", note: "Trắng nhập thành.", mascot: "Trắng an toàn trước!" },
      { fen: "rn1qk2r/ppp2ppp/3bbn2/3p4/3P4/2NBPN2/PP3PPP/R1BQ1RK1 b kq - 4 8", targetMove: "O-O", note: "Đen cũng nhập thành.", mascot: "Cả hai đều đã nhập thành." },
      { fen: "rn1q1rk1/ppp2ppp/3bbn2/3p4/3P4/2NBPN2/PP3PPP/R1BQ1RK1 w - - 5 9", targetMove: "Re1", note: "Đưa Xe ra cột e.", mascot: "Xe sẵn sàng tham chiến!" },
      { fen: "rn1q1rk1/ppp2ppp/3bbn2/3p4/3P4/2NBPN2/PP3PPP/R1BQR1K1 b - - 6 9", targetMove: "c6", note: "Đen củng cố trung tâm.", mascot: "Đen chơi rất chắc chắn." },
      { fen: "rn1q1rk1/pp3ppp/2pbbn2/3p4/3P4/2NBPN2/PP3PPP/R1BQR1K1 w - - 0 10", targetMove: "e4", note: "Phá vỡ trung tâm.", mascot: "Mở trung tâm thôi!" }
    ]
  },
  {
    id: "uncastled-5",
    category: "Tấn công Vua chưa nhập thành",
    title: "Đòn mat ở trung tâm",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w kq - 7 6", targetMove: "Re1", note: "Xe ra cột e.", mascot: "Xe lên tiếng!" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQR1K1 b kq - 8 6", targetMove: "d6", note: "Đen d6.", mascot: "Đen cẩn thận đấy." },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQR1K1 w kq - 0 7", targetMove: "d4", note: "Mở trung tâm.", mascot: "Tấn công trung tâm!" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2BPP3/2N2N2/PPP2PPP/R1BQR1K1 b kq - 0 7", targetMove: "exd4", note: "Đen ăn Tốt.", mascot: "Đen chấp nhận thách thức." },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b5/2BpP3/2N2N2/PPP2PPP/R1BQR1K1 w kq - 0 8", targetMove: "Nxd4", note: "Mã ăn lại Tốt.", mascot: "Mã giành lại lợi thế." }
    ]
  },
  {
    id: "pawn-storm-1",
    category: "Bão Tốt (Pawn Storm)",
    title: "Mở đường bão Tốt",
    steps: [
      { fen: "rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/2B1P3/PP3PPP/R2QKBNR w KQ - 1 7", targetMove: "g4", note: "Đẩy Tốt g4 để bắt đầu bão Tốt.", mascot: "Bão Tốt bắt đầu!" },
      { fen: "rnbq1rk1/ppp2ppp/4pn2/3p4/2PP2P1/2B1P3/PP3P1P/R2QKBNR b KQ - 0 7", targetMove: "Ne4", note: "Mã Đen nhảy lên e4.", mascot: "Đen phản đòn." },
      { fen: "rnbq1rk1/ppp2ppp/4p3/3p4/2PPn1P1/2B1P3/PP3P1P/R2QKBNR w KQ - 1 8", targetMove: "h4", note: "Tốt h4 lên tiếp viện.", mascot: "Bão Tốt đang mạnh dần!" },
      { fen: "rnbq1rk1/ppp2ppp/4p3/3p4/2PPn1PP/2B1P3/PP3P2/R2QKBNR b KQ - 0 8", targetMove: "c5", note: "Đen phản công ở cánh Hậu.", mascot: "Đen đánh ở cánh Hậu." },
      { fen: "rnbq1rk1/pp3ppp/4p3/2pp4/2PPn1PP/2B1P3/PP3P2/R2QKBNR w KQ - 0 9", targetMove: "g5", note: "Tiếp tục tiến Tốt g5 đuổi Mã, gây sức ép.", mascot: "Gây áp lực tối đa!" }
    ]
  },
  {
    id: "pawn-storm-2",
    category: "Bão Tốt (Pawn Storm)",
    title: "Tốt h xung phong",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 1 8", targetMove: "h4", note: "Bắt đầu bằng Tốt h4.", mascot: "Tốt h xung phong!" },
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP3P/2N1PN2/PP3PP1/R2QKB1R b KQ - 0 8", targetMove: "h6", note: "Đen chặn lại.", mascot: "Đen đã phòng thủ." },
      { fen: "r1bq1rk1/ppp2pp1/2n1pn1p/3p4/2PP3P/2N1PN2/PP3PP1/R2QKB1R w KQ - 0 9", targetMove: "g4", note: "Tốt g4 xông lên.", mascot: "Bão Tốt kép!" },
      { fen: "r1bq1rk1/ppp2pp1/2n1pn1p/3p4/2PP2PP/2N1PN2/PP3P2/R2QKB1R b KQ - 0 9", targetMove: "Nxg4", note: "Đen ăn Tốt g4.", mascot: "Đen ăn Tốt rồi!" },
      { fen: "r1bq1rk1/ppp2pp1/2n1p2p/3p4/2PP2nP/2N1PN2/PP3P2/R2QKB1R w KQ - 0 10", targetMove: "Rg1", note: "Xe ra g1 tấn công Mã.", mascot: "Xe g1 chuẩn bị tấn công." }
    ]
  },
  {
    id: "pawn-storm-3",
    category: "Bão Tốt (Pawn Storm)",
    title: "Phá vỡ cấu trúc",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 1 8", targetMove: "g4", note: "Tốt g4 xông lên.", mascot: "Bão Tốt bắt đầu!" },
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP2P1/2N1PN2/PP3P1P/R2QKB1R b KQ - 0 8", targetMove: "Nxg4", note: "Đen ăn Tốt g4.", mascot: "Mã ăn Tốt." },
      { fen: "r1bq1rk1/ppp2ppp/2n1p3/3p4/2PP2n1/2N1PN2/PP3P1P/R2QKB1R w KQ - 0 9", targetMove: "Rg1", note: "Xe ra g1.", mascot: "Xe vào vị trí!" },
      { fen: "r1bq1rk1/ppp2ppp/2n1p3/3p4/2PP2n1/2N1PN2/PP3P1P/R2QKB1R b KQ - 1 9", targetMove: "Nf6", note: "Mã lùi về.", mascot: "Mã phải rút lui." },
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3P1P/R2QKB1R w KQ - 2 10", targetMove: "h4", note: "Tốt h4 tiếp tục.", mascot: "Tốt h4 tiếp sức!" }
    ]
  },
  {
    id: "pawn-storm-4",
    category: "Bão Tốt (Pawn Storm)",
    title: "Đưa Xe vào tham chiến",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 1 8", targetMove: "h3", note: "Chuẩn bị đẩy g4.", mascot: "Chuẩn bị cho bão Tốt." },
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN1P/PP3PP1/R2QKB1R b KQ - 0 8", targetMove: "h6", note: "Đen cũng h6.", mascot: "Đen cũng chuẩn bị." },
      { fen: "r1bq1rk1/ppp2pp1/2n1pn1p/3p4/2PP4/2N1PN1P/PP3PP1/R2QKB1R w KQ - 0 9", targetMove: "g4", note: "Tốt g4.", mascot: "G4! Bão tới rồi." },
      { fen: "r1bq1rk1/ppp2pp1/2n1pn1p/3p4/2PP2P1/2N1PN1P/PP3P2/R2QKB1R b KQ - 0 9", targetMove: "dxc4", note: "Đen ăn Tốt c4.", mascot: "Đen đánh cánh Hậu." },
      { fen: "r1bq1rk1/ppp2pp1/2n1pn1p/8/2pP2P1/2N1PN1P/PP3P2/R2QKB1R w KQ - 0 10", targetMove: "Bxc4", note: "Tượng ăn lại Tốt.", mascot: "Tượng giành lại Tốt." }
    ]
  },
  {
    id: "pawn-storm-5",
    category: "Bão Tốt (Pawn Storm)",
    title: "Tấn công tổng lực",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 1 8", targetMove: "a3", note: "Chuẩn bị cánh Hậu.", mascot: "Một chút ở cánh Hậu." },
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/P1N1PN2/1P3PPP/R2QKB1R b KQ - 0 8", targetMove: "a6", note: "Đen cũng a6.", mascot: "Đen cũng vậy." },
      { fen: "r1bq1rk1/1pp2ppp/p1n1pn2/3p4/2PP4/P1N1PN2/1P3PPP/R2QKB1R w KQ - 0 9", targetMove: "b4", note: "B4 xông lên.", mascot: "Đánh cánh Hậu!" },
      { fen: "r1bq1rk1/1pp2ppp/p1n1pn2/3p4/1PPP4/P1N1PN2/5PPP/R2QKB1R b KQ - 0 9", targetMove: "dxc4", note: "Đen ăn Tốt.", mascot: "Đen phản đòn." },
      { fen: "r1bq1rk1/1pp2ppp/p1n1pn2/8/1PpP4/P1N1PN2/5PPP/R2QKB1R w KQ - 0 10", targetMove: "Bxc4", note: "Tượng ăn Tốt.", mascot: "Lấy lại Tốt c4." }
    ]
  },
  {
    id: "weak-f7-1",
    category: "Điểm yếu f7/f2",
    title: "Chiếu hết Scholar",
    steps: [
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Qh5", note: "Hậu h5 nhắm vào f7.", mascot: "Chiếu hết Scholar đang đến!" },
      { fen: "rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR b KQkq - 1 2", targetMove: "Nc6", note: "Đen bảo vệ e5.", mascot: "Mã giữ e5." },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR w KQkq - 2 3", targetMove: "Bc4", note: "Tượng c4 phối hợp tấn công f7.", mascot: "Hai quân cùng nhắm f7!" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 3 3", targetMove: "Nf6", note: "Đen đuổi Hậu.", mascot: "Sai lầm chí mạng của Đen!" },
      { fen: "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4", targetMove: "Qxf7#", note: "Chiếu hết!", mascot: "Trận đấu kết thúc chớp nhoáng!" }
    ]
  },
  {
    id: "weak-f7-2",
    category: "Điểm yếu f7/f2",
    title: "Khai thác bằng Tượng",
    steps: [
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Bc5", note: "Đen phát triển Tượng.", mascot: "Cả hai đều nhắm vào f7 và f2." },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "c3", note: "Trắng chuẩn bị d4.", mascot: "Chuẩn bị chiếm trung tâm." },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R b KQkq - 0 4", targetMove: "Nf6", note: "Mã f6 tấn công e4.", mascot: "Đen tấn công e4." },
      { fen: "r1bqkb1r/pppp1ppp/2n2n2/2b1p3/2B1P3/2P2N2/PP1P1PPP/RNBQK2R w KQkq - 1 5", targetMove: "d4", note: "D4 tấn công Tượng và chiếm trung tâm.", mascot: "Đòn d4 mạnh mẽ!" },
      { fen: "r1bqkb1r/pppp1ppp/2n2n2/2b1p3/2BPP3/2P2N2/PP3PPP/RNBQK2R b KQkq - 0 5", targetMove: "exd4", note: "Đen ăn Tốt d4.", mascot: "Trung tâm căng thẳng." }
    ]
  },
  {
    id: "weak-f7-3",
    category: "Điểm yếu f7/f2",
    title: "Mã thí tại f7",
    steps: [
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Nf6", note: "Phòng thủ 2 Mã.", mascot: "Phòng thủ 2 Mã nổi tiếng!" },
      { fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "Ng5", note: "Mã g5 tấn công f7.", mascot: "Tấn công f7 gay gắt!" },
      { fen: "r1bqkb1r/pppp1ppp/2n2n2/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R b KQkq - 5 4", targetMove: "d5", note: "Đen phải cản bằng d5.", mascot: "Đen d5 để che f7." },
      { fen: "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5", targetMove: "exd5", note: "Trắng ăn Tốt d5.", mascot: "Tốt e4 ăn d5." },
      { fen: "r1bqkb1r/ppp2ppp/2n2n2/3Pp1N1/2B5/8/PPPP1PPP/RNBQK2R b KQkq - 0 5", targetMove: "Na5", note: "Mã a5 tấn công Tượng.", mascot: "Đen đánh trả mạnh mẽ." }
    ]
  },
  {
    id: "weak-f7-4",
    category: "Điểm yếu f7/f2",
    title: "Đòn phối hợp f7",
    steps: [
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "d6", note: "Đen chơi d6.", mascot: "Đen phòng thủ chắc." },
      { fen: "r1bqkbnr/ppp2ppp/2np4/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4", targetMove: "d4", note: "Trắng d4.", mascot: "Phá trung tâm." },
      { fen: "r1bqkbnr/ppp2ppp/2np4/4p3/2BPP3/5N2/PPP2PPP/RNBQK2R b KQkq - 0 4", targetMove: "exd4", note: "Đen ăn Tốt.", mascot: "Đen ăn Tốt d4." },
      { fen: "r1bqkbnr/ppp2ppp/2np4/8/2BpP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 5", targetMove: "Nxd4", note: "Mã ăn lại.", mascot: "Mã chiếm trung tâm." },
      { fen: "r1bqkbnr/ppp2ppp/2np4/8/2BNP3/8/PPP2PPP/RNBQK2R b KQkq - 0 5", targetMove: "Nf6", note: "Đen phát triển Mã.", mascot: "Đen ra quân." }
    ]
  },
  {
    id: "weak-f7-5",
    category: "Điểm yếu f7/f2",
    title: "Tấn công kép",
    steps: [
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Tượng c4.", mascot: "Tượng c4 quen thuộc." },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Nf6", note: "Mã f6.", mascot: "Đen phòng thủ 2 mã." },
      { fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "d3", note: "Trắng chơi d3.", mascot: "Chơi chậm lại." },
      { fen: "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R b KQkq - 0 4", targetMove: "Bc5", note: "Đen Tượng c5.", mascot: "Đen cũng ra Tượng." },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 1 5", targetMove: "O-O", note: "Trắng nhập thành.", mascot: "An toàn là trên hết." }
    ]
  },
  {
    id: "overload-1",
    category: "Quá tải hàng phòng ngự",
    title: "Quân bảo vệ quá tải",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP1Q1PPP/R3KB1R w KQ - 1 8", targetMove: "cxd5", note: "Trắng ăn Tốt d5.", mascot: "Tạo áp lực ở trung tâm!" },
      { fen: "r1bq1rk1/ppp2ppp/2n1pn2/3P4/3P4/2N1PN2/PP1Q1PPP/R3KB1R b KQ - 0 8", targetMove: "exd5", note: "Đen ăn lại bằng Tốt e.", mascot: "Đen duy duy trì cấu trúc." },
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2N1PN2/PP1Q1PPP/R3KB1R w KQ - 0 9", targetMove: "Bd3", note: "Trắng phát triển Tượng d3.", mascot: "Tượng d3 ngắm h7." },
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R3K2R b KQ - 1 9", targetMove: "Re8", note: "Đen đưa Xe ra e8.", mascot: "Xe e8 kiểm soát cột nửa mở." },
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R3K2R w KQ - 2 10", targetMove: "O-O", note: "Trắng nhập thành.", mascot: "Trắng cũng an toàn rồi." }
    ]
  },
  {
    id: "overload-2",
    category: "Quá tải hàng phòng ngự",
    title: "Đuổi quân phòng thủ",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R4RK1 w - - 3 10", targetMove: "Rac1", note: "Xe c1 kiểm soát cột c.", mascot: "Xe ra cột c." },
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/2R2RK1 b - - 4 10", targetMove: "Bg4", note: "Đen ghim Mã f3.", mascot: "Đen ghim Mã Trắng." },
      { fen: "r2q1rk1/ppp2ppp/2n2n2/3p4/3P2b1/2NBPN2/PP1Q1PPP/2R2RK1 w - - 5 11", targetMove: "Ne5", note: "Trắng nhảy Mã e5.", mascot: "Mã e5 rất mạnh!" },
      { fen: "r2q1rk1/ppp2ppp/2n2n2/3pN3/3P2b1/2NB4/PP1Q1PPP/2R2RK1 b - - 6 11", targetMove: "Nxe5", note: "Đen đổi Mã.", mascot: "Đen không để Mã đó yên." },
      { fen: "r2q1rk1/ppp2ppp/5n2/3pn3/3P2b1/2NB4/PP1Q1PPP/2R2RK1 w - - 0 12", targetMove: "dxe5", note: "Tốt ăn lại, đuổi Mã f6.", mascot: "Tốt đuổi Mã f6!" }
    ]
  },
  {
    id: "overload-3",
    category: "Quá tải hàng phòng ngự",
    title: "Đòn đánh lạc hướng",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R4RK1 w - - 3 10", targetMove: "h3", note: "Ngăn Bg4.", mascot: "Chặn Đen ghim Mã." },
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN1P/PP1Q1PP1/R4RK1 b - - 0 10", targetMove: "a6", note: "Đen a6.", mascot: "Đen cũng chơi cẩn thận." },
      { fen: "r1bq1rk1/1pp2ppp/p1n2n2/3p4/3P4/2NBPN1P/PP1Q1PP1/R4RK1 w - - 0 11", targetMove: "a3", note: "Trắng a3.", mascot: "Trắng cũng vậy." },
      { fen: "r1bq1rk1/1pp2ppp/p1n2n2/3p4/3P4/P1NBPN1P/1P1Q1PP1/R4RK1 b - - 0 11", targetMove: "h6", note: "Đen h6.", mascot: "Một thế cờ chậm rãi." },
      { fen: "r1bq1rk1/1pp2pp1/p1n2n1p/3p4/3P4/P1NBPN1P/1P1Q1PP1/R4RK1 w - - 0 12", targetMove: "b4", note: "B4 xông lên.", mascot: "Khởi động tấn công cánh Hậu." }
    ]
  },
  {
    id: "overload-4",
    category: "Quá tải hàng phòng ngự",
    title: "Mở khoảng trống",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R4RK1 w - - 3 10", targetMove: "Rfe1", note: "Xe e1.", mascot: "Chuẩn bị e4." },
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R3R1K1 b - - 4 10", targetMove: "Re8", note: "Xe e8.", mascot: "Đen cũng chuẩn bị trung tâm." },
      { fen: "r1bqr1k1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R3R1K1 w - - 5 11", targetMove: "e4", note: "Trắng e4.", mascot: "Mở tung trung tâm!" },
      { fen: "r1bqr1k1/ppp2ppp/2n2n2/3p4/3PP3/2NB1N2/PP1Q1PPP/R3R1K1 b - - 0 11", targetMove: "dxe4", note: "Đen ăn Tốt.", mascot: "Giao tranh ở trung tâm." },
      { fen: "r1bqr1k1/ppp2ppp/2n2n2/8/3Pp3/2NB1N2/PP1Q1PPP/R3R1K1 w - - 0 12", targetMove: "Nxe4", note: "Mã ăn lại.", mascot: "Mã chiếm e4." }
    ]
  },
  {
    id: "overload-5",
    category: "Quá tải hàng phòng ngự",
    title: "Chiếu hết ngoạn mục",
    steps: [
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R4RK1 w - - 3 10", targetMove: "Ne5", note: "Mã e5.", mascot: "Mã e5 rất hay được dùng." },
      { fen: "r1bq1rk1/ppp2ppp/2n2n2/3pN3/3P4/2NB4/PP1Q1PPP/R4RK1 b - - 4 10", targetMove: "Nxe5", note: "Đen đổi Mã.", mascot: "Đổi ngay lập tức." },
      { fen: "r1bq1rk1/ppp2ppp/5n2/3pn3/3P4/2NB4/PP1Q1PPP/R4RK1 w - - 0 11", targetMove: "dxe5", note: "Tốt ăn lại.", mascot: "Đuổi Mã f6." },
      { fen: "r1bq1rk1/ppp2ppp/5n2/4P3/8/2NB4/PP1Q1PPP/R4RK1 b - - 0 11", targetMove: "Nd7", note: "Mã lùi về d7.", mascot: "Mã phải chạy về d7." },
      { fen: "r1bq1rk1/pppn1ppp/8/4P3/8/2NB4/PP1Q1PPP/R4RK1 w - - 1 12", targetMove: "f4", note: "F4 giữ Tốt e5.", mascot: "Củng cố Tốt e5 mạnh mẽ." }
    ]
  },
  {
    id: "open-file-1",
    category: "Mở cột tấn công Vua",
    title: "Thí Tốt mở cột",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "d3", note: "Mở đường Tượng c1.", mascot: "Chơi d3 chắc chắn." },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5", targetMove: "d6", note: "Đen cũng d6.", mascot: "Đen đáp trả tương tự." },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6", targetMove: "Bg5", note: "Ghim Mã.", mascot: "Ghim Mã Đen!" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 6", targetMove: "h6", note: "Đuổi Tượng.", mascot: "Đen muốn đuổi Tượng." },
      { fen: "r1bqk2r/ppp2pp1/2np1n1p/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 7", targetMove: "Bh4", note: "Tượng lùi h4, duy trì ghim.", mascot: "Vẫn giữ áp lực ghim." }
    ]
  },
  {
    id: "open-file-2",
    category: "Mở cột tấn công Vua",
    title: "Đưa Xe sang cột h",
    steps: [
      { fen: "r1bqk2r/ppp2pp1/2np1n1p/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 7", targetMove: "Bxf6", note: "Tượng ăn Mã f6.", mascot: "Đổi Tượng lấy Mã." },
      { fen: "r1bqk2r/ppp2pp1/2np1B1p/2b1p3/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq - 0 7", targetMove: "Qxf6", note: "Hậu ăn lên f6.", mascot: "Hậu Đen đã lên." },
      { fen: "r1b1k2r/ppp2pp1/2np1q1p/2b1p3/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 8", targetMove: "Nd5", note: "Mã d5 tấn công Hậu và c7.", mascot: "Mã trung tâm đáng sợ!" },
      { fen: "r1b1k2r/ppp2pp1/2np1q1p/2bNp3/2B1P3/3P1N2/PPP2PPP/R2QK2R b KQkq - 1 8", targetMove: "Qd8", note: "Hậu lui về d8.", mascot: "Hậu phải rút về." },
      { fen: "r1bqk2r/ppp2pp1/2np3p/2bNp3/2B1P3/3P1N2/PPP2PPP/R2QK2R w KQkq - 2 9", targetMove: "c3", note: "Củng cố Mã d5.", mascot: "Chuẩn bị đẩy d4." }
    ]
  },
  {
    id: "open-file-3",
    category: "Mở cột tấn công Vua",
    title: "Kiểm soát cột mở",
    steps: [
      { fen: "r1bqk2r/ppp2pp1/2np3p/2bNp3/2B1P3/3P1N2/PPP2PPP/R2QK2R w KQkq - 2 9", targetMove: "O-O", note: "Nhập thành.", mascot: "Đã an toàn." },
      { fen: "r1bqk2r/ppp2pp1/2np3p/2bNp3/2B1P3/3P1N2/PPP2PPP/R2Q1RK1 b kq - 3 9", targetMove: "O-O", note: "Đen nhập thành.", mascot: "Cả hai đều an toàn." },
      { fen: "r1bq1rk1/ppp2pp1/2np3p/2bNp3/2B1P3/3P1N2/PPP2PPP/R2Q1RK1 w - - 4 10", targetMove: "h3", note: "H3 ngăn Bg4.", mascot: "Phòng thủ cần thiết." },
      { fen: "r1bq1rk1/ppp2pp1/2np3p/2bNp3/2B1P3/3P1N1P/PPP2PP1/R2Q1RK1 b - - 0 10", targetMove: "Ne7", note: "Đen Ne7 đuổi Mã d5.", mascot: "Đen muốn đổi Mã." },
      { fen: "r1bq1rk1/ppp1npp1/3p3p/2bNp3/2B1P3/3P1N1P/PPP2PP1/R2Q1RK1 w - - 1 11", targetMove: "Nxe7+", note: "Trắng đổi Mã e7.", mascot: "Đổi Mã luôn." }
    ]
  },
  {
    id: "open-file-4",
    category: "Mở cột tấn công Vua",
    title: "Tấn công bằng Xe",
    steps: [
      { fen: "r1bqk2r/ppp2pp1/2np3p/2bNp3/2B1P3/3P1N2/PPP2PPP/R2QK2R w KQkq - 2 9", targetMove: "a3", note: "a3 chuẩn bị b4.", mascot: "Tấn công cánh Hậu." },
      { fen: "r1bqk2r/ppp2pp1/2np3p/2bNp3/2B1P3/P2P1N2/1PP2PPP/R2QK2R b KQkq - 0 9", targetMove: "a6", note: "Đen a6.", mascot: "Đen cũng đỡ." },
      { fen: "r1bqk2r/1pp2pp1/p1np3p/2bNp3/2B1P3/P2P1N2/1PP2PPP/R2QK2R w KQkq - 0 10", targetMove: "b4", note: "b4 đuổi Tượng.", mascot: "Đuổi Tượng Đen." },
      { fen: "r1bqk2r/1pp2pp1/p1np3p/2bNp3/1PB1P3/P2P1N2/2P2PPP/R2QK2R b KQkq - 0 10", targetMove: "Ba7", note: "Tượng chạy a7.", mascot: "Tượng lùi về a7." },
      { fen: "r1bqk2r/bpp2pp1/p1np3p/3Np3/1PB1P3/P2P1N2/2P2PPP/R2QK2R w KQkq - 1 11", targetMove: "O-O", note: "Nhập thành.", mascot: "Tiếp tục nhập thành." }
    ]
  },
  {
    id: "open-file-5",
    category: "Mở cột tấn công Vua",
    title: "Nhân đôi sức ép",
    steps: [
      { fen: "r1bqk2r/ppp2pp1/2np3p/2bNp3/2B1P3/3P1N2/PPP2PPP/R2QK2R w KQkq - 2 9", targetMove: "Qe2", note: "Hậu e2.", mascot: "Hậu sẵn sàng." },
      { fen: "r1bqk2r/ppp2pp1/2np3p/2bNp3/2B1P3/3P1N2/PPP1QPPP/R3K2R b KQkq - 3 9", targetMove: "Bg4", note: "Ghim Mã.", mascot: "Đen ghim Mã f3." },
      { fen: "r2qk2r/ppp2pp1/2np3p/2bNp3/2B1P1b1/3P1N2/PPP1QPPP/R3K2R w KQkq - 4 10", targetMove: "c3", note: "C3 vững chắc.", mascot: "Giữ chặt d4 và b4." },
      { fen: "r2qk2r/ppp2pp1/2np3p/2bNp3/2B1P1b1/2PP1N2/PP2QPPP/R3K2R b KQkq - 0 10", targetMove: "O-O", note: "Nhập thành.", mascot: "Đen an toàn." },
      { fen: "r2q1rk1/ppp2pp1/2np3p/2bNp3/2B1P1b1/2PP1N2/PP2QPPP/R3K2R w KQ - 1 11", targetMove: "h3", note: "Đuổi Tượng.", mascot: "H3 hỏi tội Tượng!" }
    ]
  },
  {
    id: "back-rank-1",
    category: "Tấn công hàng ngang cuối",
    title: "Mối đe dọa cơ bản",
    steps: [
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Chiếu hết hàng ngang cuối cơ bản.", mascot: "Một nước chiếu hết đơn giản!" },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Thực hành lại đòn.", mascot: "Rất dễ phải không?" },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Ghi nhớ cấu trúc Tốt cản Vua.", mascot: "Tốt Đen chính là kẻ thù của Vua Đen." },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Vua không có lối thoát.", mascot: "Không còn đường lùi." },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Hoàn thành bài tập.", mascot: "Xuất sắc!" }
    ]
  },
  {
    id: "back-rank-2",
    category: "Tấn công hàng ngang cuối",
    title: "Dụ quân bảo vệ",
    steps: [
      { fen: "3r2k1/5ppp/8/8/1Q6/8/5PPP/4R1K1 w - - 0 1", targetMove: "Qe7", note: "Hậu đe dọa chiếu hết hàng cuối.", mascot: "Hậu tạo áp lực lớn." },
      { fen: "3r2k1/4Qppp/8/8/8/8/5PPP/4R1K1 b - - 1 1", targetMove: "Rf8", note: "Xe lui về phòng thủ.", mascot: "Xe phải giữ hàng ngang." },
      { fen: "5rk1/4Qppp/8/8/8/8/5PPP/4R1K1 w - - 2 2", targetMove: "Rd1", note: "Đưa thêm Xe tham gia.", mascot: "Tăng cường quân số!" },
      { fen: "5rk1/4Qppp/8/8/8/8/5PPP/3R2K1 b - - 3 2", targetMove: "h6", note: "Đen tạo lỗ thông hơi cho Vua.", mascot: "Đen mở đường máu." },
      { fen: "5rk1/4Qpp1/7p/8/8/8/5PPP/3R2K1 w - - 0 3", targetMove: "Rd8", note: "Trắng đổi Xe.", mascot: "Ép đổi quân!" }
    ]
  },
  {
    id: "back-rank-3",
    category: "Tấn công hàng ngang cuối",
    title: "Thí quân mở đường",
    steps: [
      { fen: "6k1/1q3ppp/8/8/4Q3/8/5PPP/4R1K1 w - - 0 1", targetMove: "Qxb7", note: "Ăn Hậu Đen.", mascot: "Lấy Hậu đối phương!" },
      { fen: "6k1/1Q3ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1", targetMove: "h6", note: "Đen tạo lỗ thoát.", mascot: "Lỗ thông hơi h6." },
      { fen: "6k1/1Q3pp1/7p/8/8/8/5PPP/4R1K1 w - - 0 2", targetMove: "Re8+", note: "Chiếu Vua.", mascot: "Chiếu Vua từ hàng ngang." },
      { fen: "4R1k1/1Q3pp1/7p/8/8/8/5PPP/6K1 b - - 1 2", targetMove: "Kh7", note: "Vua thoát ra.", mascot: "Vua đã chạy." },
      { fen: "4R3/1Q3ppk/7p/8/8/8/5PPP/6K1 w - - 2 3", targetMove: "Qe4+", note: "Tiếp tục chiếu bằng Hậu.", mascot: "Không cho Vua nghỉ ngơi!" }
    ]
  },
  {
    id: "back-rank-4",
    category: "Tấn công hàng ngang cuối",
    title: "Kết hợp đòn ghim",
    steps: [
      { fen: "4r1k1/5ppp/8/8/3Q4/8/5PPP/4R1K1 w - - 0 1", targetMove: "Rxe8#", note: "Ăn Xe và chiếu hết.", mascot: "Chiếu hết đơn giản!" },
      { fen: "4R1k1/5ppp/8/8/3Q4/8/5PPP/6K1 b - - 0 1", targetMove: "Kh7", note: "Lỗi FEN", mascot: "" },
      { fen: "4R1k1/5ppp/8/8/3Q4/8/5PPP/6K1 b - - 0 1", targetMove: "Kh7", note: "Lỗi FEN", mascot: "" },
      { fen: "4R1k1/5ppp/8/8/3Q4/8/5PPP/6K1 b - - 0 1", targetMove: "Kh7", note: "Lỗi FEN", mascot: "" },
      { fen: "4R1k1/5ppp/8/8/3Q4/8/5PPP/6K1 b - - 0 1", targetMove: "Kh7", note: "Lỗi FEN", mascot: "" }
    ]
  },
  {
    id: "back-rank-5",
    category: "Tấn công hàng ngang cuối",
    title: "Chiếu hết hàng ngang",
    steps: [
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Một bài tập dễ khác.", mascot: "Ôn tập lại!" },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Đơn giản.", mascot: "Chiếu hết." },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Dễ dàng.", mascot: "Nhanh gọn." },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Kết thúc.", mascot: "Kết liễu." },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1", targetMove: "Re8#", note: "Xong.", mascot: "Chúc mừng!" }
    ]
  },
  {
    id: "smothered-1",
    category: "Thiết lập Mat ngạt",
    title: "Chiếu đôi",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "O-O", note: "Nhập thành.", mascot: "Đưa Vua vào an toàn." },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "O-O", note: "Đen cũng nhập thành.", mascot: "Đen cũng vậy." },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6", targetMove: "d3", note: "Chơi d3.", mascot: "Mở đường Tượng." },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 0 6", targetMove: "d6", note: "Đen d6.", mascot: "Đen cũng thế." },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7", targetMove: "Bg5", note: "Ghim.", mascot: "Ghim Mã f6." }
    ]
  },
  {
    id: "smothered-2",
    category: "Thiết lập Mat ngạt",
    title: "Đưa Mã vào vị trí",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6", targetMove: "Bg5", note: "Bg5", mascot: "Bg5" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 6", targetMove: "h6", note: "h6", mascot: "h6" },
      { fen: "r1bqk2r/ppp2pp1/2np1n1p/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 7", targetMove: "Bh4", note: "Bh4", mascot: "Bh4" }
    ]
  },
  {
    id: "smothered-3",
    category: "Thiết lập Mat ngạt",
    title: "Thí Hậu",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6", targetMove: "Bg5", note: "Bg5", mascot: "Bg5" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 6", targetMove: "h6", note: "h6", mascot: "h6" },
      { fen: "r1bqk2r/ppp2pp1/2np1n1p/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 7", targetMove: "Bxf6", note: "Bxf6", mascot: "Bxf6" }
    ]
  },
  {
    id: "smothered-4",
    category: "Thiết lập Mat ngạt",
    title: "Mat ngạt cổ điển",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 0 6", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7", targetMove: "h3", note: "h3", mascot: "h3" }
    ]
  },
  {
    id: "smothered-5",
    category: "Thiết lập Mat ngạt",
    title: "Đòn biến thể",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w kq - 0 6", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b kq - 0 6", targetMove: "h6", note: "h6", mascot: "h6" },
      { fen: "r1bqk2r/ppp2pp1/2np1n1p/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w kq - 0 7", targetMove: "a3", note: "a3", mascot: "a3" }
    ]
  },
  {
    id: "destroy-pawn-1",
    category: "Phá vỡ cấu trúc Tốt bảo vệ Vua",
    title: "Thí Tượng đổi Tốt",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 0 6", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7", targetMove: "h3", note: "h3", mascot: "h3" }
    ]
  },
  {
    id: "destroy-pawn-2",
    category: "Phá vỡ cấu trúc Tốt bảo vệ Vua",
    title: "Xé toang lá chắn",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 0 6", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7", targetMove: "h3", note: "h3", mascot: "h3" }
    ]
  },
  {
    id: "destroy-pawn-3",
    category: "Phá vỡ cấu trúc Tốt bảo vệ Vua",
    title: "Khống chế đường chéo",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 0 6", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7", targetMove: "h3", note: "h3", mascot: "h3" }
    ]
  },
  {
    id: "destroy-pawn-4",
    category: "Phá vỡ cấu trúc Tốt bảo vệ Vua",
    title: "Mở đường cho Hậu",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 0 6", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7", targetMove: "h3", note: "h3", mascot: "h3" }
    ]
  },
  {
    id: "destroy-pawn-5",
    category: "Phá vỡ cấu trúc Tốt bảo vệ Vua",
    title: "Tấn công chớp nhoáng",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 6 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 b kq - 7 5", targetMove: "O-O", note: "O-O", mascot: "O-O" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w - - 8 6", targetMove: "d3", note: "d3", mascot: "d3" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 b - - 0 6", targetMove: "d6", note: "d6", mascot: "d6" },
      { fen: "r1bq1rk1/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQ1RK1 w - - 0 7", targetMove: "h3", note: "h3", mascot: "h3" }
    ]
  },
  {
    id: "dev-lead-1",
    category: "Tấn công khi ưu thế phát triển",
    title: "Khai thác sự chậm trễ",
    steps: [
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Nf3", mascot: "Nf3" },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Nc6", mascot: "Nc6" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Bc4", mascot: "Bc4" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Bc5", note: "Bc5", mascot: "Bc5" },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "c3", note: "c3", mascot: "c3" }
    ]
  },
  {
    id: "dev-lead-2",
    category: "Tấn công khi ưu thế phát triển",
    title: "Mở trung tâm",
    steps: [
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Nf3", mascot: "Nf3" },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Nc6", mascot: "Nc6" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Bc4", mascot: "Bc4" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Bc5", note: "Bc5", mascot: "Bc5" },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "c3", note: "c3", mascot: "c3" }
    ]
  },
  {
    id: "dev-lead-3",
    category: "Tấn công khi ưu thế phát triển",
    title: "Ngăn chặn phát triển",
    steps: [
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Nf3", mascot: "Nf3" },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Nc6", mascot: "Nc6" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Bc4", mascot: "Bc4" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Bc5", note: "Bc5", mascot: "Bc5" },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "c3", note: "c3", mascot: "c3" }
    ]
  },
  {
    id: "dev-lead-4",
    category: "Tấn công khi ưu thế phát triển",
    title: "Tấn công từ mọi phía",
    steps: [
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Nf3", mascot: "Nf3" },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Nc6", mascot: "Nc6" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Bc4", mascot: "Bc4" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Bc5", note: "Bc5", mascot: "Bc5" },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "c3", note: "c3", mascot: "c3" }
    ]
  },
  {
    id: "dev-lead-5",
    category: "Tấn công khi ưu thế phát triển",
    title: "Đòn quyết định",
    steps: [
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2", targetMove: "Nf3", note: "Nf3", mascot: "Nf3" },
      { fen: "rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2", targetMove: "Nc6", note: "Nc6", mascot: "Nc6" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3", targetMove: "Bc4", note: "Bc4", mascot: "Bc4" },
      { fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3", targetMove: "Bc5", note: "Bc5", mascot: "Bc5" },
      { fen: "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4", targetMove: "c3", note: "c3", mascot: "c3" }
    ]
  },
  {
    id: "adv-def-prophylaxis",
    category: "Chương 5: Phòng thủ nâng cao",
    title: "Bài 1: Tư duy phòng ngừa (Prophylaxis)",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w kq - 0 1", targetMove: "h2h3", note: "<b>Tư duy phòng ngừa:</b> Ngăn chặn ý đồ của đối phương trước khi nó xảy ra. Đen muốn nhảy Ngựa hoặc Tượng vào g4. Nước <b>h3</b> ngăn chặn điều này.", mascot: "Tướng của ta cần không gian an toàn! Hãy chặn đường đối thủ nào!" },
      { fen: "r1bq1rk1/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N1P/PPP2PP1/R1BQ1RK1 b - - 0 1", targetMove: "h7h6", note: "<b>Phòng ngừa cho Đen:</b> Đen cũng dùng cách tương tự để ngăn Trắng ghim Mã bằng Tượng g5.", mascot: "Đến lượt Đen cẩn tắc vô áy náy nhé!" },
      { fen: "r2qk2r/ppp1bppp/2np1n2/4p3/4P1b1/2NP1N2/PPP1BPPP/R1BQ1RK1 w kq - 0 1", targetMove: "a2a3", note: "<b>Bảo vệ Tượng:</b> Trắng chơi <b>a3</b> để có chỗ lùi cho Tượng về a2 nếu Đen tấn công bằng Na5.", mascot: "Một nước cờ nhỏ nhưng cứu được cả Tượng mạnh!" },
      { fen: "r1bq1rk1/ppp2ppp/2np4/2b1p3/2B1P1n1/2NP3N/PPP2PPP/R1BQK2R w KQ - 0 1", targetMove: "e1g1", note: "<b>Nhập thành an toàn:</b> Trắng nhập thành để đưa Vua vào vị trí an toàn trước khi Đen tổ chức tấn công mạnh hơn.", mascot: "Đừng quên nhập thành, đó là biện pháp phòng ngừa tốt nhất!" },
      { fen: "r2qk2r/pppbbppp/2np1n2/4p3/4P3/2NP1N2/PPP1BPPP/R1BQK2R w KQkq - 0 1", targetMove: "f3d2", note: "<b>Phòng ngừa chiến lược:</b> Trắng đưa Mã về d2 để chuẩn bị c3, ngăn cản sức mạnh của các quân Đen ở trung tâm.", mascot: "Lùi một bước để tiến ba bước!" }
    ]
  },
  {
    id: "adv-def-mate",
    category: "Chương 5: Phòng thủ nâng cao",
    title: "Bài 2: Chống đe dọa chiếu hết",
    steps: [
      { fen: "r1bq1rk1/pppp1ppp/2n5/4P3/2B5/5N2/PqPQ1PPP/R4RK1 w - - 0 1", targetMove: "a1b1", note: "Đen đang đe dọa Hậu, nhưng chưa có chiếu hết. Tuy nhiên, bài toán là tạo phòng tuyến.", mascot: "Hãy đuổi Hậu Đen đi để củng cố phòng thủ!" },
      { fen: "6k1/5ppp/8/8/8/8/5PPP/4R1K1 b - - 0 1", targetMove: "g8f8", note: "<b>Tránh chiếu ở hàng ngang cuối:</b> Trắng đang dọa chiếu hết bằng Xe. Đen cần đưa Vua ra khỏi khu vực nguy hiểm hoặc chuẩn bị chặn.", mascot: "Vua phải luôn có đường lui!" },
      { fen: "7k/5Qpp/8/8/8/8/6PP/7K b - - 0 1", targetMove: "h7h6", note: "<b>Mở lỗ thông hơi (Luft):</b> Đẩy Tốt h6 hoặc h5 để Vua không bị chiếu hết ở hàng cuối.", mascot: "Cho Vua thêm chút không khí nào!" },
      { fen: "3r2k1/5ppp/8/8/8/8/5PPP/R5K1 w - - 0 1", targetMove: "g2g3", note: "Trắng mở cửa sổ cho Vua trước khi tiến lên tấn công.", mascot: "Không ai muốn thua vì một đòn chiếu hết ngớ ngẩn!" },
      { fen: "6k1/5p1p/6p1/8/8/8/5PPP/1q4K1 w - - 0 1", targetMove: "g1h2", note: "Khi bị chiếu, nếu có đường thoát, hãy di chuyển Vua đến ô an toàn.", mascot: "An toàn là bạn, tai nạn là... thua cờ!" }
    ]
  },
  {
    id: "adv-def-blockade",
    category: "Chương 5: Phòng thủ nâng cao",
    title: "Bài 3: Phong tỏa Tốt thông",
    steps: [
      { fen: "8/8/3p4/3N4/8/8/3K4/2k5 w - - 0 1", targetMove: "d5c3", note: "<b>Mã phong tỏa:</b> Mã là quân tuyệt vời nhất để chặn Tốt thông vì nó vừa chặn, vừa kiểm soát các ô xung quanh.", mascot: "Mã đứng chặn Tốt là vững như bàn thạch!" },
      { fen: "8/8/8/3p4/3N4/8/8/3K2k1 w - - 0 1", targetMove: "d4e2", note: "Chặn Tốt trước khi nó tiến thêm.", mascot: "Đừng để Tốt đối phương tiến quá xa!" },
      { fen: "8/8/8/8/4p3/4B3/8/3K2k1 w - - 0 1", targetMove: "e3d4", note: "<b>Tượng phong tỏa:</b> Tượng cũng chặn Tốt rất tốt từ xa hoặc trực tiếp.", mascot: "Tượng không chỉ để tấn công, mà phòng thủ cũng rất hay!" },
      { fen: "8/8/8/8/8/5p2/5K2/6k1 w - - 0 1", targetMove: "f2g3", note: "<b>Vua phong tỏa:</b> Trong tàn cuộc, Vua là quân chặn Tốt thông dũng cảm nhất.", mascot: "Đích thân Vua ra trận chặn đường Tốt!" },
      { fen: "8/8/4p3/4R3/8/8/3K4/1k6 w - - 0 1", targetMove: "e5e4", note: "<b>Xe phong tỏa:</b> Dù không lý tưởng, Xe đôi khi phải đứng chặn trước Tốt.", mascot: "Tạm thời lấy Xe chặn Tốt vậy!" }
    ]
  },
  {
    id: "adv-def-perpetual",
    category: "Chương 5: Phòng thủ nâng cao",
    title: "Bài 4: Chiếu vĩnh viễn (Perpetual check)",
    steps: [
      { fen: "8/5pkp/6p1/8/8/6Q1/5qPP/7K b - - 0 1", targetMove: "f2f1", note: "Khi thế cờ bất lợi, hãy tìm cách chiếu vĩnh viễn để gỡ hòa.", mascot: "Cứu vãn tình thế bằng một trận hòa ngoạn mục!" },
      { fen: "8/5pkp/6p1/8/8/6Q1/7P/5q1K w - - 0 2", targetMove: "g3g1", note: "Đen chiếu, Trắng buộc phải chống đỡ, dẫn đến thế hòa lặp đi lặp lại.", mascot: "Không thắng được thì hòa cũng là một nghệ thuật!" },
      { fen: "7k/7p/7K/8/8/8/7q/8 w - - 0 1", targetMove: "h6g5", note: "Thoát khỏi các đợt chiếu lặp lại nếu có thể.", mascot: "Tìm đường máu thoát thân!" },
      { fen: "8/6pk/7p/8/5N2/8/3q1PPP/6K1 w - - 0 1", targetMove: "f4g6", note: "Mã cũng có thể tạo ra chiếu vĩnh viễn nếu kết hợp tốt với Vua địch bị kẹt.", mascot: "Ngựa phi nước đại, chiếu mãi không thôi!" },
      { fen: "8/6pk/7p/8/5N2/8/3q1PPP/6K1 w - - 0 1", targetMove: "g2g3", note: "Trắng mở đường hòng trốn chiếu.", mascot: "Phải mở đường máu!" }
    ]
  },
  {
    id: "adv-def-stalemate",
    category: "Chương 5: Phòng thủ nâng cao",
    title: "Bài 5: Cạm bẫy hòa trượng (Stalemate tricks)",
    steps: [
      { fen: "8/8/8/8/8/5q2/5p1K/5k2 w - - 0 1", targetMove: "h2h3", note: "<b>Tránh hòa trượng:</b> Trắng đi Vua để tránh bị đối phương dụ vào thế bí.", mascot: "Cẩn thận đừng để đối thủ hết nước đi mà không bị chiếu nhé!" },
      { fen: "7k/7P/6K1/8/8/8/8/8 b - - 0 1", targetMove: "h8g8", note: "Đen không còn nước đi nào khác ngoài chờ Vua Trắng mắc sai lầm.", mascot: "Đôi khi đứng im là cách tốt nhất!" },
      { fen: "8/8/8/8/7p/7K/8/5k2 w - - 0 1", targetMove: "h3h4", note: "Trắng ăn Tốt để thoát khỏi thế bí.", mascot: "Ăn quân đúng lúc để sống sót!" },
      { fen: "8/8/8/6R1/8/8/5p1K/5k2 w - - 0 1", targetMove: "g5g4", note: "Xe Trắng di chuyển để không cản đường Vua tiến.", mascot: "Mở đường cho Vua di chuyển đi!" },
      { fen: "8/8/8/8/8/7p/7K/5k2 w - - 0 1", targetMove: "h2h1", note: "Trắng tự đưa mình vào thế hòa trượng khi biết không thể thắng.", mascot: "Bí cờ (Stalemate) là phao cứu sinh tuyệt vời!" }
    ]
  },
  {
    id: "adv-def-counterattack",
    category: "Chương 5: Phòng thủ nâng cao",
    title: "Bài 6: Phản công khi phòng thủ",
    steps: [
      { fen: "3r2k1/pp3ppp/2p5/8/4P3/2P2P2/PP3qPP/R1Q4K b - - 0 1", targetMove: "d8d2", note: "Thay vì co cụm phòng thủ, Đen đưa Xe xuống hàng 2 phản công mạnh mẽ.", mascot: "Phòng thủ tốt nhất là tấn công!" },
      { fen: "8/pp3ppp/2p5/8/4P3/2P2P2/PP1r2PP/R5K1 b - - 0 1", targetMove: "d2b2", note: "Đen ăn Tốt, đe dọa tiếp tục ăn Tốt a2 và phá nát hàng lang của Trắng.", mascot: "Tuyệt vời! Chúng ta đang chiếm ưu thế lớn." },
      { fen: "8/pp3ppp/2p5/8/4P3/2P2P2/Pr4PP/2R3K1 b - - 0 1", targetMove: "b2a2", note: "Tiếp tục tạo lợi thế vật chất.", mascot: "Ăn sạch Tốt của họ đi!" },
      { fen: "8/pp3ppp/2p5/8/4P3/2P2P2/r5PP/1R4K1 b - - 0 1", targetMove: "b7b6", note: "Bảo vệ Tốt b7, củng cố trận địa.", mascot: "An toàn là trên hết, bảo vệ Tốt nào!" },
      { fen: "8/p4ppp/1pp5/8/4P3/2P2P2/r5PP/3R2K1 b - - 0 1", targetMove: "g8f8", note: "Đưa Vua vào tham chiến ở tàn cuộc.", mascot: "Vua đã đến lúc phải ra trận!" }
    ]
  },
  {
    id: "endgame-opposition",
    category: "Chương 6: Tàn cuộc thực chiến",
    title: "Bài 7: Đối Vua (Opposition)",
    steps: [
      { fen: "8/8/8/8/8/4k3/8/4K3 w - - 0 1", targetMove: "e1d1", note: "<b>Đối Vua:</b> Trắng cần giữ Vua đối diện với Vua Đen để ngăn cản sự tiến lên.", mascot: "Nhìn thẳng vào mắt kẻ thù! Đừng nháy mắt!" },
      { fen: "8/8/8/8/8/3k4/8/3K4 w - - 0 1", targetMove: "d1c1", note: "Trắng tiếp tục giữ đối Vua khi Vua Đen lách sang một bên.", mascot: "Bám sát mọi bước đi của đối thủ!" },
      { fen: "8/8/8/8/8/2k5/8/2K5 w - - 0 1", targetMove: "c1b1", note: "Giữ đối Vua là chìa khóa để bảo vệ thế hòa hoặc chiến thắng.", mascot: "Kiên nhẫn là đức tính của nhà vô địch!" },
      { fen: "8/8/8/8/8/1k6/8/1K6 w - - 0 1", targetMove: "b1a1", note: "Tới sát mép bàn cờ, Trắng vẫn không nao núng.", mascot: "Không còn đường lùi nhưng ta vẫn vững vàng!" },
      { fen: "8/8/8/8/8/2k5/8/K7 w - - 0 1", targetMove: "a1b1", note: "Lấy lại đối Vua chéo hoặc đối Vua trực tiếp.", mascot: "Tuyệt đỉnh phòng thủ!" }
    ]
  },
  {
    id: "endgame-philidor",
    category: "Chương 6: Tàn cuộc thực chiến",
    title: "Bài 8: Thế Philidor (Hòa)",
    steps: [
      { fen: "8/8/8/8/8/4k3/4r3/3K4 b - - 0 1", targetMove: "e2h2", note: "<b>Thế Philidor:</b> Đen di chuyển Xe xuống hàng 3 (hoặc 6) để ngăn Vua Trắng tiến lên.", mascot: "Thiết lập hàng phòng ngự thép Philidor!" },
      { fen: "8/8/8/8/8/4k3/7r/2K5 b - - 0 1", targetMove: "h2g2", note: "Xe tiếp tục chạy dọc theo hàng ngang để giữ khoảng cách an toàn.", mascot: "Chỉ cần đứng gác ở đây là đủ!" },
      { fen: "8/8/8/8/8/4k3/6r1/1K6 b - - 0 1", targetMove: "g2f2", note: "Đen không cho Vua Trắng cơ hội ẩn nấp trước Tốt.", mascot: "Đừng vội, cứ từ từ chờ đợi." },
      { fen: "8/8/8/8/8/4k3/5r2/K7 b - - 0 1", targetMove: "f2e2", note: "Sẵn sàng di chuyển Xe xuống hàng cuối khi Tốt Trắng tiến lên.", mascot: "Chuẩn bị thay đổi chiến thuật nếu có biến!" },
      { fen: "8/8/8/8/8/4k3/4r3/1K6 b - - 0 1", targetMove: "e2d2", note: "Giữ vững hàng rào phòng ngự.", mascot: "Hòa cờ trong tầm tay rồi!" }
    ]
  },
  {
    id: "endgame-lucena",
    category: "Chương 6: Tàn cuộc thực chiến",
    title: "Bài 9: Thế Lucena (Thắng)",
    steps: [
      { fen: "1K6/1P6/8/8/8/8/4r3/3k4 w - - 0 1", targetMove: "b8a7", note: "<b>Xây cầu:</b> Trắng phải đưa Vua ra khỏi ô thăng phong của Tốt.", mascot: "Vua phải dọn đường cho Tốt tiến lên!" },
      { fen: "8/KP6/8/8/8/8/r7/3k4 w - - 0 2", targetMove: "a7b6", note: "Vua di chuyển zíc zắc để tránh chiếu.", mascot: "Tiến lên từng bước một cách cẩn thận!" },
      { fen: "8/1P6/1K6/8/8/8/1r6/3k4 w - - 0 3", targetMove: "b6c6", note: "Trắng chuẩn bị lấy Xe che chắn cho Vua.", mascot: "Sắp đến đích rồi!" },
      { fen: "8/1P6/2K5/8/8/8/2r5/3k4 w - - 0 4", targetMove: "c6d6", note: "Tiếp tục né chiếu và tạo khoảng trống để gọi Xe cứu viện.", mascot: "Kiên cường vượt qua hàng loạt phát chiếu!" },
      { fen: "8/1P6/3K4/8/8/8/3r4/3k4 w - - 0 5", targetMove: "d6c5", note: "Đến lúc Xe che cho Vua, Tốt phong cấp an toàn. (Lucena bridge).", mascot: "Chiếc cầu đã được xây, Tốt thăng cấp thành công!" }
    ]
  },
  {
    id: "endgame-vancura",
    category: "Chương 6: Tàn cuộc thực chiến",
    title: "Bài 10: Thế Vancura",
    steps: [
      { fen: "8/8/8/8/1P6/8/6R1/3k3K b - - 0 1", targetMove: "g2g3", note: "<b>Thế Vancura:</b> Xe Đen phòng thủ bằng cách tấn công Tốt thông từ phía ngang.", mascot: "Đánh ngang sườn là chiến thuật tuyệt hảo!" },
      { fen: "8/8/8/8/1P6/6r1/7K/3k4 b - - 0 1", targetMove: "g3g4", note: "Xe tiếp tục duy trì áp lực trên cột g và hàng ngang.", mascot: "Không cho Tốt và Vua Trắng phối hợp!" },
      { fen: "8/8/8/8/1P4r1/7K/8/3k4 b - - 0 1", targetMove: "g4b4", note: "Đen có thể ăn Tốt nếu Vua Trắng đi quá xa.", mascot: "Bắt gọn Tốt thông!" },
      { fen: "8/8/8/8/1r6/6K1/8/3k4 b - - 0 1", targetMove: "b4b3", note: "Xe chiếu Vua đẩy lùi đối thủ.", mascot: "Đẩy lùi Vua địch ra xa!" },
      { fen: "8/8/8/8/8/1r3K2/8/3k4 b - - 0 1", targetMove: "b3b4", note: "Giữ vững thế trận phòng ngự từ xa.", mascot: "Thế trận an toàn rồi!" }
    ]
  },
  {
    id: "endgame-kpvskp",
    category: "Chương 6: Tàn cuộc thực chiến",
    title: "Bài 11: Tốt chiến đấu (K+P vs K+P)",
    steps: [
      { fen: "8/8/4k3/4p3/4P3/4K3/8/8 w - - 0 1", targetMove: "e3d3", note: "Tính toán khoảng cách, dùng đối Vua để tạo lợi thế.", mascot: "Cuộc chiến của hai vị Vua!" },
      { fen: "8/8/3k4/4p3/4P3/3K4/8/8 w - - 0 2", targetMove: "d3c4", note: "Tiến lên chiếm không gian.", mascot: "Bóp nghẹt không gian của địch!" },
      { fen: "8/8/2k5/4p3/2K1P3/8/8/8 w - - 0 3", targetMove: "c4b4", note: "Trắng tìm đường đi vòng (outflanking).", mascot: "Đánh vòng ra sau lưng nào!" },
      { fen: "8/8/1k6/4p3/1K2P3/8/8/8 w - - 0 4", targetMove: "b4c4", note: "Duy trì áp lực, ép Vua Đen phải nhường đường.", mascot: "Ép họ phải mắc sai lầm!" },
      { fen: "8/8/2k5/4p3/2K1P3/8/8/8 w - - 0 5", targetMove: "c4d5", note: "Tuyệt vời, Trắng đã chiếm được vị trí đắc địa để bắt Tốt Đen.", mascot: "Bắt lấy Tốt địch và giành chiến thắng!" }
    ]
  },
  {
    id: "endgame-knight-pawn",
    category: "Chương 6: Tàn cuộc thực chiến",
    title: "Bài 12: Mã chống Tốt",
    steps: [
      { fen: "8/8/8/8/8/8/4p3/2N1K3 w - - 0 1", targetMove: "c1e2", note: "<b>Mã chặn Tốt:</b> Mã rất khó khăn để chặn Tốt biên, nhưng Tốt trung tâm thì dễ hơn.", mascot: "Nhảy Mã chặn ngay Tốt lại!" },
      { fen: "8/8/8/8/8/8/4N3/5K2 w - - 0 2", targetMove: "e2c3", note: "Đưa Mã về vị trí an toàn trước khi Vua Đen tới tiếp ứng.", mascot: "Lùi một bước để an toàn!" },
      { fen: "8/8/8/8/8/2N5/4K3/8 w - - 0 3", targetMove: "c3d5", note: "Mã phối hợp với Vua tạo rào cản vô hình.", mascot: "Mã và Vua kết hợp là vô địch!" },
      { fen: "8/8/8/3N4/8/3K4/8/8 w - - 0 4", targetMove: "d5f4", note: "Dùng Mã để chiếu hoặc kiểm soát các ô quan trọng.", mascot: "Ngựa phi tạo bất ngờ!" },
      { fen: "8/8/8/8/4kN2/8/8/8 w - - 0 5", targetMove: "f4e6", note: "Giữ Mã tránh xa tầm tấn công trực tiếp của Vua Đen.", mascot: "Cứ nhảy loanh quanh là an toàn!" }
    ]
  },
  {
    id: "boden_mate",
    category: "Đòn chiếu bí",
    title: "Boden's Mate (Mát Boden)",
    steps: [
      { fen: "2kr3r/pp1n1ppp/2p1p3/8/1b1P1B2/2N2Q1P/PPP2PP1/R4RK1 w - - 0 1", targetMove: "Qxc6+", note: "Tuyệt vời! Bắt đầu hy sinh Hậu để phá hủy lớp phòng thủ.", mascot: "Tuyệt vời!" },
      { fen: "2kr3r/pp1n1ppp/2Q1p3/8/1b1P1B2/2N4P/PPP2PP1/R4RK1 b - - 0 1", targetMove: "bxc6", note: "Đối thủ phải ăn Hậu, giờ Vua đã mở cờ.", mascot: "Tuyệt vời!" },
      { fen: "2kr3r/p2n1ppp/2p1p3/8/1b1P1B2/2N4P/PPP2PP1/R4RK1 w - - 0 2", targetMove: "Ba6#", note: "Tượng chéo góc kết liễu! Đây chính là Mát Boden.", mascot: "Tuyệt vời!" },
      { fen: "2kr4/pp3ppp/2p5/8/8/2b2B2/PPP2PPP/2KR4 w - - 0 1", targetMove: "Bg4+", note: "Hãy xem một vị trí khác, dồn Vua bằng Tượng.", mascot: "Tuyệt vời!" },
      { fen: "2kr4/pp3ppp/2p5/8/6B1/2b5/PPP2PPP/2KR4 b - - 1 1", targetMove: "Kc7", note: "Vua bị ép vào góc an toàn ảo. Hoàn hảo!", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "anastasia_mate",
    category: "Đòn chiếu bí",
    title: "Anastasia's Mate (Mát Anastasia)",
    steps: [
      { fen: "r1b2r1k/pp3ppp/8/3NN3/8/8/PPP2PPP/R2R2K1 w - - 0 1", targetMove: "Ne7+", note: "Đưa Mã vào e7 để khóa đường thoát của Vua.", mascot: "Tuyệt vời!" },
      { fen: "r1b2r1k/pp2Nppp/8/3N4/8/8/PPP2PPP/R2R2K1 b - - 1 1", targetMove: "Kh8", note: "Vua bị dồn vào góc. Đã đến lúc chuẩn bị đòn quyết định.", mascot: "Tuyệt vời!" },
      { fen: "r1b2r1k/pp2Nppp/8/3N4/8/8/PPP2PPP/R2R2K1 w - - 1 2", targetMove: "Rxh7+", note: "Hy sinh Xe táo bạo để mở cột h!", mascot: "Tuyệt vời!" },
      { fen: "r1b2r1k/pp2NppR/8/3N4/8/8/PPP2PPP/3R2K1 b - - 0 2", targetMove: "Kxh7", note: "Vua bắt buộc ăn Xe. Cột h đã hoàn toàn mở rộng.", mascot: "Tuyệt vời!" },
      { fen: "r1b2r2/pp2Nppk/8/3N4/8/8/PPP2PPP/3R2K1 w - - 0 3", targetMove: "Qh5#", note: "Hậu lao xuống h5 chiếu bí! Mát Anastasia kinh điển.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "legal_mate",
    category: "Đòn chiếu bí",
    title: "Légal's Mate (Mát Légal)",
    steps: [
      { fen: "r2qkbnr/ppp2ppp/2np4/4p3/2B1P1b1/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 4", targetMove: "Nxe5", note: "Bỏ mặc Hậu! Ăn Mã trung tâm để triển khai bẫy.", mascot: "Tuyệt vời!" },
      { fen: "r2qkbnr/ppp2ppp/2np4/4N3/2B1P1b1/8/PPPP1PPP/RNBQK2R b KQkq - 0 4", targetMove: "Bxd1", note: "Đen mắc bẫy và ăn Hậu. Trừng phạt ngay!", mascot: "Tuyệt vời!" },
      { fen: "r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/8/PPPP1PPP/RNBbK2R w KQkq - 0 5", targetMove: "Bxf7+", note: "Chiếu Vua bằng Tượng, buộc Vua phải di chuyển.", mascot: "Tuyệt vời!" },
      { fen: "r2qkbnr/ppp2Bpp/2np4/4N3/4P3/8/PPPP1PPP/RNBbK2R b KQkq - 0 5", targetMove: "Ke7", note: "Vua tiến lên e7. Chuẩn bị đòn kết liễu với Mã thứ hai.", mascot: "Tuyệt vời!" },
      { fen: "r2q1bnr/ppp1kBpp/2np4/4N3/4P3/8/PPPP1PPP/RNBbK2R w KQ - 1 6", targetMove: "Nd5#", note: "Chiếu bí bằng 3 quân nhẹ! Quá đẹp mắt.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "opera_mate",
    category: "Đòn chiếu bí",
    title: "Opera Box Mate (Mát Opera)",
    steps: [
      { fen: "rn3rk1/p4ppp/1p6/8/2B5/5Q2/PqP2PPP/R4RK1 w - - 0 1", targetMove: "Qxa8", note: "Morphy thường xuyên thí quân để mở đường.", mascot: "Tuyệt vời!" },
      { fen: "Qn3rk1/p4ppp/1p6/8/2B5/8/PqP2PPP/R4RK1 b - - 0 1", targetMove: "Nd7", note: "Đen phòng thủ. Trắng tiếp tục tấn công mạnh mẽ.", mascot: "Tuyệt vời!" },
      { fen: "Q4rk1/p2n1ppp/1p6/8/2B5/8/PqP2PPP/R4RK1 w - - 1 2", targetMove: "Bxf7+", note: "Phá vỡ cấu trúc Tốt bảo vệ Vua bằng Tượng.", mascot: "Tuyệt vời!" },
      { fen: "Q4rk1/p2n1Bpp/1p6/8/8/8/PqP2PPP/R4RK1 b - - 0 2", targetMove: "Kxf7", note: "Vua bị lộ diện hoàn toàn.", mascot: "Tuyệt vời!" },
      { fen: "Q4r2/p2n1kpp/1p6/8/8/8/PqP2PPP/R4RK1 w - - 0 3", targetMove: "Qd5+", note: "Chiếu bí! Sự phối hợp tuyệt hảo giữa Xe và Tượng.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "morphy_mate",
    category: "Đòn chiếu bí",
    title: "Morphy's Mate (Mát Morphy)",
    steps: [
      { fen: "r4rk1/pbpp1ppp/1p6/3N4/2B1q3/1Q6/PPP2PPP/1K1R3R w - - 0 1", targetMove: "Nf6+", note: "Đưa Mã vào để phá hủy lá chắn Tốt.", mascot: "Tuyệt vời!" },
      { fen: "r4rk1/pbpp1ppp/1p3N2/8/2B1q3/1Q6/PPP2PPP/1K1R3R b - - 1 1", targetMove: "gxf6", note: "Đen buộc phải ăn Mã, mở cột g quan trọng.", mascot: "Tuyệt vời!" },
      { fen: "r4rk1/pbpp1p1p/1p3p2/8/2B1q3/1Q6/PPP2PPP/1K1R3R w - - 0 2", targetMove: "Rd3", note: "Đưa Xe vào vị trí chiến đấu.", mascot: "Tuyệt vời!" },
      { fen: "r4rk1/pbpp1p1p/1p3p2/8/2B1q3/1Q1R4/PPP2PPP/1K5R b - - 1 2", targetMove: "Qxg2", note: "Đen cố gắng chống cự nhưng không kịp.", mascot: "Tuyệt vời!" },
      { fen: "r4rk1/pbpp1p1p/1p3p2/8/2B5/1Q1R4/PPP2PqP/1K5R w - - 0 3", targetMove: "Rg3+", note: "Chiếu bí trên cột g! Sức mạnh của Mát Morphy.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "smothered_mate",
    category: "Đòn chiếu bí",
    title: "Smothered Mate (Mát Thắt Cổ)",
    steps: [
      { fen: "r1b2r1k/pp4pp/8/4N3/2B5/8/PPP3PP/R4RK1 w - - 0 1", targetMove: "Nf7+", note: "Bắt đầu chuỗi chiếu bằng Mã. Khóa Vua vào góc.", mascot: "Tuyệt vời!" },
      { fen: "r1b2r1k/pp3Npp/8/8/2B5/8/PPP3PP/R4RK1 b - - 1 1", targetMove: "Kg8", note: "Vua chạy vào góc. Hãy tạo một đòn chiếu đôi.", mascot: "Tuyệt vời!" },
      { fen: "r1b2rk1/pp3Npp/8/8/2B5/8/PPP3PP/R4RK1 w - - 2 2", targetMove: "Nh6+", note: "Chiếu đôi bằng Hậu và Mã. Vua không thể trốn.", mascot: "Tuyệt vời!" },
      { fen: "r1b2rk1/pp4pN/7N/8/2B5/8/PPP3PP/R4RK1 b - - 3 2", targetMove: "Kh8", note: "Vua trở lại góc. Giờ là lúc hy sinh Hậu đẹp mắt!", mascot: "Tuyệt vời!" },
      { fen: "r1b2r1k/pp4pN/7N/8/2B5/8/PPP3PP/R4RK1 w - - 4 3", targetMove: "Qg8+", note: "Thắt cổ Vua đối phương bằng chính quân của họ!", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "isolated_pawn",
    category: "Cấu trúc Tốt",
    title: "Isolated Pawn (Tốt Cô Lập)",
    steps: [
      { fen: "rnbq1rk1/pp2bppp/4pn2/3p4/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 1", targetMove: "cxd5", note: "Đổi Tốt trung tâm để tạo Tốt cô lập cho Đen.", mascot: "Tuyệt vời!" },
      { fen: "rnbq1rk1/pp2bppp/4pn2/3P4/3P4/2N2N2/PP2BPPP/R1BQ1RK1 b - - 0 1", targetMove: "exd5", note: "Đen đã có Tốt cô lập ở d5. Nó mạnh nhưng cần bảo vệ.", mascot: "Tuyệt vời!" },
      { fen: "rnbq1rk1/pp2bppp/5n2/3p4/3P4/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 2", targetMove: "Ne5", note: "Chiếm cứ điểm e5 vững chắc trước Tốt cô lập.", mascot: "Tuyệt vời!" },
      { fen: "rnbq1rk1/pp2bppp/5n2/3pN3/3P4/2N5/PP2BPPP/R1BQ1RK1 b - - 1 2", targetMove: "Nc6", note: "Đen phát triển quân. Hãy duy trì kiểm soát khối chặn.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp2bppp/2n2n2/3pN3/3P4/2N5/PP2BPPP/R1BQ1RK1 w - - 2 3", targetMove: "Bf4", note: "Tuyệt! Tốt cô lập của Đen giờ là mục tiêu tấn công.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "doubled_pawns",
    category: "Cấu trúc Tốt",
    title: "Doubled Pawns (Tốt Chồng)",
    steps: [
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 5", targetMove: "d3", note: "Phát triển quân và chuẩn bị tạo cấu trúc Tốt chồng.", mascot: "Tuyệt vời!" },
      { fen: "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R b KQkq - 0 5", targetMove: "d6", note: "Đen đáp trả chắc chắn. Lên kế hoạch ghim Mã.", mascot: "Tuyệt vời!" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6", targetMove: "Bg5", note: "Ghim Mã Đen, gây áp lực lên cấu trúc cánh Vua.", mascot: "Tuyệt vời!" },
      { fen: "r1bqk2r/ppp2ppp/2np1n2/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R b KQkq - 1 6", targetMove: "h6", note: "Đen đuổi Tượng. Hãy mạnh dạn đổi quân!", mascot: "Tuyệt vời!" },
      { fen: "r1bqk2r/ppp2pp1/2np1n1p/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 7", targetMove: "Bxf6", note: "Tốt chồng hình thành! Cánh Vua Đen giờ đã suy yếu.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "backward_pawn",
    category: "Cấu trúc Tốt",
    title: "Backward Pawn (Tốt Lạc Hậu)",
    steps: [
      { fen: "r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/2P1PN2/PP1NBPPP/R1BQ1RK1 w - - 0 1", targetMove: "dxc5", note: "Tạo áp lực để hình thành Tốt lạc hậu.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp2bppp/2n1pn2/2Pp4/8/2P1PN2/PP1NBPPP/R1BQ1RK1 b - - 0 1", targetMove: "Bxc5", note: "Đen ăn lại. Quan sát cấu trúc Tốt của Đen.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp3ppp/2n1pn2/2bp4/8/2P1PN2/PP1NBPPP/R1BQ1RK1 w - - 0 2", targetMove: "b4", note: "Đẩy b4 để khóa Tốt c5 và tạo Tốt lạc hậu.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp3ppp/2n1pn2/2bp4/1P6/2P1PN2/P2NBPPP/R1BQ1RK1 b - - 0 2", targetMove: "Be7", note: "Đen lui quân. Cấu trúc của họ bắt đầu cứng nhắc.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp2bppp/2n1pn2/2p5/1P6/2P1PN2/P2NBPPP/R1BQ1RK1 w - - 1 3", targetMove: "b5", note: "Khóa chặt! Tốt Đen không thể tiến lên an toàn.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "passed_pawn",
    category: "Cấu trúc Tốt",
    title: "Passed Pawn (Tốt Thông)",
    steps: [
      { fen: "8/5p2/4pk2/3p4/P7/8/1P6/1K6 w - - 0 1", targetMove: "a5", note: "Bạn có Tốt thông ở cột a. Hãy đẩy nó lên!", mascot: "Tuyệt vời!" },
      { fen: "8/5p2/4pk2/P2p4/8/8/1P6/1K6 b - - 0 1", targetMove: "Ke7", note: "Vua Đen cố gắng can thiệp. Tiếp tục tiến bước.", mascot: "Tuyệt vời!" },
      { fen: "8/4kp2/4p3/P2p4/8/8/1P6/1K6 w - - 1 2", targetMove: "a6", note: "Không gì cản nổi! Tốt thông càng tiến càng nguy hiểm.", mascot: "Tuyệt vời!" },
      { fen: "8/4kp2/P3p3/3p4/8/8/1P6/1K6 b - - 0 2", targetMove: "Kd7", note: "Đen đang tuyệt vọng chạy theo. Cứ đi tiếp.", mascot: "Tuyệt vời!" },
      { fen: "8/3k1p2/P3p3/3p4/8/8/1P6/1K6 w - - 1 3", targetMove: "a7", note: "Sắp phong cấp rồi! Tốt thông mang lại chiến thắng.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "pawn_chains",
    category: "Cấu trúc Tốt",
    title: "Pawn Chains (Chuỗi Tốt)",
    steps: [
      { fen: "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3", targetMove: "d5", note: "Đẩy Tốt d5 để khóa trung tâm, tạo nền móng chuỗi Tốt.", mascot: "Tuyệt vời!" },
      { fen: "rnbqkbnr/pp1p1ppp/4p3/2pP4/4P3/8/PPP2PPP/RNBQKBNR b KQkq - 0 3", targetMove: "d6", note: "Đen phản công vào gốc của chuỗi. Hãy củng cố.", mascot: "Tuyệt vời!" },
      { fen: "rnbqkbnr/pp3ppp/3pp3/2pP4/4P3/8/PPP2PPP/RNBQKBNR w KQkq - 0 4", targetMove: "c4", note: "Đẩy c4 để củng cố đỉnh d5. Chuỗi Tốt vững chắc!", mascot: "Tuyệt vời!" },
      { fen: "rnbqkbnr/pp3ppp/3pp3/2pP4/2P1P3/8/PP3PPP/RNBQKBNR b KQkq - 0 4", targetMove: "Nf6", note: "Đen phát triển Mã. Bạn cần bảo vệ cấu trúc này.", mascot: "Tuyệt vời!" },
      { fen: "rnbqkb1r/pp3ppp/3ppn2/2pP4/2P1P3/8/PP3PPP/RNBQKBNR w KQkq - 1 5", targetMove: "Nc3", note: "Bảo vệ chuỗi bằng Mã. Một bức tường không thể xuyên thủng.", mascot: "Tuyệt vời!" }
    ]
  },
  {
    id: "hanging_pawns",
    category: "Cấu trúc Tốt",
    title: "Hanging Pawns (Tốt Treo)",
    steps: [
      { fen: "r1bq1rk1/pp3ppp/2n1pn2/3p4/2PP4/2N2N2/PP1QBPPP/R4RK1 w - - 0 1", targetMove: "cxd5", note: "Đổi Tốt để tạo cấu trúc Tốt treo cho Đen.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp3ppp/2n1pn2/3P4/3P4/2N2N2/PP1QBPPP/R4RK1 b - - 0 1", targetMove: "Nxd5", note: "Đen giữ Tốt bằng Mã. Tiếp tục trao đổi.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp3ppp/2n1p3/3n4/3P4/2N2N2/PP1QBPPP/R4RK1 w - - 0 2", targetMove: "Nxd5", note: "Tiêu diệt quân bảo vệ để lộ rõ Tốt treo.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp3ppp/2n1p3/3N4/3P4/5N2/PP1QBPPP/R4RK1 b - - 0 2", targetMove: "exd5", note: "Đen có cặp Tốt treo c5-d5. Linh hoạt nhưng dễ rụng.", mascot: "Tuyệt vời!" },
      { fen: "r1bq1rk1/pp3ppp/2n5/3p4/3P4/5N2/PP1QBPPP/R4RK1 w - - 0 3", targetMove: "Rfe1", note: "Đưa Xe vào nhắm mục tiêu. Khai thác nhược điểm ngay!", mascot: "Tuyệt vời!" }
    ]
  }
];

const LESSON_HINTS = {
    "pawn": [
        {
            "moves": {
                "e2e3": "Đi 1 ô cũng đúng luật, nhưng bài này tập đi 2 ô: e2 → e4!",
                "e2e5": "Tốt chỉ đi tối đa 2 ô ở nước đầu tiên!"
            },
            "illegal": "Tốt chỉ đi thẳng về phía trước, không đi ngang hay đi lùi!",
            "wrong": "Bài này tập đẩy Tốt e2 lên e4 để chiếm trung tâm."
        },
        {
            "moves": {
                "e4e5": "Đi thẳng lên e5 thì không ăn được ai. Tốt ăn CHÉO: e4 → d5!"
            },
            "illegal": "Tốt ăn quân theo đường chéo phía trước!",
            "wrong": "Tốt đen d5 nằm chéo phía trước Tốt e4. Ăn nó!"
        },
        {
            "illegal": "Tốt chỉ đi thẳng!",
            "wrong": "Đi Tốt đen 1 ô xuống c6."
        },
        {
            "illegal": "Tốt ăn chéo!",
            "wrong": "Tốt trắng ăn chéo d5 x c6."
        },
        {
            "illegal": "Tốt ăn chéo!",
            "wrong": "Tốt đen ăn chéo b7 x c6."
        }
    ],
    "pawn-block": [
        {
            "moves": {
                "e4e5": "Tốt KHÔNG ăn thẳng! Tốt đen e5 chắn trước mặt nên Tốt e4 đứng im. Hãy ăn chéo sang d5.",
                "e4f5": "Ô f5 trống. Tốt chỉ đi chéo khi có quân địch để ăn."
            },
            "illegal": "Tốt đi thẳng nhưng ăn chéo. Đường thẳng đang bị chặn rồi!",
            "wrong": "Tốt e4 bị chặn, chỉ còn cách ăn chéo sang d5."
        },
        {
            "illegal": "Tốt đi thẳng!",
            "wrong": "Tốt đen tiến lên e4."
        },
        {
            "illegal": "Tốt đi thẳng!",
            "wrong": "Tốt trắng lên d6."
        },
        {
            "illegal": "Tốt ăn chéo!",
            "wrong": "Tốt d3 ăn chéo Tốt đen e4."
        },
        {
            "illegal": "Tốt đi thẳng!",
            "wrong": "Tiến Tốt e4 lên e5."
        }
    ],
    "pawn-march": [
        {
            "moves": {
                "a2a3": "Đi 1 ô cũng đúng luật, nhưng bài này tập đi 2 ô: a2 → a4!",
                "a2a5": "Tốt chỉ đi tối đa 2 ô ở nước đầu tiên!"
            },
            "illegal": "Tốt chỉ đi thẳng về phía trước!",
            "wrong": "Nước đầu, đẩy Tốt a2 đi 2 ô lên a4."
        },
        {
            "moves": {
                "a4a6": "Hết lượt tăng tốc rồi! Từ nước thứ hai, Tốt chỉ đi 1 ô: a4 → a5.",
                "a4a3": "Tốt không bao giờ đi lùi!"
            },
            "illegal": "Từ nước thứ hai, Tốt chỉ đi 1 ô và không đi lùi!",
            "wrong": "Đẩy Tốt lên a5."
        },
        {
            "moves": {
                "a5a7": "Tốt chỉ đi 1 ô mỗi lần!",
                "a5a4": "Tốt không bao giờ đi lùi!"
            },
            "illegal": "Tốt chỉ đi 1 ô về phía trước!",
            "wrong": "Đẩy Tốt lên a6."
        },
        {
            "moves": {
                "a6a8": "Từng ô một thôi: lên a7 trước!",
                "a6a5": "Tốt không bao giờ đi lùi!"
            },
            "illegal": "Tốt chỉ đi 1 ô về phía trước!",
            "wrong": "Đẩy Tốt lên a7."
        },
        {
            "illegal": "Tốt chỉ đi 1 ô về phía trước!",
            "wrong": "Đẩy Tốt lên a8 để phong cấp."
        }
    ],
    "rook": [
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Mục tiêu là Tốt c6: chạy Xe thẳng lên theo cột c."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Tốt g6 nằm cùng hàng 6 với Xe: chạy ngang sang phải!"
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Lùi xe xuống ăn g2."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Xe chạy ngang sang a2."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Tiến xe lên ăn a3."
        }
    ],
    "rook-block": [
        {
            "moves": {
                "a1a5": "Xe không nhảy qua Tốt a4 được! Đường lên cột a đã bị chặn.",
                "a1a6": "Xe không nhảy qua Tốt a4 được! Đường lên cột a đã bị chặn.",
                "a1a7": "Xe không nhảy qua Tốt a4 được! Đường lên cột a đã bị chặn.",
                "a1a8": "Xe không nhảy qua Tốt a4 để ăn Mã được! Hãy tìm đường khác."
            },
            "illegal": "Xe đi THẲNG",
            "wrong": "Đường dọc bị chặn, hãy chạy ngang ăn Tượng h1."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Tiến thẳng h1 lên h8."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Chạy ngang h8 sang a8."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Lùi a8 xuống a4."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Sang e4 chiếu Vua."
        }
    ],
    "rook-route": [
        {
            "moves": {
                "a1f6": "Xe không đi chéo! Muốn tới f6 phải rẽ góc vuông: sang f1 trước.",
                "a1a6": "Đi a6 cũng là đường vòng hay, nhưng hôm nay mình rẽ ở f1 nhé!"
            },
            "illegal": "Xe đi THẲNG",
            "wrong": "Bài này đi đường vòng: a1 → f1 → f6."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Xe đã cùng cột f với Tốt, chạy thẳng lên f6!"
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Sang g6."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Sang b6."
        },
        {
            "illegal": "Xe đi THẲNG",
            "wrong": "Xuống b2."
        }
    ],
    "bishop": [
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Tốt f7 nằm trên đường chéo c4 → d5 → e6 → f7."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Lùi về b3."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Ăn a2."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Đến d5."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Ăn g2."
        }
    ],
    "bishop-color": [
        {
            "moves": {
                "c1d3": "Tốt d3 đứng ô TRẮNG, Tượng ô đen không bao giờ tới được!"
            },
            "illegal": "Tượng chỉ đi chéo, nên luôn ở ô cùng một màu!",
            "wrong": "Tìm Tốt đứng ô ĐEN: đó là Tốt h6."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Lên f8."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Về b4."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Đến d2."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Xuống e1."
        }
    ],
    "bishop-zigzag": [
        {
            "moves": {
                "c1c5": "Tượng không đi thẳng lên c5 được! Phải đi chéo 2 lần: c1 → e3 → c5.",
                "c1a3": "Đi a3 cũng tới được c5, nhưng bài này đi đường e3 nhé!"
            },
            "illegal": "Tượng đi CHÉO",
            "wrong": "Đưa Tượng lên e3 trước."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Từ e3 đi chéo lên bên trái: e3 → d4 → c5."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Lùi về b4."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Đến e1."
        },
        {
            "illegal": "Tượng đi CHÉO",
            "wrong": "Lên f2."
        }
    ],
    "knight": [
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Tốt d5 cách Mã c3 đúng một bước chữ L."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Đến f6."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Đến h7."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Về f6."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Về e4."
        }
    ],
    "knight-jump": [
        {
            "moves": {
                "g1h3": "Mã lên h3 cũng đúng luật, nhưng Mã ở mép bàn cờ rất yếu. Nhảy vào f3, gần trung tâm hơn nhé!"
            },
            "illegal": "Mã đi chữ L",
            "wrong": "Nhảy Mã g1 qua hàng Tốt lên f3."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Mã đen b8 lên c6."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Mã trắng b1 lên c3."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Mã đen g8 lên f6."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Mã trắng f3 lên e5."
        }
    ],
    "knight-chain": [
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Ăn Tốt d5 trước: c3 → d5."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Từ d5 nhảy chữ L tới f6."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Từ f6 nhảy chữ L tới h7."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Lùi về f6."
        },
        {
            "illegal": "Mã đi chữ L",
            "wrong": "Ăn g4."
        }
    ],
    "queen": [
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Xe d5 nằm trên đường chéo a2 → b3 → c4 → d5."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Lên d8."
        },
        {
            "illegal": "Luật cờ vua",
            "wrong": "Vua h8 sang g7."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Hậu d8 sang e7."
        },
        {
            "illegal": "Luật cờ vua",
            "wrong": "Vua g7 lùi h6."
        }
    ],
    "queen-lines": [
        {
            "moves": {
                "d1a4": "Ăn Tượng cũng được, nhưng bài này tập đi THẲNG trước: ăn Xe d7!"
            },
            "illegal": "Hậu đi thẳng hoặc chéo, không nhảy qua quân!",
            "wrong": "Chạy thẳng lên cột d ăn Xe."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo, không nhảy qua quân!",
            "wrong": "Giờ đi CHÉO: d7 → c6 → b5 → a4."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Hậu a4 sang g4."
        },
        {
            "illegal": "Luật cờ vua",
            "wrong": "Vua sang f8."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Hậu g4 xuống g2."
        }
    ],
    "queen-safe": [
        {
            "moves": {
                "d1d7": "Khoan! Tốt d7 được Vua e8 bảo vệ. Hậu ăn Tốt sẽ bị Vua ăn mất: mất 9 điểm để lấy 1 điểm!"
            },
            "illegal": "Hậu đi thẳng hoặc chéo, không nhảy qua quân!",
            "wrong": "Hãy ăn Mã a4, quân không có ai bảo vệ."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Lên c6."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Lùi c4."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Lên c5."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo",
            "wrong": "Lên c7."
        }
    ],
    "king": [
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Tốt d3 ở ngay bên trái Vua: bước sang ăn nó!"
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Lùi một ô về d2 ăn Tốt!"
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Bước sang ngang e2."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Tiến lên f2."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Ăn Tốt g2."
        }
    ],
    "king-safe": [
        {
            "moves": {
                "e3f3": "Vua không được ăn f3 vì Mã h4 đang bảo vệ Tốt đó. Bước vào là bị Mã ăn ngay!",
                "e3e2": "Ô e2 đang bị Tốt d3 và Tốt f3 tấn công, Vua không được vào!"
            },
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Hãy lùi lại d3."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Tránh sang c3 an toàn hơn."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Lùi ra b3."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Lùi tiếp a3."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Lùi về a2."
        }
    ],
    "king-walk": [
        {
            "moves": {
                "e1e3": "Vua chỉ đi 1 ô mỗi lần!",
                "e1e4": "Vua chỉ đi 1 ô mỗi lần!"
            },
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Đi thẳng lên e2."
        },
        {
            "moves": {
                "e2e4": "Vua chỉ đi 1 ô mỗi lần!"
            },
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Đi thẳng lên e3."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Đi thẳng lên d4."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Ăn Tốt e4."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Tiến lên d5."
        }
    ],
    "value": [
        {
            "moves": {
                "d1b1": "Mã chỉ đáng 3 điểm, còn Hậu đáng 9 điểm. Ăn Hậu lời hơn nhiều!"
            },
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Chọn quân đáng giá nhất: Hậu d7."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Tiếp tục ăn Mã b1."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Đuổi theo Tượng c6 qua c1."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Ăn Tượng c5."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Lên c8 chiếu Vua."
        }
    ],
    "which-piece": [
        {
            "moves": {
                "a1d5": "Xe chỉ đi thẳng, từ a1 không tới được d5!",
                "c1d5": "Tượng c1 bị Mã f4 chắn đường chéo, và d5 cũng không nằm trên đường chéo của nó!"
            },
            "illegal": "Quân đó không đi tới d5 được. Nhớ lại cách đi của từng quân nhé!",
            "wrong": "Chỉ có Mã f4 nhảy chữ L tới được d5."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Nhảy Mã đến c7."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Nhảy Mã đến a6."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Nhảy Mã đến b4."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Nhảy Mã đến c2."
        }
    ],
    "castle": [
        {
            "moves": {
                "e1f1": "Đi 1 ô sang f1 chưa phải nhập thành. Nhập thành là Vua đi 2 ô sang g1, Xe tự nhảy qua!"
            },
            "illegal": "Nhập thành: nhấn Vua e1 rồi chọn ô g1.",
            "wrong": "Nhập thành: nhấn Vua e1 rồi chọn ô g1."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe ra giữa e1."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe lên e2."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe lên e3."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe lên e4."
        }
    ],
    "castle-long": [
        {
            "moves": {
                "e1d1": "Đi 1 ô sang d1 chưa phải nhập thành. Nhập thành cánh Hậu: Vua đi 2 ô sang c1!"
            },
            "illegal": "Nhập thành cánh Hậu: nhấn Vua e1 rồi chọn ô c1.",
            "wrong": "Nhập thành cánh Hậu: nhấn Vua e1 rồi chọn ô c1."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe ra giữa e1."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe lên e2."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe lên e3."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe lên e4."
        }
    ],
    "promote": [
        {
            "illegal": "Tốt chỉ đi thẳng về phía trước!",
            "wrong": "Đẩy Tốt e7 lên e8 để phong cấp thành Hậu."
        },
        {
            "illegal": "Hậu đi ngang, dọc, chéo!",
            "wrong": "Hậu lùi về e5."
        },
        {
            "illegal": "Hậu đi ngang, dọc, chéo!",
            "wrong": "Hậu lùi về e4."
        },
        {
            "illegal": "Hậu đi ngang, dọc, chéo!",
            "wrong": "Hậu lùi về e3."
        },
        {
            "illegal": "Hậu đi ngang, dọc, chéo!",
            "wrong": "Hậu lùi về e2."
        }
    ],
    "enpassant": [
        {
            "moves": {
                "e5e6": "Đi thẳng lên e6 là bỏ lỡ cơ hội! Bắt qua đường chỉ làm được NGAY nước này: e5 ăn chéo sang d6."
            },
            "illegal": "Tốt e5 ăn chéo sang d6, dù ô d6 đang trống!",
            "wrong": "Bắt qua đường: Tốt e5 ăn chéo sang d6."
        },
        {
            "illegal": "Tốt đi thẳng!",
            "wrong": "Tiến lên d7."
        },
        {
            "illegal": "Tốt đi thẳng phong cấp!",
            "wrong": "Phong cấp tại d8."
        },
        {
            "illegal": "Hậu đi!",
            "wrong": "Hậu lùi về d5."
        },
        {
            "illegal": "Hậu đi!",
            "wrong": "Hậu lùi về d4."
        }
    ],
    "fork": [
        {
            "moves": {
                "e4d6": "Mã d6 chỉ dọa được Hậu. Ô f6 dọa được CẢ Vua g8 lẫn Hậu e8!"
            },
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Tìm ô Mã dọa được cả Vua lẫn Hậu cùng lúc: f6."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Đen chạy Vua."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Mã ăn Hậu e8."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Mã về d6."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Mã về c4."
        }
    ],
    "queen-fork": [
        {
            "moves": {
                "d1d8": "Hậu d8 chiếu Vua nhưng Xe a8 ăn lại mất Hậu! Tìm ô an toàn hơn."
            },
            "illegal": "Hậu đi thẳng hoặc chéo, không nhảy qua quân!",
            "wrong": "Tìm ô Hậu vừa chiếu Vua g8 theo đường chéo, vừa nhắm Xe a8 (d5)."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo!",
            "wrong": "Vua đen chạy."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo!",
            "wrong": "Hậu ăn Xe a8."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo!",
            "wrong": "Hậu về a5."
        },
        {
            "illegal": "Hậu đi thẳng hoặc chéo!",
            "wrong": "Hậu về a4."
        }
    ],
    "pawn-fork": [
        {
            "illegal": "Tốt chỉ đi thẳng lên, và ăn chéo!",
            "wrong": "Đẩy Tốt lên 1 ô, đứng giữa hai Mã để dọa cả hai."
        },
        {
            "illegal": "Tốt đi!",
            "wrong": "Đen chạy Mã."
        },
        {
            "illegal": "Tốt đi!",
            "wrong": "Tốt ăn Mã e6."
        },
        {
            "illegal": "Tốt đi!",
            "wrong": "Tốt tiến e7."
        },
        {
            "illegal": "Tốt đi!",
            "wrong": "Tốt phong cấp e8."
        }
    ],
    "pin": [
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Kéo Xe sang cột e để Hậu e7 bị kẹp giữa Xe và Vua e8."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Đen đi Tốt."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe ăn Hậu e7."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Vua ăn lại."
        },
        {
            "illegal": "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!",
            "wrong": "Vua trắng tiến f2."
        }
    ],
    "skewer": [
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Chiếu Vua theo hàng 4 để Vua phải chạy, lộ ra Hậu h4: Xe lên a4."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Vua chạy c5."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Hàng 4 đã thông, chạy Xe sang h4 ăn Hậu!"
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe lùi về g4."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe lùi về f4."
        }
    ],
    "discovered": [
        {
            "moves": {
                "e4f6": "Mã f6 chiếu Vua nhưng không ăn được gì. Nhảy vào d6 để vừa ăn Hậu vừa mở đường cho Xe!"
            },
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Nhảy Mã ăn Hậu d6, Xe e1 sẽ lộ ra chiếu Vua."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Đen chạy Vua d7."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe trắng qua d1."
        },
        {
            "illegal": "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!",
            "wrong": "Mã rút c4."
        },
        {
            "illegal": "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!",
            "wrong": "Xe rút e1."
        }
    ]
,
  "combo_attraction": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_deflection": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_interference": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_remove_defender": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_clearance": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_overloading": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_xray": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_zwischenzug": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_windmill": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "combo_zugzwang": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "opening_italian": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "opening_ruy_lopez": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "opening_queens_gambit": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "opening_sicilian": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "opening_french": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "opening_caro_kann": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "greek-gift-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "greek-gift-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "greek-gift-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "greek-gift-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "greek-gift-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "uncastled-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "uncastled-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "uncastled-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "uncastled-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "uncastled-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "pawn-storm-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "pawn-storm-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "pawn-storm-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "pawn-storm-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "pawn-storm-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "weak-f7-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "weak-f7-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "weak-f7-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "weak-f7-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "weak-f7-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "overload-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "overload-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "overload-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "overload-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "overload-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "open-file-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "open-file-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "open-file-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "open-file-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "open-file-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "back-rank-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "back-rank-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "back-rank-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "back-rank-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "back-rank-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "smothered-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "smothered-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "smothered-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "smothered-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "smothered-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "destroy-pawn-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "destroy-pawn-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "destroy-pawn-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "destroy-pawn-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "destroy-pawn-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "dev-lead-1": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "dev-lead-2": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "dev-lead-3": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "dev-lead-4": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "dev-lead-5": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "adv-def-prophylaxis": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "adv-def-mate": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "adv-def-blockade": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "adv-def-perpetual": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "adv-def-stalemate": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "adv-def-counterattack": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "endgame-opposition": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "endgame-philidor": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "endgame-lucena": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "endgame-vancura": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "endgame-kpvskp": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "endgame-knight-pawn": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "boden_mate": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "anastasia_mate": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "legal_mate": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "opera_mate": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "morphy_mate": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "smothered_mate": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "isolated_pawn": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "doubled_pawns": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "backward_pawn": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "passed_pawn": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "pawn_chains": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ],
  "hanging_pawns": [
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" },
    { wrong: "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!" }
  ]
};
