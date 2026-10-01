const OLD_LESSON_ORDER = ["pawn", "rook", "bishop", "knight", "queen", "fork", "pin", "castle", "promote", "mate1", "escape", "block", "capture", "opening"];

const ROOK_RULE = "Xe chỉ đi THẲNG (dọc hoặc ngang), không đi chéo và không nhảy qua quân khác!";
const BISHOP_RULE = "Tượng chỉ đi CHÉO, không đi thẳng và không nhảy qua quân khác!";
const KNIGHT_RULE = "Mã đi hình chữ L: 2 ô thẳng rồi rẽ 1 ô ngang!";
const KING_RULE = "Vua chỉ đi 1 ô mỗi lần, và không được bước vào ô đang bị địch tấn công!";

const ROADMAP = [
    {
        "id": "pawn",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
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
                "mascot": "Tốt ăn chéo bắt quân địch!",
                "reply": "c7c6",
                "replyNote": "👀 Giờ thử đi Tốt 1 ô nhé!"
            },
            {
                "fen": "rnbqkbnr/pp2pppp/2p5/3P4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3",
                "targetMove": "d5c6",
                "note": "♟ Tốt trắng lại ăn chéo tiếp!",
                "mascot": "Tiếp tục ăn chéo quân địch!",
                "reply": "b7c6",
                "replyNote": "👀 Tốt đen ăn lại Tốt trắng!"
            }
        ]
    },
    {
        "id": "pawn-block",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
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
                },
                "reply": "e5e4",
                "replyNote": "👀 Đường trống rồi, Tốt đen tiến lên!"
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
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
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
        "id": "enpassant",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
        "title": "Bắt Tốt Qua Đường",
        "steps": [
            {
                "fen": "4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 2",
                "targetMove": "e5d6",
                "note": "⚡ Tốt đen vừa đi 2 ô → ăn <b>qua đường</b> sang d6!",
                "mascot": "Bắt Tốt qua đường!"
            },
            {
                "fen": "4k3/8/8/5Pp1/8/8/8/4K3 w - g6 0 2",
                "targetMove": "f5g6",
                "note": "⚡ Tốt g7 vừa nhảy 2 ô qua mặt → ăn qua đường sang <b>g6</b>",
                "mascot": "Không cho lách qua!"
            },
            {
                "fen": "rnbqkbnr/ppp1p1pp/8/3pPp2/8/8/PPPP1PPP/RNBQKBNR w KQkq f6 0 3",
                "targetMove": "e5f6",
                "note": "⚡ Ván cờ thật: Tốt f7 vừa lên f5 → ăn qua đường sang <b>f6</b>",
                "mascot": "Chỉ được ăn ngay nước kế tiếp!"
            }
        ]
    },
    {
        "id": "promote",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
        "title": "Phong Cấp Biến Hình",
        "steps": [
            {
                "fen": "7k/4P2p/8/p7/8/8/8/6K1 w - - 0 1",
                "targetMove": "e7e8",
                "note": "👑 Tốt về hàng cuối → <b>biến hình Hậu</b>!",
                "mascot": "Tốt nhỏ thành Hậu!",
                "reply": "h8g7",
                "replyNote": "👀 Vua đen tránh sang g7."
            },
            {
                "fen": "4Q3/6kp/8/p7/8/8/8/6K1 w - - 1 2",
                "targetMove": "e8e5",
                "note": "👑 Hậu mới chiếu Vua từ <b>e5</b>",
                "mascot": "Hậu mạnh nhất bàn cờ!",
                "reply": "g7g6",
                "replyNote": "👀 Vua đen chạy g6."
            },
            {
                "fen": "8/7p/6k1/p3Q3/8/8/8/6K1 w - - 3 3",
                "targetMove": "e5a5",
                "note": "👑 Hậu ăn Tốt a5 chặn Đen phong cấp",
                "mascot": "Không cho Tốt đen về đích!"
            }
        ]
    },
    {
        "id": "pawn-fork",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
        "title": "Tốt Chĩa Đôi",
        "steps": [
            {
                "fen": "4k3/8/2n1n3/8/3P4/8/8/4K3 w - - 0 1",
                "targetMove": "d4d5",
                "note": "♟ Tốt nhỏ cũng <b>chĩa đôi</b> được hai Mã!",
                "mascot": "Tốt 1 điểm dọa 2 Mã 6 điểm!",
                "reply": "c6b8",
                "replyNote": "👀 Mã c6 bỏ chạy, Mã e6 đành chịu mất."
            },
            {
                "fen": "1n2k3/8/4n3/3P4/8/8/8/4K3 w - - 1 2",
                "targetMove": "d5e6",
                "note": "♟ Ăn Mã e6",
                "mascot": "Lấy 3 điểm!"
            },
            {
                "fen": "4k3/8/8/2n1n3/8/3P4/8/4K3 w - - 0 1",
                "targetMove": "d3d4",
                "note": "♟ Thêm lần nữa: đẩy Tốt dọa <b>cả hai Mã</b>",
                "mascot": "Mã không ăn được Tốt d4!",
                "reply": "c5e6",
                "replyNote": "👀 Mã c5 chạy về e6."
            },
            {
                "fen": "4k3/8/4n3/4n3/3P4/8/8/4K3 w - - 1 2",
                "targetMove": "d4e5",
                "note": "♟ Ăn Mã e5",
                "mascot": "Tốt nhỏ, công lớn!"
            }
        ]
    },
    {
        "id": "pawn-race",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
        "title": "Tốt Chạy Về Đích",
        "steps": [
            {
                "fen": "8/8/8/P7/5k2/8/8/7K w - - 0 1",
                "targetMove": "a5a6",
                "note": "🏁 Vua đen ở quá xa: cứ đẩy Tốt!",
                "mascot": "Chạy đua!",
                "reply": "f4e5",
                "replyNote": "👀 Vua đen đuổi theo."
            },
            {
                "fen": "8/8/P7/4k3/8/8/8/7K w - - 1 2",
                "targetMove": "a6a7",
                "note": "⬆️ Lên a7",
                "mascot": "Sắp tới đích!",
                "reply": "e5d6",
                "replyNote": "👀 Vua đen vẫn không kịp."
            },
            {
                "fen": "8/P7/3k4/8/8/8/8/7K w - - 1 3",
                "targetMove": "a7a8",
                "note": "👑 Về đích, phong Hậu!",
                "mascot": "Thắng cuộc đua!"
            }
        ]
    },
    {
        "id": "passed_pawn",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
        "title": "Passed Pawn (Tốt Thông)",
        "steps": [
            {
                "fen": "8/5p2/4pk2/3p4/P7/8/1P6/1K6 w - - 0 1",
                "targetMove": "a4a5",
                "note": "Bạn có Tốt thông ở cột a. Hãy đẩy nó lên!",
                "mascot": "Tuyệt vời!",
                "reply": "f6e7",
                "replyNote": "👀 Vua Đen cố gắng can thiệp. Tiếp tục tiến bước."
            },
            {
                "fen": "8/4kp2/4p3/P2p4/8/8/1P6/1K6 w - - 1 2",
                "targetMove": "a5a6",
                "note": "Không gì cản nổi! Tốt thông càng tiến càng nguy hiểm.",
                "mascot": "Tuyệt vời!",
                "reply": "e7d7",
                "replyNote": "👀 Đen đang tuyệt vọng chạy theo. Cứ đi tiếp."
            },
            {
                "fen": "8/3k1p2/P3p3/3p4/8/8/1P6/1K6 w - - 1 3",
                "targetMove": "a6a7",
                "note": "Sắp phong cấp rồi! Tốt thông mang lại chiến thắng.",
                "mascot": "Tuyệt vời!"
            }
        ]
    },
    {
        "id": "luft",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
        "title": "Mở Cửa Sổ Cho Vua",
        "steps": [
            {
                "fen": "4r1k1/5ppp/8/8/8/8/1B3PPP/6K1 w - - 0 1",
                "targetMove": "h2h3",
                "goal": "stop-mate",
                "note": "🪟 Xe đen dọa chiếu bí hàng cuối. Mở <b>cửa sổ</b> cho Vua!",
                "mascot": "Vua cần lối thoát!"
            },
            {
                "fen": "3q2k1/5ppp/8/8/8/8/1B3PPP/6K1 w - - 0 1",
                "targetMove": "g2g3",
                "goal": "stop-mate",
                "note": "🪟 Hậu đen dọa Qd1#. Mở ô thoát cho Vua!",
                "mascot": "Cửa sổ cứu Vua!"
            }
        ]
    },
    {
        "id": "safe-pawn-guard",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 1: ♟ Quân Tốt",
        "title": "Đừng Để Tốt Ăn Hậu",
        "steps": [
            {
                "fen": "6k1/5ppp/4p3/3n4/2P5/8/5PPP/3Q2K1 w - - 0 1",
                "targetMove": "d1d5",
                "reply": "e6d5",
                "replyNote": "😱 Ôi! Tốt e6 ăn mất Hậu. Đổi Hậu 9 điểm lấy Mã 3 điểm là lỗ to!",
                "note": "🤔 Mã d5 đứng giữa bàn. Thử cho <b>Hậu</b> ăn Mã xem sao!",
                "mascot": "Hậu lao vào ăn Mã!"
            },
            {
                "fen": "6k1/5ppp/4p3/3n4/2P5/8/5PPP/3Q2K1 w - - 0 1",
                "targetMove": "c4d5",
                "note": "✅ Ô d5 có Tốt e6 canh. Hãy ăn Mã bằng <b>quân nhỏ</b>: Tốt c4!",
                "mascot": "Tốt 1 điểm đổi Mã 3 điểm: lời!",
                "before": {
                    "arrows": [
                        [
                            "e6",
                            "d5",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "d5",
                            "guard"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "rook",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 2: ♜ Quân Xe",
        "title": "Xe Tải Gom Rác (Đường Thẳng)",
        "steps": [
            {
                "fen": "k7/8/2p3p1/8/p5p1/2R5/8/6K1 w - - 0 1",
                "targetMove": "c3c6",
                "note": "♜ Xe đi <b>thẳng</b> lên: ăn Tốt c6",
                "mascot": "Chạy thẳng lên gom rác!",
                "reply": "a8a7",
                "replyNote": "👀 Vua đen lùi về a7."
            },
            {
                "fen": "8/k7/2R3p1/8/p5p1/8/8/6K1 w - - 1 2",
                "targetMove": "c6g6",
                "note": "♜ Rẽ <b>ngang</b> sang phải: ăn Tốt g6",
                "mascot": "Lướt ngang thật nhanh!",
                "reply": "a7b7",
                "replyNote": "👀 Vua đen bước lên b7."
            },
            {
                "fen": "8/1k6/6R1/8/p5p1/8/8/6K1 w - - 1 3",
                "targetMove": "g6g4",
                "note": "♜ Chạy <b>thẳng xuống</b>: ăn Tốt g4",
                "mascot": "Xe đi lùi cũng được!",
                "reply": "b7c6",
                "replyNote": "👀 Vua đen tới c6."
            },
            {
                "fen": "8/8/2k5/8/p5R1/8/8/6K1 w - - 1 4",
                "targetMove": "g4a4",
                "note": "♜ Rẽ ngang sang trái: ăn nốt Tốt a4",
                "mascot": "Sạch bong cả bàn cờ!"
            }
        ]
    },
    {
        "id": "rook-block",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 2: ♜ Quân Xe",
        "title": "Xe Không Nhảy Qua Quân",
        "steps": [
            {
                "fen": "n3k3/8/8/8/P7/8/4K3/R6b w - - 0 1",
                "targetMove": "a1h1",
                "note": "♜ Tốt a4 chắn cột a, Xe <b>không nhảy</b> qua được → đi ngang ăn Tượng h1",
                "mascot": "Đường ngang thông thoáng!"
            },
            {
                "fen": "1b5k/8/8/8/1n6/8/8/1R4K1 w - - 0 1",
                "targetMove": "b1b4",
                "note": "♜ Xe chỉ ăn được <b>quân đầu tiên</b> trên đường đi: Mã b4",
                "mascot": "Mã chắn trước Tượng!"
            },
            {
                "fen": "6k1/8/2n5/8/8/8/2P5/2R3K1 w - - 0 1",
                "targetMove": "c1f1",
                "note": "♜ Tốt c2 chắn đường lên. Đưa Xe sang <b>cột trống</b> f1",
                "mascot": "Tìm đường khác để lên!"
            }
        ]
    },
    {
        "id": "rook-route",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 2: ♜ Quân Xe",
        "title": "Xe Đi Đường Vòng",
        "steps": [
            {
                "fen": "7k/8/5p2/8/1p6/8/8/R5K1 w - - 0 1",
                "targetMove": "a1f1",
                "note": "♜ Xe không đi chéo! Rẽ góc vuông: sang <b>f1</b> trước",
                "mascot": "Đi hình chữ L vuông góc!",
                "reply": "h8h7",
                "replyNote": "👀 Vua đen sang h7."
            },
            {
                "fen": "8/7k/5p2/8/1p6/8/8/5RK1 w - - 2 2",
                "targetMove": "f1f6",
                "note": "♜ Giờ chạy thẳng lên ăn Tốt <b>f6</b>",
                "mascot": "Thẳng tiến!",
                "reply": "h7g8",
                "replyNote": "👀 Vua đen về g8."
            },
            {
                "fen": "6k1/8/5R2/8/1p6/8/8/6K1 w - - 1 3",
                "targetMove": "f6b6",
                "note": "♜ Rẽ ngang sang <b>cột b</b>",
                "mascot": "Vòng sang trái!",
                "reply": "g8f7",
                "replyNote": "👀 Vua đen tiến tới f7."
            },
            {
                "fen": "8/5k2/1R6/8/1p6/8/8/6K1 w - - 3 4",
                "targetMove": "b6b4",
                "note": "♜ Chạy thẳng xuống ăn Tốt <b>b4</b>",
                "mascot": "Về đích!"
            }
        ]
    },
    {
        "id": "open-file-3",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 2: ♜ Quân Xe",
        "title": "Kiểm soát cột mở",
        "steps": [
            {
                "fen": "r4rk1/pp3ppp/2p5/8/8/2P5/PP3PPP/R4RK1 w - - 0 1",
                "targetMove": "f1e1",
                "note": "♜ Cột e đang trống: Xe chiếm <b>cột mở</b> trước!",
                "mascot": "Xe thích cột trống!",
                "reply": "f8d8",
                "replyNote": "👀 Đen chiếm cột d."
            },
            {
                "fen": "r2r2k1/pp3ppp/2p5/8/8/2P5/PP3PPP/R3R1K1 w - - 2 2",
                "targetMove": "e1e7",
                "note": "♜ Xe theo cột mở xâm nhập <b>hàng 7</b>",
                "mascot": "Xe hàng 7 rất mạnh!",
                "reply": "b7b6",
                "replyNote": "👀 Đen giữ Tốt b7."
            },
            {
                "fen": "r2r2k1/p3Rppp/1pp5/8/8/2P5/PP3PPP/R5K1 w - - 0 3",
                "targetMove": "e7c7",
                "note": "♜ Xe dọa Tốt c6",
                "mascot": "Tấn công Tốt yếu!"
            }
        ]
    },
    {
        "id": "open-file-4",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 2: ♜ Quân Xe",
        "title": "Xe hàng 7 ăn Tốt",
        "steps": [
            {
                "fen": "r5k1/pp3ppp/2p5/8/8/2P5/PP3PPP/4R1K1 w - - 0 1",
                "targetMove": "e1e7",
                "note": "♜ Xe lên <b>hàng 7</b>: dọa ăn các Tốt đen",
                "mascot": "Xe hàng 7 như cá mập!",
                "reply": "a7a5",
                "replyNote": "👀 Đen đẩy Tốt a, bỏ quên b7."
            },
            {
                "fen": "r5k1/1p2Rppp/2p5/p7/8/2P5/PP3PPP/6K1 w - a6 0 2",
                "targetMove": "e7b7",
                "note": "♜ Ăn Tốt b7!",
                "mascot": "Lời một Tốt!"
            }
        ]
    },
    {
        "id": "safe-rook-bait",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 2: ♜ Quân Xe",
        "title": "Tránh Miếng Mồi Có Canh",
        "steps": [
            {
                "fen": "6k1/5ppp/3p4/4p3/1n2R3/8/5PPP/6K1 w - - 0 1",
                "targetMove": "e4e5",
                "reply": "d6e5",
                "replyNote": "😱 Tốt d6 ăn mất Xe! Mất Xe 5 điểm chỉ để lấy Tốt 1 điểm.",
                "note": "🤔 Xe ăn được Tốt e5 hoặc Mã b4. Thử ăn <b>Tốt e5</b> trước!",
                "mascot": "Xe ăn Tốt ngay trước mặt!"
            },
            {
                "fen": "6k1/5ppp/3p4/4p3/1n2R3/8/5PPP/6K1 w - - 0 1",
                "targetMove": "e4b4",
                "note": "✅ Tốt e5 có Tốt d6 canh. Ăn quân <b>không ai canh</b>: Mã b4!",
                "mascot": "Mã không ai bảo vệ, ăn an toàn!",
                "before": {
                    "arrows": [
                        [
                            "d6",
                            "e5",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "e5",
                            "guard"
                        ],
                        [
                            "b4",
                            "x"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "safe-knight-guard",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 2: ♜ Quân Xe",
        "title": "Coi Chừng Mã Canh",
        "steps": [
            {
                "fen": "6k1/5ppp/5n2/3p4/8/8/5PPP/b2R2K1 w - - 0 1",
                "targetMove": "d1d5",
                "reply": "f6d5",
                "replyNote": "😱 Mã f6 ăn mất Xe! Xe 5 điểm đổi Tốt 1 điểm.",
                "note": "🤔 Xe nhìn thấy Tốt d5 và Tượng a1. Thử ăn <b>Tốt d5</b>!",
                "mascot": "Xe lao lên ăn Tốt!"
            },
            {
                "fen": "6k1/5ppp/5n2/3p4/8/8/5PPP/b2R2K1 w - - 0 1",
                "targetMove": "d1a1",
                "note": "✅ Mã f6 canh ô d5. Ăn <b>Tượng a1</b> không ai canh!",
                "mascot": "Tượng 3 điểm, lại an toàn!",
                "before": {
                    "arrows": [
                        [
                            "f6",
                            "d5",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "d5",
                            "guard"
                        ],
                        [
                            "a1",
                            "x"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "bishop",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 3: ♝ Quân Tượng",
        "title": "Tượng Trượt Chéo",
        "steps": [
            {
                "fen": "k7/5p2/8/8/2B5/1p6/8/6K1 w - - 0 1",
                "targetMove": "c4f7",
                "note": "♝ Tượng đi <b>chéo</b> lên: ăn Tốt f7",
                "mascot": "Trượt chéo thật xa!",
                "reply": "a8b7",
                "replyNote": "👀 Vua đen bước ra b7."
            },
            {
                "fen": "8/1k3B2/8/8/8/1p6/8/6K1 w - - 1 2",
                "targetMove": "f7d5",
                "note": "♝ Chéo ngược xuống <b>d5</b> chiếu Vua",
                "mascot": "Đổi hướng chéo!",
                "reply": "b7b6",
                "replyNote": "👀 Vua đen tránh sang b6."
            },
            {
                "fen": "8/8/1k6/3B4/8/1p6/8/6K1 w - - 3 3",
                "targetMove": "d5b3",
                "note": "♝ Tiếp tục chéo xuống ăn Tốt <b>b3</b>",
                "mascot": "Gọn gàng!"
            }
        ]
    },
    {
        "id": "bishop-color",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 3: ♝ Quân Tượng",
        "title": "Tượng Chỉ Đi Một Màu",
        "steps": [
            {
                "fen": "k7/8/7p/8/8/3p4/8/K1B5 w - - 0 1",
                "targetMove": "c1h6",
                "note": "♝ Tượng c1 đứng ô <b>đen</b> nên chỉ ăn được Tốt h6 (ô đen). Tốt d3 ở ô trắng!",
                "mascot": "Tượng ô đen đi ô đen!"
            },
            {
                "fen": "k7/8/8/8/4p3/8/5p2/K5B1 w - - 0 1",
                "targetMove": "g1f2",
                "note": "♝ Tốt f2 sắp phong cấp và đứng ô đen: Tượng ăn ngay!",
                "mascot": "Chặn Tốt về đích!"
            },
            {
                "fen": "k7/8/8/1pp5/8/8/8/K4B2 w - - 0 1",
                "targetMove": "f1b5",
                "note": "♝ Tượng f1 là Tượng <b>ô trắng</b>: ăn Tốt b5 (ô trắng)",
                "mascot": "Tốt c5 ở ô đen, Tượng này không với tới!"
            }
        ]
    },
    {
        "id": "bishop-zigzag",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 3: ♝ Quân Tượng",
        "title": "Tượng Đi Zíc Zắc",
        "steps": [
            {
                "fen": "7k/8/8/2p5/8/8/8/2B3K1 w - - 0 1",
                "targetMove": "c1e3",
                "note": "♝ Không đi thẳng được → chéo 2 lần: lên <b>e3</b> trước",
                "mascot": "Đi zíc zắc!"
            },
            {
                "fen": "6k1/8/8/2p5/8/4B3/8/6K1 w - - 2 2",
                "targetMove": "e3c5",
                "note": "♝ Chéo ngược lại: ăn Tốt c5",
                "mascot": "Bắt được rồi!"
            },
            {
                "fen": "6k1/8/8/2B5/8/8/4p3/6K1 w - - 0 3",
                "targetMove": "c5b4",
                "note": "♝ Tốt e2 sắp phong cấp! Tượng về <b>b4</b> canh ô e1",
                "mascot": "Canh ô đích!",
                "reply": "e2e1",
                "replyNote": "👀 Tốt đen phong Hậu... nhưng Tượng đang canh e1!"
            },
            {
                "fen": "6k1/8/8/8/1B6/8/8/4q1K1 w - - 0 4",
                "targetMove": "b4e1",
                "note": "♝ Ăn ngay Hậu mới!",
                "mascot": "Hậu vừa sinh ra đã bị ăn!"
            }
        ]
    },
    {
        "id": "uncastled-4",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 3: ♝ Quân Tượng",
        "title": "Ngăn chặn nhập thành",
        "steps": [
            {
                "fen": "r1bqk2r/ppp2ppp/2n5/b2n4/2BP4/5N2/P4PPP/RNBQ1RK1 w kq - 0 10",
                "targetMove": "c1a3",
                "note": "🚫 Tượng <b>a3</b> khống chế ô f8: Vua đen không nhập thành được!",
                "mascot": "Giữ Vua đen ở giữa bàn!",
                "before": {
                    "arrows": [
                        [
                            "a3",
                            "f8",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "f8",
                            "x"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "safe-bishop-bait",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 3: ♝ Quân Tượng",
        "title": "Tượng Tránh Bẫy",
        "steps": [
            {
                "fen": "6k1/5ppp/4p3/3n4/2B5/8/r4PPP/6K1 w - - 0 1",
                "targetMove": "c4d5",
                "reply": "e6d5",
                "replyNote": "😱 Tốt e6 ăn lại Tượng. Đổi Tượng lấy Mã thì Xe a2 vẫn còn đó!",
                "note": "🤔 Tượng ăn được Mã d5 hoặc Xe a2. Thử ăn <b>Mã d5</b>!",
                "mascot": "Tượng ăn Mã!"
            },
            {
                "fen": "6k1/5ppp/4p3/3n4/2B5/8/r4PPP/6K1 w - - 0 1",
                "targetMove": "c4a2",
                "note": "✅ Mã d5 có Tốt canh. Xe a2 <b>không ai canh</b>, lại đáng giá hơn!",
                "mascot": "Xe 5 điểm, ăn miễn phí!",
                "before": {
                    "arrows": [
                        [
                            "e6",
                            "d5",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "d5",
                            "guard"
                        ],
                        [
                            "a2",
                            "x"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "knight",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 4: ♞ Quân Mã",
        "title": "Mã Nhảy Chữ L",
        "steps": [
            {
                "fen": "k7/7p/8/3p4/8/2N5/8/K7 w - - 0 1",
                "targetMove": "c3d5",
                "note": "♞ Mã nhảy <b>chữ L</b>: ăn Tốt d5",
                "mascot": "Nhảy ngựa chữ L bắt Tốt!",
                "reply": "a8b7",
                "replyNote": "👀 Vua đen bước ra b7."
            },
            {
                "fen": "8/1k5p/8/3N4/8/8/8/K7 w - - 1 2",
                "targetMove": "d5f6",
                "note": "♞ Một chữ L nữa tới <b>f6</b>",
                "mascot": "Hai ô thẳng, một ô ngang!",
                "reply": "b7c7",
                "replyNote": "👀 Vua đen tới c7."
            },
            {
                "fen": "8/2k4p/5N2/8/8/8/8/K7 w - - 3 3",
                "targetMove": "f6h7",
                "note": "♞ Bắt nốt Tốt h7. Vua đen ở xa, không ăn lại được!",
                "mascot": "Gom Tốt h7 an toàn!"
            }
        ]
    },
    {
        "id": "knight-jump",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 4: ♞ Quân Mã",
        "title": "Mã Nhảy Qua Rào",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "g1f3",
                "note": "♞ Mã <b>nhảy qua</b> hàng Tốt: lên f3",
                "mascot": "Hàng rào Tốt không cản được Mã!",
                "reply": "b8c6",
                "replyNote": "👀 Mã đen cũng nhảy ra c6."
            },
            {
                "fen": "r1bqkbnr/pppppppp/2n5/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2",
                "targetMove": "b1c3",
                "note": "♞ Mã b1 nhảy qua lên <b>c3</b>",
                "mascot": "Thêm một chú ngựa nữa!",
                "reply": "g8f6",
                "replyNote": "👀 Mã đen ra f6."
            },
            {
                "fen": "r1bqkb1r/pppppppp/2n2n2/8/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq - 4 3",
                "targetMove": "e2e4",
                "note": "♟ Mã c3 đang canh ô e4. Đẩy Tốt <b>e4</b> vào trung tâm",
                "mascot": "Mã canh giữ, Tốt yên tâm tiến!",
                "reply": "e7e5",
                "replyNote": "👀 Đen cũng đẩy Tốt e5."
            }
        ]
    },
    {
        "id": "knight-chain",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 4: ♞ Quân Mã",
        "title": "Mã Ăn Liên Hoàn",
        "steps": [
            {
                "fen": "k7/7p/5p2/3p4/6p1/2N5/8/4K3 w - - 0 1",
                "targetMove": "c3d5",
                "note": "♞ Chữ L số 1: ăn <b>d5</b>",
                "mascot": "Bắt đầu chuỗi ăn!",
                "reply": "a8b7",
                "replyNote": "👀 Vua đen bước ra."
            },
            {
                "fen": "8/1k5p/5p2/3N4/6p1/8/8/4K3 w - - 1 2",
                "targetMove": "d5f6",
                "note": "♞ Chữ L số 2: ăn <b>f6</b>",
                "mascot": "Tiếp tục!",
                "reply": "b7b8",
                "replyNote": "👀 Vua đen lùi lại."
            },
            {
                "fen": "1k6/7p/5N2/8/6p1/8/8/4K3 w - - 1 3",
                "targetMove": "f6h7",
                "note": "♞ Chữ L số 3: ăn <b>h7</b>",
                "mascot": "Ba Tốt rồi!",
                "reply": "b8c7",
                "replyNote": "👀 Vua đen tiến lên."
            },
            {
                "fen": "8/2k4N/8/8/6p1/8/8/4K3 w - - 1 4",
                "targetMove": "h7f6",
                "note": "♞ Từ góc h7 không với tới g4. Nhảy về <b>f6</b> trước",
                "mascot": "Mã cần 2 bước!",
                "reply": "c7d6",
                "replyNote": "👀 Vua đen lại gần."
            },
            {
                "fen": "8/8/3k1N2/8/6p1/8/8/4K3 w - - 3 5",
                "targetMove": "f6g4",
                "note": "♞ Chữ L số 4: ăn <b>g4</b>",
                "mascot": "Ăn sạch!"
            }
        ]
    },
    {
        "id": "fork",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 4: ♞ Quân Mã",
        "title": "Đòn Chĩa Đôi (Fork)",
        "steps": [
            {
                "fen": "4q1k1/7p/8/8/4N3/8/8/6K1 w - - 0 1",
                "targetMove": "e4f6",
                "note": "♞ Tìm ô Mã dọa <b>cả Vua lẫn Hậu</b>!",
                "mascot": "Một nước, hai mục tiêu!",
                "reply": "g8g7",
                "replyNote": "👀 Vua đen phải chạy, bỏ lại Hậu!"
            },
            {
                "fen": "4q3/6kp/5N2/8/8/8/8/6K1 w - - 2 2",
                "targetMove": "f6e8",
                "note": "♞ Mã ăn Hậu, còn chiếu tiếp!",
                "mascot": "Ăn Hậu 9 điểm!"
            },
            {
                "fen": "4k3/8/8/1r6/4N3/8/8/6K1 w - - 0 1",
                "targetMove": "e4d6",
                "note": "♞ Thêm một đòn: Mã chĩa đôi <b>Vua và Xe</b>",
                "mascot": "Ngựa lại chĩa đôi!",
                "reply": "e8d7",
                "replyNote": "👀 Vua đen phải tránh chiếu."
            },
            {
                "fen": "8/3k4/3N4/1r6/8/8/8/6K1 w - - 2 2",
                "targetMove": "d6b5",
                "note": "♞ Ăn Xe b5, Mã thoát khỏi Vua đen",
                "mascot": "Gọn gàng!"
            }
        ]
    },
    {
        "id": "safe-knight-bait",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 4: ♞ Quân Mã",
        "title": "Mã Tránh Tốt Canh",
        "steps": [
            {
                "fen": "6k1/5ppp/3p4/4p3/1p6/3N4/5PPP/6K1 w - - 0 1",
                "targetMove": "d3e5",
                "reply": "d6e5",
                "replyNote": "😱 Tốt d6 ăn mất Mã! Mã 3 điểm đổi Tốt 1 điểm.",
                "note": "🤔 Mã ăn được Tốt e5 hoặc Tốt b4. Thử ăn <b>e5</b>!",
                "mascot": "Mã nhảy vào trung tâm!"
            },
            {
                "fen": "6k1/5ppp/3p4/4p3/1p6/3N4/5PPP/6K1 w - - 0 1",
                "targetMove": "d3b4",
                "note": "✅ Tốt e5 có Tốt d6 canh. Ăn Tốt <b>b4</b> không ai canh!",
                "mascot": "Cùng 1 điểm nhưng không mất Mã!",
                "before": {
                    "arrows": [
                        [
                            "d6",
                            "e5",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "e5",
                            "guard"
                        ],
                        [
                            "b4",
                            "x"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "smothered-2",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 4: ♞ Quân Mã",
        "title": "Đưa Mã vào vị trí",
        "steps": [
            {
                "fen": "6rk/6pp/8/4N3/8/8/5PPP/6K1 w - - 0 1",
                "targetMove": "e5f7",
                "goal": "mate",
                "note": "♞ Vua bị quân nhà vây kín: Mã nhảy tới <b>f7</b>",
                "mascot": "Ngạt thở!"
            }
        ]
    },
    {
        "id": "endgame-knight-pawn",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 4: ♞ Quân Mã",
        "title": "Mã chống Tốt",
        "steps": [
            {
                "fen": "k7/8/8/8/8/8/4p3/2N1K3 w - - 0 1",
                "targetMove": "c1e2",
                "note": "♞ Tốt đen sắp phong cấp! Mã ăn ngay <b>e2</b>",
                "mascot": "Chặn đứng Tốt!"
            }
        ]
    },
    {
        "id": "queen",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 5: ♛ Quân Hậu",
        "title": "Siêu Xe Hậu",
        "steps": [
            {
                "fen": "7k/7p/8/p2r4/8/1Q6/8/b3K3 w - - 0 1",
                "targetMove": "b3d5",
                "note": "♛ Hậu đi <b>chéo</b> như Tượng: ăn Xe d5",
                "mascot": "Siêu xe chạy chéo!",
                "reply": "h8g7",
                "replyNote": "👀 Vua đen ra g7."
            },
            {
                "fen": "8/6kp/8/p2Q4/8/8/8/b3K3 w - - 1 2",
                "targetMove": "d5a5",
                "note": "♛ Hậu đi <b>ngang</b> như Xe: ăn Tốt a5",
                "mascot": "Lướt ngang!",
                "reply": "g7h6",
                "replyNote": "👀 Vua đen sang h6."
            },
            {
                "fen": "8/7p/7k/Q7/8/8/8/b3K3 w - - 1 3",
                "targetMove": "a5a1",
                "note": "♛ Hậu đi <b>thẳng</b> xuống: ăn Tượng a1",
                "mascot": "Hậu đi được mọi hướng!"
            }
        ]
    },
    {
        "id": "queen-lines",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 5: ♛ Quân Hậu",
        "title": "Hậu Đi Thẳng Và Chéo",
        "steps": [
            {
                "fen": "7k/n2r4/8/2p5/8/8/8/3QK3 w - - 0 1",
                "targetMove": "d1d7",
                "note": "♛ Đi <b>thẳng</b> như Xe: ăn Xe d7",
                "mascot": "Chạy thẳng như Xe!",
                "reply": "h8g8",
                "replyNote": "👀 Vua đen lên g8."
            },
            {
                "fen": "6k1/n2Q4/8/2p5/8/8/8/4K3 w - - 1 2",
                "targetMove": "d7a7",
                "note": "♛ Đi <b>ngang</b>: ăn Mã a7",
                "mascot": "Lướt ngang như Xe!",
                "reply": "g8f8",
                "replyNote": "👀 Vua đen sang f8."
            },
            {
                "fen": "5k2/Q7/8/2p5/8/8/8/4K3 w - - 1 3",
                "targetMove": "a7c5",
                "note": "♛ Đi <b>chéo</b> như Tượng: ăn Tốt c5",
                "mascot": "Chạy chéo như Tượng!"
            }
        ]
    },
    {
        "id": "queen-safe",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 5: ♛ Quân Hậu",
        "title": "Hậu Tránh Bẫy",
        "steps": [
            {
                "fen": "4k3/3p4/8/8/n7/8/8/3Q2K1 w - - 0 1",
                "targetMove": "d1a4",
                "note": "♛ Mã a4 <b>không ai bảo vệ</b>: ăn ngay!",
                "mascot": "Ăn quân không ai bảo vệ mới an toàn!"
            },
            {
                "fen": "4k3/8/8/1p6/n5b1/8/8/3Q2K1 w - - 0 1",
                "targetMove": "d1g4",
                "note": "♛ Mã a4 có Tốt b5 canh. Ăn quân <b>không ai canh</b>!",
                "mascot": "Né miếng mồi có bẫy!",
                "before": {
                    "arrows": [
                        [
                            "b5",
                            "a4",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "a4",
                            "guard"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/8/8/8/8/4p3/3Q4/6K1 w - - 0 1",
                "targetMove": "d2e3",
                "goal": "safe",
                "note": "♛ Tốt e3 dọa Hậu! Đưa Hậu tới <b>ô an toàn</b> (ăn luôn Tốt càng tốt)",
                "mascot": "Hậu quý lắm, đừng để Tốt ăn!"
            }
        ]
    },
    {
        "id": "queen-fork",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 5: ♛ Quân Hậu",
        "title": "Hậu Chĩa Đôi",
        "steps": [
            {
                "fen": "r5k1/6pp/8/8/8/8/5PPP/3Q2K1 w - - 0 1",
                "targetMove": "d1d5",
                "note": "♛ Tìm ô Hậu vừa <b>chiếu Vua</b> vừa <b>dọa Xe</b>!",
                "mascot": "Hậu chĩa đôi!",
                "reply": "g8h8",
                "replyNote": "👀 Vua đen trốn vào góc."
            },
            {
                "fen": "r6k/6pp/8/3Q4/8/8/5PPP/6K1 w - - 2 2",
                "targetMove": "d5a8",
                "goal": "mate",
                "note": "♛ Ăn Xe a8: chiếu bí luôn!",
                "mascot": "Một mũi tên trúng hai đích!"
            }
        ]
    },
    {
        "id": "safe-king-guard",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 5: ♛ Quân Hậu",
        "title": "Ô Có Vua Canh",
        "steps": [
            {
                "fen": "r3k3/3ppppp/8/7Q/8/7P/5PP1/6K1 w - - 0 1",
                "targetMove": "h5f7",
                "reply": "e8f7",
                "replyNote": "😱 Vua đen ăn mất Hậu! Ô f7 đứng sát Vua đen nên được Vua canh.",
                "note": "🤔 Hậu nhắm được Tốt f7 và Tốt h7. Thử ăn <b>f7</b> chiếu Vua!",
                "mascot": "Hậu ăn f7 chiếu Vua!"
            },
            {
                "fen": "r3k3/3ppppp/8/7Q/8/7P/5PP1/6K1 w - - 0 1",
                "targetMove": "h5h7",
                "note": "✅ f7 có Vua canh. Ăn Tốt <b>h7</b>, ô này không ai canh!",
                "mascot": "Ăn quân ở ô an toàn mới giữ được Hậu!",
                "before": {
                    "marks": [
                        [
                            "f7",
                            "guard"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "fools-mate",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 5: ♛ Quân Hậu",
        "title": "Chiếu Bí Ngốc Nghếch",
        "steps": [
            {
                "fen": "rnbqkbnr/ppppp2p/5p2/6p1/3PP3/8/PPP2PPP/RNBQKBNR w KQkq g6 0 3",
                "targetMove": "d1h5",
                "goal": "mate",
                "note": "🤡 Đen đẩy Tốt f và g quá sớm, mở toang đường chéo: <b>Hậu h5</b>!",
                "mascot": "Chiếu bí nhanh nhất!"
            },
            {
                "fen": "rnbqkbnr/ppppp2p/8/5pp1/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq g6 0 3",
                "targetMove": "d1h5",
                "goal": "mate",
                "note": "🤡 Lại thêm một lần: Vua đen hở đường chéo e8–h5!",
                "mascot": "Ghi nhớ: đừng đẩy Tốt f, g sớm!"
            }
        ]
    },
    {
        "id": "king",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 6: ♚ Quân Vua",
        "title": "Vua Đi Từng Bước",
        "steps": [
            {
                "fen": "4k3/8/8/8/8/3pK3/8/8 w - - 0 1",
                "targetMove": "e3d3",
                "note": "♚ Vua đi <b>1 ô</b> sang ngang: ăn Tốt d3",
                "mascot": "Từng bước một!"
            },
            {
                "fen": "4k3/8/8/8/8/3K4/3p4/8 w - - 0 1",
                "targetMove": "d3d2",
                "note": "♚ Vua lùi 1 ô: ăn Tốt d2 trước khi nó phong cấp",
                "mascot": "Vua đi lùi cũng được!"
            },
            {
                "fen": "4k3/8/8/8/8/5K2/6p1/8 w - - 0 1",
                "targetMove": "f3g2",
                "note": "♚ Vua đi <b>chéo</b> 1 ô: ăn Tốt g2",
                "mascot": "Đi chéo 1 ô!"
            }
        ]
    },
    {
        "id": "king-safe",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 6: ♚ Quân Vua",
        "title": "Vua Không Vào Ô Nguy Hiểm",
        "steps": [
            {
                "fen": "4k3/8/8/8/7n/3pKp2/8/8 w - - 0 1",
                "targetMove": "e3d3",
                "note": "♚ Ô f3 có Mã h4 canh. Vua chỉ ăn Tốt <b>d3</b> an toàn",
                "mascot": "Không bước vào ô nguy hiểm!",
                "before": {
                    "arrows": [
                        [
                            "h4",
                            "f3",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "f3",
                            "x"
                        ]
                    ]
                }
            },
            {
                "fen": "4k3/8/8/8/8/8/3r4/4K3 w - - 0 1",
                "targetMove": "e1d2",
                "note": "♚ Xe d2 <b>không ai bảo vệ</b>: Vua ăn được!",
                "mascot": "Vua cũng biết ăn quân!"
            },
            {
                "fen": "4k3/8/8/8/1b6/8/3r4/4K3 w - - 0 1",
                "targetMove": "e1f1",
                "goal": "safe",
                "note": "♚ Lần này Xe có <b>Tượng b4</b> bảo vệ: không được ăn! Tìm ô an toàn",
                "mascot": "Ô f1 an toàn!",
                "before": {
                    "arrows": [
                        [
                            "b4",
                            "d2",
                            "protect"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "king-walk",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 6: ♚ Quân Vua",
        "title": "Vua Đi Dạo Từng Bước",
        "steps": [
            {
                "fen": "k7/8/8/8/4p3/8/8/4K3 w - - 0 1",
                "targetMove": "e1e2",
                "note": "♚ Từng bước một: lên <b>e2</b>",
                "mascot": "Vua đi dạo!",
                "reply": "a8b7",
                "replyNote": "👀 Vua đen cũng đi."
            },
            {
                "fen": "8/1k6/8/8/4p3/8/4K3/8 w - - 2 2",
                "targetMove": "e2e3",
                "note": "♚ Lên <b>e3</b>",
                "mascot": "Thêm một bước!",
                "reply": "b7c6",
                "replyNote": "👀 Vua đen tiến lại gần."
            },
            {
                "fen": "8/8/2k5/8/4p3/4K3/8/8 w - - 4 3",
                "targetMove": "e3e4",
                "note": "♚ Ăn Tốt <b>e4</b>!",
                "mascot": "Vua bắt được Tốt!"
            }
        ]
    },
    {
        "id": "escape",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 6: ♚ Quân Vua",
        "title": "Né Đòn Chiếu Của Vua",
        "steps": [
            {
                "fen": "6k1/8/8/8/8/8/6PP/r5K1 w - - 0 1",
                "targetMove": "g1f2",
                "note": "🏃 Vua bị chiếu! Chạy tới ô <b>an toàn</b> f2",
                "mascot": "Cửa thoát ở f2!"
            },
            {
                "fen": "4r1k1/8/8/8/8/8/8/4K3 w - - 0 1",
                "targetMove": "e1d2",
                "goal": "safe",
                "note": "🏃 Xe chiếu dọc cột e. Chạy <b>ra khỏi cột e</b>!",
                "mascot": "Né sang bên cạnh!"
            },
            {
                "fen": "4r1k1/8/8/8/1b6/8/8/4K3 w - - 0 1",
                "targetMove": "e1f2",
                "goal": "safe",
                "note": "🏃 Coi chừng: ô d2 có <b>Tượng b4</b> canh!",
                "mascot": "Nhìn kỹ cả Tượng nữa!",
                "before": {
                    "arrows": [
                        [
                            "b4",
                            "d2",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "d2",
                            "x"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "king-catch",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 6: ♚ Quân Vua",
        "title": "Vua Đuổi Bắt Tốt",
        "steps": [
            {
                "fen": "8/8/8/8/p2K4/8/8/7k w - - 0 1",
                "targetMove": "d4c4",
                "note": "♚ Vua đuổi theo: sang <b>c4</b>",
                "mascot": "Đuổi kịp không?",
                "reply": "a4a3",
                "replyNote": "👀 Tốt đen chạy xuống."
            },
            {
                "fen": "8/8/8/8/2K5/p7/8/7k w - - 0 2",
                "targetMove": "c4b3",
                "note": "♚ Đứng sát Tốt: <b>b3</b>",
                "mascot": "Áp sát!",
                "reply": "a3a2",
                "replyNote": "👀 Tốt đen sắp phong cấp!"
            },
            {
                "fen": "8/8/8/8/8/1K6/p7/7k w - - 0 3",
                "targetMove": "b3a2",
                "note": "♚ Ăn Tốt!",
                "mascot": "Bắt được!"
            }
        ]
    },
    {
        "id": "value",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Quân Nào Đáng Giá Hơn?",
        "steps": [
            {
                "fen": "7k/3q4/8/8/8/8/8/1n1R2K1 w - - 0 1",
                "targetMove": "d1d7",
                "note": "💰 Ăn quân <b>giá trị nhất</b>: Hậu d7 (9 điểm)!",
                "mascot": "Hậu 9 điểm, Mã chỉ 3!"
            },
            {
                "fen": "6k1/2r1p3/8/3N4/8/8/8/6K1 w - - 0 1",
                "targetMove": "d5c7",
                "note": "💰 Mã ăn được Xe c7 hoặc Tốt e7. Chọn quân <b>đắt hơn</b>!",
                "mascot": "Xe 5 điểm > Tốt 1 điểm!"
            },
            {
                "fen": "6k1/6p1/1n6/8/3B4/8/8/6K1 w - - 0 1",
                "targetMove": "d4b6",
                "note": "💰 Tốt g7 có Vua canh. Ăn <b>Mã b6</b> không ai bảo vệ!",
                "mascot": "Vừa đắt vừa an toàn!"
            }
        ]
    },
    {
        "id": "which-piece",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Quân Nào Ăn Được Hậu?",
        "steps": [
            {
                "fen": "7k/8/8/3q4/5N2/8/8/R1B3K1 w - - 0 1",
                "targetMove": "f4d5",
                "note": "🤔 Quân nào <b>với tới</b> Hậu d5? Mã f4!",
                "mascot": "Mã nhảy chữ L tới d5!"
            },
            {
                "fen": "6k1/5pp1/7p/8/8/8/1q6/R1B3K1 w - - 0 1",
                "targetMove": "c1b2",
                "note": "🤔 Hậu b2 dọa cả Xe lẫn Tượng. Quân nào ăn được Hậu?",
                "mascot": "Tượng đi chéo một ô!"
            },
            {
                "fen": "6k1/5pp1/7p/q7/8/8/8/R1B3K1 w - - 0 1",
                "targetMove": "a1a5",
                "note": "🤔 Hậu chạy lên a5. Giờ quân nào với tới?",
                "mascot": "Xe chạy thẳng cột a!"
            }
        ]
    },
    {
        "id": "free-piece",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Ăn Quân Bị Bỏ Rơi",
        "steps": [
            {
                "fen": "4k3/8/3p4/4p3/7b/5N2/8/3K4 w - - 0 1",
                "targetMove": "f3h4",
                "note": "🎁 Tốt e5 có Tốt d6 canh. Chọn quân <b>không ai bảo vệ</b>!",
                "mascot": "Tượng h4 bị bỏ rơi!"
            },
            {
                "fen": "6k1/pp3ppp/8/4r3/8/8/PB3PPP/6K1 w - - 0 1",
                "targetMove": "b2e5",
                "note": "🎁 Xe e5 <b>không ai bảo vệ</b>: Tượng ăn miễn phí!",
                "mascot": "Ăn quân miễn phí!"
            },
            {
                "fen": "r5k1/5ppp/8/8/2n5/1Q6/5PPP/6K1 w - - 0 1",
                "targetMove": "b3c4",
                "note": "🎁 Mã c4 đứng một mình, không ai canh!",
                "mascot": "Nhặt quà!"
            }
        ]
    },
    {
        "id": "defend-piece",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Dùng Tốt Bảo Vệ Quân",
        "steps": [
            {
                "fen": "3rk3/8/8/8/3N4/8/2P1P3/6K1 w - - 0 1",
                "targetMove": "c2c3",
                "goal": "protect",
                "square": "d4",
                "note": "🛡 Xe dọa Mã d4. Dùng <b>Tốt</b> bảo vệ Mã",
                "mascot": "Tốt làm vệ sĩ!"
            },
            {
                "fen": "3rk3/8/8/8/3B4/8/2P1P3/6K1 w - - 0 1",
                "targetMove": "e2e3",
                "goal": "protect",
                "square": "d4",
                "note": "🛡 Tốt bảo vệ Tượng d4",
                "mascot": "Ăn Tượng thì mất Xe!"
            },
            {
                "fen": "3rk3/8/8/8/3Q4/8/2P1P3/6K1 w - - 0 1",
                "targetMove": "d4a4",
                "goal": "safe",
                "note": "🛡 Hậu 9 điểm, Xe 5 điểm: bảo vệ <b>không đủ</b>, Hậu phải chạy!",
                "mascot": "Đổi Hậu lấy Xe là lỗ!"
            }
        ]
    },
    {
        "id": "run-away",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Chạy Quân Bị Dọa",
        "steps": [
            {
                "fen": "4k3/8/7b/3p4/4N3/8/8/4K3 w - - 0 1",
                "targetMove": "e4c3",
                "goal": "safe",
                "note": "🏃 Tốt d5 dọa Mã. Mã chạy tới ô <b>an toàn</b>",
                "mascot": "Coi chừng cả Tượng h6!"
            },
            {
                "fen": "4k3/8/8/3p4/2R5/8/8/4K3 w - - 0 1",
                "targetMove": "c4c1",
                "goal": "safe",
                "note": "🏃 Tốt d5 dọa Xe. Xe chạy!",
                "mascot": "Xe chạy thẳng!"
            },
            {
                "fen": "4k3/8/8/3p4/4B3/8/8/4K3 w - - 0 1",
                "targetMove": "e4d5",
                "goal": "safe",
                "note": "🏃 Tượng bị dọa. Chạy, hoặc <b>ăn luôn</b> kẻ dọa!",
                "mascot": "Tốt d5 không ai canh!"
            },
            {
                "fen": "6k1/8/8/3p4/4Q3/8/8/4K3 w - - 0 1",
                "targetMove": "e4d5",
                "goal": "safe",
                "note": "🏃 Hậu bị Tốt dọa. Hậu quý nhất, phải chạy ngay!",
                "mascot": "Ăn Tốt còn chiếu Vua!"
            }
        ]
    },
    {
        "id": "block",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Dùng Quân Che Chắn",
        "steps": [
            {
                "fen": "6k1/5ppp/8/1B6/8/8/5PPP/r5K1 w - - 0 1",
                "targetMove": "b5f1",
                "note": "🛡 Dùng Tượng <b>chắn</b> đường chiếu ở f1 (Vua bảo vệ Tượng)",
                "mascot": "Lá chắn Tượng!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/4N3/5PPP/r5K1 w - - 0 1",
                "targetMove": "e3f1",
                "note": "🛡 Mã nhảy về <b>f1</b> che chắn",
                "mascot": "Lá chắn Mã!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/5R2/6PP/r5K1 w - - 0 1",
                "targetMove": "f3f1",
                "note": "🛡 Xe chắn ở ô có <b>Vua bảo vệ</b>: f1",
                "mascot": "Chắn đúng chỗ!"
            }
        ]
    },
    {
        "id": "capture",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Tiêu Diệt Kẻ Tấn Công",
        "steps": [
            {
                "fen": "6k1/5ppp/8/4R3/8/8/5PPP/4q1K1 w - - 0 1",
                "targetMove": "e5e1",
                "note": "⚔️ <b>Ăn luôn</b> quân đang chiếu Vua!",
                "mascot": "Xe ăn Hậu!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/5N2/5PPP/4q1K1 w - - 0 1",
                "targetMove": "f3e1",
                "note": "⚔️ Mã nhảy về ăn Hậu e1!",
                "mascot": "Mã ăn Hậu!"
            },
            {
                "fen": "6k1/5ppp/8/8/1B6/8/5PPP/4q1K1 w - - 0 1",
                "targetMove": "b4e1",
                "note": "⚔️ Tượng đi chéo ăn Hậu e1!",
                "mascot": "Tượng ăn Hậu!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/5PPP/5qK1 w - - 0 1",
                "targetMove": "g1f1",
                "note": "⚔️ Hậu f1 không ai bảo vệ: <b>Vua tự ăn</b>!",
                "mascot": "Vua ăn Hậu!"
            }
        ]
    },
    {
        "id": "skewer",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Đòn Xiên Que (Skewer)",
        "steps": [
            {
                "fen": "8/8/8/8/3k3q/8/R7/1K6 w - - 0 1",
                "targetMove": "a2a4",
                "note": "🍢 Chiếu Vua để lộ <b>Hậu phía sau</b>",
                "mascot": "Xiên que!",
                "reply": "d4e5",
                "replyNote": "👀 Vua đen phải tránh chiếu, để lộ Hậu."
            },
            {
                "fen": "8/8/8/4k3/R6q/8/8/1K6 w - - 2 2",
                "targetMove": "a4h4",
                "note": "🍢 Ăn Hậu h4!",
                "mascot": "Que xiên trúng Hậu!"
            },
            {
                "fen": "1r6/8/8/4k3/8/8/8/K3B3 w - - 0 1",
                "targetMove": "e1g3",
                "note": "🍢 Tượng chiếu chéo: Vua đứng trước, <b>Xe b8</b> phía sau",
                "mascot": "Tượng cũng xiên được!",
                "reply": "e5d5",
                "replyNote": "👀 Vua đen chạy, Xe b8 lộ ra."
            },
            {
                "fen": "1r6/8/8/3k4/8/6B1/8/K7 w - - 2 2",
                "targetMove": "g3b8",
                "note": "🍢 Ăn Xe b8",
                "mascot": "Tuyệt vời!"
            }
        ]
    },
    {
        "id": "pin",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Đòn Giằng (Pin)",
        "steps": [
            {
                "fen": "4k3/4q2p/8/8/8/8/8/R4K2 w - - 0 1",
                "targetMove": "a1e1",
                "note": "📌 Ghim Hậu vào Vua: Xe sang <b>cột e</b> (Vua f1 bảo vệ Xe)",
                "mascot": "Kéo Xe sang e1 trói chặt Hậu đen!",
                "reply": "h7h6",
                "replyNote": "👀 Hậu đen bị ghim, không chạy được!"
            },
            {
                "fen": "4k3/4q3/7p/8/8/8/8/4RK2 w - - 0 2",
                "targetMove": "e1e7",
                "note": "📌 Ăn Hậu! Đổi Xe 5 lấy Hậu 9",
                "mascot": "Trao đổi có lợi!",
                "reply": "e8e7",
                "replyNote": "👀 Vua đen ăn lại Xe."
            },
            {
                "fen": "4k3/8/2n5/1B6/3P4/8/8/4K3 w - - 0 1",
                "targetMove": "d4d5",
                "note": "📌 Mã c6 bị Tượng <b>ghim</b> vào Vua. Đẩy Tốt dọa Mã!",
                "mascot": "Quân bị ghim không chạy được!",
                "reply": "e8e7",
                "replyNote": "👀 Mã bị ghim nên không chạy kịp."
            },
            {
                "fen": "8/4k3/2n5/1B1P4/8/8/8/4K3 w - - 1 2",
                "targetMove": "d5c6",
                "note": "📌 Ăn Mã c6",
                "mascot": "Ghim rồi ăn!"
            }
        ]
    },
    {
        "id": "backrank",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Chiếu Bí Hàng Cuối",
        "steps": [
            {
                "fen": "6k1/5ppp/8/8/8/8/8/R5K1 w - - 0 1",
                "targetMove": "a1a8",
                "goal": "mate",
                "note": "🎯 Chiếu hàng cuối!",
                "mascot": "Vua đen bị Tốt nhốt!"
            },
            {
                "fen": "2r3k1/5ppp/8/8/8/8/5PPP/2R3K1 w - - 0 1",
                "targetMove": "c1c8",
                "goal": "mate",
                "note": "🎯 Ăn Xe canh hàng cuối, chiếu bí luôn!",
                "mascot": "Không còn ai đỡ!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/5PPP/4Q1K1 w - - 0 1",
                "targetMove": "e1e8",
                "goal": "mate",
                "note": "🎯 Hậu cũng chiếu hàng cuối được!",
                "mascot": "Hậu bay lên e8!"
            }
        ]
    },
    {
        "id": "back-rank-1",
        "level": "Cấp 1 · Từng quân",
        "category": "Chương 7: 🎯 Ôn tập: chọn đúng quân",
        "title": "Mối đe dọa cơ bản",
        "steps": [
            {
                "fen": "6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1",
                "targetMove": "e1e8",
                "goal": "mate",
                "note": "🎯 Vua đen bị 3 Tốt nhốt: Xe chiếu hàng cuối!",
                "mascot": "Hàng cuối bỏ trống!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/5PPP/3Q2K1 w - - 0 1",
                "targetMove": "d1d8",
                "goal": "mate",
                "note": "🎯 Hậu cũng làm được!",
                "mascot": "Hậu bay lên d8!"
            }
        ]
    },
    {
        "id": "castle",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 8: ♜ Xe + ♚ Vua",
        "title": "Nhập Thành Bảo Vệ Vua",
        "steps": [
            {
                "fen": "4k3/8/8/8/8/8/5PPP/4K2R w K - 0 1",
                "targetMove": "e1g1",
                "note": "🏰 Nhập thành: bấm Vua → chọn <b>g1</b>",
                "mascot": "Vua vào lâu đài!"
            },
            {
                "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
                "targetMove": "e1g1",
                "note": "🏰 Ván cờ thật: Mã và Tượng đã ra, <b>nhập thành</b> ngay!",
                "mascot": "Vua an toàn, Xe ra trận!",
                "reply": "g8f6",
                "replyNote": "👀 Đen ra Mã f6."
            },
            {
                "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 6 5",
                "targetMove": "d2d3",
                "note": "♟ Tốt <b>d3</b> giữ chắc Tốt e4 và mở đường cho Tượng c1",
                "mascot": "Thế trận vững chắc!"
            }
        ]
    },
    {
        "id": "castle-long",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 8: ♜ Xe + ♚ Vua",
        "title": "Nhập Thành Cánh Hậu",
        "steps": [
            {
                "fen": "4k3/8/8/8/8/8/PPP5/R3K3 w Q - 0 1",
                "targetMove": "e1c1",
                "note": "🏰 Nhập thành <b>cánh Hậu</b>: Vua e1 → c1",
                "mascot": "Vua sang trái, Xe nhảy qua!"
            },
            {
                "fen": "rnbqk2r/ppp1bppp/4pn2/3p4/3P1B2/2N5/PPPQPPPP/R3KBNR w KQkq - 4 5",
                "targetMove": "e1c1",
                "note": "🏰 Ván cờ thật: Mã, Tượng, Hậu đã ra. Nhập thành cánh Hậu, Xe vào <b>cột d</b>",
                "mascot": "Xe d1 sẵn sàng!"
            }
        ]
    },
    {
        "id": "rook-mate",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 8: ♜ Xe + ♚ Vua",
        "title": "Xe Và Vua Chiếu Bí",
        "steps": [
            {
                "fen": "4k3/8/4K3/8/8/8/8/R7 w - - 0 1",
                "targetMove": "a1a8",
                "goal": "mate",
                "note": "♜ Vua trắng chặn trước mặt, Xe <b>chiếu hàng cuối</b>!",
                "mascot": "Vua đối mặt Vua!"
            },
            {
                "fen": "4k3/8/4K3/8/8/8/8/7R w - - 0 1",
                "targetMove": "h1h8",
                "goal": "mate",
                "note": "♜ Xe chiếu từ bên phải!",
                "mascot": "Bên nào cũng được!"
            },
            {
                "fen": "k7/8/1K6/8/8/8/8/7R w - - 0 1",
                "targetMove": "h1h8",
                "goal": "mate",
                "note": "♜ Vua đen ở góc: chiếu hàng cuối!",
                "mascot": "Dồn vào góc!"
            }
        ]
    },
    {
        "id": "queenmate",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 9: ♛ Hậu + ♚ Vua",
        "title": "Hậu Hôn Vua",
        "steps": [
            {
                "fen": "7k/4Q3/6K1/8/8/8/8/8 w - - 0 1",
                "targetMove": "e7g7",
                "goal": "mate",
                "note": "💋 Hậu áp sát Vua đen, Vua trắng bảo vệ Hậu",
                "mascot": "Hậu hôn Vua!"
            },
            {
                "fen": "7k/8/5K2/8/8/8/8/6Q1 w - - 0 1",
                "targetMove": "g1g7",
                "goal": "mate",
                "note": "💋 Hậu lên g7, Vua f6 bảo vệ",
                "mascot": "Áp sát!"
            },
            {
                "fen": "4k3/8/4K3/8/7Q/8/8/8 w - - 0 1",
                "targetMove": "h4e7",
                "goal": "mate",
                "note": "💋 Hậu áp sát Vua đen ở e7",
                "mascot": "Vua không chạy được!"
            }
        ]
    },
    {
        "id": "stalemate",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 9: ♛ Hậu + ♚ Vua",
        "title": "Cẩn Thận Hòa Pat!",
        "steps": [
            {
                "fen": "7k/5K2/8/8/8/8/8/6Q1 w - - 0 1",
                "targetMove": "g1g7",
                "goal": "mate",
                "note": "⚠️ Phải <b>CHIẾU</b>! Nếu Vua đen hết nước mà không bị chiếu là <b>hòa</b>",
                "mascot": "Chiếu bí, không phải Pat!"
            },
            {
                "fen": "7k/8/6K1/8/8/8/8/5Q2 w - - 0 1",
                "targetMove": "f1f8",
                "goal": "mate",
                "note": "⚠️ Cẩn thận! Qf7 là hòa Pat. Tìm nước <b>chiếu bí</b>",
                "mascot": "Đừng để hòa!"
            },
            {
                "fen": "7k/8/5K2/8/8/8/8/6Q1 w - - 0 1",
                "targetMove": "g1g7",
                "goal": "mate",
                "note": "⚠️ Qg6 là hòa Pat! Chiếu bí bằng cách khác",
                "mascot": "Vua f6 bảo vệ Hậu!"
            }
        ]
    },
    {
        "id": "endgame-opposition",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 10: ♟ Tốt + ♚ Vua",
        "title": "Đối Vua (Opposition)",
        "steps": [
            {
                "fen": "4k3/8/4K3/4P3/8/8/8/8 w - - 0 1",
                "targetMove": "e6d6",
                "accept": [
                    "e6d6",
                    "e6f6"
                ],
                "note": "👑 Vua trắng giữ <b>hàng 6</b>, bước sang bên: Kd6 hoặc Kf6",
                "mascot": "Đối Vua!",
                "reply": "e8d8",
                "replyNote": "👀 Vua đen giữ trước Tốt."
            },
            {
                "fen": "3k4/8/3K4/4P3/8/8/8/8 w - - 0 1",
                "targetMove": "e5e6",
                "note": "♟ Vua canh ô d7, đẩy Tốt lên <b>e6</b>",
                "mascot": "Tốt tiến!",
                "reply": "d8e8",
                "replyNote": "👀 Vua đen chặn trước Tốt."
            },
            {
                "fen": "4k3/8/3KP3/8/8/8/8/8 w - - 1 2",
                "targetMove": "e6e7",
                "note": "♟ Tốt lên <b>e7</b>",
                "mascot": "Gần đích!",
                "reply": "e8f7",
                "replyNote": "👀 Vua đen tránh sang f7."
            },
            {
                "fen": "8/4Pk2/3K4/8/8/8/8/8 w - - 1 3",
                "targetMove": "d6d7",
                "note": "👑 Vua canh ô <b>e8</b>: Tốt sẽ phong cấp!",
                "mascot": "Thắng chắc!"
            }
        ]
    },
    {
        "id": "promote-mate",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 10: ♟ Tốt + ♚ Vua",
        "title": "Phong Cấp Chiếu Bí",
        "steps": [
            {
                "fen": "8/5KPk/7p/8/8/8/8/8 w - - 0 1",
                "targetMove": "g7g8",
                "goal": "mate",
                "note": "👑 Phong cấp <b>Hậu</b> chiếu bí luôn!",
                "mascot": "Vua f7 bảo vệ Hậu mới!"
            },
            {
                "fen": "8/2q1P1k1/8/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "e7e8n",
                "note": "👑 Phong <b>Mã</b> để chĩa đôi Vua và Hậu!",
                "mascot": "Phong Mã cũng có lúc hay!",
                "reply": "g7g6",
                "replyNote": "👀 Vua đen phải chạy, bỏ lại Hậu."
            },
            {
                "fen": "4N3/2q5/6k1/8/8/8/8/6K1 w - - 1 2",
                "targetMove": "e8c7",
                "note": "👑 Mã ăn Hậu!",
                "mascot": "Tuyệt chiêu!"
            }
        ]
    },
    {
        "id": "ladder",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 11: ♜ Xe + ♜ Xe",
        "title": "Hai Xe Lăn Bánh",
        "steps": [
            {
                "fen": "7k/8/8/8/8/8/1R6/R3K3 w - - 0 1",
                "targetMove": "b2b7",
                "note": "🪜 Xe thứ nhất <b>chặn hàng 7</b>",
                "mascot": "Bậc thang thứ nhất!",
                "reply": "h8g8",
                "replyNote": "👀 Vua đen bị đẩy lên hàng cuối."
            },
            {
                "fen": "6k1/1R6/8/8/8/8/8/R3K3 w - - 2 2",
                "targetMove": "a1a8",
                "goal": "mate",
                "note": "🪜 Xe thứ hai chiếu hàng 8!",
                "mascot": "Chiếu bí!"
            },
            {
                "fen": "7k/8/8/8/8/8/2R5/1R2K3 w - - 0 1",
                "targetMove": "c2c7",
                "note": "🪜 Thử lại: Xe c chặn hàng 7",
                "mascot": "Hai Xe thay nhau!",
                "reply": "h8g8",
                "replyNote": "👀 Vua đen hết đường lùi."
            },
            {
                "fen": "6k1/2R5/8/8/8/8/8/1R2K3 w - - 2 2",
                "targetMove": "b1b8",
                "goal": "mate",
                "note": "🪜 Xe b chiếu hàng 8",
                "mascot": "Lăn bánh về đích!"
            }
        ]
    },
    {
        "id": "back-rank-3",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 11: ♜ Xe + ♜ Xe",
        "title": "Hai Xe chồng cột",
        "steps": [
            {
                "fen": "4r1k1/5ppp/2q5/8/8/8/4RPPP/4R1K1 w - - 0 1",
                "targetMove": "e2e8",
                "note": "🎯 Hai Xe chồng cột e. Xe trước ăn Xe e8!",
                "mascot": "Xe sau yểm trợ!",
                "reply": "c6e8",
                "replyNote": "👀 Hậu đen ăn lại."
            },
            {
                "fen": "4q1k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 2",
                "targetMove": "e1e8",
                "goal": "mate",
                "note": "🎯 Xe sau ăn Hậu: chiếu bí!",
                "mascot": "Hàng cuối thất thủ!"
            }
        ]
    },
    {
        "id": "open-file-5",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 11: ♜ Xe + ♜ Xe",
        "title": "Nhân đôi sức ép",
        "steps": [
            {
                "fen": "r2r2k1/pp1b1ppp/2p5/8/8/2P5/PP1R1PPP/3R2K1 w - - 0 1",
                "targetMove": "d2d7",
                "note": "♜♜ Hai Xe <b>chồng cột d</b> tấn công Tượng d7, Đen chỉ có 1 Xe bảo vệ",
                "mascot": "2 đánh 1!",
                "reply": "d8d7",
                "replyNote": "👀 Xe đen ăn lại.",
                "before": {
                    "arrows": [
                        [
                            "d1",
                            "d7",
                            "attack"
                        ],
                        [
                            "d8",
                            "d7",
                            "protect"
                        ]
                    ]
                }
            },
            {
                "fen": "r5k1/pp1r1ppp/2p5/8/8/2P5/PP3PPP/3R2K1 w - - 0 2",
                "targetMove": "d1d7",
                "note": "♜ Xe thứ hai ăn lại: lời một Tượng!",
                "mascot": "Nhân đôi sức ép!"
            }
        ]
    },
    {
        "id": "discovered",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 12: ♞ Mã + ♜ Xe",
        "title": "Đòn Phát Hiện",
        "steps": [
            {
                "fen": "4k3/8/3q4/8/4N3/8/8/4R1K1 w - - 0 1",
                "targetMove": "e4d6",
                "note": "♞ Mã nhảy đi → <b>Xe lộ ra chiếu</b>! Ăn luôn Hậu",
                "mascot": "Đòn phát hiện!",
                "reply": "e8d7",
                "replyNote": "👀 Vua đen chạy và dọa ăn Mã."
            },
            {
                "fen": "8/3k4/3N4/8/8/8/8/4R1K1 w - - 1 2",
                "targetMove": "e1d1",
                "goal": "protect",
                "square": "d6",
                "note": "♜ Mã d6 đang bị Vua dọa. Xe sang <b>d1</b> bảo vệ Mã",
                "mascot": "Giữ chắc chiến lợi phẩm!"
            }
        ]
    },
    {
        "id": "double-check",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 12: ♞ Mã + ♜ Xe",
        "title": "Chiếu Đôi Kết Liễu",
        "steps": [
            {
                "fen": "3qkb2/3p1p2/8/8/4N3/8/8/4R1K1 w - - 0 1",
                "targetMove": "e4d6",
                "goal": "mate",
                "note": "⚡ <b>Chiếu đôi</b>: Mã và Xe cùng chiếu, Vua hết đường!",
                "mascot": "Mã nhảy đi, Xe phía sau cũng chiếu!"
            },
            {
                "fen": "2rkr3/1p2p3/8/8/3N4/8/8/3R2K1 w - - 0 1",
                "targetMove": "d4e6",
                "goal": "mate",
                "note": "⚡ <b>Chiếu đôi</b> bằng Mã và Xe!",
                "mascot": "Mã e6 chiếu, Xe d1 cũng chiếu!"
            },
            {
                "fen": "5rkr/5p1p/6N1/8/8/8/8/6RK w - - 0 1",
                "targetMove": "g6e7",
                "goal": "mate",
                "note": "⚡ <b>Chiếu đôi</b> kết liễu nhanh chóng!",
                "mascot": "Mã e7 chiếu, Xe g1 cũng chiếu!"
            }
        ]
    },
    {
        "id": "arabian",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 12: ♞ Mã + ♜ Xe",
        "title": "Mate Ả Rập",
        "steps": [
            {
                "fen": "7k/1R6/5N2/8/8/8/8/6K1 w - - 0 1",
                "targetMove": "b7h7",
                "goal": "mate",
                "note": "🐪 Mã f6 bảo vệ Xe h7 và canh g8: chiếu bí Ả Rập!",
                "mascot": "Mã + Xe phối hợp!"
            },
            {
                "fen": "7k/8/5N2/8/8/8/8/6RK w - - 0 1",
                "targetMove": "g1g8",
                "goal": "mate",
                "note": "🐪 Xe lên <b>g8</b>, Mã bảo vệ và canh h7",
                "mascot": "Lại một kiểu Ả Rập!"
            }
        ]
    },
    {
        "id": "combo_attraction",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 12: ♞ Mã + ♜ Xe",
        "title": "Thu hút (Attraction)",
        "steps": [
            {
                "fen": "6k1/6pp/1q6/4N3/8/8/6PP/5R1K w - - 0 1",
                "targetMove": "f1f8",
                "note": "🧲 Thí Xe ở f8 để <b>kéo</b> Vua đen tới ô Mã chĩa đôi được",
                "mascot": "Thu hút Vua vào bẫy!",
                "reply": "g8f8",
                "replyNote": "👀 Vua đen buộc phải ăn Xe và bị <b>kéo</b> tới f8.",
                "before": {
                    "arrows": [
                        [
                            "f1",
                            "f8",
                            "attack"
                        ],
                        [
                            "e5",
                            "d7",
                            "path"
                        ]
                    ]
                }
            },
            {
                "fen": "5k2/6pp/1q6/4N3/8/8/6PP/7K w - - 0 2",
                "targetMove": "e5d7",
                "note": "♞ Mã chĩa đôi <b>Vua f8 và Hậu b6</b>",
                "mascot": "Chĩa đôi!",
                "reply": "f8e7",
                "replyNote": "👀 Vua phải chạy, Hậu b6 bỏ lại."
            },
            {
                "fen": "8/3Nk1pp/1q6/8/8/8/6PP/7K w - - 2 3",
                "targetMove": "d7b6",
                "note": "♞ Ăn Hậu! Đổi Xe 5 lấy Hậu 9",
                "mascot": "Đòn thu hút thành công!"
            }
        ]
    },
    {
        "id": "remove-defender",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 13: ♝ Tượng + ♜ Xe",
        "title": "Tiêu Diệt Quân Bảo Vệ",
        "steps": [
            {
                "fen": "6k1/1p3ppp/2n5/1B2b3/8/8/5PPP/4R1K1 w - - 0 1",
                "targetMove": "b5c6",
                "note": "🛡 Tượng e5 có Mã c6 bảo vệ. <b>Diệt</b> Mã bảo vệ trước!",
                "mascot": "Phá người gác cổng!",
                "reply": "b7c6",
                "replyNote": "👀 Đen ăn lại Tượng. Giờ Tượng e5 mất người bảo vệ!",
                "before": {
                    "arrows": [
                        [
                            "c6",
                            "e5",
                            "protect"
                        ]
                    ],
                    "marks": [
                        [
                            "c6",
                            "x"
                        ]
                    ]
                }
            },
            {
                "fen": "6k1/5ppp/2p5/4b3/8/8/5PPP/4R1K1 w - - 0 2",
                "targetMove": "e1e5",
                "note": "🎯 Giờ Xe ăn Tượng e5 an toàn!",
                "mascot": "Không còn ai bảo vệ!"
            }
        ]
    },
    {
        "id": "morphy_mate",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 13: ♝ Tượng + ♜ Xe",
        "title": "Morphy's Mate (Mát Morphy)",
        "steps": [
            {
                "fen": "5r1k/5p1p/5n2/8/3B4/8/5P1P/6RK w - - 0 1",
                "targetMove": "d4f6",
                "goal": "mate",
                "note": "♝ Tượng ăn Mã chiếu theo <b>đường chéo dài</b>, Xe canh cột g",
                "mascot": "Mát Morphy!"
            }
        ]
    },
    {
        "id": "open-file-2",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 13: ♝ Tượng + ♜ Xe",
        "title": "Đưa Xe sang cột h",
        "steps": [
            {
                "fen": "r4rk1/ppq2pp1/8/8/8/3BR3/PP1Q1PPP/R5K1 w - - 0 1",
                "targetMove": "e3h3",
                "note": "♜ Cột h không có Tốt: Xe sang <b>h3</b>!",
                "mascot": "Xe vòng sang cánh Vua!",
                "reply": "f8d8",
                "replyNote": "👀 Đen đưa Xe ra cột d.",
                "before": {
                    "arrows": [
                        [
                            "e3",
                            "h3",
                            "path"
                        ],
                        [
                            "h3",
                            "h8",
                            "attack"
                        ]
                    ]
                }
            },
            {
                "fen": "r2r2k1/ppq2pp1/8/8/8/3B3R/PP1Q1PPP/R5K1 w - - 2 2",
                "targetMove": "d3h7",
                "note": "♝ Tượng chiếu ở <b>h7</b>, Xe h3 bảo vệ",
                "mascot": "Xe và Tượng phối hợp!",
                "reply": "g8f8",
                "replyNote": "👀 Vua đen phải chạy sang f8."
            }
        ]
    },
    {
        "id": "uncastled-3",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 14: ♝ Tượng + ♞ Mã",
        "title": "Ghim Mã f6",
        "steps": [
            {
                "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6",
                "targetMove": "c1g5",
                "note": "📌 Tượng <b>g5</b> ghim Mã f6 vào Hậu d8",
                "mascot": "Ghim chặt!",
                "reply": "h7h6",
                "replyNote": "👀 Đen đuổi Tượng."
            },
            {
                "fen": "r1bqk2r/ppp2pp1/2np1n1p/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 7",
                "targetMove": "g5f6",
                "note": "♝ Đổi Tượng lấy Mã",
                "mascot": "Đổi quân!",
                "reply": "d8f6",
                "replyNote": "👀 Hậu đen ăn lại."
            },
            {
                "fen": "r1b1k2r/ppp2pp1/2np1q1p/2b1p3/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 8",
                "targetMove": "c3d5",
                "note": "♞ Mã lên <b>d5</b> dọa Hậu f6 và ô c7",
                "mascot": "Mã chiếm trung tâm!"
            }
        ]
    },
    {
        "id": "weak-f7-5",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 14: ♝ Tượng + ♞ Mã",
        "title": "Mã chĩa đôi ở f7",
        "steps": [
            {
                "fen": "r1bqkb1r/pppp1pp1/2n2n1p/4p1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 5",
                "targetMove": "g5f7",
                "note": "♞ Đen lơ là: Mã ăn <b>f7</b> chĩa đôi Hậu d8 và Xe h8!",
                "mascot": "Tấn công kép!",
                "reply": "d8e7",
                "replyNote": "👀 Hậu đen chạy, Xe h8 bỏ lại."
            },
            {
                "fen": "r1b1kb1r/ppppqNp1/2n2n1p/4p3/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 1 6",
                "targetMove": "f7h8",
                "note": "♞ Ăn Xe h8!",
                "mascot": "Lời to!"
            }
        ]
    },
    {
        "id": "safe-cheap-first",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 15: ♞ Mã + ♛ Hậu",
        "title": "Ăn Bằng Quân Rẻ Hơn",
        "steps": [
            {
                "fen": "3q2k1/1p3ppp/4p3/3r4/5N2/7P/1P3PP1/3Q2K1 w - - 0 1",
                "targetMove": "d1d5",
                "reply": "e6d5",
                "replyNote": "😱 Tốt e6 ăn mất Hậu! Hậu 9 điểm chỉ đổi được Xe 5 điểm.",
                "note": "🤔 Hậu và Mã cùng ăn được Xe d5. Thử cho <b>Hậu</b> ăn!",
                "mascot": "Hậu ăn Xe!"
            },
            {
                "fen": "3q2k1/1p3ppp/4p3/3r4/5N2/7P/1P3PP1/3Q2K1 w - - 0 1",
                "targetMove": "f4d5",
                "note": "✅ Xe d5 có Tốt canh. Cho quân <b>rẻ hơn</b> ăn: Mã f4 ăn Xe!",
                "mascot": "Mã 3 điểm đổi Xe 5 điểm: lời!",
                "before": {
                    "arrows": [
                        [
                            "e6",
                            "d5",
                            "attack"
                        ],
                        [
                            "f4",
                            "d5",
                            "path"
                        ]
                    ],
                    "marks": [
                        [
                            "d5",
                            "guard"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "smothered",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 15: ♞ Mã + ♛ Hậu",
        "title": "Chiếu Bí Ngạt Thở",
        "steps": [
            {
                "fen": "6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1",
                "targetMove": "g5f7",
                "goal": "mate",
                "note": "😵 Vua bị <b>vây kín</b> bởi quân nhà: Mã chiếu bí!",
                "mascot": "Ngạt thở!"
            },
            {
                "fen": "r6k/6pp/7N/8/2Q5/8/5PPP/6K1 w - - 0 1",
                "targetMove": "c4g8",
                "note": "😵 Thí Hậu ở <b>g8</b> để Xe đen tự lấp lối thoát!",
                "mascot": "Hy sinh lớn!",
                "reply": "a8g8",
                "replyNote": "👀 Vua không ăn được (Mã h6 canh g8), Xe đen buộc phải ăn Hậu."
            },
            {
                "fen": "6rk/6pp/7N/8/8/8/5PPP/6K1 w - - 0 2",
                "targetMove": "h6f7",
                "goal": "mate",
                "note": "😵 Giờ Mã chiếu bí ngạt thở!",
                "mascot": "Đòn kinh điển của Philidor!"
            }
        ]
    },
    {
        "id": "smothered-3",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 15: ♞ Mã + ♛ Hậu",
        "title": "Thí Hậu",
        "steps": [
            {
                "fen": "r6k/6pp/4Q2N/8/8/8/5PPP/6K1 w - - 0 1",
                "targetMove": "e6g8",
                "note": "♛ Thí Hậu ở <b>g8</b>!",
                "mascot": "Bẫy ngạt thở!",
                "reply": "a8g8",
                "replyNote": "👀 Vua không ăn được (Mã canh g8). Xe phải ăn Hậu."
            },
            {
                "fen": "6rk/6pp/7N/8/8/8/5PPP/6K1 w - - 0 2",
                "targetMove": "h6f7",
                "goal": "mate",
                "note": "♞ Mã chiếu bí!",
                "mascot": "Tuyệt chiêu!"
            }
        ]
    },
    {
        "id": "smothered-1",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 15: ♞ Mã + ♛ Hậu",
        "title": "Đòn Philidor",
        "steps": [
            {
                "fen": "4r2k/pp4pp/8/6N1/2Q5/8/PP3PPP/6K1 w - - 0 1",
                "targetMove": "g5f7",
                "note": "♞ Mã chiếu ở <b>f7</b>",
                "mascot": "Bắt đầu chuỗi chiếu!",
                "reply": "h8g8",
                "replyNote": "👀 Vua đen ra g8."
            },
            {
                "fen": "4r1k1/pp3Npp/8/8/2Q5/8/PP3PPP/6K1 w - - 2 2",
                "targetMove": "f7h6",
                "note": "⚡ Mã h6: <b>chiếu đôi</b> cùng Hậu c4!",
                "mascot": "Hai quân cùng chiếu!",
                "reply": "g8h8",
                "replyNote": "👀 Chiếu đôi! Vua chỉ còn đường về h8."
            },
            {
                "fen": "4r2k/pp4pp/7N/8/2Q5/8/PP3PPP/6K1 w - - 4 3",
                "targetMove": "c4g8",
                "note": "♛ Thí Hậu ở <b>g8</b>!",
                "mascot": "Hy sinh lớn!",
                "reply": "e8g8",
                "replyNote": "👀 Xe đen buộc phải ăn Hậu, tự lấp ô g8."
            },
            {
                "fen": "6rk/pp4pp/7N/8/8/8/PP3PPP/6K1 w - - 0 4",
                "targetMove": "h6f7",
                "goal": "mate",
                "note": "😵 Mã chiếu bí ngạt thở!",
                "mascot": "Philidor!"
            }
        ]
    },
    {
        "id": "smothered_mate",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 15: ♞ Mã + ♛ Hậu",
        "title": "Smothered Mate (Mát Thắt Cổ)",
        "steps": [
            {
                "fen": "4r2k/pp4pp/8/6N1/8/1Q6/PP3PPP/6K1 w - - 0 1",
                "targetMove": "g5f7",
                "note": "♞ Mã chiếu ở <b>f7</b>",
                "mascot": "Bắt đầu chuỗi chiếu!",
                "reply": "h8g8",
                "replyNote": "👀 Vua đen ra g8."
            },
            {
                "fen": "4r1k1/pp3Npp/8/8/8/1Q6/PP3PPP/6K1 w - - 2 2",
                "targetMove": "f7h6",
                "note": "⚡ Mã h6: <b>chiếu đôi</b> cùng Hậu b3!",
                "mascot": "Hai quân cùng chiếu!",
                "reply": "g8h8",
                "replyNote": "👀 Chiếu đôi! Vua phải về h8."
            },
            {
                "fen": "4r2k/pp4pp/7N/8/8/1Q6/PP3PPP/6K1 w - - 4 3",
                "targetMove": "b3g8",
                "note": "♛ Thí Hậu ở <b>g8</b>!",
                "mascot": "Hy sinh!",
                "reply": "e8g8",
                "replyNote": "👀 Xe phải ăn Hậu, tự chặn ô g8."
            },
            {
                "fen": "6rk/pp4pp/7N/8/8/8/PP3PPP/6K1 w - - 0 4",
                "targetMove": "h6f7",
                "goal": "mate",
                "note": "😵 Chiếu bí thắt cổ!",
                "mascot": "Kinh điển!"
            }
        ]
    },
    {
        "id": "mate1",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 16: ♝ Tượng + ♛ Hậu",
        "title": "Đòn Chiếu Bí 1 Nước",
        "steps": [
            {
                "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
                "targetMove": "f3f7",
                "goal": "mate",
                "note": "🎯 Điểm yếu là <b>f7</b>: Hậu ăn, Tượng c4 bảo vệ",
                "mascot": "Chiếu bí!"
            },
            {
                "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
                "targetMove": "h5f7",
                "goal": "mate",
                "note": "🎯 Hậu h5 cũng nhắm f7!",
                "mascot": "Hậu và Tượng phối hợp!"
            },
            {
                "fen": "6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1",
                "targetMove": "d1d8",
                "goal": "mate",
                "note": "🎯 Vua đen bị Tốt nhà mình chặn lối: chiếu <b>hàng cuối</b>!",
                "mascot": "Kết thúc gọn!"
            }
        ]
    },
    {
        "id": "qb-mate",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 16: ♝ Tượng + ♛ Hậu",
        "title": "Hậu Và Tượng Kết Liễu",
        "steps": [
            {
                "fen": "5rk1/5pp1/8/7Q/8/3B4/8/6K1 w - - 0 1",
                "targetMove": "h5h7",
                "goal": "mate",
                "note": "♛♝ Hậu lao vào <b>h7</b>, Tượng d3 bảo vệ",
                "mascot": "Phối hợp Hậu Tượng!"
            },
            {
                "fen": "5rk1/5pp1/8/7Q/8/8/8/1B4K1 w - - 0 1",
                "targetMove": "h5h7",
                "goal": "mate",
                "note": "♛♝ Tượng b1 nhắm thẳng h7 từ xa!",
                "mascot": "Đường chéo dài!"
            },
            {
                "fen": "5rk1/5p1p/6pQ/8/8/2B5/8/6K1 w - - 0 1",
                "targetMove": "h6g7",
                "goal": "mate",
                "note": "♛♝ Tượng c3 canh <b>g7</b>: Hậu vào đó!",
                "mascot": "Đường chéo lớn!"
            }
        ]
    },
    {
        "id": "weak-f7-1",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 16: ♝ Tượng + ♛ Hậu",
        "title": "Chiếu hết Scholar",
        "steps": [
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                "targetMove": "d1h5",
                "note": "Hậu h5 nhắm vào f7.",
                "mascot": "Chiếu hết Scholar đang đến!",
                "reply": "b8c6",
                "replyNote": "👀 Đen bảo vệ e5."
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR w KQkq - 2 3",
                "targetMove": "f1c4",
                "note": "Tượng c4 phối hợp tấn công f7.",
                "mascot": "Hai quân cùng nhắm f7!",
                "reply": "g8f6",
                "replyNote": "👀 Đen đuổi Hậu."
            },
            {
                "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
                "targetMove": "h5f7",
                "note": "Chiếu hết!",
                "mascot": "Trận đấu kết thúc chớp nhoáng!"
            }
        ]
    },
    {
        "id": "weak-f7-2",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 16: ♝ Tượng + ♛ Hậu",
        "title": "Hậu f3 và Tượng c4",
        "steps": [
            {
                "fen": "rnbqk1nr/pppp1ppp/8/2b1p3/2B1P3/8/PPPP1PPP/RNBQK1NR w KQkq - 2 3",
                "targetMove": "d1f3",
                "note": "♛ Hậu f3 cùng Tượng c4 nhắm <b>f7</b>",
                "mascot": "Hai quân một mục tiêu!",
                "reply": "b8c6",
                "replyNote": "😮 Đen ra Mã c6, quên mất ô f7!"
            },
            {
                "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5Q2/PPPP1PPP/RNB1K1NR w KQkq - 4 4",
                "targetMove": "f3f7",
                "goal": "mate",
                "note": "♛ Ăn f7: chiếu bí!",
                "mascot": "f7 chỉ có Vua bảo vệ!"
            }
        ]
    },
    {
        "id": "combo_remove_defender",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 16: ♝ Tượng + ♛ Hậu",
        "title": "Xóa bỏ phòng ngự (Removing Defender)",
        "steps": [
            {
                "fen": "r2q1rk1/ppp2ppp/5n2/3p2B1/3P4/8/PPQ2PPP/1B3RK1 w - - 0 1",
                "targetMove": "g5f6",
                "note": "🛡 Mã f6 đang canh ô <b>h7</b>. Diệt Mã trước!",
                "mascot": "Phá người gác cổng!",
                "reply": "d8f6",
                "replyNote": "👀 Đen ăn lại, Mã f6 không còn canh h7!",
                "before": {
                    "arrows": [
                        [
                            "f6",
                            "h7",
                            "protect"
                        ],
                        [
                            "c2",
                            "h7",
                            "path"
                        ]
                    ]
                }
            },
            {
                "fen": "r4rk1/ppp2ppp/5q2/3p4/3P4/8/PPQ2PPP/1B3RK1 w - - 0 2",
                "targetMove": "c2h7",
                "goal": "mate",
                "note": "♛ Hậu ăn h7, Tượng b1 bảo vệ: chiếu bí!",
                "mascot": "Không còn ai đỡ!"
            }
        ]
    },
    {
        "id": "back-rank-2",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 17: ♜ Xe + ♛ Hậu",
        "title": "Dụ quân bảo vệ",
        "steps": [
            {
                "fen": "3r2k1/5ppp/8/8/1Q6/8/5PPP/4R1K1 w - - 0 1",
                "targetMove": "b4e7",
                "note": "Hậu đe dọa chiếu hết hàng cuối.",
                "mascot": "Hậu tạo áp lực lớn.",
                "reply": "d8f8",
                "replyNote": "👀 Xe lui về phòng thủ."
            },
            {
                "fen": "5rk1/4Qppp/8/8/8/8/5PPP/4R1K1 w - - 2 2",
                "targetMove": "e1d1",
                "note": "Đưa thêm Xe tham gia.",
                "mascot": "Tăng cường quân số!",
                "reply": "h7h6",
                "replyNote": "👀 Đen tạo lỗ thông hơi cho Vua."
            },
            {
                "fen": "5rk1/4Qpp1/7p/8/8/8/5PPP/3R2K1 w - - 0 3",
                "targetMove": "d1d8",
                "note": "Trắng đổi Xe.",
                "mascot": "Ép đổi quân!"
            }
        ]
    },
    {
        "id": "combo_overloading",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 17: ♜ Xe + ♛ Hậu",
        "title": "Quá tải (Overloading)",
        "steps": [
            {
                "fen": "6k1/1p1q1ppp/8/8/3n4/8/1Q4PP/4R2K w - - 0 1",
                "targetMove": "b2d4",
                "note": "⚖️ Hậu d7 phải canh <b>hai việc</b>: Mã d4 và ô e8. Ăn Mã!",
                "mascot": "Một người không gánh nổi hai việc!",
                "reply": "d7d4",
                "replyNote": "😱 Hậu đen ăn lại... nhưng bỏ trống ô e8!",
                "before": {
                    "arrows": [
                        [
                            "d7",
                            "d4",
                            "protect"
                        ],
                        [
                            "d7",
                            "e8",
                            "protect"
                        ]
                    ]
                }
            },
            {
                "fen": "6k1/1p3ppp/8/8/3q4/8/6PP/4R2K w - - 0 2",
                "targetMove": "e1e8",
                "goal": "mate",
                "note": "♜ Xe chiếu bí hàng cuối!",
                "mascot": "Quá tải là thua!"
            }
        ]
    },
    {
        "id": "combo_xray",
        "level": "Cấp 2 · Phối hợp 2 quân",
        "category": "Chương 17: ♜ Xe + ♛ Hậu",
        "title": "Tấn công X-Ray",
        "steps": [
            {
                "fen": "3r2k1/2q2ppp/8/8/8/8/3Q1PPP/3R2K1 w - - 0 1",
                "targetMove": "d2d8",
                "note": "🔦 Xe d1 đứng sau Hậu, nhìn <b>xuyên</b> tới d8. Hậu ăn Xe!",
                "mascot": "Tia X xuyên qua!",
                "reply": "c7d8",
                "replyNote": "👀 Hậu đen ăn lại Hậu.",
                "before": {
                    "arrows": [
                        [
                            "d1",
                            "d8",
                            "path"
                        ]
                    ]
                }
            },
            {
                "fen": "3q2k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 2",
                "targetMove": "d1d8",
                "goal": "mate",
                "note": "♜ Xe ăn lại, chiếu bí!",
                "mascot": "Hai quân một cột!"
            }
        ]
    },
    {
        "id": "greek-gift-1",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 18: ♝ Tượng + ♞ Mã + ♛ Hậu",
        "title": "Thí Tượng ở h7",
        "steps": [
            {
                "fen": "rnbq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQK2R w KQ - 4 7",
                "targetMove": "d3h7",
                "note": "🎁 Tốt e5 đã đuổi Mã f6 đi, h7 không còn ai canh. <b>Thí Tượng</b> ở h7!",
                "mascot": "Món quà Hy Lạp!",
                "reply": "g8h7",
                "replyNote": "👀 Đen nhận quà: Vua ăn Tượng.",
                "before": {
                    "arrows": [
                        [
                            "d3",
                            "h7",
                            "attack"
                        ],
                        [
                            "f3",
                            "g5",
                            "path"
                        ],
                        [
                            "d1",
                            "h5",
                            "path"
                        ]
                    ]
                }
            },
            {
                "fen": "rnbq1r2/pppn1ppk/4p3/3pP3/1b1P4/2N2N2/PPP2PPP/R1BQK2R w KQ - 0 8",
                "targetMove": "f3g5",
                "note": "♞ Mã nhảy lên <b>g5</b> chiếu Vua",
                "mascot": "Mã xông vào!",
                "reply": "h7g8",
                "replyNote": "👀 Vua đen lui về g8."
            },
            {
                "fen": "rnbq1rk1/pppn1pp1/4p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1BQK2R w KQ - 2 9",
                "targetMove": "d1h5",
                "note": "♛ Hậu lên <b>h5</b>: dọa Qh7 chiếu bí!",
                "mascot": "Ba quân cùng tấn công!"
            }
        ]
    },
    {
        "id": "greek-gift-4",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 18: ♝ Tượng + ♞ Mã + ♛ Hậu",
        "title": "Khi Vua ra h6",
        "steps": [
            {
                "fen": "rnbq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQK2R w KQ - 4 7",
                "targetMove": "d3h7",
                "note": "🎁 Thí Tượng ở h7!",
                "mascot": "Bắt đầu tấn công!",
                "reply": "g8h7",
                "replyNote": "👀 Vua ăn Tượng."
            },
            {
                "fen": "rnbq1r2/pppn1ppk/4p3/3pP3/1b1P4/2N2N2/PPP2PPP/R1BQK2R w KQ - 0 8",
                "targetMove": "f3g5",
                "note": "♞ Mã chiếu ở g5",
                "mascot": "Coi chừng Tượng c1!",
                "reply": "h7h6",
                "replyNote": "👀 Vua đen tránh sang h6, đứng trên đường chéo của Tượng c1!"
            },
            {
                "fen": "rnbq1r2/pppn1pp1/4p2k/3pP1N1/1b1P4/2N5/PPP2PPP/R1BQK2R w KQ - 2 9",
                "targetMove": "g5e6",
                "note": "♞ Mã ăn e6: <b>Tượng c1 chiếu</b> lộ ra, Mã còn dọa Hậu!",
                "mascot": "Đòn phát hiện!",
                "reply": "h6h7",
                "replyNote": "👀 Vua đen phải tránh chiếu."
            },
            {
                "fen": "rnbq1r2/pppn1ppk/4N3/3pP3/1b1P4/2N5/PPP2PPP/R1BQK2R w KQ - 1 10",
                "targetMove": "e6d8",
                "note": "♞ Ăn Hậu d8!",
                "mascot": "Thu chiến lợi phẩm!"
            }
        ]
    },
    {
        "id": "greek-gift-3",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 18: ♝ Tượng + ♞ Mã + ♛ Hậu",
        "title": "Khi Vua ra g6",
        "steps": [
            {
                "fen": "rnbq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQK2R w KQ - 4 7",
                "targetMove": "d3h7",
                "note": "🎁 Thí Tượng ở h7!",
                "mascot": "Bắt đầu tấn công!",
                "reply": "g8h7",
                "replyNote": "👀 Vua ăn Tượng."
            },
            {
                "fen": "rnbq1r2/pppn1ppk/4p3/3pP3/1b1P4/2N2N2/PPP2PPP/R1BQK2R w KQ - 0 8",
                "targetMove": "f3g5",
                "note": "♞ Mã chiếu ở g5",
                "mascot": "Xem Vua đen chạy đâu!",
                "reply": "h7g6",
                "replyNote": "👀 Lần này Vua đen liều tiến lên g6."
            },
            {
                "fen": "rnbq1r2/pppn1pp1/4p1k1/3pP1N1/1b1P4/2N5/PPP2PPP/R1BQK2R w KQ - 2 9",
                "targetMove": "h2h4",
                "note": "♟ Tốt <b>h4</b> lao lên, dọa h5 chiếu",
                "mascot": "Tốt cũng đánh Vua!",
                "reply": "f7f5",
                "replyNote": "👀 Đen mở đường f7 cho Vua."
            },
            {
                "fen": "rnbq1r2/pppn2p1/4p1k1/3pPpN1/1b1P3P/2N5/PPP2PP1/R1BQK2R w KQ f6 0 10",
                "targetMove": "h4h5",
                "note": "♟ Tốt chiếu <b>h5</b>",
                "mascot": "Tốt chiếu Vua!",
                "reply": "g6h6",
                "replyNote": "👀 Vua đen lùi h6."
            },
            {
                "fen": "rnbq1r2/pppn2p1/4p2k/3pPpNP/1b1P4/2N5/PPP2PP1/R1BQK2R w KQ - 1 11",
                "targetMove": "g5f7",
                "note": "♞ Mã chiếu và <b>chĩa đôi</b> Hậu d8!",
                "mascot": "Chĩa đôi!",
                "reply": "h6h7",
                "replyNote": "👀 Vua phải chạy, bỏ Hậu."
            },
            {
                "fen": "rnbq1r2/pppn1Npk/4p3/3pPp1P/1b1P4/2N5/PPP2PP1/R1BQK2R w KQ - 3 12",
                "targetMove": "f7d8",
                "note": "♞ Ăn Hậu!",
                "mascot": "Thắng lớn!"
            }
        ]
    },
    {
        "id": "greek-gift-2",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 18: ♝ Tượng + ♞ Mã + ♛ Hậu",
        "title": "Hậu kết liễu Vua",
        "steps": [
            {
                "fen": "rnbqr1k1/pppn1pp1/4p3/3pP1NQ/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 4 10",
                "targetMove": "h5f7",
                "note": "♛ Đen mở đường f8 cho Vua. Hậu ăn <b>f7</b> chiếu!",
                "mascot": "Không cho Vua trốn!",
                "reply": "g8h8",
                "replyNote": "👀 Vua đen chạy về góc."
            },
            {
                "fen": "rnbqr2k/pppn1Qp1/4p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 1 11",
                "targetMove": "f7h5",
                "note": "♛ Hậu quay về <b>h5</b> chiếu",
                "mascot": "Dồn ép tiếp!",
                "reply": "h8g8",
                "replyNote": "👀 Vua đen quay lại g8."
            },
            {
                "fen": "rnbqr1k1/pppn2p1/4p3/3pP1NQ/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 3 12",
                "targetMove": "h5h7",
                "note": "♛ Hậu vào <b>h7</b> (Mã g5 bảo vệ)",
                "mascot": "Áp sát!",
                "reply": "g8f8",
                "replyNote": "👀 Vua đen chạy sang f8."
            },
            {
                "fen": "rnbqrk2/pppn2pQ/4p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 5 13",
                "targetMove": "h7h8",
                "note": "♛ Hậu chiếu từ <b>h8</b>",
                "mascot": "Vua đen chạy đâu cũng không thoát!",
                "reply": "f8e7",
                "replyNote": "👀 Vua đen chạy lên e7."
            },
            {
                "fen": "rnbqr2Q/pppnk1p1/4p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 7 14",
                "targetMove": "h8g7",
                "goal": "mate",
                "note": "♛ Chiếu bí ở <b>g7</b>!",
                "mascot": "Kết liễu!"
            }
        ]
    },
    {
        "id": "greek-gift-5",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 18: ♝ Tượng + ♞ Mã + ♛ Hậu",
        "title": "Trọn đòn Greek Gift",
        "steps": [
            {
                "fen": "rnbq1rk1/pppn1ppp/4p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQK2R w KQ - 4 7",
                "targetMove": "d3h7",
                "note": "🎁 Tốt e5 đã đuổi Mã f6 đi, h7 không còn ai canh. <b>Thí Tượng</b> ở h7!",
                "mascot": "Món quà Hy Lạp!",
                "reply": "g8h7",
                "replyNote": "👀 Đen nhận quà: Vua ăn Tượng.",
                "before": {
                    "arrows": [
                        [
                            "d3",
                            "h7",
                            "attack"
                        ],
                        [
                            "f3",
                            "g5",
                            "path"
                        ],
                        [
                            "d1",
                            "h5",
                            "path"
                        ]
                    ]
                }
            },
            {
                "fen": "rnbq1r2/pppn1ppk/4p3/3pP3/1b1P4/2N2N2/PPP2PPP/R1BQK2R w KQ - 0 8",
                "targetMove": "f3g5",
                "note": "♞ Mã nhảy lên <b>g5</b> chiếu Vua",
                "mascot": "Mã xông vào!",
                "reply": "h7g8",
                "replyNote": "👀 Vua đen lui về g8."
            },
            {
                "fen": "rnbq1rk1/pppn1pp1/4p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1BQK2R w KQ - 2 9",
                "targetMove": "d1h5",
                "note": "♛ Hậu lên h5 dọa chiếu bí h7",
                "mascot": "Dọa mat!",
                "reply": "f8e8",
                "replyNote": "👀 Đen mở ô f8 cho Vua."
            },
            {
                "fen": "rnbqr1k1/pppn1pp1/4p3/3pP1NQ/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 4 10",
                "targetMove": "h5f7",
                "note": "♛ Ăn f7 chiếu",
                "mascot": "Phá tung lá chắn!",
                "reply": "g8h8",
                "replyNote": "👀 Vua chạy về góc."
            },
            {
                "fen": "rnbqr2k/pppn1Qp1/4p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 1 11",
                "targetMove": "f7h5",
                "note": "♛ Chiếu từ h5",
                "mascot": "Dồn Vua!",
                "reply": "h8g8"
            },
            {
                "fen": "rnbqr1k1/pppn2p1/4p3/3pP1NQ/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 3 12",
                "targetMove": "h5h7",
                "note": "♛ Hậu vào h7",
                "mascot": "Mã g5 bảo vệ!",
                "reply": "g8f8"
            },
            {
                "fen": "rnbqrk2/pppn2pQ/4p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 5 13",
                "targetMove": "h7h8",
                "note": "♛ Chiếu từ h8",
                "mascot": "Sắp xong!",
                "reply": "f8e7"
            },
            {
                "fen": "rnbqr2Q/pppnk1p1/4p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 7 14",
                "targetMove": "h8g7",
                "goal": "mate",
                "note": "♛ Chiếu bí!",
                "mascot": "Hoàn hảo!"
            }
        ]
    },
    {
        "id": "overload-1",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 18: ♝ Tượng + ♞ Mã + ♛ Hậu",
        "title": "Quân bảo vệ quá tải",
        "steps": [
            {
                "fen": "5rk1/pp3ppp/5n2/3b2N1/8/1B5Q/PP3PPP/6K1 w - - 0 1",
                "targetMove": "b3d5",
                "note": "⚖️ Nhìn <b>Mã f6</b>: nó đang gánh <b>2 việc</b> cùng lúc: canh <b>Tượng d5</b> và canh ô <b>h7</b>. Quân phải làm 2 việc là bị <b>quá tải</b>. Hãy ăn Tượng d5!",
                "mascot": "Mũi tên xanh: Mã f6 canh 2 nơi. Mũi tên đỏ: ta đang dọa cả 2!",
                "reply": "f6d5",
                "replyNote": "😱 Mã f6 ăn lại Tượng... nhưng nó đã RỜI f6, ô h7 không còn ai canh!",
                "before": {
                    "arrows": [
                        [
                            "f6",
                            "d5",
                            "protect"
                        ],
                        [
                            "f6",
                            "h7",
                            "protect"
                        ],
                        [
                            "b3",
                            "d5",
                            "attack"
                        ],
                        [
                            "h3",
                            "h7",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "f6",
                            "glow"
                        ],
                        [
                            "d5",
                            "guard"
                        ],
                        [
                            "h7",
                            "guard"
                        ]
                    ]
                },
                "hideTarget": true
            },
            {
                "fen": "5rk1/pp3ppp/8/3n2N1/8/7Q/PP3PPP/6K1 w - - 0 2",
                "targetMove": "h3h7",
                "goal": "mate",
                "note": "♛ Mã đã bỏ việc canh h7: Hậu ăn h7, Mã g5 bảo vệ → <b>chiếu bí</b>!",
                "mascot": "Một người không gánh nổi 2 việc!",
                "before": {
                    "arrows": [
                        [
                            "h3",
                            "h7",
                            "attack"
                        ],
                        [
                            "g5",
                            "h7",
                            "protect"
                        ]
                    ]
                }
            },
            {
                "fen": "6k1/1p1q1ppp/8/8/3n4/8/1Q4PP/4R2K w - - 0 1",
                "targetMove": "b2d4",
                "note": "⚖️ Ví dụ 2: <b>Hậu d7</b> vừa canh <b>Mã d4</b>, vừa canh ô <b>e8</b> (chặn Xe chiếu hàng cuối). Ăn Mã d4!",
                "mascot": "Tìm quân đang gánh 2 việc!",
                "reply": "d7d4",
                "replyNote": "😱 Hậu đen ăn lại... và bỏ trống ô e8!",
                "before": {
                    "arrows": [
                        [
                            "d7",
                            "d4",
                            "protect"
                        ],
                        [
                            "d7",
                            "e8",
                            "protect"
                        ],
                        [
                            "b2",
                            "d4",
                            "attack"
                        ],
                        [
                            "e1",
                            "e8",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "d7",
                            "glow"
                        ],
                        [
                            "d4",
                            "guard"
                        ],
                        [
                            "e8",
                            "guard"
                        ]
                    ]
                },
                "hideTarget": true
            },
            {
                "fen": "6k1/1p3ppp/8/8/3q4/8/6PP/4R2K w - - 0 2",
                "targetMove": "e1e8",
                "goal": "mate",
                "note": "♜ Hậu đen đã rời d7: Xe chiếu bí hàng cuối!",
                "mascot": "Quá tải là thua!"
            }
        ]
    },
    {
        "id": "pawn-storm-4",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 19: ♝ Tượng + ♜ Xe + ♛ Hậu",
        "title": "Đưa Xe vào tham chiến",
        "steps": [
            {
                "fen": "r4rk1/1q3pp1/p7/1p6/8/3BR3/PP1Q1PPP/R5K1 w - - 0 1",
                "targetMove": "e3g3",
                "note": "♜ Xe e3 <b>sang ngang</b> tới g3, nhắm thẳng Vua đen!",
                "mascot": "Xe tham gia tấn công!",
                "reply": "b7c6",
                "replyNote": "👀 Hậu đen chạy về phòng thủ.",
                "before": {
                    "arrows": [
                        [
                            "e3",
                            "g3",
                            "path"
                        ],
                        [
                            "g3",
                            "g7",
                            "attack"
                        ]
                    ]
                }
            },
            {
                "fen": "r4rk1/5pp1/p1q5/1p6/8/3B2R1/PP1Q1PPP/R5K1 w - - 2 2",
                "targetMove": "d2g5",
                "note": "♛ Hậu lên <b>g5</b>, cùng Xe nhắm ô g7",
                "mascot": "Hai quân một cột!",
                "reply": "g7g6",
                "replyNote": "👀 Đen chặn đường bằng Tốt g6."
            },
            {
                "fen": "r4rk1/5p2/p1q3p1/1p4Q1/8/3B2R1/PP3PPP/R5K1 w - - 0 3",
                "targetMove": "g5h6",
                "note": "♛ Hậu luồn sang <b>h6</b>",
                "mascot": "Áp sát Vua!",
                "reply": "c6f6",
                "replyNote": "👀 Hậu đen về f6 chống đỡ."
            },
            {
                "fen": "r4rk1/5p2/p4qpQ/1p6/8/3B2R1/PP3PPP/R5K1 w - - 2 4",
                "targetMove": "d3g6",
                "note": "♝ Thí Tượng phá Tốt g6!",
                "mascot": "Phá lá chắn!",
                "reply": "f7g6",
                "replyNote": "👀 Đen ăn Tượng, mở cột g."
            },
            {
                "fen": "r4rk1/8/p4qpQ/1p6/8/6R1/PP3PPP/R5K1 w - - 0 5",
                "targetMove": "g3g6",
                "note": "♜ Xe ăn g6 chiếu: Xe đã vào cuộc!",
                "mascot": "Xe kết thúc đòn!"
            }
        ]
    },
    {
        "id": "opera_mate",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 19: ♝ Tượng + ♜ Xe + ♛ Hậu",
        "title": "Opera Box Mate (Mát Opera)",
        "steps": [
            {
                "fen": "4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 1 17",
                "targetMove": "b3b8",
                "note": "🎭 Ván cờ Opera của Morphy: thí Hậu ở <b>b8</b>!",
                "mascot": "Nước đi bất tử!",
                "reply": "d7b8",
                "replyNote": "👀 Mã đen buộc phải ăn Hậu, rời ô d7."
            },
            {
                "fen": "1n2kb1r/p4ppp/4q3/4p1B1/4P3/8/PPP2PPP/2KR4 w k - 0 18",
                "targetMove": "d1d8",
                "goal": "mate",
                "note": "♜ Xe chiếu bí, Tượng g5 canh ô e7!",
                "mascot": "Xe và Tượng kết liễu!"
            }
        ]
    },
    {
        "id": "anastasia_mate",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 20: ♞ Mã + ♜ Xe + ♛ Hậu",
        "title": "Anastasia's Mate (Mát Anastasia)",
        "steps": [
            {
                "fen": "r4rk1/pb3ppp/8/3N3Q/8/3R4/PPP2PPP/6K1 w - - 0 1",
                "targetMove": "d5e7",
                "note": "♞ Mã chiếu ở <b>e7</b>, canh luôn ô g8 và g6",
                "mascot": "Khóa đường thoát!",
                "reply": "g8h8",
                "replyNote": "👀 Vua đen trốn vào góc."
            },
            {
                "fen": "r4r1k/pb2Nppp/8/7Q/8/3R4/PPP2PPP/6K1 w - - 2 2",
                "targetMove": "h5h7",
                "note": "♛ Thí Hậu ở <b>h7</b> mở cột h!",
                "mascot": "Hy sinh lớn!",
                "reply": "h8h7",
                "replyNote": "👀 Vua buộc phải ăn Hậu."
            },
            {
                "fen": "r4r2/pb2Nppk/8/8/8/3R4/PPP2PPP/6K1 w - - 0 3",
                "targetMove": "d3h3",
                "goal": "mate",
                "note": "♜ Xe sang cột h: chiếu bí Anastasia!",
                "mascot": "Mã và Xe phối hợp!"
            }
        ]
    },
    {
        "id": "boden_mate",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 21: ♛ Hậu + ♝ 2 Tượng",
        "title": "Boden's Mate (Mát Boden)",
        "steps": [
            {
                "fen": "2kr3r/pp1n1ppp/2p1p3/8/1b1P1B2/2N2Q1P/PPP1BPP1/R4RK1 w - - 0 1",
                "targetMove": "f3c6",
                "note": "✝️ Thí Hậu ở <b>c6</b> để phá lá chắn Tốt!",
                "mascot": "Hy sinh táo bạo!",
                "reply": "b7c6",
                "replyNote": "👀 Tốt b7 buộc phải ăn Hậu, mở đường chéo a6.",
                "before": {
                    "arrows": [
                        [
                            "f4",
                            "b8",
                            "path"
                        ],
                        [
                            "e2",
                            "a6",
                            "path"
                        ]
                    ]
                }
            },
            {
                "fen": "2kr3r/p2n1ppp/2p1p3/8/1b1P1B2/2N4P/PPP1BPP1/R4RK1 w - - 0 2",
                "targetMove": "e2a6",
                "goal": "mate",
                "note": "✝️ Hai Tượng <b>bắt chéo</b>: chiếu bí Boden!",
                "mascot": "Hai đường chéo giao nhau!"
            }
        ]
    },
    {
        "id": "weak-f7-4",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 22: ♟ Tốt + ♞ Mã + ♝ Tượng",
        "title": "Mã g5 nhắm f7",
        "steps": [
            {
                "fen": "r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
                "targetMove": "f3g5",
                "note": "♞ Mã <b>g5</b> và Tượng c4 cùng tấn công f7",
                "mascot": "Hai quân dồn vào f7!",
                "reply": "d7d5",
                "replyNote": "👀 Đen chặn đường chéo bằng d5."
            },
            {
                "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq d6 0 5",
                "targetMove": "e4d5",
                "note": "♟ Ăn Tốt d5, giữ đường chéo",
                "mascot": "Không cho chặn!",
                "reply": "c6a5",
                "replyNote": "👀 Mã đen đuổi Tượng c4."
            },
            {
                "fen": "r1bqkb1r/ppp2ppp/5n2/n2Pp1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 1 6",
                "targetMove": "c4b5",
                "note": "♝ Tượng chiếu và giữ Tốt d5",
                "mascot": "Hơn một Tốt!"
            }
        ]
    },
    {
        "id": "legal_mate",
        "level": "Cấp 3 · Phối hợp 3 quân",
        "category": "Chương 22: ♟ Tốt + ♞ Mã + ♝ Tượng",
        "title": "Légal's Mate (Mát Légal)",
        "steps": [
            {
                "fen": "r2qkbnr/ppp2ppp/2np4/4p2b/2B1P3/2N2N1P/PPPP1PP1/R1BQK2R w KQkq - 1 6",
                "targetMove": "f3e5",
                "note": "🪤 Mã ăn Tốt e5, <b>bỏ mặc Hậu</b> d1!",
                "mascot": "Đặt bẫy Légal!",
                "reply": "h5d1",
                "replyNote": "😮 Đen tham ăn Hậu... và rơi vào bẫy!"
            },
            {
                "fen": "r2qkbnr/ppp2ppp/2np4/4N3/2B1P3/2N4P/PPPP1PP1/R1BbK2R w KQkq - 0 7",
                "targetMove": "c4f7",
                "note": "♝ Tượng chiếu ở <b>f7</b>",
                "mascot": "Dồn Vua!",
                "reply": "e8e7",
                "replyNote": "👀 Vua đen chỉ còn ô e7."
            },
            {
                "fen": "r2q1bnr/ppp1kBpp/2np4/4N3/4P3/2N4P/PPPP1PP1/R1BbK2R w KQ - 1 8",
                "targetMove": "c3d5",
                "goal": "mate",
                "note": "♞ Mã d5: chiếu bí bằng 3 quân nhẹ!",
                "mascot": "Mất Hậu mà vẫn thắng!"
            }
        ]
    },
    {
        "id": "opening",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Nguyên Tắc Khai Cuộc Ô Tô",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "e2e4",
                "note": "🚀 Khai cuộc: đẩy Tốt trung tâm lên <b>e4</b>",
                "mascot": "Chiếm trung tâm!",
                "reply": "e7e5",
                "replyNote": "👀 Đen cũng chiếm trung tâm."
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
                "targetMove": "g1f3",
                "note": "🚀 Ra Mã, dọa Tốt e5",
                "mascot": "Mã ra quân!",
                "reply": "b8c6",
                "replyNote": "👀 Đen ra Mã bảo vệ e5."
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "f1c4",
                "note": "🚀 Ra Tượng nhắm ô f7",
                "mascot": "Chuẩn bị nhập thành!"
            },
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "d2d4",
                "note": "🚀 Cách khác: chiếm trung tâm bằng <b>d4</b>",
                "mascot": "Trung tâm là quan trọng!"
            }
        ]
    },
    {
        "id": "develop",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Ra Quân & Nhập Thành",
        "steps": [
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
                "targetMove": "g1f3",
                "note": "🐴 Ra Mã trước",
                "mascot": "Ra quân nhẹ trước!",
                "reply": "b8c6",
                "replyNote": "👀 Đen ra Mã."
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "f1c4",
                "note": "♝ Ra Tượng",
                "mascot": "Đường cho Vua đã thông!",
                "reply": "f8c5",
                "replyNote": "👀 Đen ra Tượng."
            },
            {
                "fen": "r1bqk1nr/pppp1ppp/2n5/2b1p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 4 4",
                "targetMove": "e1g1",
                "note": "🏰 Nhập thành!",
                "mascot": "An toàn cho Vua!"
            }
        ]
    },
    {
        "id": "center-d4",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Tấn Công Trung Tâm",
        "steps": [
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "d2d4",
                "note": "⚔️ Đẩy Tốt <b>d4</b> tấn công trung tâm",
                "mascot": "Mở trung tâm!",
                "reply": "e5d4",
                "replyNote": "👀 Đen ăn Tốt."
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4",
                "targetMove": "f3d4",
                "note": "⚔️ Mã ăn lại Tốt, đứng giữa bàn!",
                "mascot": "Trung tâm của ta!"
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/2N2N2/PPPP1PPP/R1BQKB1R w KQkq - 4 4",
                "targetMove": "d2d4",
                "note": "⚔️ Khai cuộc 4 Mã: cũng đẩy <b>d4</b>!",
                "mascot": "Ghi nhớ đẩy Tốt trung tâm!"
            }
        ]
    },
    {
        "id": "opening_italian",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Ván cờ Ý (Italian Game)",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "e2e4",
                "note": "🇮🇹 Tốt <b>e4</b> chiếm trung tâm",
                "mascot": "Khởi đầu kinh điển!",
                "reply": "e7e5",
                "replyNote": "👀 Đen đáp e5."
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
                "targetMove": "g1f3",
                "note": "🐴 Mã <b>f3</b> dọa Tốt e5",
                "mascot": "Ra quân có nhịp!",
                "reply": "b8c6",
                "replyNote": "👀 Mã c6 bảo vệ Tốt e5."
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "f1c4",
                "note": "♝ Tượng <b>c4</b> nhắm ô yếu f7: Ván cờ Ý!",
                "mascot": "Giuoco Piano!"
            }
        ]
    },
    {
        "id": "opening_ruy_lopez",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Ván cờ Tây Ban Nha (Ruy Lopez)",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "e2e4",
                "note": "🇪🇸 Tốt <b>e4</b> chiếm trung tâm",
                "mascot": "Bắt đầu!",
                "reply": "e7e5",
                "replyNote": "👀 Đen đáp e5."
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2",
                "targetMove": "g1f3",
                "note": "🐴 Mã <b>f3</b> dọa Tốt e5",
                "mascot": "Ra quân!",
                "reply": "b8c6",
                "replyNote": "👀 Mã c6 bảo vệ e5."
            },
            {
                "fen": "r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3",
                "targetMove": "f1b5",
                "note": "♝ Tượng <b>b5</b> dọa Mã c6, người bảo vệ e5: Ván cờ Tây Ban Nha!",
                "mascot": "Khai cuộc lâu đời nhất!"
            }
        ]
    },
    {
        "id": "opening_queens_gambit",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Thí Tốt Hậu (Queen's Gambit)",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "d2d4",
                "note": "👑 Tốt <b>d4</b> chiếm trung tâm",
                "mascot": "Khai cuộc Tốt Hậu!",
                "reply": "d7d5",
                "replyNote": "👀 Đen đáp d5."
            },
            {
                "fen": "rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq d6 0 2",
                "targetMove": "c2c4",
                "note": "♟ Thí Tốt <b>c4</b> để kéo Tốt d5 khỏi trung tâm",
                "mascot": "Gambit Hậu!",
                "reply": "e7e6",
                "replyNote": "👀 Đen giữ trung tâm bằng e6."
            },
            {
                "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3",
                "targetMove": "b1c3",
                "note": "🐴 Mã <b>c3</b> thêm sức ép lên d5",
                "mascot": "Phát triển quân!"
            }
        ]
    },
    {
        "id": "opening_sicilian",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Phòng thủ Sicilian",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "e2e4",
                "note": "🌋 Tốt <b>e4</b>",
                "mascot": "Trắng mở đầu!",
                "reply": "c7c5",
                "replyNote": "👀 Đen đáp c5: Phòng thủ Sicilian!"
            },
            {
                "fen": "rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2",
                "targetMove": "g1f3",
                "note": "🐴 Mã <b>f3</b> chuẩn bị d4",
                "mascot": "Ra quân!",
                "reply": "d7d6",
                "replyNote": "👀 Đen đẩy d6."
            },
            {
                "fen": "rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 3",
                "targetMove": "d2d4",
                "note": "♟ Đẩy <b>d4</b> mở trung tâm: Sicilian Mở",
                "mascot": "Đấu trí sắc bén!"
            }
        ]
    },
    {
        "id": "opening_french",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Phòng thủ Pháp",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "e2e4",
                "note": "🇫🇷 Tốt <b>e4</b>",
                "mascot": "Trắng mở đầu!",
                "reply": "e7e6",
                "replyNote": "👀 Đen đáp e6: Phòng thủ Pháp."
            },
            {
                "fen": "rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                "targetMove": "d2d4",
                "note": "♟ Thêm Tốt <b>d4</b>: trung tâm 2 Tốt",
                "mascot": "Chiếm trọn trung tâm!",
                "reply": "d7d5",
                "replyNote": "👀 Đen phản công d5."
            },
            {
                "fen": "rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3",
                "targetMove": "b1c3",
                "note": "🐴 Mã <b>c3</b> bảo vệ Tốt e4",
                "mascot": "Biến chính!"
            }
        ]
    },
    {
        "id": "opening_caro_kann",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 23: 🚀 Khai cuộc",
        "title": "Phòng thủ Caro-Kann",
        "steps": [
            {
                "fen": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
                "targetMove": "e2e4",
                "note": "🛡 Tốt <b>e4</b>",
                "mascot": "Trắng mở đầu!",
                "reply": "c7c6",
                "replyNote": "👀 Đen đáp c6: Phòng thủ Caro-Kann."
            },
            {
                "fen": "rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2",
                "targetMove": "d2d4",
                "note": "♟ Thêm Tốt <b>d4</b>",
                "mascot": "Trung tâm vững!",
                "reply": "d7d5",
                "replyNote": "👀 Đen phản công d5."
            },
            {
                "fen": "rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3",
                "targetMove": "b1c3",
                "note": "🐴 Mã <b>c3</b> bảo vệ Tốt e4",
                "mascot": "Biến cổ điển!"
            }
        ]
    },
    {
        "id": "weak-f7-3",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 24: ⚔️ Tấn công Vua",
        "title": "Mã thí tại f7",
        "steps": [
            {
                "fen": "r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq d6 0 5",
                "targetMove": "e4d5",
                "note": "♟ Ăn Tốt d5",
                "mascot": "Mở đường cho Tượng c4!",
                "reply": "f6d5",
                "replyNote": "👀 Mã đen ăn lại, bỏ trống f7."
            },
            {
                "fen": "r1bqkb1r/ppp2ppp/2n5/3np1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 6",
                "targetMove": "g5f7",
                "note": "🔥 Thí Mã ở <b>f7</b> (Gan Rán)!",
                "mascot": "Kéo Vua ra ngoài!",
                "reply": "e8f7",
                "replyNote": "👀 Vua đen buộc phải ăn Mã và ra giữa bàn."
            },
            {
                "fen": "r1bq1b1r/ppp2kpp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R w KQ - 0 7",
                "targetMove": "d1f3",
                "note": "♛ Hậu chiếu và dọa Mã d5",
                "mascot": "Vua đen lộ diện!",
                "reply": "f7e6",
                "replyNote": "👀 Vua phải bảo vệ Mã d5."
            },
            {
                "fen": "r1bq1b1r/ppp3pp/2n1k3/3np3/2B5/5Q2/PPPP1PPP/RNB1K2R w KQ - 2 8",
                "targetMove": "b1c3",
                "note": "♞ Thêm Mã tấn công d5: Vua đen rất nguy hiểm",
                "mascot": "Dồn ép!"
            }
        ]
    },
    {
        "id": "uncastled-2",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 24: ⚔️ Tấn công Vua",
        "title": "Mở cột e",
        "steps": [
            {
                "fen": "r1bqk2r/pppp1ppp/2n2n2/2b5/2BpP3/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 6",
                "targetMove": "e4e5",
                "note": "⚔️ Vua đen còn ở e8. Đẩy <b>e5</b> đuổi Mã f6",
                "mascot": "Mở đường tấn công!",
                "reply": "d7d5",
                "replyNote": "👀 Đen phản công vào Tượng c4."
            },
            {
                "fen": "r1bqk2r/ppp2ppp/2n2n2/2bpP3/2Bp4/5N2/PPP2PPP/RNBQ1RK1 w kq d6 0 7",
                "targetMove": "e5f6",
                "note": "♟ Ăn Mã f6",
                "mascot": "Đổi quân để mở cột!",
                "reply": "d5c4",
                "replyNote": "👀 Đen ăn Tượng c4."
            },
            {
                "fen": "r1bqk2r/ppp2ppp/2n2P2/2b5/2pp4/5N2/PPP2PPP/RNBQ1RK1 w kq - 0 8",
                "targetMove": "f1e1",
                "note": "♜ Cột e đã mở: Xe <b>chiếu</b> Vua chưa nhập thành!",
                "mascot": "Xe xông vào cột e!",
                "reply": "c8e6",
                "replyNote": "👀 Đen phải lấy Tượng che chắn."
            },
            {
                "fen": "r2qk2r/ppp2ppp/2n1bP2/2b5/2pp4/5N2/PPP2PPP/RNBQR1K1 w kq - 2 9",
                "targetMove": "f3g5",
                "note": "♞ Mã tấn công Tượng e6 đang bị ghim",
                "mascot": "Dồn ép Vua giữa bàn!"
            }
        ]
    },
    {
        "id": "pawn-storm-1",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 24: ⚔️ Tấn công Vua",
        "title": "Mở đường bão Tốt",
        "steps": [
            {
                "fen": "rnbq1rk1/ppp2ppp/4pn2/3p4/2PP4/2B1P3/PP3PPP/R2QKBNR w KQ - 1 7",
                "targetMove": "g2g4",
                "note": "Đẩy Tốt g4 để bắt đầu bão Tốt.",
                "mascot": "Bão Tốt bắt đầu!",
                "reply": "f6e4",
                "replyNote": "👀 Mã Đen nhảy lên e4."
            },
            {
                "fen": "rnbq1rk1/ppp2ppp/4p3/3p4/2PPn1P1/2B1P3/PP3P1P/R2QKBNR w KQ - 1 8",
                "targetMove": "h2h4",
                "note": "Tốt h4 lên tiếp viện.",
                "mascot": "Bão Tốt đang mạnh dần!",
                "reply": "c7c5",
                "replyNote": "👀 Đen phản công ở cánh Hậu."
            },
            {
                "fen": "rnbq1rk1/pp3ppp/4p3/2pp4/2PPn1PP/2B1P3/PP3P2/R2QKBNR w KQ - 0 9",
                "targetMove": "g4g5",
                "note": "Tiếp tục tiến Tốt g5 đuổi Mã, gây sức ép.",
                "mascot": "Gây áp lực tối đa!"
            }
        ]
    },
    {
        "id": "pawn-storm-2",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 24: ⚔️ Tấn công Vua",
        "title": "Tốt h xung phong",
        "steps": [
            {
                "fen": "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 1 8",
                "targetMove": "h2h4",
                "note": "Bắt đầu bằng Tốt h4.",
                "mascot": "Tốt h xung phong!",
                "reply": "h7h6",
                "replyNote": "👀 Đen chặn lại."
            },
            {
                "fen": "r1bq1rk1/ppp2pp1/2n1pn1p/3p4/2PP3P/2N1PN2/PP3PP1/R2QKB1R w KQ - 0 9",
                "targetMove": "g2g4",
                "note": "Tốt g4 xông lên.",
                "mascot": "Bão Tốt kép!",
                "reply": "f6g4",
                "replyNote": "👀 Đen ăn Tốt g4."
            },
            {
                "fen": "r1bq1rk1/ppp2pp1/2n1p2p/3p4/2PP2nP/2N1PN2/PP3P2/R2QKB1R w KQ - 0 10",
                "targetMove": "h1g1",
                "note": "Xe ra g1 tấn công Mã.",
                "mascot": "Xe g1 chuẩn bị tấn công."
            }
        ]
    },
    {
        "id": "pawn-storm-3",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 24: ⚔️ Tấn công Vua",
        "title": "Phá vỡ cấu trúc",
        "steps": [
            {
                "fen": "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQ - 1 8",
                "targetMove": "g2g4",
                "note": "Tốt g4 xông lên.",
                "mascot": "Bão Tốt bắt đầu!",
                "reply": "f6g4",
                "replyNote": "👀 Đen ăn Tốt g4."
            },
            {
                "fen": "r1bq1rk1/ppp2ppp/2n1p3/3p4/2PP2n1/2N1PN2/PP3P1P/R2QKB1R w KQ - 0 9",
                "targetMove": "h1g1",
                "note": "Xe ra g1.",
                "mascot": "Xe vào vị trí!",
                "reply": "g4f6",
                "replyNote": "👀 Mã lùi về."
            },
            {
                "fen": "r1bq1rk1/ppp2ppp/2n1pn2/3p4/2PP4/2N1PN2/PP3P1P/R2QKBR1 w Q - 2 10",
                "targetMove": "h2h4",
                "note": "Tốt h4 tiếp tục.",
                "mascot": "Tốt h4 tiếp sức!"
            }
        ]
    },
    {
        "id": "overload-2",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 24: ⚔️ Tấn công Vua",
        "title": "Đuổi quân phòng thủ",
        "steps": [
            {
                "fen": "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R4RK1 w - - 3 10",
                "targetMove": "a1c1",
                "note": "Xe c1 kiểm soát cột c.",
                "mascot": "Xe ra cột c.",
                "reply": "c8g4",
                "replyNote": "👀 Đen ghim Mã f3."
            },
            {
                "fen": "r2q1rk1/ppp2ppp/2n2n2/3p4/3P2b1/2NBPN2/PP1Q1PPP/2R2RK1 w - - 5 11",
                "targetMove": "f3e5",
                "note": "Trắng nhảy Mã e5.",
                "mascot": "Mã e5 rất mạnh!",
                "reply": "c6e5",
                "replyNote": "👀 Đen đổi Mã."
            },
            {
                "fen": "r2q1rk1/ppp2ppp/5n2/3pn3/3P2b1/2NBP3/PP1Q1PPP/2R2RK1 w - - 0 12",
                "targetMove": "d4e5",
                "note": "Tốt ăn lại, đuổi Mã f6.",
                "mascot": "Tốt đuổi Mã f6!"
            }
        ]
    },
    {
        "id": "overload-4",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 24: ⚔️ Tấn công Vua",
        "title": "Mở khoảng trống",
        "steps": [
            {
                "fen": "r1bq1rk1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R4RK1 w - - 3 10",
                "targetMove": "f1e1",
                "note": "Xe e1.",
                "mascot": "Chuẩn bị e4.",
                "reply": "f8e8",
                "replyNote": "👀 Xe e8."
            },
            {
                "fen": "r1bqr1k1/ppp2ppp/2n2n2/3p4/3P4/2NBPN2/PP1Q1PPP/R3R1K1 w - - 5 11",
                "targetMove": "e3e4",
                "note": "Trắng e4.",
                "mascot": "Mở tung trung tâm!",
                "reply": "d5e4",
                "replyNote": "👀 Đen ăn Tốt."
            },
            {
                "fen": "r1bqr1k1/ppp2ppp/2n2n2/8/3Pp3/2NB1N2/PP1Q1PPP/R3R1K1 w - - 0 12",
                "targetMove": "c3e4",
                "note": "Mã ăn lại.",
                "mascot": "Mã chiếm e4."
            }
        ]
    },
    {
        "id": "scholar-defense",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 25: 🛡 Phòng thủ",
        "title": "Chặn Bẫy Mate Học Sinh",
        "steps": [
            {
                "fen": "rnb1k1nr/pppp1ppp/8/2b1p3/2B1P2q/2N5/PPPP1PPP/R1BQK1NR w KQkq - 4 4",
                "targetMove": "d1e2",
                "goal": "stop-mate",
                "note": "🛡 Hậu h4 và Tượng c5 cùng dọa <b>Qxf2#</b>! Bảo vệ ô f2 (Qe2, Qf3 hoặc g3 đều được)",
                "mascot": "Ô f2 là điểm yếu của Trắng!",
                "before": {
                    "arrows": [
                        [
                            "h4",
                            "f2",
                            "attack"
                        ],
                        [
                            "c5",
                            "f2",
                            "attack"
                        ]
                    ],
                    "marks": [
                        [
                            "f2",
                            "guard"
                        ]
                    ]
                }
            },
            {
                "fen": "rnb1k1nr/pppp1ppp/5q2/2b1p3/2B1P3/2N3P1/PPPP1P1P/R1BQK1NR w KQkq - 1 5",
                "targetMove": "g1f3",
                "goal": "stop-mate",
                "note": "🛡 Hậu đen quay sang f6, lại dọa f2! Ra <b>Mã f3</b> chặn đường",
                "mascot": "Ra quân và phòng thủ cùng lúc!",
                "before": {
                    "arrows": [
                        [
                            "f6",
                            "f2",
                            "attack"
                        ],
                        [
                            "c5",
                            "f2",
                            "attack"
                        ]
                    ]
                }
            }
        ]
    },
    {
        "id": "adv-def-prophylaxis",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 25: 🛡 Phòng thủ",
        "title": "Tư duy phòng ngừa (Prophylaxis)",
        "steps": [
            {
                "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQ1RK1 w kq - 0 1",
                "targetMove": "h2h3",
                "note": "<b>Tư duy phòng ngừa:</b> Ngăn chặn ý đồ của đối phương trước khi nó xảy ra. Đen muốn nhảy Ngựa hoặc Tượng vào g4. Nước <b>h3</b> ngăn chặn điều này.",
                "mascot": "Tướng của ta cần không gian an toàn! Hãy chặn đường đối thủ nào!"
            },
            {
                "fen": "r2qk2r/ppp1bppp/2np1n2/4p3/4P1b1/2NP1N2/PPP1BPPP/R1BQ1RK1 w kq - 0 1",
                "targetMove": "a2a3",
                "note": "🛡 <b>Phòng ngừa:</b> Đẩy <b>a3</b> để Mã, Tượng đen không nhảy được vào ô b4",
                "mascot": "Một nước cờ nhỏ nhưng cứu được cả Tượng mạnh!"
            },
            {
                "fen": "r1bq1rk1/ppp2ppp/2np4/2b1p3/2B1P1n1/2NP3N/PPP2PPP/R1BQK2R w KQ - 0 1",
                "targetMove": "e1g1",
                "note": "<b>Nhập thành an toàn:</b> Trắng nhập thành để đưa Vua vào vị trí an toàn trước khi Đen tổ chức tấn công mạnh hơn.",
                "mascot": "Đừng quên nhập thành, đó là biện pháp phòng ngừa tốt nhất!"
            },
            {
                "fen": "r2qk2r/pppbbppp/2np1n2/4p3/4P3/2NP1N2/PPP1BPPP/R1BQK2R w KQkq - 0 1",
                "targetMove": "f3d2",
                "note": "<b>Phòng ngừa chiến lược:</b> Trắng đưa Mã về d2 để chuẩn bị c3, ngăn cản sức mạnh của các quân Đen ở trung tâm.",
                "mascot": "Lùi một bước để tiến ba bước!"
            }
        ]
    },
    {
        "id": "adv-def-counterattack",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 25: 🛡 Phòng thủ",
        "title": "Phản công khi phòng thủ",
        "steps": [
            {
                "fen": "r1q4k/pp3Qpp/2p2p2/4p3/8/2P5/PP3PPP/3R2K1 w - - 0 1",
                "targetMove": "d1d7",
                "note": "♜ Đang bị ép, nhưng thay vì co cụm, Xe xâm nhập <b>hàng 7</b> phản công!",
                "mascot": "Phản công là cách phòng thủ tốt nhất!"
            },
            {
                "fen": "r5k1/pp1R2pp/2p2p2/4p3/8/2P5/PP3PPP/7K w - - 0 1",
                "targetMove": "d7b7",
                "note": "♜ Xe ăn Tốt <b>b7</b>, tiếp theo dọa Tốt a7",
                "mascot": "Ăn Tốt hàng 7!"
            },
            {
                "fen": "2r3k1/pR4pp/2p2p2/4p3/8/2P5/PP3PPP/7K w - - 0 1",
                "targetMove": "b7a7",
                "note": "♜ Ăn tiếp Tốt <b>a7</b>",
                "mascot": "Lời thêm Tốt!"
            },
            {
                "fen": "1r4k1/R5pp/2p2p2/4p3/8/2P5/PP3PPP/7K w - - 0 1",
                "targetMove": "b2b3",
                "note": "♟ Đẩy <b>b3</b> cho Tốt b2 an toàn, Vua có thêm chỗ thở",
                "mascot": "Củng cố trận địa!"
            },
            {
                "fen": "3r2k1/R5pp/2p2p2/4p3/8/1PP5/P4PPP/6K1 w - - 0 1",
                "targetMove": "g1f1",
                "note": "♚ Tàn cuộc rồi: đưa <b>Vua</b> vào trận",
                "mascot": "Vua cũng là chiến binh!"
            }
        ]
    },
    {
        "id": "isolated_pawn",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 26: 🧱 Cấu trúc Tốt",
        "title": "Isolated Pawn (Tốt Cô Lập)",
        "steps": [
            {
                "fen": "rnbq1rk1/pp2bppp/4pn2/3p4/2PP4/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 1",
                "targetMove": "c4d5",
                "note": "Đổi Tốt trung tâm để tạo Tốt cô lập cho Đen.",
                "mascot": "Tuyệt vời!",
                "reply": "e6d5",
                "replyNote": "👀 Đen đã có Tốt cô lập ở d5. Nó mạnh nhưng cần bảo vệ."
            },
            {
                "fen": "rnbq1rk1/pp2bppp/5n2/3p4/3P4/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 2",
                "targetMove": "f3e5",
                "note": "Chiếm cứ điểm e5 vững chắc trước Tốt cô lập.",
                "mascot": "Tuyệt vời!",
                "reply": "b8c6",
                "replyNote": "👀 Đen phát triển quân. Hãy duy trì kiểm soát khối chặn."
            },
            {
                "fen": "r1bq1rk1/pp2bppp/2n2n2/3pN3/3P4/2N5/PP2BPPP/R1BQ1RK1 w - - 2 3",
                "targetMove": "c1f4",
                "note": "Tuyệt! Tốt cô lập của Đen giờ là mục tiêu tấn công.",
                "mascot": "Tuyệt vời!"
            }
        ]
    },
    {
        "id": "doubled_pawns",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 26: 🧱 Cấu trúc Tốt",
        "title": "Doubled Pawns (Tốt Chồng)",
        "steps": [
            {
                "fen": "r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 4 5",
                "targetMove": "d2d3",
                "note": "Phát triển quân và chuẩn bị tạo cấu trúc Tốt chồng.",
                "mascot": "Tuyệt vời!",
                "reply": "d7d6",
                "replyNote": "👀 Đen đáp trả chắc chắn. Lên kế hoạch ghim Mã."
            },
            {
                "fen": "r1bqk2r/ppp2ppp/2np1n2/2b1p3/2B1P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 6",
                "targetMove": "c1g5",
                "note": "Ghim Mã Đen, gây áp lực lên cấu trúc cánh Vua.",
                "mascot": "Tuyệt vời!",
                "reply": "h7h6",
                "replyNote": "👀 Đen đuổi Tượng. Hãy mạnh dạn đổi quân!"
            },
            {
                "fen": "r1bqk2r/ppp2pp1/2np1n1p/2b1p1B1/2B1P3/2NP1N2/PPP2PPP/R2QK2R w KQkq - 0 7",
                "targetMove": "g5f6",
                "note": "Tốt chồng hình thành! Cánh Vua Đen giờ đã suy yếu.",
                "mascot": "Tuyệt vời!"
            }
        ]
    },
    {
        "id": "backward_pawn",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 26: 🧱 Cấu trúc Tốt",
        "title": "Backward Pawn (Tốt Lạc Hậu)",
        "steps": [
            {
                "fen": "r1bq1rk1/pp2bppp/2n1pn2/2pp4/3P4/2P1PN2/PP1NBPPP/R1BQ1RK1 w - - 0 1",
                "targetMove": "d4c5",
                "note": "Tạo áp lực để hình thành Tốt lạc hậu.",
                "mascot": "Tuyệt vời!",
                "reply": "e7c5",
                "replyNote": "👀 Đen ăn lại. Quan sát cấu trúc Tốt của Đen."
            },
            {
                "fen": "r1bq1rk1/pp3ppp/2n1pn2/2bp4/8/2P1PN2/PP1NBPPP/R1BQ1RK1 w - - 0 2",
                "targetMove": "b2b4",
                "note": "Đẩy b4 để khóa Tốt c5 và tạo Tốt lạc hậu.",
                "mascot": "Tuyệt vời!",
                "reply": "c5e7",
                "replyNote": "👀 Đen lui quân. Cấu trúc của họ bắt đầu cứng nhắc."
            },
            {
                "fen": "r1bq1rk1/pp2bppp/2n1pn2/3p4/1P6/2P1PN2/P2NBPPP/R1BQ1RK1 w - - 1 3",
                "targetMove": "b4b5",
                "note": "Khóa chặt! Tốt Đen không thể tiến lên an toàn.",
                "mascot": "Tuyệt vời!"
            }
        ]
    },
    {
        "id": "pawn_chains",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 26: 🧱 Cấu trúc Tốt",
        "title": "Pawn Chains (Chuỗi Tốt)",
        "steps": [
            {
                "fen": "rnbqkbnr/pp1p1ppp/4p3/2p5/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 3",
                "targetMove": "d4d5",
                "note": "Đẩy Tốt d5 để khóa trung tâm, tạo nền móng chuỗi Tốt.",
                "mascot": "Tuyệt vời!",
                "reply": "d7d6",
                "replyNote": "👀 Đen phản công vào gốc của chuỗi. Hãy củng cố."
            },
            {
                "fen": "rnbqkbnr/pp3ppp/3pp3/2pP4/4P3/8/PPP2PPP/RNBQKBNR w KQkq - 0 4",
                "targetMove": "c2c4",
                "note": "Đẩy c4 để củng cố đỉnh d5. Chuỗi Tốt vững chắc!",
                "mascot": "Tuyệt vời!",
                "reply": "g8f6",
                "replyNote": "👀 Đen phát triển Mã. Bạn cần bảo vệ cấu trúc này."
            },
            {
                "fen": "rnbqkb1r/pp3ppp/3ppn2/2pP4/2P1P3/8/PP3PPP/RNBQKBNR w KQkq - 1 5",
                "targetMove": "b1c3",
                "note": "Bảo vệ chuỗi bằng Mã. Một bức tường không thể xuyên thủng.",
                "mascot": "Tuyệt vời!"
            }
        ]
    },
    {
        "id": "hanging_pawns",
        "level": "Cấp 4 · Cả đội quân",
        "category": "Chương 26: 🧱 Cấu trúc Tốt",
        "title": "Hanging Pawns (Tốt Treo)",
        "steps": [
            {
                "fen": "r1bq1rk1/pp3ppp/2n1pn2/3p4/2PP4/2N2N2/PP1QBPPP/R4RK1 w - - 0 1",
                "targetMove": "c4d5",
                "note": "Đổi Tốt để tạo cấu trúc Tốt treo cho Đen.",
                "mascot": "Tuyệt vời!",
                "reply": "f6d5",
                "replyNote": "👀 Đen giữ Tốt bằng Mã. Tiếp tục trao đổi."
            },
            {
                "fen": "r1bq1rk1/pp3ppp/2n1p3/3n4/3P4/2N2N2/PP1QBPPP/R4RK1 w - - 0 2",
                "targetMove": "c3d5",
                "note": "Tiêu diệt quân bảo vệ để lộ rõ Tốt treo.",
                "mascot": "Tuyệt vời!",
                "reply": "e6d5",
                "replyNote": "👀 Đen có cặp Tốt treo c5-d5. Linh hoạt nhưng dễ rụng."
            },
            {
                "fen": "r1bq1rk1/pp3ppp/2n5/3p4/3P4/5N2/PP1QBPPP/R4RK1 w - - 0 3",
                "targetMove": "f1e1",
                "note": "Đưa Xe vào nhắm mục tiêu. Khai thác nhược điểm ngay!",
                "mascot": "Tuyệt vời!"
            }
        ]
    }
];

const LESSON_HINTS = {
    "safe-pawn-guard": [
        {
            "moves": {
                "c4d5": "Giỏi! Bạn đã thấy nước an toàn rồi. Nhưng bước này hãy thử nước vội vàng để xem chuyện gì xảy ra nhé!"
            },
            "wrong": "Bước này hãy thử cho quân lớn lao vào ăn xem sao!"
        },
        {
            "moves": {
                "d1d5": "Nước này vừa bị ăn lại ở bước trước đó! Ô d5 có Tốt e6 canh, Hậu vào đó sẽ bị ăn!"
            },
            "wrong": "Ô d5 có Tốt e6 canh, Hậu vào đó sẽ bị ăn!"
        }
    ],
    "safe-rook-bait": [
        {
            "moves": {
                "e4b4": "Giỏi! Bạn đã thấy nước an toàn rồi. Nhưng bước này hãy thử nước vội vàng để xem chuyện gì xảy ra nhé!"
            },
            "wrong": "Bước này hãy thử cho quân lớn lao vào ăn xem sao!"
        },
        {
            "moves": {
                "e4e5": "Nước này vừa bị ăn lại ở bước trước đó! Tốt e5 có Tốt d6 canh. Mã b4 thì không ai canh!"
            },
            "wrong": "Tốt e5 có Tốt d6 canh. Mã b4 thì không ai canh!"
        }
    ],
    "safe-cheap-first": [
        {
            "moves": {
                "f4d5": "Giỏi! Bạn đã thấy nước an toàn rồi. Nhưng bước này hãy thử nước vội vàng để xem chuyện gì xảy ra nhé!"
            },
            "wrong": "Bước này hãy thử cho quân lớn lao vào ăn xem sao!"
        },
        {
            "moves": {
                "d1d5": "Nước này vừa bị ăn lại ở bước trước đó! Ô d5 có Tốt canh: để Mã (rẻ hơn) ăn Xe!"
            },
            "wrong": "Ô d5 có Tốt canh: để Mã (rẻ hơn) ăn Xe!"
        }
    ],
    "safe-king-guard": [
        {
            "moves": {
                "h5h7": "Giỏi! Bạn đã thấy nước an toàn rồi. Nhưng bước này hãy thử nước vội vàng để xem chuyện gì xảy ra nhé!"
            },
            "wrong": "Bước này hãy thử cho quân lớn lao vào ăn xem sao!"
        },
        {
            "moves": {
                "h5f7": "Nước này vừa bị ăn lại ở bước trước đó! Ô f7 sát Vua đen nên Vua ăn lại được. Tốt h7 thì không ai canh!"
            },
            "wrong": "Ô f7 sát Vua đen nên Vua ăn lại được. Tốt h7 thì không ai canh!"
        }
    ],
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
            "illegal": "Tốt ăn chéo!",
            "wrong": "Tốt trắng ăn chéo d5 x c6."
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
            "wrong": "♜ Xe đi thẳng lên: ăn Tốt c6"
        },
        {
            "wrong": "♜ Rẽ ngang sang phải: ăn Tốt g6"
        },
        {
            "wrong": "♜ Chạy thẳng xuống: ăn Tốt g4"
        },
        {
            "wrong": "♜ Rẽ ngang sang trái: ăn nốt Tốt a4"
        }
    ],
    "rook-block": [
        {
            "wrong": "Xe không nhảy qua Tốt a4 của mình. Hãy nhìn hàng ngang!"
        },
        {
            "wrong": "Mã b4 đứng chắn, Xe không nhảy tới Tượng b8 được."
        },
        {
            "wrong": "Cột c bị Tốt c2 chặn. Hãy chuyển Xe sang cột f."
        }
    ],
    "rook-route": [
        {
            "wrong": "♜ Xe không đi chéo! Rẽ góc vuông: sang f1 trước"
        },
        {
            "wrong": "♜ Giờ chạy thẳng lên ăn Tốt f6"
        },
        {
            "wrong": "♜ Rẽ ngang sang cột b"
        },
        {
            "wrong": "♜ Chạy thẳng xuống ăn Tốt b4"
        }
    ],
    "bishop": [
        {
            "wrong": "♝ Tượng đi chéo lên: ăn Tốt f7"
        },
        {
            "wrong": "♝ Chéo ngược xuống d5 chiếu Vua"
        },
        {
            "wrong": "♝ Tiếp tục chéo xuống ăn Tốt b3"
        }
    ],
    "bishop-color": [
        {
            "wrong": "Tốt d3 đứng ô trắng, Tượng ô đen không bao giờ tới được."
        },
        {
            "wrong": "♝ Tốt f2 sắp phong cấp và đứng ô đen: Tượng ăn ngay!"
        },
        {
            "wrong": "Tốt c5 ở ô đen. Tượng f1 chỉ đi ô trắng."
        }
    ],
    "bishop-zigzag": [
        {
            "wrong": "♝ Không đi thẳng được → chéo 2 lần: lên e3 trước"
        },
        {
            "wrong": "♝ Chéo ngược lại: ăn Tốt c5"
        },
        {
            "wrong": "♝ Tốt e2 sắp phong cấp! Tượng về b4 canh ô e1"
        },
        {
            "wrong": "♝ Ăn ngay Hậu mới!"
        }
    ],
    "knight": [
        {
            "wrong": "♞ Mã nhảy chữ L: ăn Tốt d5"
        },
        {
            "wrong": "♞ Một chữ L nữa tới f6"
        },
        {
            "wrong": "♞ Bắt nốt Tốt h7. Vua đen ở xa, không ăn lại được!"
        }
    ],
    "knight-jump": [
        {
            "wrong": "♞ Mã nhảy qua hàng Tốt: lên f3"
        },
        {
            "wrong": "♞ Mã b1 nhảy qua lên c3"
        },
        {
            "wrong": "♟ Mã c3 đang canh ô e4. Đẩy Tốt e4 vào trung tâm"
        }
    ],
    "knight-chain": [
        {
            "wrong": "♞ Chữ L số 1: ăn d5"
        },
        {
            "wrong": "♞ Chữ L số 2: ăn f6"
        },
        {
            "wrong": "♞ Chữ L số 3: ăn h7"
        },
        {
            "wrong": "♞ Từ góc h7 không với tới g4. Nhảy về f6 trước"
        },
        {
            "wrong": "♞ Chữ L số 4: ăn g4"
        }
    ],
    "queen": [
        {
            "wrong": "♛ Hậu đi chéo như Tượng: ăn Xe d5"
        },
        {
            "wrong": "♛ Hậu đi ngang như Xe: ăn Tốt a5"
        },
        {
            "wrong": "♛ Hậu đi thẳng xuống: ăn Tượng a1"
        }
    ],
    "queen-lines": [
        {
            "wrong": "♛ Đi thẳng như Xe: ăn Xe d7"
        },
        {
            "wrong": "♛ Đi ngang: ăn Mã a7"
        },
        {
            "wrong": "♛ Đi chéo như Tượng: ăn Tốt c5"
        }
    ],
    "queen-safe": [
        {
            "wrong": "♛ Mã a4 không ai bảo vệ: ăn ngay!"
        },
        {
            "moves": {
                "d1a4": "Mã a4 có Tốt b5 canh: Hậu vào đó sẽ bị Tốt ăn!"
            },
            "wrong": "Tượng g4 không có ai bảo vệ."
        },
        {
            "wrong": "Hậu phải rời ô d2, tới ô không bị quân đen nào tấn công."
        }
    ],
    "king": [
        {
            "wrong": "♚ Vua đi 1 ô sang ngang: ăn Tốt d3"
        },
        {
            "wrong": "♚ Vua lùi 1 ô: ăn Tốt d2 trước khi nó phong cấp"
        },
        {
            "wrong": "♚ Vua đi chéo 1 ô: ăn Tốt g2"
        }
    ],
    "king-safe": [
        {
            "wrong": "♚ Ô f3 có Mã h4 canh. Vua chỉ ăn Tốt d3 an toàn"
        },
        {
            "wrong": "♚ Xe d2 không ai bảo vệ: Vua ăn được!"
        },
        {
            "wrong": "Ô d1 và f2 vẫn bị Xe d2 tấn công. Xe có Tượng bảo vệ nên không ăn được."
        }
    ],
    "king-walk": [
        {
            "wrong": "♚ Từng bước một: lên e2"
        },
        {
            "wrong": "♚ Lên e3"
        },
        {
            "wrong": "♚ Ăn Tốt e4!"
        }
    ],
    "value": [
        {
            "moves": {
                "d1b1": "Mã chỉ 3 điểm. Hậu d7 đáng giá 9 điểm!"
            },
            "wrong": "💰 Ăn quân giá trị nhất: Hậu d7 (9 điểm)!"
        },
        {
            "moves": {
                "d5e7": "Tốt chỉ 1 điểm, mà Vua đen còn ăn lại Mã. Xe c7 đáng giá hơn!"
            },
            "wrong": "💰 Mã ăn được Xe c7 hoặc Tốt e7. Chọn quân đắt hơn!"
        },
        {
            "moves": {
                "d4g7": "Tốt g7 có Vua canh, Tượng sẽ bị ăn lại!"
            },
            "wrong": "💰 Tốt g7 có Vua canh. Ăn Mã b6 không ai bảo vệ!"
        }
    ],
    "which-piece": [
        {
            "wrong": "🤔 Quân nào với tới Hậu d5? Mã f4!"
        },
        {
            "wrong": "🤔 Hậu b2 dọa cả Xe lẫn Tượng. Quân nào ăn được Hậu?"
        },
        {
            "wrong": "🤔 Hậu chạy lên a5. Giờ quân nào với tới?"
        }
    ],
    "castle": [
        {
            "wrong": "🏰 Nhập thành: bấm Vua → chọn g1"
        },
        {
            "wrong": "🏰 Ván cờ thật: Mã và Tượng đã ra, nhập thành ngay!"
        },
        {
            "wrong": "♟ Tốt d3 giữ chắc Tốt e4 và mở đường cho Tượng c1"
        }
    ],
    "castle-long": [
        {
            "wrong": "🏰 Nhập thành cánh Hậu: Vua e1 → c1"
        },
        {
            "wrong": "🏰 Ván cờ thật: Mã, Tượng, Hậu đã ra. Nhập thành cánh Hậu, Xe vào cột d"
        }
    ],
    "promote": [
        {
            "wrong": "👑 Tốt về hàng cuối → biến hình Hậu!"
        },
        {
            "wrong": "👑 Hậu mới chiếu Vua từ e5"
        },
        {
            "wrong": "👑 Hậu ăn Tốt a5 chặn Đen phong cấp"
        }
    ],
    "enpassant": [
        {
            "wrong": "⚡ Tốt đen vừa đi 2 ô → ăn qua đường sang d6!"
        },
        {
            "wrong": "⚡ Tốt g7 vừa nhảy 2 ô qua mặt → ăn qua đường sang g6"
        },
        {
            "wrong": "⚡ Ván cờ thật: Tốt f7 vừa lên f5 → ăn qua đường sang f6"
        }
    ],
    "fork": [
        {
            "wrong": "♞ Tìm ô Mã dọa cả Vua lẫn Hậu!"
        },
        {
            "wrong": "♞ Mã ăn Hậu, còn chiếu tiếp!"
        },
        {
            "wrong": "♞ Thêm một đòn: Mã chĩa đôi Vua và Xe"
        },
        {
            "wrong": "♞ Ăn Xe b5, Mã thoát khỏi Vua đen"
        }
    ],
    "queen-fork": [
        {
            "wrong": "♛ Tìm ô Hậu vừa chiếu Vua vừa dọa Xe!"
        },
        {
            "wrong": "♛ Ăn Xe a8: chiếu bí luôn!"
        }
    ],
    "pawn-fork": [
        {
            "wrong": "♟ Tốt nhỏ cũng chĩa đôi được hai Mã!"
        },
        {
            "wrong": "♟ Ăn Mã e6"
        },
        {
            "wrong": "♟ Thêm lần nữa: đẩy Tốt dọa cả hai Mã"
        },
        {
            "wrong": "♟ Ăn Mã e5"
        }
    ],
    "pin": [
        {
            "wrong": "📌 Ghim Hậu vào Vua: Xe sang cột e (Vua f1 bảo vệ Xe)"
        },
        {
            "wrong": "📌 Ăn Hậu! Đổi Xe 5 lấy Hậu 9"
        },
        {
            "wrong": "📌 Mã c6 bị Tượng ghim vào Vua. Đẩy Tốt dọa Mã!"
        },
        {
            "wrong": "📌 Ăn Mã c6"
        }
    ],
    "skewer": [
        {
            "wrong": "🍢 Chiếu Vua để lộ Hậu phía sau"
        },
        {
            "wrong": "🍢 Ăn Hậu h4!"
        },
        {
            "wrong": "🍢 Tượng chiếu chéo: Vua đứng trước, Xe b8 phía sau"
        },
        {
            "wrong": "🍢 Ăn Xe b8"
        }
    ],
    "discovered": [
        {
            "wrong": "♞ Mã nhảy đi → Xe lộ ra chiếu! Ăn luôn Hậu"
        },
        {
            "wrong": "♜ Mã d6 đang bị Vua dọa. Xe sang d1 bảo vệ Mã"
        }
    ],
    "combo_attraction": [
        {
            "wrong": "🧲 Thí Xe ở f8 để kéo Vua đen tới ô Mã chĩa đôi được"
        },
        {
            "wrong": "♞ Mã chĩa đôi Vua f8 và Hậu b6"
        },
        {
            "wrong": "♞ Ăn Hậu! Đổi Xe 5 lấy Hậu 9"
        }
    ],
    "combo_remove_defender": [
        {
            "wrong": "🛡 Mã f6 đang canh ô h7. Diệt Mã trước!"
        },
        {
            "wrong": "♛ Hậu ăn h7, Tượng b1 bảo vệ: chiếu bí!"
        }
    ],
    "combo_overloading": [
        {
            "wrong": "⚖️ Hậu d7 phải canh hai việc: Mã d4 và ô e8. Ăn Mã!"
        },
        {
            "wrong": "♜ Xe chiếu bí hàng cuối!"
        }
    ],
    "combo_xray": [
        {
            "wrong": "🔦 Xe d1 đứng sau Hậu, nhìn xuyên tới d8. Hậu ăn Xe!"
        },
        {
            "wrong": "♜ Xe ăn lại, chiếu bí!"
        }
    ],
    "opening_italian": [
        {
            "wrong": "🇮🇹 Tốt e4 chiếm trung tâm"
        },
        {
            "wrong": "🐴 Mã f3 dọa Tốt e5"
        },
        {
            "wrong": "♝ Tượng c4 nhắm ô yếu f7: Ván cờ Ý!"
        }
    ],
    "opening_ruy_lopez": [
        {
            "wrong": "🇪🇸 Tốt e4 chiếm trung tâm"
        },
        {
            "wrong": "🐴 Mã f3 dọa Tốt e5"
        },
        {
            "wrong": "♝ Tượng b5 dọa Mã c6, người bảo vệ e5: Ván cờ Tây Ban Nha!"
        }
    ],
    "opening_queens_gambit": [
        {
            "wrong": "👑 Tốt d4 chiếm trung tâm"
        },
        {
            "wrong": "♟ Thí Tốt c4 để kéo Tốt d5 khỏi trung tâm"
        },
        {
            "wrong": "🐴 Mã c3 thêm sức ép lên d5"
        }
    ],
    "opening_sicilian": [
        {
            "wrong": "🌋 Tốt e4"
        },
        {
            "wrong": "🐴 Mã f3 chuẩn bị d4"
        },
        {
            "wrong": "♟ Đẩy d4 mở trung tâm: Sicilian Mở"
        }
    ],
    "opening_french": [
        {
            "wrong": "🇫🇷 Tốt e4"
        },
        {
            "wrong": "♟ Thêm Tốt d4: trung tâm 2 Tốt"
        },
        {
            "wrong": "🐴 Mã c3 bảo vệ Tốt e4"
        }
    ],
    "opening_caro_kann": [
        {
            "wrong": "🛡 Tốt e4"
        },
        {
            "wrong": "♟ Thêm Tốt d4"
        },
        {
            "wrong": "🐴 Mã c3 bảo vệ Tốt e4"
        }
    ],
    "greek-gift-1": [
        {
            "wrong": "🎁 Tốt e5 đã đuổi Mã f6 đi, h7 không còn ai canh. Thí Tượng ở h7!"
        },
        {
            "wrong": "♞ Mã nhảy lên g5 chiếu Vua"
        },
        {
            "wrong": "♛ Hậu lên h5: dọa Qh7 chiếu bí!"
        }
    ],
    "greek-gift-2": [
        {
            "wrong": "♛ Đen mở đường f8 cho Vua. Hậu ăn f7 chiếu!"
        },
        {
            "wrong": "♛ Hậu quay về h5 chiếu"
        },
        {
            "wrong": "♛ Hậu vào h7 (Mã g5 bảo vệ)"
        },
        {
            "wrong": "♛ Hậu chiếu từ h8"
        },
        {
            "wrong": "♛ Chiếu bí ở g7!"
        }
    ],
    "greek-gift-3": [
        {
            "wrong": "🎁 Thí Tượng ở h7!"
        },
        {
            "wrong": "♞ Mã chiếu ở g5"
        },
        {
            "wrong": "♟ Tốt h4 lao lên, dọa h5 chiếu"
        },
        {
            "wrong": "♟ Tốt chiếu h5"
        },
        {
            "wrong": "♞ Mã chiếu và chĩa đôi Hậu d8!"
        },
        {
            "wrong": "♞ Ăn Hậu!"
        }
    ],
    "greek-gift-4": [
        {
            "wrong": "🎁 Thí Tượng ở h7!"
        },
        {
            "wrong": "♞ Mã chiếu ở g5"
        },
        {
            "wrong": "♞ Mã ăn e6: Tượng c1 chiếu lộ ra, Mã còn dọa Hậu!"
        },
        {
            "wrong": "♞ Ăn Hậu d8!"
        }
    ],
    "greek-gift-5": [
        {
            "wrong": "🎁 Tốt e5 đã đuổi Mã f6 đi, h7 không còn ai canh. Thí Tượng ở h7!"
        },
        {
            "wrong": "♞ Mã nhảy lên g5 chiếu Vua"
        },
        {
            "wrong": "♛ Hậu lên h5 dọa chiếu bí h7"
        },
        {
            "wrong": "♛ Ăn f7 chiếu"
        },
        {
            "wrong": "♛ Chiếu từ h5"
        },
        {
            "wrong": "♛ Hậu vào h7"
        },
        {
            "wrong": "♛ Chiếu từ h8"
        },
        {
            "wrong": "♛ Chiếu bí!"
        }
    ],
    "uncastled-2": [
        {
            "wrong": "⚔️ Vua đen còn ở e8. Đẩy e5 đuổi Mã f6"
        },
        {
            "wrong": "♟ Ăn Mã f6"
        },
        {
            "wrong": "♜ Cột e đã mở: Xe chiếu Vua chưa nhập thành!"
        },
        {
            "wrong": "♞ Mã tấn công Tượng e6 đang bị ghim"
        }
    ],
    "uncastled-3": [
        {
            "wrong": "📌 Tượng g5 ghim Mã f6 vào Hậu d8"
        },
        {
            "wrong": "♝ Đổi Tượng lấy Mã"
        },
        {
            "wrong": "♞ Mã lên d5 dọa Hậu f6 và ô c7"
        }
    ],
    "uncastled-4": [
        {
            "wrong": "🚫 Tượng a3 khống chế ô f8: Vua đen không nhập thành được!"
        }
    ],
    "pawn-storm-1": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "pawn-storm-2": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "pawn-storm-3": [
        {
            "wrong": "Tốt g4 xông lên."
        },
        {
            "wrong": "Xe ra g1."
        },
        {
            "wrong": "Tốt h4 tiếp tục."
        }
    ],
    "pawn-storm-4": [
        {
            "wrong": "♜ Xe e3 sang ngang tới g3, nhắm thẳng Vua đen!"
        },
        {
            "wrong": "♛ Hậu lên g5, cùng Xe nhắm ô g7"
        },
        {
            "wrong": "♛ Hậu luồn sang h6"
        },
        {
            "wrong": "♝ Thí Tượng phá Tốt g6!"
        },
        {
            "wrong": "♜ Xe ăn g6 chiếu: Xe đã vào cuộc!"
        }
    ],
    "weak-f7-1": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "weak-f7-2": [
        {
            "wrong": "♛ Hậu f3 cùng Tượng c4 nhắm f7"
        },
        {
            "wrong": "♛ Ăn f7: chiếu bí!"
        }
    ],
    "weak-f7-3": [
        {
            "wrong": "♟ Ăn Tốt d5"
        },
        {
            "wrong": "🔥 Thí Mã ở f7 (Gan Rán)!"
        },
        {
            "wrong": "♛ Hậu chiếu và dọa Mã d5"
        },
        {
            "wrong": "♞ Thêm Mã tấn công d5: Vua đen rất nguy hiểm"
        }
    ],
    "weak-f7-4": [
        {
            "wrong": "♞ Mã g5 và Tượng c4 cùng tấn công f7"
        },
        {
            "wrong": "♟ Ăn Tốt d5, giữ đường chéo"
        },
        {
            "wrong": "♝ Tượng chiếu và giữ Tốt d5"
        }
    ],
    "weak-f7-5": [
        {
            "wrong": "♞ Đen lơ là: Mã ăn f7 chĩa đôi Hậu d8 và Xe h8!"
        },
        {
            "wrong": "♞ Ăn Xe h8!"
        }
    ],
    "overload-1": [
        {
            "wrong": "Tượng b3 ăn Tượng d5. Nếu Mã ăn lại thì bỏ trống h7, nếu không ăn lại thì ta lời Tượng."
        },
        {
            "wrong": "♛ Mã đã bỏ việc canh h7: Hậu ăn h7, Mã g5 bảo vệ → chiếu bí!"
        },
        {
            "wrong": "Hậu b2 ăn Mã d4. Hậu đen ăn lại thì không còn canh ô e8."
        },
        {
            "wrong": "♜ Hậu đen đã rời d7: Xe chiếu bí hàng cuối!"
        }
    ],
    "overload-2": [
        {
            "wrong": "Xe c1 kiểm soát cột c."
        },
        {
            "wrong": "Trắng nhảy Mã e5."
        },
        {
            "wrong": "Tốt ăn lại, đuổi Mã f6."
        }
    ],
    "overload-4": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "open-file-2": [
        {
            "wrong": "♜ Cột h không có Tốt: Xe sang h3!"
        },
        {
            "wrong": "♝ Tượng chiếu ở h7, Xe h3 bảo vệ"
        }
    ],
    "open-file-3": [
        {
            "wrong": "♜ Cột e đang trống: Xe chiếm cột mở trước!"
        },
        {
            "wrong": "♜ Xe theo cột mở xâm nhập hàng 7"
        },
        {
            "wrong": "♜ Xe dọa Tốt c6"
        }
    ],
    "open-file-4": [
        {
            "wrong": "♜ Xe lên hàng 7: dọa ăn các Tốt đen"
        },
        {
            "wrong": "♜ Ăn Tốt b7!"
        }
    ],
    "open-file-5": [
        {
            "wrong": "♜♜ Hai Xe chồng cột d tấn công Tượng d7, Đen chỉ có 1 Xe bảo vệ"
        },
        {
            "wrong": "♜ Xe thứ hai ăn lại: lời một Tượng!"
        }
    ],
    "back-rank-1": [
        {
            "wrong": "🎯 Vua đen bị 3 Tốt nhốt: Xe chiếu hàng cuối!"
        },
        {
            "wrong": "🎯 Hậu cũng làm được!"
        }
    ],
    "back-rank-2": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "back-rank-3": [
        {
            "wrong": "🎯 Hai Xe chồng cột e. Xe trước ăn Xe e8!"
        },
        {
            "wrong": "🎯 Xe sau ăn Hậu: chiếu bí!"
        }
    ],
    "smothered-1": [
        {
            "wrong": "♞ Mã chiếu ở f7"
        },
        {
            "wrong": "⚡ Mã h6: chiếu đôi cùng Hậu c4!"
        },
        {
            "wrong": "♛ Thí Hậu ở g8!"
        },
        {
            "wrong": "😵 Mã chiếu bí ngạt thở!"
        }
    ],
    "smothered-2": [
        {
            "wrong": "♞ Vua bị quân nhà vây kín: Mã nhảy tới f7"
        }
    ],
    "smothered-3": [
        {
            "wrong": "♛ Thí Hậu ở g8!"
        },
        {
            "wrong": "♞ Mã chiếu bí!"
        }
    ],
    "adv-def-prophylaxis": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Hãy nghĩ: quân đen muốn nhảy vào ô nào? Chặn ô b4 bằng Tốt a3."
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "adv-def-counterattack": [
        {
            "wrong": "♜ Đang bị ép, nhưng thay vì co cụm, Xe xâm nhập hàng 7 phản công!"
        },
        {
            "wrong": "♜ Xe ăn Tốt b7, tiếp theo dọa Tốt a7"
        },
        {
            "wrong": "♜ Ăn tiếp Tốt a7"
        },
        {
            "wrong": "♟ Đẩy b3 cho Tốt b2 an toàn, Vua có thêm chỗ thở"
        },
        {
            "wrong": "♚ Tàn cuộc rồi: đưa Vua vào trận"
        }
    ],
    "endgame-opposition": [
        {
            "moves": {
                "e6d5": "Lùi Vua về hàng 5 là mất đối Vua: hòa!",
                "e6f5": "Lùi Vua về hàng 5 là mất đối Vua: hòa!"
            },
            "wrong": "👑 Vua trắng giữ hàng 6, bước sang bên: Kd6 hoặc Kf6"
        },
        {
            "wrong": "♟ Vua canh ô d7, đẩy Tốt lên e6"
        },
        {
            "wrong": "♟ Tốt lên e7"
        },
        {
            "wrong": "👑 Vua canh ô e8: Tốt sẽ phong cấp!"
        }
    ],
    "endgame-knight-pawn": [
        {
            "wrong": "♞ Tốt đen sắp phong cấp! Mã ăn ngay e2"
        }
    ],
    "boden_mate": [
        {
            "wrong": "✝️ Thí Hậu ở c6 để phá lá chắn Tốt!"
        },
        {
            "wrong": "✝️ Hai Tượng bắt chéo: chiếu bí Boden!"
        }
    ],
    "anastasia_mate": [
        {
            "wrong": "♞ Mã chiếu ở e7, canh luôn ô g8 và g6",
            "moves": {
                "d5f6": "Nf6+ cũng rất mạnh! Nhưng bài này tập Mát Anastasia: Mã vào e7 trước."
            }
        },
        {
            "wrong": "♛ Thí Hậu ở h7 mở cột h!"
        },
        {
            "wrong": "♜ Xe sang cột h: chiếu bí Anastasia!"
        }
    ],
    "legal_mate": [
        {
            "wrong": "🪤 Mã ăn Tốt e5, bỏ mặc Hậu d1!"
        },
        {
            "wrong": "♝ Tượng chiếu ở f7"
        },
        {
            "wrong": "♞ Mã d5: chiếu bí bằng 3 quân nhẹ!"
        }
    ],
    "opera_mate": [
        {
            "wrong": "🎭 Ván cờ Opera của Morphy: thí Hậu ở b8!"
        },
        {
            "wrong": "♜ Xe chiếu bí, Tượng g5 canh ô e7!"
        }
    ],
    "morphy_mate": [
        {
            "wrong": "♝ Tượng ăn Mã chiếu theo đường chéo dài, Xe canh cột g"
        }
    ],
    "smothered_mate": [
        {
            "wrong": "♞ Mã chiếu ở f7"
        },
        {
            "wrong": "⚡ Mã h6: chiếu đôi cùng Hậu b3!"
        },
        {
            "wrong": "♛ Thí Hậu ở g8!"
        },
        {
            "wrong": "😵 Chiếu bí thắt cổ!"
        }
    ],
    "isolated_pawn": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "doubled_pawns": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "backward_pawn": [
        {
            "wrong": "Tạo áp lực để hình thành Tốt lạc hậu."
        },
        {
            "wrong": "Đẩy b4 để khóa Tốt c5 và tạo Tốt lạc hậu."
        },
        {
            "wrong": "Khóa chặt! Tốt Đen không thể tiến lên an toàn."
        }
    ],
    "passed_pawn": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "pawn_chains": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "hanging_pawns": [
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        },
        {
            "wrong": "Nước đi chưa chính xác. Hãy suy nghĩ lại nhé!"
        }
    ],
    "free-piece": [
        {
            "moves": {
                "f3e5": "Tốt e5 có Tốt d6 canh: Mã vào đó sẽ bị ăn lại!"
            },
            "wrong": "🎁 Tốt e5 có Tốt d6 canh. Chọn quân không ai bảo vệ!"
        },
        {
            "wrong": "🎁 Xe e5 không ai bảo vệ: Tượng ăn miễn phí!"
        },
        {
            "wrong": "🎁 Mã c4 đứng một mình, không ai canh!"
        }
    ],
    "remove-defender": [
        {
            "moves": {
                "e1e5": "Tượng e5 đang có Mã c6 bảo vệ, Xe vào sẽ bị ăn lại!"
            },
            "wrong": "🛡 Tượng e5 có Mã c6 bảo vệ. Diệt Mã bảo vệ trước!"
        },
        {
            "wrong": "🎯 Giờ Xe ăn Tượng e5 an toàn!"
        }
    ],
    "escape": [
        {
            "wrong": "🏃 Vua bị chiếu! Chạy tới ô an toàn f2"
        },
        {
            "wrong": "Ô e2 vẫn nằm trên cột e, Xe vẫn chiếu được!"
        },
        {
            "wrong": "Ô d2 bị Tượng b4 tấn công. Chọn ô khác ngoài cột e!"
        }
    ],
    "block": [
        {
            "wrong": "🛡 Dùng Tượng chắn đường chiếu ở f1 (Vua bảo vệ Tượng)"
        },
        {
            "wrong": "🛡 Mã nhảy về f1 che chắn"
        },
        {
            "moves": {
                "f3f2": "Xe ở f2 không chắn được đường chiếu hàng 1."
            },
            "wrong": "Chắn ở ô sát Vua để Vua bảo vệ quân chắn."
        }
    ],
    "capture": [
        {
            "wrong": "⚔️ Ăn luôn quân đang chiếu Vua!"
        },
        {
            "wrong": "⚔️ Mã nhảy về ăn Hậu e1!"
        },
        {
            "wrong": "⚔️ Tượng đi chéo ăn Hậu e1!"
        },
        {
            "wrong": "⚔️ Hậu f1 không ai bảo vệ: Vua tự ăn!"
        }
    ],
    "run-away": [
        {
            "wrong": "🏃 Tốt d5 dọa Mã. Mã chạy tới ô an toàn"
        },
        {
            "wrong": "🏃 Tốt d5 dọa Xe. Xe chạy!"
        },
        {
            "wrong": "🏃 Tượng bị dọa. Chạy, hoặc ăn luôn kẻ dọa!"
        },
        {
            "wrong": "🏃 Hậu bị Tốt dọa. Hậu quý nhất, phải chạy ngay!"
        }
    ],
    "defend-piece": [
        {
            "wrong": "🛡 Xe dọa Mã d4. Dùng Tốt bảo vệ Mã"
        },
        {
            "wrong": "🛡 Tốt bảo vệ Tượng d4"
        },
        {
            "moves": {
                "c2c3": "Xe ăn Hậu, Tốt ăn lại Xe: mất 9 chỉ lấy 5. Hậu phải chạy!",
                "e2e3": "Xe ăn Hậu, Tốt ăn lại Xe: mất 9 chỉ lấy 5. Hậu phải chạy!"
            },
            "wrong": "🛡 Hậu 9 điểm, Xe 5 điểm: bảo vệ không đủ, Hậu phải chạy!"
        }
    ],
    "luft": [
        {
            "wrong": "🪟 Xe đen dọa chiếu bí hàng cuối. Mở cửa sổ cho Vua!"
        },
        {
            "wrong": "🪟 Hậu đen dọa Qd1#. Mở ô thoát cho Vua!"
        }
    ],
    "mate1": [
        {
            "wrong": "🎯 Điểm yếu là f7: Hậu ăn, Tượng c4 bảo vệ"
        },
        {
            "wrong": "🎯 Hậu h5 cũng nhắm f7!"
        },
        {
            "wrong": "🎯 Vua đen bị Tốt nhà mình chặn lối: chiếu hàng cuối!"
        }
    ],
    "backrank": [
        {
            "wrong": "🎯 Chiếu hàng cuối!"
        },
        {
            "wrong": "🎯 Ăn Xe canh hàng cuối, chiếu bí luôn!"
        },
        {
            "wrong": "🎯 Hậu cũng chiếu hàng cuối được!"
        }
    ],
    "queenmate": [
        {
            "wrong": "💋 Hậu áp sát Vua đen, Vua trắng bảo vệ Hậu"
        },
        {
            "wrong": "💋 Hậu lên g7, Vua f6 bảo vệ"
        },
        {
            "wrong": "💋 Hậu áp sát Vua đen ở e7"
        }
    ],
    "rook-mate": [
        {
            "wrong": "♜ Vua trắng chặn trước mặt, Xe chiếu hàng cuối!"
        },
        {
            "wrong": "♜ Xe chiếu từ bên phải!"
        },
        {
            "wrong": "♜ Vua đen ở góc: chiếu hàng cuối!"
        }
    ],
    "smothered": [
        {
            "wrong": "😵 Vua bị vây kín bởi quân nhà: Mã chiếu bí!"
        },
        {
            "wrong": "😵 Thí Hậu ở g8 để Xe đen tự lấp lối thoát!"
        },
        {
            "wrong": "😵 Giờ Mã chiếu bí ngạt thở!"
        }
    ],
    "qb-mate": [
        {
            "wrong": "♛♝ Hậu lao vào h7, Tượng d3 bảo vệ"
        },
        {
            "wrong": "♛♝ Tượng b1 nhắm thẳng h7 từ xa!"
        },
        {
            "wrong": "♛♝ Tượng c3 canh g7: Hậu vào đó!"
        }
    ],
    "fools-mate": [
        {
            "wrong": "🤡 Đen đẩy Tốt f và g quá sớm, mở toang đường chéo: Hậu h5!"
        },
        {
            "wrong": "🤡 Lại thêm một lần: Vua đen hở đường chéo e8–h5!"
        }
    ],
    "stalemate": [
        {
            "wrong": "⚠️ Phải CHIẾU! Nếu Vua đen hết nước mà không bị chiếu là hòa"
        },
        {
            "wrong": "⚠️ Cẩn thận! Qf7 là hòa Pat. Tìm nước chiếu bí"
        },
        {
            "wrong": "⚠️ Qg6 là hòa Pat! Chiếu bí bằng cách khác"
        }
    ],
    "promote-mate": [
        {
            "moves": {
                "g7g8r": "Phong Xe ở đây là hòa Pat! Hậu mới chiếu được."
            },
            "wrong": "👑 Phong cấp Hậu chiếu bí luôn!"
        },
        {
            "wrong": "Phong Mã ở e8: Mã chiếu Vua g7 và dọa Hậu c7."
        },
        {
            "wrong": "👑 Mã ăn Hậu!"
        }
    ],
    "scholar-defense": [
        {
            "wrong": "🛡 Hậu h4 và Tượng c5 cùng dọa Qxf2#! Bảo vệ ô f2 (Qe2, Qf3 hoặc g3 đều được)"
        },
        {
            "wrong": "🛡 Hậu đen quay sang f6, lại dọa f2! Ra Mã f3 chặn đường"
        }
    ],
    "arabian": [
        {
            "wrong": "🐪 Mã f6 bảo vệ Xe h7 và canh g8: chiếu bí Ả Rập!"
        },
        {
            "wrong": "🐪 Xe lên g8, Mã bảo vệ và canh h7"
        }
    ],
    "ladder": [
        {
            "wrong": "🪜 Xe thứ nhất chặn hàng 7"
        },
        {
            "wrong": "🪜 Xe thứ hai chiếu hàng 8!"
        },
        {
            "wrong": "🪜 Thử lại: Xe c chặn hàng 7"
        },
        {
            "wrong": "🪜 Xe b chiếu hàng 8"
        }
    ],
    "pawn-race": [
        {
            "wrong": "🏁 Vua đen ở quá xa: cứ đẩy Tốt!"
        },
        {
            "wrong": "⬆️ Lên a7"
        },
        {
            "wrong": "👑 Về đích, phong Hậu!"
        }
    ],
    "king-catch": [
        {
            "wrong": "♚ Vua đuổi theo: sang c4"
        },
        {
            "wrong": "♚ Đứng sát Tốt: b3"
        },
        {
            "wrong": "♚ Ăn Tốt!"
        }
    ],
    "opening": [
        {
            "wrong": "🚀 Khai cuộc: đẩy Tốt trung tâm lên e4"
        },
        {
            "wrong": "🚀 Ra Mã, dọa Tốt e5"
        },
        {
            "wrong": "🚀 Ra Tượng nhắm ô f7"
        },
        {
            "wrong": "🚀 Cách khác: chiếm trung tâm bằng d4"
        }
    ],
    "develop": [
        {
            "wrong": "🐴 Ra Mã trước"
        },
        {
            "wrong": "♝ Ra Tượng"
        },
        {
            "wrong": "🏰 Nhập thành!"
        }
    ],
    "center-d4": [
        {
            "wrong": "⚔️ Đẩy Tốt d4 tấn công trung tâm"
        },
        {
            "wrong": "⚔️ Mã ăn lại Tốt, đứng giữa bàn!"
        },
        {
            "wrong": "⚔️ Khai cuộc 4 Mã: cũng đẩy d4!"
        }
    ],
    "double-check": [
        {
            "wrong": "Tìm nước để HAI quân cùng chiếu một lúc: Vua chỉ còn cách chạy, mà không còn ô nào!"
        },
        {
            "wrong": "Tìm nước để HAI quân cùng chiếu một lúc: Vua chỉ còn cách chạy, mà không còn ô nào!"
        },
        {
            "wrong": "Tìm nước để HAI quân cùng chiếu một lúc: Vua chỉ còn cách chạy, mà không còn ô nào!"
        }
    ],
    "safe-knight-guard": [
        {
            "moves": {
                "d1a1": "Giỏi! Bạn đã thấy nước an toàn rồi. Nhưng bước này hãy thử nước vội vàng để xem chuyện gì xảy ra nhé!"
            },
            "wrong": "Bước này hãy thử cho quân lao vào ăn xem sao!"
        },
        {
            "moves": {
                "d1d5": "Nước này vừa bị ăn lại ở bước trước đó! Ô d5 có Mã f6 canh. Tượng a1 thì không ai bảo vệ!"
            },
            "wrong": "Ô d5 có Mã f6 canh. Tượng a1 thì không ai bảo vệ!"
        }
    ],
    "safe-knight-bait": [
        {
            "moves": {
                "d3b4": "Giỏi! Bạn đã thấy nước an toàn rồi. Nhưng bước này hãy thử nước vội vàng để xem chuyện gì xảy ra nhé!"
            },
            "wrong": "Bước này hãy thử cho quân lao vào ăn xem sao!"
        },
        {
            "moves": {
                "d3e5": "Nước này vừa bị ăn lại ở bước trước đó! Tốt e5 có Tốt d6 canh. Tốt b4 thì không!"
            },
            "wrong": "Tốt e5 có Tốt d6 canh. Tốt b4 thì không!"
        }
    ],
    "safe-bishop-bait": [
        {
            "moves": {
                "c4a2": "Giỏi! Bạn đã thấy nước an toàn rồi. Nhưng bước này hãy thử nước vội vàng để xem chuyện gì xảy ra nhé!"
            },
            "wrong": "Bước này hãy thử cho quân lao vào ăn xem sao!"
        },
        {
            "moves": {
                "c4d5": "Nước này vừa bị ăn lại ở bước trước đó! Mã d5 có Tốt e6 canh. Xe a2 không ai bảo vệ!"
            },
            "wrong": "Mã d5 có Tốt e6 canh. Xe a2 không ai bảo vệ!"
        }
    ]
};
