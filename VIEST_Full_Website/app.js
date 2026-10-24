const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const places = [
 {name:'Vịnh Hạ Long',province:'Quảng Ninh',region:'Miền Bắc',type:'Di sản thiên nhiên',year:'1994',desc:'Quần thể đảo đá vôi và vùng biển tuyệt đẹp, được UNESCO ghi danh là Di sản thiên nhiên thế giới.',img:'photo-1528127269322-539801943592',pos:[49,16]},
 {name:'Cố đô Huế',province:'TP. Huế',region:'Miền Trung',type:'Di sản văn hóa',year:'1993',desc:'Quần thể di tích gắn với triều Nguyễn, lưu giữ kiến trúc cung đình và dấu ấn lịch sử.',img:'photo-1540611025311-01df3cef54b5',pos:[55,47]},
 {name:'Phố cổ Hội An',province:'Quảng Nam',region:'Miền Trung',type:'Di sản văn hóa',year:'1999',desc:'Đô thị cổ nổi tiếng với những mái nhà vàng, hội quán và không gian giao thoa văn hóa.',img:'photo-1528181304800-259b08848526',pos:[57,57]},
 {name:'Phong Nha – Kẻ Bàng',province:'Quảng Bình',region:'Miền Trung',type:'Di sản thiên nhiên',year:'2003',desc:'Vườn quốc gia với hệ thống hang động, núi đá vôi và hệ sinh thái đặc sắc.',img:'photo-1470770841072-f978cf4d019e',pos:[53,40]},
 {name:'Tràng An',province:'Ninh Bình',region:'Miền Bắc',type:'Di sản văn hóa',year:'2014',desc:'Quần thể danh thắng hòa quyện núi đá vôi, sông nước và các di tích lịch sử.',img:'photo-1500530855697-b586d89ba3ee',pos:[42,26]},
 {name:'Hoàng thành Thăng Long',province:'Hà Nội',region:'Miền Bắc',type:'Di tích lịch sử',year:'2010',desc:'Trung tâm quyền lực qua nhiều triều đại, mang giá trị nổi bật về lịch sử và khảo cổ.',img:'photo-1570077188670-e3a8d69ac5ff',pos:[39,19]},
 {name:'Thành nhà Hồ',province:'Thanh Hóa',region:'Miền Bắc',type:'Di tích lịch sử',year:'2011',desc:'Công trình thành đá độc đáo phản ánh kỹ thuật xây dựng và tổ chức nhà nước thời Hồ.',img:'photo-1518005020951-eccb494ad742',pos:[47,33]},
 {name:'Địa đạo Củ Chi',province:'TP. Hồ Chí Minh',region:'Miền Nam',type:'Di tích lịch sử',year:'—',desc:'Hệ thống đường hầm gắn với lịch sử kháng chiến và đời sống chiến đấu của quân dân địa phương.',img:'photo-1519681393784-d120267933ba',pos:[30,82]},
 {name:'Thánh địa Mỹ Sơn',province:'Quảng Nam',region:'Miền Trung',type:'Di tích lịch sử',year:'1999',desc:'Quần thể đền tháp Chăm Pa cổ, phản ánh nghệ thuật kiến trúc và tín ngưỡng đặc sắc.',img:'photo-1606293926075-69a00dbfde81',pos:[58,53]},
 {name:'Văn Miếu – Quốc Tử Giám',province:'Hà Nội',region:'Miền Bắc',type:'Di tích lịch sử',year:'1070',desc:'Quần thể di tích gắn với Nho học, giáo dục và truyền thống hiếu học của Thăng Long.',img:'photo-1570077188670-e3a8d69ac5ff',pos:[38,20]},
 {name:'Đền Hùng',province:'Phú Thọ',region:'Miền Bắc',type:'Di tích lịch sử',year:'',desc:'Khu di tích trên núi Nghĩa Lĩnh gắn với tín ngưỡng thờ cúng Hùng Vương và ngày Giỗ Tổ.',img:'photo-1540611025311-01df3cef54b5',pos:[40,14]},
 {name:'Quần đảo Cát Bà',province:'Hải Phòng',region:'Miền Bắc',type:'Di sản thiên nhiên',year:'2023',desc:'Cảnh quan đảo, rừng và biển thuộc Di sản thiên nhiên thế giới Vịnh Hạ Long – Quần đảo Cát Bà.',img:'photo-1470770841072-f978cf4d019e',pos:[47,11]},
 {name:'Khu di tích Yên Tử',province:'Quảng Ninh',region:'Miền Bắc',type:'Di tích lịch sử',year:'',desc:'Không gian văn hóa Phật giáo gắn với Thiền phái Trúc Lâm và vua Trần Nhân Tông.',img:'photo-1540611025311-01df3cef54b5',pos:[48,15]},
 {name:'Cố đô Hoa Lư',province:'Ninh Bình',region:'Miền Bắc',type:'Di tích lịch sử',year:'968',desc:'Kinh đô đầu tiên của nhà nước Đại Cồ Việt dưới triều Đinh và Tiền Lê.',img:'photo-1500530855697-b586d89ba3ee',pos:[44,27]},
 {name:'Chùa Thiên Mụ',province:'TP. Huế',region:'Miền Trung',type:'Di sản văn hóa',year:'1601',desc:'Ngôi chùa cổ bên sông Hương, là một dấu ấn kiến trúc và văn hóa của xứ Huế.',img:'photo-1540611025311-01df3cef54b5',pos:[56,46]},
 {name:'Thành cổ Quảng Trị',province:'Quảng Trị',region:'Miền Trung',type:'Di tích lịch sử',year:'',desc:'Di tích thành lũy gắn với những biến cố lịch sử và ký ức chiến tranh ở miền Trung.',img:'photo-1518005020951-eccb494ad742',pos:[54,50]},
 {name:'Tháp Bà Ponagar',province:'Khánh Hòa',region:'Miền Trung',type:'Di tích lịch sử',year:'',desc:'Quần thể tháp Chăm cổ bên cửa sông Cái, phản ánh nghệ thuật kiến trúc và tín ngưỡng Chăm.',img:'photo-1606293926075-69a00dbfde81',pos:[56,68]},
 {name:'Dinh Độc Lập',province:'TP. Hồ Chí Minh',region:'Miền Nam',type:'Di tích lịch sử',year:'',desc:'Công trình kiến trúc và di tích lịch sử quan trọng giữa trung tâm TP. Hồ Chí Minh.',img:'photo-1518005020951-eccb494ad742',pos:[29,81]},
 {name:'Nhà tù Côn Đảo',province:'Bà Rịa – Vũng Tàu',region:'Miền Nam',type:'Di tích lịch sử',year:'',desc:'Hệ thống di tích lưu dấu lịch sử đấu tranh và sự hy sinh của nhiều thế hệ tù nhân cách mạng.',img:'photo-1519681393784-d120267933ba',pos:[35,88]},
 {name:'Vườn quốc gia Cúc Phương',province:'Ninh Bình',region:'Miền Bắc',type:'Di sản thiên nhiên',year:'',desc:'Khu rừng nguyên sinh nổi bật với đa dạng sinh học, tuyến đi bộ và hoạt động bảo tồn thiên nhiên.',img:'photo-1470770841072-f978cf4d019e',pos:[45,24]}
];
const placeStories = {
 'Vịnh Hạ Long':['Cảnh quan vịnh được tạo nên bởi các đảo đá vôi, hang động và vùng nước ven bờ. Hãy thử quan sát hình dáng địa hình từ góc nhìn địa chất, thay vì chỉ xem đây là phông nền du lịch.','Vịnh Hạ Long được UNESCO ghi danh Di sản Thiên nhiên Thế giới năm 1994 và bổ sung giá trị địa chất năm 2000. Các tuyến tham quan và điều kiện đi tàu thay đổi; cần kiểm tra thông tin của ban quản lý và đơn vị được phép khai thác.'],
 'Cố đô Huế':['Quần thể di tích Huế gắn với kinh đô triều Nguyễn và sự phát triển đô thị dọc sông Hương. Thành quách, cung điện, lăng tẩm và công trình tín ngưỡng tạo nên một không gian lịch sử nhiều lớp.','UNESCO ghi danh Quần thể di tích Cố đô Huế năm 1993. Hãy tìm hiểu chức năng của từng khu vực và cách bảo tồn công trình, đồng thời kiểm tra giờ mở cửa, vé và quy định tham quan từ đơn vị quản lý.'],
 'Phố cổ Hội An':['Mạng lưới phố, nhà ở, hội quán và công trình tín ngưỡng cho thấy lịch sử giao thương của một đô thị ven sông. Kiến trúc được tạo nên qua nhiều giai đoạn và sự cộng cư của nhiều cộng đồng.','Hội An được UNESCO ghi danh năm 1999. Đây vẫn là không gian sinh hoạt của cư dân; hãy đi nhẹ, giữ lối đi thông thoáng và xin phép trước khi chụp ảnh trong nhà hoặc cửa hàng.'],
 'Phong Nha – Kẻ Bàng':['Địa hình đá vôi và hệ thống hang động là điểm nổi bật của Vườn quốc gia Phong Nha – Kẻ Bàng. Các tuyến tham quan được phân cấp theo điều kiện địa hình và mức độ an toàn.','UNESCO ghi danh khu vực này năm 2003 và mở rộng phạm vi di sản sau đó. Không tự ý vào hang hoặc đường mòn đóng cửa; nên chọn tuyến được cấp phép và làm theo hướng dẫn của kiểm lâm, hướng dẫn viên.'],
 'Tràng An':['Núi đá vôi, thung nước và hang xuyên núi tạo nên một cảnh quan biến đổi theo ánh sáng và mực nước. Các tuyến thuyền đi qua những khu vực có giá trị tự nhiên và di tích.','Tràng An được UNESCO ghi danh là Di sản Thế giới hỗn hợp năm 2014. Hãy mặc áo phao theo hướng dẫn, không xả rác và giữ tôn nghiêm tại các điểm thờ tự.'],
 'Hoàng thành Thăng Long':['Khu trung tâm Hoàng thành lưu giữ dấu tích của nhiều thời kỳ kinh đô. Khảo cổ học giúp các nhà nghiên cứu nhận diện lớp kiến trúc, vật liệu và hoạt động của con người qua các triều đại.','Di sản được UNESCO ghi danh năm 2010. Khi tham quan, hãy chú ý các bảng giải thích và phân biệt phần phục dựng với dấu tích khảo cổ được bảo tồn tại chỗ.'],
 'Thành nhà Hồ':['Thành được biết đến với những khối đá lớn ghép thành tường và cổng. Công trình cho thấy năng lực tổ chức xây dựng, kỹ thuật và lựa chọn vị trí trong bối cảnh chính trị cuối thế kỷ XIV.','UNESCO ghi danh Thành nhà Hồ năm 2011. Hãy tuân thủ ranh giới bảo vệ và không leo lên tường thành; các chi tiết kỹ thuật nên được tìm hiểu qua tư liệu chuyên môn tại điểm di sản.'],
 'Địa đạo Củ Chi':['Hệ thống đường hầm gắn với đời sống và hoạt động kháng chiến trong thế kỷ XX. Không gian trưng bày giúp người tham quan tìm hiểu điều kiện sinh hoạt, liên lạc và tổ chức trong thời chiến.','Một chuyến đi nên kết hợp câu chuyện tại chỗ với nguồn tư liệu lịch sử, đồng thời dành sự tôn trọng cho những người đã trải qua chiến tranh. Kiểm tra tuyến mở cửa và lưu ý sức khỏe trước khi xuống hầm.'],
 'Thánh địa Mỹ Sơn':['Quần thể đền tháp Chăm Pa nằm trong thung lũng, với các công trình thuộc nhiều giai đoạn lịch sử. Gạch, phù điêu và tượng thờ cung cấp tư liệu về kiến trúc, tín ngưỡng và nghệ thuật.','Mỹ Sơn được UNESCO ghi danh năm 1999. Không chạm vào gạch, tượng hoặc hiện vật; hãy ở trên lối tham quan để hỗ trợ bảo tồn cấu trúc dễ tổn thương.'],
 'Văn Miếu – Quốc Tử Giám':['Văn Miếu được lập năm 1070; Quốc Tử Giám về sau gắn với hoạt động giáo dục và đào tạo nhân tài thời quân chủ. Khu di tích ngày nay giúp tìm hiểu lịch sử học tập, nghi lễ và kiến trúc.','Bia tiến sĩ là những tư liệu lịch sử cần được bảo vệ. Khi tham quan, hãy tuân thủ quy định khu vực, không chạm hoặc tự ý rub bản trang trí, và tìm đọc chú giải chính thức để hiểu đúng bối cảnh.'],
 'Đền Hùng':['Khu di tích trên núi Nghĩa Lĩnh gắn với tín ngưỡng thờ cúng Hùng Vương và ký ức về nguồn cội. Các công trình thờ tự nằm trong cảnh quan rừng núi, tạo nên một hành trình hành hương.','Lễ Giỗ Tổ diễn ra vào mùng 10 tháng 3 âm lịch; lượng khách có thể đông. Hãy mặc trang phục phù hợp, giữ trật tự tại nơi thờ tự và theo hướng dẫn của ban quản lý.'],
 'Quần đảo Cát Bà':['Cát Bà có sự kết hợp giữa đảo, biển, rừng và các hệ sinh thái. Nhiều hoạt động du lịch cần được cân đối với mục tiêu bảo tồn thiên nhiên và đời sống cư dân địa phương.','Quần đảo Cát Bà cùng Vịnh Hạ Long thuộc Di sản Thiên nhiên Thế giới được UNESCO mở rộng ghi danh năm 2023. Hãy chọn dịch vụ có trách nhiệm, không gây hại sinh vật và kiểm tra cảnh báo thời tiết trước chuyến đi.'],
 'Khu di tích Yên Tử':['Yên Tử gắn với lịch sử Phật giáo Trúc Lâm và vua Trần Nhân Tông. Cảnh quan núi rừng, chùa và đường hành hương kết nối di tích với hoạt động tín ngưỡng đang tiếp diễn.','Đây vừa là điểm di sản vừa là không gian tôn giáo. Hãy ăn mặc phù hợp, giữ yên tĩnh, đi theo tuyến an toàn và xem thông báo của đơn vị quản lý trước khi khởi hành.'],
 'Cố đô Hoa Lư':['Hoa Lư là kinh đô của nhà nước Đại Cồ Việt dưới các triều Đinh và Tiền Lê. Địa hình núi đá bao quanh góp phần tạo nên một không gian phòng thủ đặc trưng.','Khi tham quan đền thờ và di tích, hãy tìm hiểu mối liên hệ giữa địa hình, quyền lực và việc hình thành nhà nước độc lập. Một số truyền thuyết tại điểm đến nên được phân biệt với dữ kiện sử học.'],
 'Chùa Thiên Mụ':['Chùa Thiên Mụ nằm bên sông Hương và là một dấu ấn quan trọng trong cảnh quan văn hóa Huế. Các lớp kiến trúc, tháp và hiện vật phản ánh quá trình tu bổ, sử dụng qua thời gian.','Đây là nơi sinh hoạt tôn giáo, không chỉ là điểm chụp ảnh. Hãy tôn trọng khu vực hành lễ, tuân thủ hướng dẫn về trang phục và hỏi trước khi chụp ảnh người đang thực hành tín ngưỡng.'],
 'Thành cổ Quảng Trị':['Di tích thành cổ gắn với lịch sử quân sự và ký ức chiến tranh ở miền Trung. Không gian tưởng niệm hiện nay nhắc người tham quan về mất mát của chiến tranh và nỗ lực gìn giữ hòa bình.','Hãy dành thời gian đọc tư liệu tại chỗ, giữ thái độ trang nghiêm và tránh biến không gian tưởng niệm thành nơi vui chơi ồn ào. Các con số, diễn biến cụ thể cần đối chiếu với nguồn lịch sử.'],
 'Tháp Bà Ponagar':['Quần thể tháp Chăm bên cửa sông Cái Nha Trang thể hiện nghệ thuật kiến trúc và tín ngưỡng Chăm. Di tích cũng là không gian thờ tự được cộng đồng tiếp tục gìn giữ.','Hãy tôn trọng nghi lễ đang diễn ra, tuân thủ hướng dẫn về trang phục và khu vực cấm chụp ảnh. Tìm hiểu cả vai trò của cộng đồng Chăm trong di sản sẽ giúp câu chuyện đầy đủ hơn.'],
 'Dinh Độc Lập':['Công trình là một địa điểm quan trọng trong lịch sử Việt Nam hiện đại và hiện được bảo tồn như di tích, không gian trưng bày. Kiến trúc, nội thất và hiện vật giúp người xem hình dung hoạt động của một cơ quan nhà nước thời kỳ trước.','Hãy đọc thuyết minh theo từng không gian để phân biệt chức năng các phòng và bối cảnh của hiện vật. Những sự kiện lịch sử liên quan có thể được nhìn nhận từ nhiều nguồn tư liệu và lời kể khác nhau.'],
 'Nhà tù Côn Đảo':['Hệ thống di tích lưu giữ dấu tích nhà tù và câu chuyện về những người bị giam giữ qua nhiều giai đoạn. Không gian này có ý nghĩa tưởng niệm và cần được tiếp cận với sự tôn trọng.','Tham quan theo hướng dẫn của đơn vị quản lý, không chạm vào hiện vật hoặc làm gián đoạn hoạt động tưởng niệm. Khi kể lại lịch sử, nên dùng nguồn có kiểm chứng và tránh khai thác nỗi đau như yếu tố giải trí.'],
 'Vườn quốc gia Cúc Phương':['Cúc Phương là khu rừng có giá trị đa dạng sinh học và các hoạt động nghiên cứu, cứu hộ, bảo tồn. Tuyến đi bộ giúp quan sát mối liên hệ giữa sinh cảnh, thực vật và động vật.','Đi theo lối được mở, không cho động vật ăn, không thu hái mẫu vật và mang rác trở ra. Trước chuyến đi, kiểm tra mùa hoạt động, điều kiện đường mòn và hướng dẫn từ ban quản lý.']
};
const heroes = [
 {name:'Trần Hưng Đạo',era:'Nhà Trần · thế kỷ XIII',tag:'Kháng chiến',desc:'Danh tướng kiệt xuất, góp công lớn trong ba lần kháng chiến chống quân Nguyên – Mông.',img:'photo-1560250097-0b93528c311a'},
 {name:'Lý Thường Kiệt',era:'Nhà Lý · thế kỷ XI',tag:'Kháng chiến',desc:'Danh tướng gắn với cuộc kháng chiến chống Tống và bài thơ Nam quốc sơn hà.',img:'photo-1500648767791-00dcc994a43e'},
 {name:'Nguyễn Trãi',era:'Thời Lê sơ · thế kỷ XV',tag:'Triều đại',desc:'Nhà chính trị, nhà văn hóa lớn; tác giả Bình Ngô đại cáo, danh nhân văn hóa thế giới.',img:'photo-1506794778202-cad84cf45f1d'},
 {name:'Hai Bà Trưng',era:'Thế kỷ I',tag:'Khởi nghĩa',desc:'Trưng Trắc và Trưng Nhị lãnh đạo cuộc khởi nghĩa chống ách đô hộ phương Bắc.',img:'photo-1534528741775-53994a69daeb'},
 {name:'Ngô Quyền',era:'Thế kỷ X',tag:'Kháng chiến',desc:'Lãnh đạo chiến thắng Bạch Đằng năm 938, mở ra thời kỳ độc lập tự chủ lâu dài.',img:'photo-1507003211169-0a1dd7228f2d'},
 {name:'Võ Nguyên Giáp',era:'1911–2013',tag:'Hiện đại',desc:'Đại tướng, Tổng Tư lệnh đầu tiên của Quân đội nhân dân Việt Nam; gắn với chiến thắng Điện Biên Phủ.',img:'photo-1507591064344-4c6ce005b128'},
 {name:'Nguyễn Huệ (Quang Trung)',era:'1753–1792',tag:'Khởi nghĩa',desc:'Lãnh đạo phong trào Tây Sơn và chiến thắng Ngọc Hồi – Đống Đa mùa xuân Kỷ Dậu 1789.',img:'photo-1506794778202-cad84cf45f1d'},
 {name:'Bà Triệu',era:'226–248',tag:'Khởi nghĩa',desc:'Nữ anh hùng lãnh đạo cuộc khởi nghĩa chống chính quyền Đông Ngô, trở thành biểu tượng quật cường.',img:'photo-1531123897727-8f129e1688ce'},
 {name:'Đinh Bộ Lĩnh',era:'Thế kỷ X',tag:'Triều đại',desc:'Dẹp loạn 12 sứ quân, thống nhất đất nước và lập nên nhà Đinh.',img:'photo-1500648767791-00dcc994a43e'}
];
const heroStories = {
 'Trần Hưng Đạo':['Trần Quốc Tuấn, thường được gọi là Trần Hưng Đạo, là hoàng thân và tướng lĩnh nhà Trần. Ông giữ vai trò chỉ huy quan trọng trong các cuộc kháng chiến chống Nguyên – Mông ở thế kỷ XIII.','Bên cạnh hoạt động quân sự, văn bản Hịch tướng sĩ gắn với cách ông khích lệ tướng sĩ và nêu trách nhiệm trước vận mệnh đất nước. Khi tìm hiểu, hãy đặt tác phẩm trong bối cảnh chiến tranh và xã hội thời Trần.'],
 'Lý Thường Kiệt':['Lý Thường Kiệt là danh tướng triều Lý, gắn với cuộc kháng chiến chống Tống thế kỷ XI. Sự nghiệp của ông diễn ra trong giai đoạn nhà Lý củng cố bộ máy và bảo vệ biên giới.','Bài thơ Nam quốc sơn hà thường được nhắc đến như một tuyên ngôn về chủ quyền. Các nghiên cứu còn bàn luận về tác giả và hoàn cảnh xuất hiện của văn bản, vì vậy nên đối chiếu nhiều nguồn sử học thay vì mặc định mọi chi tiết truyền tụng đều thống nhất.'],
 'Nguyễn Trãi':['Nguyễn Trãi là nhà chính trị, nhà ngoại giao và tác gia sống vào cuối thế kỷ XIV, đầu thế kỷ XV. Ông tham gia khởi nghĩa Lam Sơn và đóng góp vào việc xây dựng chính quyền sau chiến tranh.','Bình Ngô đại cáo, Quân trung từ mệnh tập và thơ văn của ông cho thấy sự quan tâm đến độc lập, nhân nghĩa và đời sống nhân dân. Nguyễn Trãi được UNESCO công nhận là Danh nhân văn hóa thế giới năm 1980.'],
 'Hai Bà Trưng':['Trưng Trắc và Trưng Nhị lãnh đạo cuộc khởi nghĩa chống chính quyền đô hộ Đông Hán vào đầu thế kỷ I. Cuộc khởi nghĩa giành được quyền kiểm soát ở một số khu vực và lập chính quyền trong thời gian ngắn.','Hai Bà Trưng trở thành biểu tượng của tinh thần chống áp bức và vai trò của phụ nữ trong lịch sử. Khi đọc các câu chuyện về hai bà, cần phân biệt tư liệu sử học, truyền thuyết và cách tưởng niệm ở từng địa phương.'],
 'Ngô Quyền':['Ngô Quyền lãnh đạo lực lượng đánh bại quân Nam Hán trên sông Bạch Đằng năm 938. Chiến thắng chặn cuộc xâm lược và tạo điều kiện cho việc xây dựng chính quyền tự chủ.','Sau chiến thắng, ông xưng vương và đóng đô ở Cổ Loa. Sự kiện Bạch Đằng thường được xem là một mốc lớn trong tiến trình giành lại quyền tự chủ; các chi tiết về trận đánh cần đọc cùng sử liệu và nghiên cứu khảo cổ.'],
 'Võ Nguyên Giáp':['Võ Nguyên Giáp là Đại tướng của Quân đội nhân dân Việt Nam, tham gia lãnh đạo nhiều chiến dịch trong các cuộc chiến tranh thế kỷ XX. Ông không xuất thân từ trường đào tạo quân sự chính quy mà từng làm nghề dạy học và hoạt động báo chí.','Chiến dịch Điện Biên Phủ năm 1954 là một dấu mốc thường được nhắc khi tìm hiểu sự nghiệp của ông. Hồ sơ lịch sử đầy đủ cần xem xét vai trò của tập thể, hậu cần, dân công và bối cảnh quốc tế, không quy toàn bộ kết quả cho một cá nhân.'],
 'Nguyễn Huệ (Quang Trung)':['Nguyễn Huệ là một trong những lãnh đạo của phong trào Tây Sơn. Ông lên ngôi hoàng đế với niên hiệu Quang Trung và gắn với chiến thắng trước quân Thanh vào mùa xuân năm 1789.','Phong trào Tây Sơn làm thay đổi cục diện chính trị cuối thế kỷ XVIII. Tìm hiểu về Quang Trung cũng cần đặt trong bối cảnh nhiều lực lượng, biến động xã hội và những cách diễn giải khác nhau của sử liệu triều Nguyễn và các công trình hiện đại.'],
 'Bà Triệu':['Triệu Thị Trinh, thường được gọi là Bà Triệu, được ghi nhớ qua cuộc khởi nghĩa chống chính quyền Đông Ngô vào thế kỷ III. Tư liệu về cuộc đời bà đan xen giữa sử sách, truyền thuyết và ký ức dân gian.','Hình tượng Bà Triệu trở thành biểu tượng về ý chí tự chủ và vai trò của phụ nữ. Các địa phương có đền thờ và lễ tưởng niệm, tạo nên những cách kể chuyện lịch sử gắn với cộng đồng.'],
 'Đinh Bộ Lĩnh':['Đinh Bộ Lĩnh gắn với quá trình dẹp loạn 12 sứ quân và thống nhất đất nước vào thế kỷ X. Sau khi lên ngôi, ông đặt quốc hiệu Đại Cồ Việt và chọn Hoa Lư làm kinh đô.','Việc lựa chọn Hoa Lư cho thấy mối liên hệ giữa địa hình, phòng thủ và quyền lực trong buổi đầu xây dựng nhà nước. Khi tham quan di tích, hãy so sánh truyền thuyết dân gian với các mốc được ghi trong sử liệu.']
};
const historyItems = [
 {title:'Chiến thắng Điện Biên Phủ',category:'Kháng chiến',date:'07/05/1954',desc:'Chiến thắng có ý nghĩa quyết định trong cuộc kháng chiến chống thực dân Pháp, tạo bước ngoặt cho lịch sử Việt Nam hiện đại.',img:'photo-1500530855697-b586d89ba3ee',body:['Chiến dịch Điện Biên Phủ diễn ra từ tháng 3 đến ngày 7 tháng 5 năm 1954. Tập đoàn cứ điểm của quân Pháp nằm trong một thung lũng ở Tây Bắc; địa hình, đường tiếp tế và các cứ điểm xung quanh khiến nơi đây trở thành một chiến trường đặc biệt khốc liệt.','Quân đội và dân công Việt Nam đã tổ chức một chiến dịch hậu cần quy mô lớn để đưa lương thực, vũ khí và vật tư qua núi rừng. Những con đường vận tải, xe đạp thồ và mạng lưới dân công là một phần quan trọng của câu chuyện chiến dịch, bên cạnh các quyết định quân sự và sự hy sinh của người lính.','Chiến thắng kết thúc bằng việc tập đoàn cứ điểm Điện Biên Phủ thất thủ ngày 7/5/1954. Sự kiện góp phần dẫn tới việc ký kết Hiệp định Genève năm 1954 về chấm dứt chiến sự ở Đông Dương. Khi tìm hiểu, nên đặt chiến thắng trong bối cảnh quốc tế và nhìn nhận đầy đủ mất mát của tất cả những người bị cuốn vào chiến tranh.'],source:'Bảo tàng Lịch sử Quốc gia; Bảo tàng Chiến thắng Điện Biên Phủ; Hiệp định Genève năm 1954.'},
 {title:'Bạch Đằng năm 938',category:'Kháng chiến',date:'Năm 938',desc:'Ngô Quyền vận dụng địa hình sông nước và bãi cọc để đánh bại quân Nam Hán, mở ra thời kỳ độc lập tự chủ.',img:'photo-1528127269322-539801943592',body:['Năm 938, quân Nam Hán tiến vào nước ta bằng đường biển. Ngô Quyền chọn vùng cửa sông Bạch Đằng làm nơi quyết chiến. Thủy triều lên xuống tạo nên một yếu tố địa hình quan trọng mà người chỉ huy có thể tận dụng để tổ chức thế trận.','Sử sách ghi lại kế hoạch đóng cọc nhọn dưới lòng sông, kết hợp nhử đối phương tiến sâu khi nước lên rồi phản công lúc nước rút. Chiến thắng cho thấy hiểu biết về địa hình và thủy văn có thể tạo lợi thế trước một lực lượng mạnh hơn.','Sau chiến thắng, Ngô Quyền xưng vương và đóng đô ở Cổ Loa. Trận Bạch Đằng thường được xem là dấu mốc kết thúc thời kỳ Bắc thuộc kéo dài và mở đầu một giai đoạn tự chủ mới. Các chi tiết chiến thuật nên được đối chiếu với sử liệu, bởi những mô tả về trận đánh có thể khác nhau giữa các công trình nghiên cứu.'],source:'Đại Việt sử ký toàn thư; Bảo tàng Lịch sử Quốc gia – tư liệu về Ngô Quyền và chiến thắng Bạch Đằng.'},
 {title:'Triều đại nhà Lý và dấu ấn Thăng Long',category:'Triều đại',date:'Thế kỷ XI–XIII',desc:'Việc dời đô ra Thăng Long năm 1010 đặt nền móng cho vị thế lâu dài của trung tâm chính trị và văn hóa.',img:'photo-1570077188670-e3a8d69ac5ff',body:['Năm 1010, vua Lý Công Uẩn ban Chiếu dời đô, chuyển kinh đô từ Hoa Lư ra thành Đại La và đổi tên nơi đây thành Thăng Long. Văn bản nêu những cân nhắc về thế đất, giao thông và khả năng phát triển của trung tâm mới.','Trong thời Lý, Thăng Long trở thành nơi đặt triều đình, tổ chức hoạt động chính trị, tôn giáo và thủ công nghiệp. Dấu tích khảo cổ tại khu trung tâm Hoàng thành Thăng Long hiện nay giúp các nhà nghiên cứu tìm hiểu sự tiếp nối và biến đổi của kinh đô qua nhiều triều đại.','Dời đô không chỉ là một quyết định về địa điểm. Đó còn là lựa chọn chiến lược về quản trị và tầm nhìn phát triển. Khi đọc Chiếu dời đô, hãy chú ý cách văn bản kết hợp lập luận chính trị với hình ảnh và ngôn ngữ cổ điển.'],source:'Chiếu dời đô; Trung tâm Bảo tồn Di sản Thăng Long – Hà Nội; UNESCO World Heritage Centre – Central Sector of the Imperial Citadel of Thang Long.'},
 {title:'Tín ngưỡng thờ cúng Hùng Vương',category:'Văn hóa',date:'Hằng năm',desc:'Truyền thống tưởng nhớ các Vua Hùng thể hiện đạo lý uống nước nhớ nguồn và ý thức cộng đồng.',img:'photo-1540611025311-01df3cef54b5',body:['Tín ngưỡng thờ cúng Hùng Vương gắn với truyền thuyết về nguồn cội và thực hành tưởng niệm tại Đền Hùng, Phú Thọ. Lễ Giỗ Tổ vào ngày mùng 10 tháng 3 âm lịch là dịp nhiều người hướng về tổ tiên và lịch sử chung.','Di sản này không chỉ nằm trong một nghi lễ tại một địa điểm. Việc thờ phụng và kể chuyện về các Vua Hùng được duy trì trong nhiều cộng đồng, với hình thức thực hành có thể khác nhau theo địa phương và hoàn cảnh.','UNESCO ghi danh “Tín ngưỡng thờ cúng Hùng Vương ở Phú Thọ” vào Danh sách Di sản văn hóa phi vật thể đại diện của nhân loại năm 2012. Việc ghi danh nhấn mạnh vai trò của cộng đồng trong bảo vệ và trao truyền di sản sống.'],source:'UNESCO Intangible Cultural Heritage – Worship of Hùng kings in Phú Thọ.'},
 {title:'Nguyễn Trãi – tư tưởng nhân nghĩa',category:'Nhân vật',date:'1380–1442',desc:'Tác phẩm và tư tưởng của Nguyễn Trãi góp phần làm giàu di sản văn học, chính trị và tư tưởng Việt Nam.',img:'photo-1518005020951-eccb494ad742',body:['Nguyễn Trãi sống trong giai đoạn đầu thế kỷ XV đầy biến động. Ông tham gia phong trào Lam Sơn, đảm nhiệm công việc chính trị và để lại nhiều trước tác bằng chữ Hán và chữ Nôm. Tác phẩm của ông phản ánh mối quan tâm đến vận nước, đời sống nhân dân và trách nhiệm của người cầm quyền.','Bình Ngô đại cáo được công bố năm 1428 sau thắng lợi của khởi nghĩa Lam Sơn. Tác phẩm vừa tổng kết cuộc chiến vừa nêu quan niệm về nền độc lập, chủ quyền và tư tưởng nhân nghĩa. Có thể đọc văn bản như một tuyên cáo chính trị, đồng thời chú ý cách tác giả dùng điển tích và lập luận để thuyết phục người đương thời.','Nguyễn Trãi được UNESCO công nhận là Danh nhân văn hóa thế giới nhân kỷ niệm 600 năm ngày sinh năm 1980. Việc đọc ông hôm nay nên gắn với bối cảnh lịch sử, văn bản gốc và chú giải của các nhà nghiên cứu thay vì chỉ trích riêng một câu nói nổi tiếng.'],source:'Bình Ngô đại cáo; UNESCO – kỷ niệm 600 năm ngày sinh Nguyễn Trãi; Viện Hàn lâm Khoa học xã hội Việt Nam.'},
 {title:'Hội An – thương cảng và những cuộc gặp gỡ',category:'Văn hóa',date:'Thế kỷ XV–XIX',desc:'Đô thị ven sông lưu dấu mạng lưới giao thương và sự cộng cư của nhiều nhóm cư dân.',img:'photo-1528181304800-259b08848526',body:['Hội An phát triển thành một thương cảng quan trọng ở miền Trung trong nhiều thế kỷ. Vị trí bên sông, gần biển và nằm trên các tuyến giao thương hàng hải góp phần đưa thương nhân từ nhiều nơi đến buôn bán, cư trú và trao đổi văn hóa.','Nhà ở, hội quán, công trình tín ngưỡng, giếng nước và đường phố tạo nên một cấu trúc đô thị có nhiều lớp. Một chuyến đi bộ có thể bắt đầu bằng việc quan sát mái hiên, mặt tiền và cách ngôi nhà thích ứng với khí hậu, rồi tìm hiểu thêm về cộng đồng đã xây dựng và sử dụng công trình.','Hội An được UNESCO ghi danh là Di sản Văn hóa Thế giới năm 1999. Bảo tồn đô thị sống đòi hỏi cân bằng giữa gìn giữ kiến trúc, nhu cầu của cư dân và hoạt động du lịch. Hãy cư xử như một vị khách trong khu dân cư, giảm tiếng ồn và tuân thủ quy định tham quan.'],source:'UNESCO World Heritage Centre – Hoi An Ancient Town; Trung tâm Bảo tồn Di sản Văn hóa Thế giới Hội An.'},
 {title:'Thành Điện Hải và buổi đầu kháng chiến ở Đà Nẵng',category:'Kháng chiến',date:'1858–1860',desc:'Di tích thành lũy gắn với cuộc tấn công của liên quân Pháp – Tây Ban Nha vào Đà Nẵng.',img:'photo-1518005020951-eccb494ad742',body:['Ngày 1/9/1858, liên quân Pháp – Tây Ban Nha nổ súng tấn công Đà Nẵng. Vị trí của thành phố gần cửa biển khiến nơi đây trở thành mục tiêu quân sự, nhưng địa hình và sự kháng cự tại chỗ đã làm cho kế hoạch tiến sâu ra phía Bắc gặp nhiều khó khăn.','Thành Điện Hải là một phần của hệ thống phòng thủ được củng cố trong thế kỷ XIX. Tên gọi và hình thức kiến trúc của di tích thay đổi qua thời gian; dấu tích còn lại giúp người xem hình dung vai trò của thành lũy trong phòng thủ bờ biển và bảo vệ khu vực trung tâm.','Tham quan di tích ngày nay là dịp kết nối câu chuyện tại chỗ với các nguồn sử liệu về cuộc vây hãm Đà Nẵng. Không nên giản lược sự kiện thành một trận đánh đơn lẻ: chiến sự kéo dài, liên quan đến hậu cần, địa hình, quyết sách của triều đình và đời sống cư dân.'],source:'Bảo tàng Đà Nẵng; hồ sơ xếp hạng di tích Thành Điện Hải; tư liệu lịch sử về cuộc tấn công Đà Nẵng năm 1858.'},
 {title:'Văn hóa Chăm Pa qua những đền tháp Mỹ Sơn',category:'Văn hóa',date:'Thế kỷ IV–XIII',desc:'Quần thể đền tháp phản ánh lịch sử, tín ngưỡng và nghệ thuật của vương quốc Chăm Pa.',img:'photo-1606293926075-69a00dbfde81',body:['Mỹ Sơn là quần thể đền tháp nằm trong một thung lũng được bao quanh bởi núi. Nhiều công trình được xây dựng qua các giai đoạn khác nhau, phục vụ hoạt động tôn giáo và gắn với quyền lực của các vị vua Chăm Pa.','Gạch, phù điêu và tượng thờ là những tư liệu quan trọng để nghiên cứu kỹ thuật xây dựng, biểu tượng và giao lưu văn hóa. Một số công trình bị hư hại bởi thời gian và chiến tranh; công tác bảo tồn cần nghiên cứu vật liệu, cấu trúc và bối cảnh trước khi can thiệp.','Mỹ Sơn được UNESCO ghi danh năm 1999. Khi tham quan, nên đi theo lối mở cửa, không chạm vào hiện vật hay leo lên cấu trúc cổ. Tìm hiểu thêm về cộng đồng Chăm đương đại giúp câu chuyện di sản không bị đóng khung trong quá khứ.'],source:'UNESCO World Heritage Centre – My Son Sanctuary; Trung tâm Quản lý Bảo tồn Di sản Văn hóa Mỹ Sơn.'}
];
const questions = [
 {level:'medium',q:'Vịnh Hạ Long được UNESCO ghi danh lần đầu tiên vào năm nào với giá trị nổi bật về địa chất, địa mạo?',a:['1987','1994','2000','2003'],correct:1,explain:'Vịnh Hạ Long được ghi danh lần đầu năm 1994 về giá trị thẩm mỹ; giá trị địa chất, địa mạo được ghi danh năm 2000.'},
 {level:'medium',q:'Bộ luật thành văn nổi tiếng được ban hành dưới triều Lê Thánh Tông có tên gọi nào?',a:['Hình thư','Quốc triều hình luật','Hoàng Việt luật lệ','Luật Hồng Đức'],correct:1,explain:'Quốc triều hình luật, thường gắn với tên gọi Luật Hồng Đức, là bộ luật tiêu biểu thời Lê sơ.'},
 {level:'hard',q:'Chiến thắng Bạch Đằng năm 1288 gắn với vị tướng chỉ huy nào của nhà Trần?',a:['Trần Quốc Tuấn','Trần Quang Khải','Phạm Ngũ Lão','Trần Nhật Duật'],correct:0,explain:'Trần Quốc Tuấn (Hưng Đạo Đại Vương) là tổng chỉ huy cuộc kháng chiến chống Nguyên–Mông lần thứ ba.'},
 {level:'medium',q:'Thành nhà Hồ được xây dựng chủ yếu bằng vật liệu nào?',a:['Gạch nung','Đá lớn ghép khít','Gỗ lim','Đất nện'],correct:1,explain:'Thành nhà Hồ nổi bật bởi kỹ thuật xây dựng các khối đá lớn, nhiều khối có kích thước và trọng lượng rất lớn.'},
 {level:'hard',q:'Tác phẩm Bình Ngô đại cáo được công bố gắn với sự kiện lịch sử nào?',a:['Khởi nghĩa Lam Sơn thắng lợi','Dời đô ra Thăng Long','Chiến thắng Bạch Đằng 938','Phong trào Tây Sơn'],correct:0,explain:'Nguyễn Trãi soạn Bình Ngô đại cáo năm 1428 sau thắng lợi của khởi nghĩa Lam Sơn.'},
 {level:'medium',q:'Quần thể di tích Cố đô Huế gắn với triều đại phong kiến nào?',a:['Nhà Lý','Nhà Trần','Nhà Nguyễn','Nhà Đinh'],correct:2,explain:'Huế là kinh đô của Việt Nam dưới triều Nguyễn từ đầu thế kỷ XIX đến năm 1945.'},
 {level:'hard',q:'Hội nghị Diên Hồng được nhắc đến trong bối cảnh lịch sử nào?',a:['Kháng chiến chống Nguyên–Mông','Khởi nghĩa Hai Bà Trưng','Kháng chiến chống Minh','Phong trào Cần Vương'],correct:0,explain:'Hội nghị Diên Hồng thể hiện tinh thần đồng lòng của các bô lão trước cuộc kháng chiến chống quân Nguyên–Mông.'},
 {level:'medium',q:'Thánh địa Mỹ Sơn là di tích tiêu biểu của nền văn hóa nào?',a:['Óc Eo','Chăm Pa','Đông Sơn','Sa Huỳnh'],correct:1,explain:'Mỹ Sơn là quần thể đền tháp tôn giáo quan trọng của vương quốc Chăm Pa.'},
 {level:'hard',q:'Chiến thắng Ngọc Hồi – Đống Đa vào mùa xuân năm 1789 gắn với ai?',a:['Nguyễn Huệ – Quang Trung','Nguyễn Ánh','Lê Lợi','Trần Hưng Đạo'],correct:0,explain:'Nguyễn Huệ lên ngôi Hoàng đế hiệu Quang Trung và chỉ huy chiến dịch đánh quân Thanh dịp Tết Kỷ Dậu 1789.'},
 {level:'medium',q:'Tín ngưỡng thờ cúng Hùng Vương gắn với địa phương nào?',a:['Phú Thọ','Ninh Bình','Thanh Hóa','Quảng Nam'],correct:0,explain:'Khu di tích lịch sử Đền Hùng nằm tại tỉnh Phú Thọ.'},
 {level:'hard',q:'Nội dung cốt lõi của Chiếu dời đô năm 1010 là quyết định nào?',a:['Dời đô từ Hoa Lư ra Đại La','Đổi quốc hiệu thành Đại Việt','Ban hành Quốc triều hình luật','Mở đầu triều Trần'],correct:0,explain:'Lý Công Uẩn ban Chiếu dời đô, chuyển kinh đô từ Hoa Lư ra Đại La và đổi tên thành Thăng Long.'},
 {level:'medium',q:'Địa đạo Củ Chi gắn với giai đoạn lịch sử nào nổi bật?',a:['Thời Văn Lang','Kháng chiến trong thế kỷ XX','Thời nhà Lý','Thời Tây Sơn'],correct:1,explain:'Địa đạo Củ Chi là hệ thống đường hầm gắn với hoạt động kháng chiến trong thế kỷ XX.'},
 {level:'hard',q:'Chiến thắng Điện Biên Phủ kết thúc vào ngày nào?',a:['30/04/1975','07/05/1954','02/09/1945','19/08/1945'],correct:1,explain:'Chiến dịch Điện Biên Phủ kết thúc thắng lợi ngày 7 tháng 5 năm 1954.'},
 {level:'medium',q:'Di sản Tràng An nổi bật nhờ sự kết hợp giữa những yếu tố nào?',a:['Núi đá vôi, sông nước và di tích','Sa mạc và rạn san hô','Đồng bằng và núi lửa','Rừng ngập mặn và băng tuyết'],correct:0,explain:'Tràng An là cảnh quan karst đá vôi kết hợp sông nước, hang động và các dấu tích văn hóa – lịch sử.'}
];
let selectedHeroTag='all', selectedHistory='all', quizIndex=0, quizScore=0, quizAnswers={}, authMode='login';
const toast = (msg)=>{const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),2600)};
function navigate(page){if(!page)page='home';if(page==='admin'){$('#page-admin').classList.add('active');$$('.page').filter(p=>p.id!=='page-admin').forEach(p=>p.classList.remove('active'));}else{$$('.page').forEach(p=>p.classList.toggle('active',p.dataset.page===page));} $$('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===page));$('#mainNav').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});if(page==='map')renderMap();if(page==='heritage')renderPlaces();if(page==='heroes')renderHeroes();if(page==='history')renderHistory();if(page==='community'){renderPosts();window.viestLoadCommunity?.();}}
function handleRoute(){const raw=(location.hash||'#home').slice(1);if(raw.startsWith('place/')){const slug=decodeURIComponent(raw.slice(6));navigate('place');renderPlaceDetail(places.find(p=>slugify(p.name)===slug));return}const page=raw.split('/')[0];navigate(page==='auth'?'auth':page)}
window.addEventListener('hashchange',handleRoute);
$('#mobileMenu').addEventListener('click',()=>$('#mainNav').classList.toggle('open'));
$('#searchToggle').addEventListener('click',()=>toggleGlobalSearch());
$('#globalSearchClose').addEventListener('click',()=>toggleGlobalSearch(false));
$('#globalSearchInput').addEventListener('input',renderGlobalSearch);
$('#globalSearchInput').addEventListener('keydown',event=>{
  if(event.key==='Escape')toggleGlobalSearch(false);
  if(event.key==='Enter'){event.preventDefault();$('#globalSearchResults button')?.click()}
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#globalSearchPanel').classList.contains('hidden'))toggleGlobalSearch(false)});
const imgUrl=(id,w=700)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=82`;
function placeCard(p){return `<article class="place-card"><div class="place-photo" style="background-image:url('${imgUrl(p.img)}')"></div><div class="place-card-body"><h3>${p.name}</h3><p>⌖ ${p.province} · ${p.region}</p><p>${p.desc}</p><span class="tag">${p.type}</span><button class="text-link" data-place="${p.name}">Xem chi tiết →</button></div></article>`}
function renderPlaces(){const q=($('#heritageSearch')?.value||'').toLowerCase().trim(), region=$('#regionFilter')?.value||'all', type=$('#typeFilter')?.value||'all', province=$('#provinceFilter')?.value||'all', radio=$('input[name="regionRadio"]:checked')?.value||'all', checks=$$('.typeCheck:checked').map(x=>x.value);const filtered=places.filter(p=>(!q||(p.name+' '+p.province+' '+p.desc).toLowerCase().includes(q))&&(region==='all'||p.region===region)&&(radio==='all'||p.region===radio)&&(province==='all'||p.province===province)&&(type==='all'||p.type===type)&&(!checks.length||checks.includes(p.type)));$('#heritageGrid').innerHTML=filtered.map(placeCard).join('')||'<p class="muted">Không tìm thấy địa danh phù hợp. Hãy thử từ khóa hoặc bộ lọc khác.</p>';$('#heritageCount').textContent=`${filtered.length} địa danh`;const homePlaceCount=$('#homePlaceCount');if(homePlaceCount)homePlaceCount.textContent=String(places.length);const adminPlaces=$('#adminPlaces');if(adminPlaces)adminPlaces.textContent=String(places.length);$$('[data-place]').forEach(b=>b.addEventListener('click',()=>{const p=places.find(x=>x.name===b.dataset.place);if(p){location.hash='#place/'+slugify(p.name)}}));}
const provinceFilter=$('#provinceFilter');
if(provinceFilter){for(const province of [...new Set(places.map(place=>place.province))].sort((a,b)=>a.localeCompare(b,'vi'))){const option=document.createElement('option');option.value=province;option.textContent=province;provinceFilter.append(option)}}
['heritageSearch','regionFilter','typeFilter','provinceFilter'].forEach(id=>$('#'+id).addEventListener(id==='heritageSearch'?'input':'change',renderPlaces));$('#heritageSearchBtn').addEventListener('click',renderPlaces);$$('input[name="regionRadio"]').forEach(x=>x.addEventListener('change',renderPlaces));$$('.typeCheck').forEach(x=>x.addEventListener('change',renderPlaces));$('#clearFilters').addEventListener('click',()=>{$('#heritageSearch').value='';$('#regionFilter').value='all';$('#typeFilter').value='all';$('#provinceFilter').value='all';$('input[name="regionRadio"][value="all"]').checked=true;$$('.typeCheck').forEach(x=>x.checked=false);renderPlaces()});
function renderMap(){const pins=$('#mapPins');const allMapPlaces=[...places,{name:'Quần đảo Hoàng Sa',province:'Đà Nẵng (quản lý hành chính)',region:'Biển Đông',type:'Quần đảo',year:'',desc:'Quần đảo Hoàng Sa thuộc chủ quyền Việt Nam. Vị trí hiển thị trên bản đồ sơ đồ nhằm hỗ trợ học tập, không thể hiện tỷ lệ địa lý.',img:'photo-1500375592092-40eb2168fd21',pos:[75,37]},{name:'Quần đảo Trường Sa',province:'Khánh Hòa (quản lý hành chính)',region:'Biển Đông',type:'Quần đảo',year:'',desc:'Quần đảo Trường Sa thuộc chủ quyền Việt Nam. Vị trí hiển thị trên bản đồ sơ đồ nhằm hỗ trợ học tập, không thể hiện tỷ lệ địa lý.',img:'photo-1500375592092-40eb2168fd21',pos:[77,70]}];window.viestMapPlaces=allMapPlaces;pins.innerHTML=allMapPlaces.map((p,i)=>`<button class="map-pin" style="left:${p.pos[0]}%;top:${p.pos[1]}%" title="${p.name}" data-map="${p.name}"><span>${i+1}</span></button>`).join('');$('#mapPlaceList').innerHTML=allMapPlaces.map((p,i)=>`<button class="map-place" data-map="${p.name}"><b>${i+1}. ${p.name}</b><small style="display:block;color:#8fb5a5;margin-top:4px">${p.province}</small></button>`).join('');$$('[data-map]').forEach(b=>b.addEventListener('click',()=>selectMapPlace((window.viestMapPlaces||places).find(p=>p.name===b.dataset.map))));$('#mapSearch').oninput=()=>{$$('#mapPlaceList .map-place').forEach(b=>b.style.display=b.textContent.toLowerCase().includes($('#mapSearch').value.toLowerCase())?'block':'none')}}
function selectMapPlace(p){if(!p)return;$('#mapDetail').innerHTML=`<span class="eyebrow">ĐỊA ĐIỂM ĐƯỢC CHỌN</span><h2>${p.name}</h2><p>${p.province} · ${p.region}</p><div class="detail-photo" style="background-image:url('${imgUrl(p.img,900)}')"></div><p>${p.desc}</p><span class="tag">${p.type}</span><p class="muted">Năm ghi danh / dấu mốc: ${p.year}</p><a class="btn btn-gold" href="#heritage">Xem danh sách di sản →</a>`;$$('[data-map]').forEach(b=>b.classList.toggle('active',b.dataset.map===p.name));const list=$$('#mapPlaceList .map-place');list.forEach(b=>b.classList.toggle('active',b.dataset.map===p.name));}
function renderHeroes(){const q=($('#heroSearch')?.value||'').toLowerCase().trim();const list=heroes.filter(h=>(selectedHeroTag==='all'||h.tag===selectedHeroTag)&&(h.name+' '+h.era+' '+h.desc).toLowerCase().includes(q));$('#heroGrid').innerHTML=list.map(h=>`<article class="hero-person-card"><div class="person-photo" style="background-image:url('${imgUrl(h.img)}')"></div><span class="tag">${escapeHtml(h.tag)}</span><h3>${escapeHtml(h.name)}</h3><p class="muted">${escapeHtml(h.era)}</p><p>${escapeHtml(h.desc)}</p><button class="text-link" data-hero-open="${escapeHtml(h.name)}">Đọc tiểu sử đầy đủ →</button><div class="hero-biography hidden" data-hero-detail="${escapeHtml(h.name)}"><h4>${escapeHtml(h.name)} — dấu ấn lịch sử</h4>${(heroStories[h.name]||[h.desc]).map(paragraph=>`<p>${escapeHtml(paragraph)}</p>`).join('')}<p class="muted">Hồ sơ khái quát phục vụ khám phá; hãy đối chiếu niên đại và sự kiện với sách sử, bảo tàng hoặc nguồn nghiên cứu đáng tin cậy.</p></div></article>`).join('')||'<p class="muted">Không tìm thấy nhân vật phù hợp.</p>';$$('[data-hero-open]').forEach(b=>b.addEventListener('click',()=>{const detail=$(`[data-hero-detail="${CSS.escape(b.dataset.heroOpen)}"]`);if(!detail)return;detail.classList.toggle('hidden');b.textContent=detail.classList.contains('hidden')?'Đọc tiểu sử đầy đủ →':'Thu gọn ↑'}));const adminHeroes=$('#adminHeroes');if(adminHeroes)adminHeroes.textContent=String(heroes.length)}
$('#heroSearch').addEventListener('input',renderHeroes);$('#heroSearchBtn').addEventListener('click',renderHeroes);$$('[data-hero]').forEach(b=>b.addEventListener('click',()=>{selectedHeroTag=b.dataset.hero;$$('[data-hero]').forEach(x=>x.classList.toggle('active',x===b));renderHeroes()}));
function renderHistory(){
  const list=historyItems.filter(item=>selectedHistory==='all'||item.category===selectedHistory);
  $('#historyList').innerHTML=list.map(item=>`<article class="history-card"><div class="history-photo" style="background-image:url('${imgUrl(item.img)}')"></div><div class="history-copy"><div class="meta">${escapeHtml(item.category.toUpperCase())} · ${escapeHtml(item.date)}</div><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.desc)}</p><button class="text-link" data-history-open="${escapeHtml(item.title)}">Đọc bài đầy đủ →</button></div></article>`).join('');
  $$('[data-history-open]').forEach(button=>button.addEventListener('click',()=>{
    const item=historyItems.find(entry=>entry.title===button.dataset.historyOpen);
    const host=button.closest('.history-copy');
    if(!item||!host)return;
    let detail=host.querySelector('.history-article-detail');
    if(detail){detail.remove();button.textContent='Đọc bài đầy đủ →';return}
    detail=document.createElement('div');
    detail.className='history-article-detail';
    detail.innerHTML=`<h3>${escapeHtml(item.title)}</h3><p><b>Mốc thời gian:</b> ${escapeHtml(item.date)} · <b>Chủ đề:</b> ${escapeHtml(item.category)}</p>${(item.body||[item.desc]).map(paragraph=>`<p>${escapeHtml(paragraph)}</p>`).join('')}<p class="history-source"><b>Đọc thêm / nguồn tham khảo:</b> ${escapeHtml(item.source||'Tư liệu lịch sử và bảo tàng; cần đối chiếu nguồn học thuật khi nghiên cứu.')}</p>`;
    host.append(detail);
    button.textContent='Thu gọn ↑';
  }));
}
$$('[data-history]').forEach(b=>b.addEventListener('click',()=>{selectedHistory=b.dataset.history;$$('[data-history]').forEach(x=>x.classList.toggle('active',x===b));renderHistory()}));
function showQuestion(){const questionSet=window.activeQuestions||questions.slice(0,8);const q=questionSet[quizIndex];$('#quizStep').textContent=`Câu ${quizIndex+1}/${questionSet.length}`;$('#quizProgressBar').style.width=`${(quizIndex+1)/questionSet.length*100}%`;$('#quizQuestion').textContent=q.q;$('#quizAnswers').innerHTML=q.a.map((a,i)=>`<button class="answer ${quizAnswers[quizIndex]===i?'selected':''}" data-answer="${i}"><span>${String.fromCharCode(65+i)}</span>${a}</button>`).join('');$('#quizFeedback').textContent=quizAnswers[quizIndex]===undefined?'':(quizAnswers[quizIndex]===q.correct?'Chính xác! ':'Chưa chính xác. ')+q.explain;$$('[data-answer]').forEach(b=>b.addEventListener('click',()=>{const chosen=Number(b.dataset.answer);if(quizAnswers[quizIndex]===undefined){quizAnswers[quizIndex]=chosen;if(chosen===q.correct)quizScore+=20;}else if(quizAnswers[quizIndex]!==chosen){if(quizAnswers[quizIndex]===q.correct)quizScore-=20;if(chosen===q.correct)quizScore+=20;quizAnswers[quizIndex]=chosen;}$('#quizScore').textContent=quizScore;showQuestion()}));$('#prevQuestion').disabled=quizIndex===0;$('#nextQuestion').textContent=quizIndex===questionSet.length-1?'Xem kết quả ✓':'Tiếp theo →'}
function beginFreshQuiz(){const difficulty=$('#difficultySelect')?.value||'mixed';let pool=questions.filter(q=>difficulty==='mixed'||q.level===difficulty);if(!pool.length)pool=questions;for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}window.activeQuestions=pool.slice(0,Math.min(8,pool.length));quizIndex=0;quizScore=0;quizAnswers={};$('#quizScore').textContent='0';$('#nextQuestion').onclick=null;showQuestion();toast('Đã tạo bộ câu hỏi mới, độ khó '+(difficulty==='hard'?'nâng cao':difficulty==='medium'?'trung bình':'kết hợp')+'.')}
async function saveQuizResult(score,total){if(!viestSupabase)return;try{const {data:{session}}=await viestSupabase.auth.getSession();if(!session)return;const difficulty=$('#difficultySelect')?.value||'mixed';await fetch('/api/quiz-results',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${session.access_token}`},body:JSON.stringify({difficulty,score,total_questions:total})})}catch(e){console.info('Không lưu được lịch sử bài kiểm tra:',e.message)}}
$('#startQuiz').addEventListener('click',beginFreshQuiz);$('#resetQuiz').addEventListener('click',beginFreshQuiz);$('#prevQuestion').addEventListener('click',()=>{if(quizIndex>0){quizIndex--;showQuestion()}});$('#nextQuestion').addEventListener('click',()=>{if(quizIndex<(window.activeQuestions||questions.slice(0,8)).length-1){quizIndex++;showQuestion()}else{$('#quizFeedback').textContent=`Hoàn thành thử thách! Bạn đạt ${quizScore}/${(window.activeQuestions||questions.slice(0,8)).length*20} điểm.`;saveQuizResult(quizScore,(window.activeQuestions||questions.slice(0,8)).length);$('#nextQuestion').textContent='Làm lại ↻';$('#nextQuestion').onclick=()=>{$('#nextQuestion').onclick=null;quizIndex=0;quizScore=0;quizAnswers={};$('#quizScore').textContent='0';showQuestion()}}});showQuestion();
function renderPosts(){const host=$('#postList');if(!host)return;host.innerHTML='<p class="muted">Đang tải bài viết cộng đồng…</p>';$('#adminPosts').textContent='—'}
function escapeHtml(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
$('#publishPost').addEventListener('click',()=>window.viestPublishCommunityPost?.());

$$('[data-auth]').forEach(b=>b.addEventListener('click',()=>{authMode=b.dataset.auth;$$('[data-auth]').forEach(x=>x.classList.toggle('active',x===b));$('#nameField').classList.toggle('hidden',authMode!=='register');$('#authForm input[type="password"]').autocomplete=authMode==='register'?'new-password':'current-password';$('#authSubmit').textContent=authMode==='login'?'Đăng nhập':'Tạo tài khoản';$('#authMessage').textContent='';$('#resendConfirmation').classList.add('hidden')}));

$('#guestBtn').addEventListener('click',()=>{location.hash='#home';toast('Bạn đang tiếp tục với tư cách khách.')});
$('#visitorCount').textContent='—';$('#adminVisitors').textContent='—';$('#adminPlaces').textContent=places.length;
renderPlaces();renderMap();renderHeroes();renderHistory();renderPosts();handleRoute();

// --- VIEST detail pages, reviews, comments, Supabase auth and backend API ---
function slugify(s){return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'D').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
async function refreshPlaceReviews(placeName){
 const status=$('#reviewLoadMessage'),list=$('#reviewList');
 if(!status||!list)return;
 try{
  const response=await fetch('/api/reviews/'+encodeURIComponent(placeName));
  const result=await response.json().catch(()=>({}));
  if(!response.ok)throw new Error(result.error||'Không tải được đánh giá trực tuyến.');
  if(window.currentPlace?.name!==placeName)return;
  const reviews=Array.isArray(result.reviews)?result.reviews:[];
  list.innerHTML=reviews.length?reviews.map(review=>renderReview({name:review.display_name,rating:review.rating,text:review.comment,created_at:review.created_at})).join(''):'<p class="muted">Chưa có đánh giá. Hãy là người đầu tiên chia sẻ.</p>';
  status.textContent='';
 }catch(error){
  if(window.currentPlace?.name!==placeName)return;
  list.replaceChildren();
  status.textContent=error.message||'Không tải được đánh giá trực tuyến.';
 }
}
function renderPlaceDetail(p){
 const host=$('#placeDetailPage');
 if(!host)return;
 if(!p){host.innerHTML='<div class="page-heading"><h1>Không tìm thấy địa danh</h1><a class="btn btn-outline" href="#heritage">Quay lại thư viện</a></div>';return}
 window.currentPlace=p;
 const story=placeStories[p.name]||[p.desc];
 host.innerHTML=`<a class="place-open-link" href="#heritage">← Quay lại khám phá di sản</a><div class="place-detail-hero" style="background-image:linear-gradient(90deg,#031b1af2,#031b1a5c),url('${imgUrl(p.img,1400)}')"><div><span class="eyebrow">${escapeHtml(p.type)} · ${escapeHtml(p.region)}</span><h1>${escapeHtml(p.name)}</h1><p>${escapeHtml(p.desc)}</p><span class="tag">${escapeHtml(p.province)}</span></div></div><div class="place-detail-columns"><article class="place-detail-panel"><span class="eyebrow">HỒ SƠ ĐỊA DANH</span><h2>Câu chuyện địa danh</h2>${story.map(paragraph=>`<p>${escapeHtml(paragraph)}</p>`).join('')}<h3>Thông tin nhanh</h3><p><b>Địa phương:</b> ${escapeHtml(p.province)}<br><b>Vùng:</b> ${escapeHtml(p.region)}<br><b>Phân loại:</b> ${escapeHtml(p.type)}<br><b>Năm ghi danh / mốc tham khảo:</b> ${escapeHtml(p.year||'Chưa nêu')}</p><p class="place-source-note">Thông tin mang tính giới thiệu. Hãy đối chiếu với bảng thuyết minh tại di tích, cơ quan quản lý hoặc nguồn học thuật; giờ mở cửa và quy định có thể thay đổi.</p><a class="btn btn-outline" href="#map" onclick="sessionStorage.setItem('viest_selected_place','${escapeHtml(p.name)}')">Xem vị trí trên bản đồ →</a></article><aside class="place-detail-panel"><span class="eyebrow">CỘNG ĐỒNG VIEST</span><h2>Đánh giá và bình luận</h2><p>Chia sẻ cảm nhận hoặc góp ý về nội dung hồ sơ này.</p><form class="review-form" id="reviewForm"><label>Đánh giá của bạn<select id="reviewRating" required><option value="5">★★★★★ · Rất hữu ích</option><option value="4">★★★★☆ · Hữu ích</option><option value="3">★★★☆☆ · Bình thường</option><option value="2">★★☆☆☆ · Cần cải thiện</option><option value="1">★☆☆☆☆ · Chưa tốt</option></select></label><input id="reviewName" maxlength="80" placeholder="Tên hiển thị (không bắt buộc)"><textarea id="reviewText" maxlength="1200" required placeholder="Viết bình luận hoặc góp ý của bạn..."></textarea><button class="btn btn-gold" type="submit">Gửi đánh giá →</button><p class="form-message" id="reviewMessage" role="status"></p></form><p class="muted" id="reviewLoadMessage">Đang tải đánh giá trực tuyến…</p><div id="reviewList" class="review-list"></div></aside></div>`;
 refreshPlaceReviews(p.name);
 $('#reviewForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const item={name:$('#reviewName').value.trim()||'Người đọc VIEST',rating:Number($('#reviewRating').value),text:$('#reviewText').value.trim()};
  if(!item.text)return;
  const form=e.currentTarget,msg=$('#reviewMessage'),button=form.querySelector('button[type="submit"]');
  button.disabled=true;
  try{
   const response=await fetch('/api/reviews',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({place_name:p.name,...item})});
   const result=await response.json().catch(()=>({}));
   if(!response.ok)throw new Error(result.error||'Chưa gửi được đánh giá.');
   msg.textContent='Đánh giá đã được lưu trực tuyến.';
   form.reset();
   await refreshPlaceReviews(p.name);
  }catch(error){msg.textContent=error.message||'Chưa gửi được đánh giá. Vui lòng thử lại.'}
  finally{button.disabled=false}
 });
}
function renderReview(r){return `<article class="review-item"><small>${'★'.repeat(Math.max(1,Math.min(5,Number(r.rating)||5)))} · ${escapeHtml(r.name||'Người đọc VIEST')} · ${new Date(r.created_at||Date.now()).toLocaleDateString('vi-VN')}</small><p>${escapeHtml(r.text||'')}</p></article>`}
// Read saved map selection when entering the map page.
const originalNavigate=navigate;
navigate=function(page){if(page==='admin'){const user=JSON.parse(sessionStorage.getItem('viest_user')||'null');if(!user||user.role!=='admin'){originalNavigate('auth');toast('Khu vực quản trị yêu cầu tài khoản được cấp quyền admin.');location.hash='#auth';return}}originalNavigate(page);if(page==='admin'){(async()=>{try{const {data:{session}}=await viestSupabase.auth.getSession();if(!session)return;const r=await fetch('/api/admin/summary',{headers:{Authorization:`Bearer ${session.access_token}`}});if(!r.ok)return;const d=await r.json();$('#adminVisitors').textContent=Number(d.visits||0).toLocaleString('vi-VN');$('#adminPosts').textContent=String(d.posts??'—');$('#adminFeedback').textContent=String(d.feedback??0);$('#adminReviews').textContent=String(d.reviews??0)}catch(e){console.warn('Admin summary unavailable',e)}})()}if(page==='map'){const n=sessionStorage.getItem('viest_selected_place');if(n){setTimeout(()=>selectMapPlace((window.viestMapPlaces||places).find(p=>p.name===n)),80);sessionStorage.removeItem('viest_selected_place')}}};
// Supabase is optional until config.js is populated; secrets stay on the server.
let viestSupabase=null;
const viestAuthStorage={
  getItem(key){try{return localStorage.getItem(key) ?? sessionStorage.getItem(key)}catch{return null}},
  setItem(key,value){try{if(document.querySelector('#rememberAuth')?.checked!==false){localStorage.setItem(key,value);sessionStorage.removeItem(key)}else{sessionStorage.setItem(key,value);localStorage.removeItem(key)}}catch(err){console.warn('Không thể lưu phiên đăng nhập',err)}},
  removeItem(key){try{localStorage.removeItem(key);sessionStorage.removeItem(key)}catch{}}
};
try{
  if(window.VIEST_CONFIG?.supabaseUrl&&window.VIEST_CONFIG?.supabaseAnonKey&&!window.VIEST_CONFIG.supabaseUrl.includes('YOUR_')){
    viestSupabase=window.supabase.createClient(window.VIEST_CONFIG.supabaseUrl,window.VIEST_CONFIG.supabaseAnonKey,{
      auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storage:viestAuthStorage}
    });
  }
}catch(err){console.warn('Supabase config is not ready',err)}
if(viestSupabase){
  (async()=>{
    const status=$('#authConnectionStatus');
    try{
      const response=await fetch(`${window.VIEST_CONFIG.supabaseUrl}/auth/v1/settings`,{headers:{apikey:window.VIEST_CONFIG.supabaseAnonKey}});
      if(!response.ok)throw new Error(`HTTP ${response.status}`);
      const settings=await response.json();
      if(settings.disable_signup){
        status.textContent='Đăng nhập đã kết nối nhưng Supabase đang tắt đăng ký mới. Quản trị viên cần bật đăng ký trong Authentication → Providers.';
        status.classList.add('disconnected');
      }else if(settings.mailer_autoconfirm){
        status.textContent='Supabase Auth đã kết nối; email không cần xác nhận để kích hoạt tài khoản.';
        status.classList.add('connected');
      }else{
        status.textContent='Supabase Auth đã kết nối và yêu cầu xác nhận email. Không nhận được thư? Chủ dự án cần cấu hình Custom SMTP trong Supabase → Authentication → SMTP Settings; nút gửi lại bên dưới chỉ hoạt động sau khi SMTP gửi thư được.';
        status.classList.add('connected');
      }
    }catch(error){
      console.warn('Không kiểm tra được kết nối Supabase Auth:',error.message);
      status.textContent='Chưa kiểm tra được kết nối đăng nhập. Hãy thử tải lại và kiểm tra mạng/cấu hình Supabase.';
      status.classList.add('disconnected');
    }
  })();
}else{
  const authStatus=$('#authConnectionStatus');
  if(authStatus){authStatus.textContent='Chưa cấu hình dịch vụ đăng nhập. Kiểm tra config.js và tải lại trang.';authStatus.classList.add('disconnected')}
}

// The community feed only displays records returned by the live backend.
window.viestLoadCommunity=async function(){try{const r=await fetch('/api/community');const d=await r.json().catch(()=>({}));if(!r.ok)throw new Error(d.error||'Không tải được bài viết cộng đồng.');if(!Array.isArray(d.posts))throw new Error('Dữ liệu cộng đồng không hợp lệ.');const live=d.posts;if(!live.length){$('#postList').innerHTML='<p class="muted">Chưa có bài viết nào. Hãy đăng nhập để chia sẻ bài viết đầu tiên.</p>';$('#adminPosts').textContent='0';return}$('#postList').innerHTML=live.map((p,i)=>`<article class="post-card"><div class="post-head"><div class="avatar avatar-${i%3+1}">V</div><div><strong>Thành viên VIEST</strong><small>${escapeHtml(p.topic||'Cộng đồng VIEST')} · ${escapeHtml(new Date(p.created_at).toLocaleString('vi-VN'))}</small></div></div><p>${escapeHtml(p.content)}</p></article>`).join('');$('#adminPosts').textContent=String(live.length)}catch(err){console.error('Community feed unavailable:',err);$('#postList').innerHTML=`<p class="muted">${escapeHtml(err.message||'Không tải được bài viết cộng đồng. Hãy thử tải lại trang.')}</p>`;$('#adminPosts').textContent='—'}};
window.viestPublishCommunityPost=async function(){const content=$('#postText').value.trim();if(!content){toast('Hãy nhập nội dung trước khi đăng.');return}if(!viestSupabase){toast('Cần cấu hình Supabase và chạy website bằng npm start.');return}const {data:{session}}=await viestSupabase.auth.getSession();if(!session){toast('Bạn cần đăng nhập trước khi đăng bài.');location.hash='#auth';return}try{const r=await fetch('/api/community',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${session.access_token}`},body:JSON.stringify({topic:'Chia sẻ cộng đồng',content})});const d=await r.json();if(!r.ok)throw new Error(d.error||'Không đăng được bài');$('#postText').value='';await window.viestLoadCommunity();toast('Bài viết đã được lưu vào Supabase.')}catch(err){toast(err.message||'Không đăng được bài. Kiểm tra kết nối backend.')}};
window.viestLoadCommunity();
function viestSetAuthStatus(session){
  window.viestSession=session||null;
  window.viestCurrentUser=session?.user||null;
  const link=document.querySelector('.login-btn');
  if(link){link.textContent=session?.user?'Hồ sơ':'Đăng nhập';link.href=session?.user?'#profile':'#auth';link.setAttribute('aria-label',session?.user?'Mở hồ sơ cá nhân':'Đăng nhập hoặc đăng ký')}
  if(session?.user){
    const user=session.user;
    const safeProfile={id:user.id,email:user.email||'',role:user.app_metadata?.role==='admin'?'admin':'user'};
    try{sessionStorage.setItem('viest_user',JSON.stringify(safeProfile))}catch{}
  }else{
    try{sessionStorage.removeItem('viest_user')}catch{}
    savedArticleIds.clear();
    updateArticleSaveButtons();
  }
  if($('#page-profile')?.classList.contains('active'))setTimeout(loadProfile,0);
}
if(viestSupabase){
  viestSupabase.auth.getSession().then(({data,error})=>{
    if(error)console.warn('Không khôi phục được phiên đăng nhập:',error.message);
    viestSetAuthStatus(data?.session||null);
    if(data?.session)loadSavedIds().catch(loadError=>console.warn('Không tải được trạng thái bài đã lưu:',loadError.message));
  });
  viestSupabase.auth.onAuthStateChange((_event,session)=>{
    viestSetAuthStatus(session);
  });
}
$('#signOutButton').addEventListener('click',async()=>{
  if(!viestSupabase){toast('Chưa kết nối Supabase.');return}
  try{
    const {error}=await viestSupabase.auth.signOut();
    if(error){$('#profileMessage').textContent=`Chưa đăng xuất được: ${error.message}`;return}
    savedArticleIds.clear();
    location.hash='#auth';
  }catch(error){$('#profileMessage').textContent=`Chưa đăng xuất được: ${error.message}`}
});
$('#authForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const email=$('#authForm input[type="email"]')?.value.trim().toLowerCase()||'';
  const password=$('#authForm input[type="password"]')?.value||'';
  const msg=$('#authMessage');
  const submit=$('#authSubmit');
  if(!viestSupabase){msg.textContent='Chưa kết nối Supabase. Hãy kiểm tra URL và publishable key trong config.js.';return}
  if(!email){msg.textContent='Vui lòng nhập địa chỉ email hợp lệ.';return}
  if(password.length<6){msg.textContent='Mật khẩu cần có ít nhất 6 ký tự.';return}
  try{
    submit.disabled=true;
    msg.textContent=authMode==='register'?'Đang tạo tài khoản…':'Đang đăng nhập…';
    let result;
    if(authMode==='register'){
      const fullName=$('#authForm input[placeholder="Tên hiển thị"]')?.value?.trim()||'';
      result=await viestSupabase.auth.signUp({email,password,options:{emailRedirectTo:window.location.origin+window.location.pathname+'#auth',data:{full_name:fullName,display_name:fullName}}});
    }else{
      result=await viestSupabase.auth.signInWithPassword({email,password});
    }
    if(result.error)throw result.error;
    if(authMode==='register'&&!result.data?.session){
      $('#resendConfirmation').classList.remove('hidden');
      msg.textContent='Supabase đã nhận yêu cầu đăng ký nhưng website không thể xác nhận thư đã đến hộp thư. Kiểm tra thư rác và SMTP của dự án; hãy dùng “Gửi lại email xác nhận” sau khi SMTP đã sẵn sàng.';
    }else if(result.data?.session){
      viestSetAuthStatus(result.data.session);
      msg.textContent=authMode==='register'?'Đăng ký thành công, bạn đã đăng nhập.':'Đăng nhập thành công.';
      window.viestLoadCommunity?.();
      let pendingArticle='';
      try{pendingArticle=sessionStorage.getItem('viest_save_after_login')||'';sessionStorage.removeItem('viest_save_after_login')}catch{}
      if(pendingArticle)await toggleSavedArticle(pendingArticle);
      location.hash='#profile';
    }else{
      msg.textContent='Supabase chưa trả về phiên đăng nhập. Hãy thử lại hoặc kiểm tra cấu hình xác nhận email.';
    }
  }catch(err){
    const code=err.code||err.error_code||'';
    if(code==='email_address_invalid'){
      msg.textContent='Địa chỉ email chưa đúng định dạng. Hãy kiểm tra lại và thử lại.';
    }else if(code==='email_not_authorized'||code==='email_address_not_authorized'){
      msg.textContent='Supabase SMTP chưa được cho phép gửi tới địa chỉ này. Hãy cấu hình Custom SMTP trong Supabase → Authentication → SMTP Settings.';
      $('#resendConfirmation').classList.remove('hidden');
    }else if(code==='over_email_send_rate_limit'||code==='email_rate_limit_exceeded'){
      msg.textContent='Supabase giới hạn số email xác nhận trong thời gian ngắn. Chờ rồi thử lại; nếu email vẫn không đến, kiểm tra Custom SMTP trong Supabase.';
      $('#resendConfirmation').classList.remove('hidden');
    }else if(code==='signup_disabled'){
      msg.textContent='Dự án Supabase hiện tắt đăng ký mới. Chủ dự án cần bật đăng ký email trong Authentication → Providers.';
    }else if(code==='invalid_credentials'||code==='user_not_found'){
      msg.textContent='Email hoặc mật khẩu chưa chính xác. Nếu bạn vừa đăng ký, hãy xác nhận email trước; nếu chưa có tài khoản, chọn “Đăng ký”.';
    }else if(code==='email_not_confirmed'){
      msg.textContent='Email chưa được xác nhận. Hãy mở thư Supabase gửi, kiểm tra cả mục thư rác rồi xác nhận trước khi đăng nhập.';
      $('#resendConfirmation').classList.remove('hidden');
    }else if(code==='over_request_rate_limit'){
      msg.textContent='Bạn đã thử quá nhiều lần. Vui lòng chờ một lúc rồi thử lại.';
    }else if(code==='user_already_exists'){
      msg.textContent='Email này đã có tài khoản. Hãy chuyển sang Đăng nhập hoặc dùng “Quên mật khẩu?”.';
    }else if(/failed to fetch|networkerror/i.test(err.message||'')){
      msg.textContent='Không kết nối được dịch vụ đăng nhập. Hãy kiểm tra Internet, URL Supabase và danh sách Redirect URLs trong Supabase Authentication.';
    }else{
      msg.textContent=err.message||'Không thể xác thực tài khoản.';
    }
  }finally{
    submit.disabled=false;
  }
});
$('#resendConfirmation')?.addEventListener('click',async()=>{
  const email=$('#authForm input[type="email"]')?.value.trim().toLowerCase()||'';
  const message=$('#authMessage'),button=$('#resendConfirmation');
  if(!viestSupabase){message.textContent='Chưa kết nối Supabase.';return}
  if(!email){message.textContent='Nhập địa chỉ email dùng để đăng ký trước.';$('#authForm input[type="email"]').focus();return}
  button.disabled=true;
  message.textContent='Đang yêu cầu gửi lại email xác nhận…';
  try{
    const {error}=await viestSupabase.auth.resend({type:'signup',email,options:{emailRedirectTo:window.location.origin+window.location.pathname+'#auth'}});
    if(error)throw error;
    message.textContent='Supabase đã nhận yêu cầu gửi lại; website không thể xác nhận thư đã được chuyển phát. Kiểm tra thư rác và cấu hình Custom SMTP của dự án.';
  }catch(error){
    const code=error.code||error.error_code||'';
    message.textContent=code==='over_email_send_rate_limit'
      ?'Đã vượt giới hạn gửi email. Chờ trước khi thử lại; đồng thời xác nhận Custom SMTP đã được cấu hình.'
      :`Không gửi lại được: ${error.message||'Supabase Auth báo lỗi.'}`;
  }finally{button.disabled=false}
});
$('#forgotPassword')?.addEventListener('click',async()=>{
  const email=$('#authForm input[type="email"]')?.value.trim().toLowerCase()||'';
  const msg=$('#authMessage');
  if(!viestSupabase){msg.textContent='Chưa kết nối Supabase.';return}
  if(!email){msg.textContent='Nhập email ở ô Email trước, rồi bấm Quên mật khẩu?';return}
  try{
    const {error}=await viestSupabase.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+window.location.pathname+'#auth'});
    if(error)throw error;
    msg.textContent='Nếu email này có tài khoản, Supabase sẽ gửi hướng dẫn đặt lại mật khẩu. Hãy kiểm tra hộp thư và thư rác.';
  }catch(err){msg.textContent=err.message||'Chưa gửi được email đặt lại mật khẩu.'}
});
$('#contactForm').addEventListener('submit',async e=>{e.preventDefault();const f=e.currentTarget;const inputs=f.querySelectorAll('input,textarea');const payload={name:inputs[0].value.trim(),email:inputs[1].value.trim(),message:inputs[2].value.trim()};const out=$('#contactMessage');try{const res=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});const data=await res.json();if(!res.ok)throw new Error(data.error||'Không gửi được');out.textContent='Đã gửi phản hồi đến nhóm VIEST. Cảm ơn bạn!';f.reset()}catch(err){out.textContent='Chưa kết nối backend/email. Hãy chạy npm start và cấu hình .env; không gửi được email từ file mở trực tiếp.'}});
// Counter uses the database total only. Count at most once per browser tab session; refreshes read the stored total without incrementing it.
(async()=>{try{const counted=sessionStorage.getItem('viest_visit_counted')==='1';const r=await fetch('/api/visits',{method:counted?'GET':'POST'});if(!r.ok)throw new Error('Visit counter API unavailable');const d=await r.json();if(!counted)sessionStorage.setItem('viest_visit_counted','1');const total=Number(d.total);if(Number.isFinite(total)){const formatted=total.toLocaleString('vi-VN');$('#visitorCount').textContent=formatted;$('#adminVisitors').textContent=formatted}}catch(e){console.warn('Visit counter unavailable; showing no fabricated total.',e.message);$('#visitorCount').textContent='Chưa có dữ liệu';$('#adminVisitors').textContent='—'}})();
renderHistory();

if(viestSupabase){viestSupabase.auth.getSession().then(({data})=>viestSetAuthStatus(data?.session||null))}

// VIEST v2: expanded editorial library with individual article pages.
const editorialItems = [
 {id:'culture-hoi-an',page:'culture',category:'Di sản',title:'Phố cổ Hội An – nơi những nền văn hóa gặp nhau',desc:'Dạo qua những con phố vàng, hội quán và dấu ấn giao thương đã tạo nên diện mạo riêng của đô thị cổ.',img:'photo-1528181304800-259b08848526',read:'4 phút',body:['Hội An từng là một thương cảng quan trọng ở miền Trung, nơi nhiều cộng đồng thương nhân cùng sinh sống và giao thương. Dấu ấn ấy còn được nhận ra qua nhà cổ, hội quán, các công trình tín ngưỡng và cấu trúc phố thị.','Khi tham quan, hãy dành thời gian quan sát mặt tiền nhà cổ, tìm hiểu quy tắc bảo tồn và tôn trọng không gian sinh hoạt của cư dân địa phương. Nên kiểm tra vé tham quan, giờ mở cửa và quy định chụp ảnh từ nguồn chính thức trước chuyến đi.'],source:'UNESCO World Heritage Centre – Hội An Ancient Town; Trung tâm Bảo tồn Di sản Văn hóa Thế giới Hội An.'},
 {id:'culture-bat-trang',page:'culture',category:'Làng nghề',title:'Bát Tràng – câu chuyện được kể bằng gốm',desc:'Tìm hiểu nghề gốm truyền thống và cách nghệ nhân đưa kỹ thuật lâu đời vào sản phẩm đương đại.',img:'photo-1578749556568-bc2c40e68b61',read:'3 phút',body:['Làng gốm Bát Tràng gắn với lịch sử sản xuất gốm ở vùng ven sông Hồng. Những sản phẩm đa dạng về hình dáng, men và họa tiết phản ánh tay nghề, thị hiếu và sự thay đổi của đời sống.','Một chuyến tham quan có thể kết hợp xem sản phẩm, tìm hiểu quy trình và trải nghiệm tạo hình tại cơ sở có tổ chức. Hãy hỏi trước về chi phí trải nghiệm và xin phép trước khi chụp người làm nghề.'],source:'Tư liệu giới thiệu làng nghề và cơ sở văn hóa địa phương; cần bổ sung đường dẫn chính thức khi biên tập xuất bản.'},
 {id:'culture-food',page:'culture',category:'Ẩm thực',title:'Ẩm thực Việt: ký ức, địa phương và mùa vụ',desc:'Món ăn không chỉ là hương vị mà còn lưu giữ câu chuyện gia đình, điều kiện tự nhiên và tập quán vùng miền.',img:'photo-1555939594-58d7cb561ad1',read:'5 phút',body:['Ẩm thực Việt Nam rất đa dạng theo vùng miền, nguyên liệu, khí hậu và tập quán. Một món ăn có thể mang nhiều biến thể ở từng địa phương, vì vậy trải nghiệm ẩm thực cũng là cách tìm hiểu sự phong phú của văn hóa.','Khi giới thiệu món ăn, VIEST nên ghi rõ địa phương, nguyên liệu chính, nguồn tư liệu và tôn trọng khác biệt giữa các cách chế biến. Với khách du lịch, cần chú ý dị ứng thực phẩm và lựa chọn cơ sở bảo đảm vệ sinh.'],source:'Nội dung biên tập tổng quan; cần dẫn nguồn địa phương hoặc tài liệu chuyên ngành cho từng món cụ thể.'},
 {id:'society-genz',page:'society',category:'Giới trẻ',title:'Người trẻ và việc gìn giữ bản sắc trên không gian số',desc:'Từ video ngắn đến podcast, công nghệ mở ra cách mới để kể chuyện văn hóa nếu nội dung được kiểm chứng.',img:'photo-1529156069898-49953e39b3ac',read:'4 phút',body:['Mạng xã hội giúp các câu chuyện về di sản, ngôn ngữ, ẩm thực và phong tục tiếp cận người xem nhanh hơn. Tuy nhiên, nội dung ngắn có thể lược bỏ bối cảnh hoặc lan truyền thông tin chưa được kiểm chứng.','Một cách tiếp cận có trách nhiệm là ghi nguồn, nêu rõ thời gian và địa điểm, xin phép khi sử dụng hình ảnh cá nhân, đồng thời phân biệt trải nghiệm cá nhân với dữ kiện lịch sử.'],source:'Bài phân tích biên tập của VIEST; cần bổ sung nghiên cứu và số liệu khi nêu nhận định định lượng.'},
 {id:'society-green',page:'society',category:'Môi trường',title:'Du lịch có trách nhiệm bắt đầu từ những lựa chọn nhỏ',desc:'Giảm rác thải, tôn trọng cư dân và bảo vệ cảnh quan giúp trải nghiệm du lịch bền vững hơn.',img:'photo-1470770841072-f978cf4d019e',read:'3 phút',body:['Du lịch tạo cơ hội sinh kế và giao lưu văn hóa, đồng thời có thể gây áp lực lên môi trường và di tích nếu lượng khách vượt quá khả năng tiếp nhận. Hành vi của từng du khách góp phần định hình chất lượng điểm đến.','Bạn có thể mang bình nước cá nhân, đi theo lối được hướng dẫn, không lấy mẫu vật, không để lại rác và ưu tiên dịch vụ địa phương có trách nhiệm. Hãy tuân thủ quy định cụ thể của từng khu bảo tồn hoặc di tích.'],source:'Nguyên tắc du lịch có trách nhiệm; đối chiếu hướng dẫn của ban quản lý điểm đến trước khi áp dụng.'},
 {id:'society-city',page:'society',category:'Đời sống',title:'Thành phố thay đổi, ký ức đô thị được giữ lại ra sao?',desc:'Nhà cũ, chợ truyền thống và không gian công cộng cho thấy cách cộng đồng thích nghi với nhịp sống mới.',img:'photo-1519501025264-65ba15a82390',read:'5 phút',body:['Đô thị luôn thay đổi cùng giao thông, nhà ở, kinh tế và công nghệ. Việc bảo tồn không chỉ liên quan đến một công trình riêng lẻ mà còn gắn với ký ức cộng đồng, nghề nghiệp và không gian sinh hoạt.','Người dân có thể đóng góp bằng cách ghi lại câu chuyện gia đình, chụp ảnh có chú thích thời gian, tham gia hoạt động địa phương và tìm hiểu các dự án quy hoạch từ nguồn công khai.'],source:'Bài viết gợi mở; các trường hợp cụ thể cần dựa trên hồ sơ quy hoạch và tư liệu địa phương.'},
 {id:'travel-hue',page:'travel',category:'Lịch sử',title:'Một ngày khám phá dấu ấn cố đô Huế',desc:'Gợi ý hành trình kết hợp di tích, kiến trúc và nhịp sống địa phương, có thời gian nghỉ và di chuyển hợp lý.',img:'photo-1540611025311-01df3cef54b5',read:'Hành trình 1 ngày',body:['Buổi sáng có thể dành cho khu di tích trung tâm, tập trung tìm hiểu cấu trúc hoàng thành và các lớp lịch sử. Buổi chiều chọn một điểm văn hóa hoặc không gian ven sông để cảm nhận nhịp sống địa phương.','Đây là lịch trình tham khảo, không phải lịch trình chính thức. Kiểm tra giờ mở cửa, vé, quy định trang phục, thời tiết và thời gian di chuyển trên nguồn của đơn vị quản lý trước khi đi.'],source:'Thông tin tham quan cần được xác minh tại Trung tâm Bảo tồn Di tích Cố đô Huế và các kênh chính thức.'},
 {id:'travel-halong',page:'travel',category:'Thiên nhiên',title:'Vịnh Hạ Long: ngắm cảnh đi cùng ý thức bảo tồn',desc:'Lên kế hoạch chuyến đi biển, tìm hiểu cảnh quan karst và quy tắc bảo vệ môi trường di sản.',img:'photo-1528127269322-539801943592',read:'Hành trình 1–2 ngày',body:['Vịnh Hạ Long nổi bật với cảnh quan biển và đảo đá vôi. Trải nghiệm thường được tổ chức theo tuyến và quy định của đơn vị khai thác, vì vậy nên chọn nhà cung cấp được cấp phép.','Trước chuyến đi, hãy xác nhận lịch tàu, điều kiện thời tiết, điểm đón, dịch vụ bao gồm và chính sách hủy. Không xả rác xuống biển, không lấy sinh vật hay làm hư hại cảnh quan.'],source:'UNESCO World Heritage Centre; Ban Quản lý Di sản thế giới Vịnh Hạ Long và cơ quan du lịch địa phương.'},
 {id:'travel-craft',page:'travel',category:'Làng nghề',title:'Theo dấu làng nghề: du lịch gắn với người làm nghề',desc:'Một chuyến thăm có ý nghĩa hơn khi tìm hiểu câu chuyện người thợ, nguyên liệu và quy trình tạo tác.',img:'photo-1578749556568-bc2c40e68b61',read:'Nửa ngày',body:['Làng nghề cho du khách cơ hội hiểu quy trình tạo ra sản phẩm và những thách thức khi truyền nghề qua thế hệ. Hoạt động trải nghiệm nên được tổ chức với sự đồng thuận của nghệ nhân và cộng đồng.','Hãy đặt lịch trước nếu cần hướng dẫn, hỏi rõ phí trải nghiệm và ưu tiên mua hàng có thông tin nguồn gốc. Khi chụp ảnh nơi sản xuất, nên hỏi ý kiến người làm nghề.'],source:'Thông tin cụ thể cần xác minh với đơn vị tổ chức trải nghiệm hoặc chính quyền địa phương.'},
 {id:'event-heritage',page:'events',category:'Lễ hội',title:'Tìm hiểu lễ hội địa phương trước khi tham dự',desc:'Những điều cần biết về thời gian, nghi thức, ứng xử và nguồn tra cứu lịch tổ chức.',img:'photo-1492684223066-81342ee5ff30',read:'Cẩm nang',body:['Lễ hội là dịp cộng đồng thực hành tín ngưỡng, tưởng nhớ lịch sử hoặc duy trì tập quán. Mỗi lễ hội có bối cảnh và quy tắc riêng; không nên coi nghi thức địa phương chỉ là màn trình diễn cho khách tham quan.','Tra cứu lịch từ ban tổ chức hoặc cơ quan văn hóa, tôn trọng khu vực nghi lễ, hỏi trước khi chụp ảnh và tuân theo hướng dẫn về trang phục, an toàn và vệ sinh.'],source:'Cẩm nang biên tập; lịch cụ thể cần được xác nhận bởi đơn vị tổ chức chính thức.'},
 {id:'event-community',page:'events',category:'Cộng đồng',title:'Cùng cộng đồng gìn giữ không gian di sản',desc:'Gợi ý hoạt động tình nguyện, dọn vệ sinh, ghi chép ký ức địa phương và hỗ trợ truyền thông di sản.',img:'photo-1559027615-cd4628902d4a',read:'Gợi ý hoạt động',body:['Các hoạt động cộng đồng có thể góp phần bảo vệ môi trường, nâng cao nhận thức và lưu giữ câu chuyện địa phương. Hoạt động cần phối hợp với đơn vị quản lý, có mục tiêu rõ ràng và bảo đảm an toàn.','Nếu tham gia, hãy tìm chương trình có thông tin minh bạch, người phụ trách, quy định bảo hiểm hoặc an toàn khi cần, và cách báo cáo kết quả sau hoạt động.'],source:'Nội dung gợi ý; các chương trình cụ thể cần xác minh trực tiếp với đơn vị tổ chức.'},
 {id:'culture-water-puppetry',page:'culture',category:'Nghệ thuật',title:'Rối nước: sân khấu kể chuyện giữa mặt nước',desc:'Tìm hiểu nghệ thuật trình diễn dân gian gắn với đời sống làng quê vùng đồng bằng Bắc Bộ.',img:'photo-1516280440614-37939bbacd81',read:'6 phút',body:['Múa rối nước là loại hình sân khấu dân gian sử dụng mặt nước làm không gian biểu diễn. Con rối gỗ chuyển động nhờ hệ thống điều khiển được che khuất dưới nước; phía sau sân khấu, nghệ nhân phối hợp nhịp nhàng để tạo nên cảnh diễn.','Tích trò thường lấy chất liệu từ lao động, sinh hoạt, lễ hội và truyện dân gian. Âm nhạc truyền thống, lời dẫn và tiếng trống giúp khán giả theo dõi câu chuyện kể cả khi không có nhiều lời thoại. Mỗi phường rối có thể lưu giữ kỹ thuật và tiết mục riêng.','Khi xem biểu diễn, hãy chú ý cách sân khấu phối hợp âm thanh, ánh sáng và chuyển động thay vì chỉ nhìn nhân vật rối. Nếu muốn tìm hiểu nghề, nên hỏi đơn vị biểu diễn về lịch diễn, câu chuyện phía sau tích trò và cách cộng đồng truyền nghề cho thế hệ trẻ.'],source:'Nhà hát Múa rối Việt Nam; hồ sơ và tư liệu của cơ quan văn hóa về nghệ thuật múa rối nước.'},
 {id:'culture-tet',page:'culture',category:'Phong tục',title:'Tết Nguyên đán: ký ức gia đình và nhịp sống mới',desc:'Nhìn những phong tục ngày Tết như một thực hành văn hóa đang tiếp tục thay đổi qua từng thế hệ.',img:'photo-1512389142860-9c449e58a543',read:'5 phút',body:['Tết Nguyên đán đánh dấu thời khắc chuyển năm theo âm lịch và là dịp đoàn tụ quan trọng đối với nhiều gia đình. Dọn dẹp nhà cửa, thăm hỏi người thân, tưởng nhớ tổ tiên và chúc Tết là những thực hành phổ biến, nhưng mỗi vùng miền và gia đình có cách tổ chức khác nhau.','Mâm cỗ, món ăn và cách trang trí phản ánh điều kiện địa phương, mùa vụ cũng như ký ức gia đình. Vì vậy, không có một khuôn mẫu duy nhất đại diện cho mọi nhà. Những khác biệt trong cách đón Tết là cơ hội để tìm hiểu sự đa dạng thay vì so sánh đúng – sai.','Ngày nay, đô thị hóa, công việc và phương thức liên lạc mới khiến thói quen ngày Tết biến đổi. Một phong tục có thể được gìn giữ bằng hình thức linh hoạt, miễn là cộng đồng hiểu ý nghĩa và tự nguyện trao truyền. Hãy hỏi người lớn tuổi về câu chuyện của gia đình mình và ghi lại với sự đồng thuận của họ.'],source:'Tư liệu nghiên cứu văn hóa dân gian và bảo tàng dân tộc học; nội dung mô tả khái quát, phong tục khác nhau theo từng cộng đồng.'},
 {id:'culture-dong-ho',page:'culture',category:'Làng nghề',title:'Tranh Đông Hồ: màu sắc từ vật liệu dân gian',desc:'Khám phá cách giấy điệp, màu tự nhiên và ván khắc tạo nên một dòng tranh dân gian đặc sắc.',img:'photo-1577083552431-6e5fd01aa342',read:'5 phút',body:['Tranh dân gian Đông Hồ gắn với làng Đông Hồ, vùng Kinh Bắc xưa. Tranh được in bằng ván khắc gỗ trên giấy dó phủ điệp; các bản khắc và màu sắc được phối hợp để tạo thành hình ảnh nhiều lớp.','Đề tài có thể phản ánh sinh hoạt, chúc tụng, lịch sử và quan niệm dân gian. Hình tượng quen thuộc thường được tạo bằng nét rõ, màu phẳng và bố cục dễ nhận biết. Đằng sau vẻ giản dị là kỹ năng khắc ván, pha màu và canh bản in được tích lũy qua nhiều thế hệ.','Nghề truyền thống đối mặt với thay đổi về nhu cầu và sinh kế. Tìm hiểu tranh không chỉ là xem sản phẩm trưng bày mà còn là câu chuyện của nghệ nhân, việc truyền dạy và cách tạo ra ứng dụng mới mà vẫn tôn trọng tri thức nghề.'],source:'Bảo tàng Dân tộc học Việt Nam; hồ sơ di sản và tư liệu về tranh dân gian Đông Hồ của cơ quan văn hóa.'},
 {id:'society-language',page:'society',category:'Đời sống',title:'Tiếng Việt trên mạng: sáng tạo nhưng cần giữ ngữ cảnh',desc:'Ngôn ngữ số thay đổi nhanh; hiểu bối cảnh giúp tránh biến tiếng lóng thành định kiến về một thế hệ.',img:'photo-1521737711867-e3b97375f902',read:'5 phút',body:['Mạng xã hội tạo ra cách viết tắt, biểu tượng và tiếng lóng mới. Những cách diễn đạt này giúp người dùng thể hiện sự thân mật, hài hước hoặc bản sắc nhóm, nhưng ý nghĩa có thể thay đổi theo cộng đồng và thời điểm.','Một từ ngữ phổ biến trên mạng không tự động đại diện cho cách nói của tất cả người trẻ. Khi trích nội dung trực tuyến, hãy giữ nguyên ngữ cảnh, xin phép nếu cần và tránh suy rộng từ một bài đăng thành kết luận về cả xã hội.','Ngôn ngữ luôn biến đổi qua tiếp xúc và sáng tạo. Việc gìn giữ tiếng Việt không có nghĩa là phủ nhận đổi mới; quan trọng là lựa chọn cách diễn đạt phù hợp với người đọc, tình huống và mục đích giao tiếp.'],source:'Bài đọc gợi mở của VIEST; các nhận định ngôn ngữ học cần được đối chiếu với công trình nghiên cứu chuyên ngành.'},
 {id:'society-volunteer',page:'society',category:'Giới trẻ',title:'Tình nguyện địa phương: bắt đầu bằng việc lắng nghe',desc:'Một dự án cộng đồng bền vững cần hiểu nhu cầu thực tế và phối hợp cùng những người đang sống tại nơi đó.',img:'photo-1531482615713-2afd69097998',read:'4 phút',body:['Hoạt động tình nguyện thường được nhìn qua số giờ đóng góp hoặc số phần quà trao đi. Nhưng trước khi hành động, điều cần thiết là tìm hiểu cộng đồng đang cần gì, ai đang phối hợp và chương trình có tiếp nối sau khi nhóm rời đi hay không.','Với hoạt động tại di tích, làng nghề hoặc khu bảo tồn, cần xin phép đơn vị quản lý, tuân thủ quy trình an toàn và tránh tự ý chỉnh sửa hiện vật hay cảnh quan. Hình ảnh người tham gia nên được sử dụng có sự đồng ý.','Một hoạt động nhỏ nhưng có mục tiêu rõ, người phụ trách và cách đánh giá kết quả có thể hữu ích hơn một chiến dịch lớn thiếu kế hoạch. Người trẻ có thể đóng góp chuyên môn, truyền thông hoặc kỹ năng số theo đề nghị cụ thể của đối tác địa phương.'],source:'Nguyên tắc thực hành cộng đồng có trách nhiệm; xác minh yêu cầu với đơn vị tiếp nhận trước khi tổ chức.'},
 {id:'society-digital-heritage',page:'society',category:'Công nghệ',title:'Số hóa di sản: lưu trữ không đồng nghĩa với bảo tồn',desc:'Ảnh 3D, bản đồ số và kho tư liệu giúp tiếp cận rộng hơn, nhưng vẫn cần sự tham gia của cộng đồng.',img:'photo-1516321318423-f06f85e504b3',read:'6 phút',body:['Công nghệ có thể hỗ trợ ghi chép hiện trạng, lưu trữ tư liệu và tạo trải nghiệm tiếp cận từ xa. Mô hình 3D hay ảnh độ phân giải cao giúp người xem quan sát chi tiết mà không phải tiếp xúc trực tiếp với hiện vật.','Tuy vậy, một bản sao số không thay thế vật thể, không gian thiêng hay tri thức của người nắm giữ di sản. Việc số hóa cũng đặt ra câu hỏi về quyền sở hữu dữ liệu, quyền riêng tư và việc ai được phép ghi lại hoặc chia sẻ thực hành văn hóa.','Dự án tốt cần có kế hoạch bảo quản dữ liệu dài hạn, mô tả nguồn gốc, ghi nhận người đóng góp và chia sẻ lợi ích phù hợp với cộng đồng. Công nghệ nên phục vụ mục tiêu bảo tồn do con người xác định, không chỉ tạo hình ảnh hấp dẫn.'],source:'UNESCO – hướng dẫn về bảo vệ di sản văn hóa phi vật thể và vai trò của cộng đồng; nội dung tổng quan.'},
 {id:'travel-danang',page:'travel',category:'Lịch sử',title:'Đà Nẵng qua năm điểm dừng của ký ức',desc:'Một cung đường gợi ý nối bảo tàng, thành lũy, nghĩa trủng, cửa ải và danh thắng.',img:'photo-1500375592092-40eb2168fd21',read:'Hành trình 1 ngày',body:['Bắt đầu tại Bảo tàng Điêu khắc Chăm để tìm hiểu nghệ thuật và lịch sử Chăm Pa. Tiếp đó, ghé Thành Điện Hải để kết nối địa điểm với cuộc tấn công Đà Nẵng năm 1858. Mỗi nơi nên được dành đủ thời gian để đọc thông tin tại chỗ thay vì chỉ chụp ảnh.','Nghĩa trủng Phước Ninh là điểm dừng tưởng niệm, cần giữ thái độ trang nghiêm. Hải Vân Quan nằm trên đèo, điều kiện đường đi và thời tiết có thể thay đổi; hãy kiểm tra thông tin giao thông và giờ mở cửa trước khi khởi hành.','Ngũ Hành Sơn khép lại tuyến tham khảo với cảnh quan núi đá, chùa và hang động. Lịch trình này không tính chính xác thời gian di chuyển, vé hay giờ hoạt động. Hãy sắp xếp theo vị trí thực tế, sức khỏe của đoàn và hướng dẫn của từng ban quản lý; không xâm nhập khu vực đóng cửa.'],source:'Bảo tàng Điêu khắc Chăm; Bảo tàng Đà Nẵng; cơ quan quản lý Hải Vân Quan và Danh thắng Ngũ Hành Sơn. Lịch mở cửa cần kiểm tra trực tiếp.'},
 {id:'travel-trangan',page:'travel',category:'Thiên nhiên',title:'Tràng An: đọc cảnh quan bằng đường thủy',desc:'Tìm hiểu sự kết hợp giữa núi đá vôi, hang động, sông nước và dấu tích cư trú của con người.',img:'photo-1500530855697-b586d89ba3ee',read:'Hành trình nửa ngày',body:['Quần thể danh thắng Tràng An ở Ninh Bình được biết đến với cảnh quan karst đá vôi, thung nước và hang xuyên núi. Tuyến tham quan bằng thuyền đưa du khách đi qua các thung lũng và điểm dừng, nhưng lộ trình cụ thể phụ thuộc quy định vận hành tại thời điểm đến.','UNESCO ghi danh Tràng An là Di sản Thế giới hỗn hợp văn hóa và thiên nhiên năm 2014. Các dấu tích khảo cổ tại khu vực cho thấy con người đã thích nghi với môi trường biến đổi trong thời gian dài; đây là lý do cảnh quan cần được nhìn như một hệ thống chứ không chỉ là phông nền chụp ảnh.','Nên mặc áo phao theo hướng dẫn, không xả rác, không tự ý rời tuyến và giữ yên tĩnh tại điểm thờ tự. Trước chuyến đi hãy kiểm tra thời tiết, tình trạng tuyến và hướng dẫn dành cho người cao tuổi hoặc trẻ nhỏ.'],source:'UNESCO World Heritage Centre – Trang An Landscape Complex; Ban Quản lý Quần thể danh thắng Tràng An.'},
 {id:'travel-hue-food',page:'travel',category:'Ẩm thực',title:'Ăn Huế bằng sự tò mò và tôn trọng địa phương',desc:'Từ món ăn cung đình đến quán nhỏ, mỗi lựa chọn đều có câu chuyện riêng và biến thể theo gia đình.',img:'photo-1555939594-58d7cb561ad1',read:'Cẩm nang trải nghiệm',body:['Ẩm thực Huế thường được nhắc đến qua sự phong phú về món ăn, cách trình bày và sự giao thoa giữa nhiều tầng lớp xã hội. Những món phổ biến ngày nay có thể có lịch sử phức tạp, vì vậy nên tránh khẳng định một nguồn gốc duy nhất nếu chưa có tư liệu đáng tin cậy.','Hãy hỏi người bán về thành phần và mức cay, nhất là khi có dị ứng hoặc chế độ ăn riêng. Một món ăn có thể được nấu khác nhau giữa các gia đình; thử nhiều phiên bản là cách tìm hiểu, không phải cuộc thi xác định nơi nào “chuẩn nhất”.','Khi chia sẻ địa chỉ, nên nói rõ thời điểm trải nghiệm vì giá, giờ bán và chất lượng dịch vụ có thể thay đổi. Ưu tiên cơ sở minh bạch về vệ sinh và tôn trọng người làm nghề khi chụp ảnh, quay phim.'],source:'Cẩm nang biên tập VIEST; thông tin về cơ sở, giá và vệ sinh cần xác minh tại thời điểm tham quan.'},
 {id:'event-midautumn',page:'events',category:'Lễ hội',title:'Tết Trung thu: từ mùa trăng đến ký ức tuổi thơ',desc:'Tìm hiểu các hình thức sum họp, đồ chơi và sinh hoạt cộng đồng trong dịp rằm tháng Tám.',img:'photo-1509316785289-025f5b846b35',read:'5 phút',body:['Tết Trung thu diễn ra vào rằm tháng Tám âm lịch và được tổ chức theo nhiều cách khác nhau. Với trẻ em, đèn lồng, trò chơi và hoạt động rước đèn thường là những hình ảnh quen thuộc; ở mỗi địa phương, tập quán có thể chịu ảnh hưởng của lịch sử và điều kiện cộng đồng.','Không nên xem Trung thu chỉ là một sự kiện thương mại. Các hoạt động tại trường học, khu dân cư và gia đình tạo cơ hội để người lớn chia sẻ ký ức, làm đồ chơi thủ công và duy trì sinh hoạt chung. Một số nơi còn có hình thức nghệ thuật hoặc lễ hội riêng.','Nếu đưa trẻ tham dự sự kiện đông người, hãy thống nhất điểm hẹn, người giám sát và cách liên lạc. Kiểm tra thông tin của đơn vị tổ chức, quy định an toàn và lịch diễn cụ thể; lịch truyền thống không có nghĩa một chương trình công cộng đang diễn ra.'],source:'Tư liệu văn hóa dân gian và hướng dẫn tổ chức của đơn vị địa phương; lịch sự kiện cần xác nhận theo từng năm.'},
 {id:'event-book-fair',page:'events',category:'Học tập',title:'Ngày hội đọc sách: biến một buổi tham quan thành hành trình',desc:'Cách chọn hoạt động tại hội sách, thư viện và bảo tàng để đọc sâu hơn thay vì chỉ đi lướt qua.',img:'photo-1507842217343-583bb7270b66',read:'Cẩm nang',body:['Ngày hội sách và hoạt động thư viện thường kết hợp giới thiệu xuất bản phẩm, giao lưu tác giả và chương trình cho thiếu nhi. Mỗi sự kiện có mục đích, quy mô và quy định riêng; hãy xem trước lịch để chọn hoạt động phù hợp.','Một cách tham dự chủ động là chọn một câu hỏi trước khi đến, ghi lại tựa sách hoặc nguồn muốn tìm và dành thời gian trao đổi với người phụ trách. Sau chuyến đi, có thể chia sẻ vài điều học được thay vì chỉ đăng ảnh check-in.','Nếu đưa trẻ nhỏ đi cùng, kiểm tra khu vực hoạt động, giới hạn chỗ và cách đăng ký. Với hội sách ngoài trời, cần xem thông tin thời tiết, giao thông và quy định của đơn vị tổ chức.'],source:'Cẩm nang VIEST; lịch và thể lệ chương trình phải được xác nhận trên kênh chính thức của ban tổ chức.'},
 {id:'event-heritage-walk',page:'events',category:'Cộng đồng',title:'Đi bộ kể chuyện di sản trong khu phố',desc:'Một hoạt động nhóm có thể kết nối kiến trúc, ký ức cư dân và cách ứng xử với không gian công cộng.',img:'photo-1519608487953-e999c86e7455',read:'Gợi ý hoạt động',body:['Đi bộ kể chuyện là cách khám phá khu phố bằng quan sát chậm: nhìn mặt đứng công trình, lắng nghe tên gọi địa danh và ghi nhận cách con người sử dụng không gian. Người dẫn chuyện nên phân biệt tư liệu đã kiểm chứng với ký ức cá nhân.','Trước khi tổ chức, cần xin phép nếu sử dụng địa điểm thuộc phạm vi quản lý, chọn tuyến an toàn và hạn chế ảnh hưởng đến sinh hoạt cư dân. Không tự ý vào nhà, chụp người khác hoặc chặn lối đi để ghi hình.','Có thể kết thúc bằng một buổi ghi chép: mỗi người chọn một chi tiết, ghi thời gian và nguồn thông tin, rồi cùng đối chiếu. Kết quả nên được lưu trữ với sự đồng thuận của người chia sẻ và có thể gửi lại cho cộng đồng địa phương.'],source:'Gợi ý hoạt động biên tập VIEST; cần phối hợp với cư dân và đơn vị quản lý tại từng khu vực.'}
];
const savedArticleIds=new Set();
function savedButtonLabel(id){return savedArticleIds.has(id)?'♥ Đã lưu':'♡ Lưu bài'}
function editorialCard(x){return `<article class="editorial-card"><div class="editorial-photo" style="background-image:url('${imgUrl(x.img,850)}')"></div><div class="editorial-body"><span class="tag">${escapeHtml(x.category)}</span><h2>${escapeHtml(x.title)}</h2><p>${escapeHtml(x.desc)}</p><p class="muted">${escapeHtml(x.read||'Bài đọc')} · VIEST</p><div class="editorial-card-actions"><button class="text-link" data-article="${escapeHtml(x.id)}">Đọc câu chuyện →</button><button class="text-link article-save-button" data-save-article="${escapeHtml(x.id)}">${savedButtonLabel(x.id)}</button></div></div></article>`}
function bindEditorialActions(host){
  $$('[data-article]',host).forEach(button=>button.addEventListener('click',()=>location.hash='#article/'+button.dataset.article));
  $$('[data-save-article]',host).forEach(button=>button.addEventListener('click',()=>toggleSavedArticle(button.dataset.saveArticle)));
}
function renderHomeReading(){
  const host=$('#homeReadingGrid');
  const count=$('#homeArticleCount');
  if(count)count.textContent=String(editorialItems.length);
  if(!host)return;
  const featuredIds=['travel-danang','culture-hoi-an','society-digital-heritage'];
  host.innerHTML=featuredIds.map(id=>editorialItems.find(item=>item.id===id)).filter(Boolean).map(editorialCard).join('');
  bindEditorialActions(host);
}
function toggleGlobalSearch(open=$('#globalSearchPanel').classList.contains('hidden')){
  const panel=$('#globalSearchPanel'),button=$('#searchToggle');
  panel.classList.toggle('hidden',!open);
  button.setAttribute('aria-expanded',String(open));
  if(open){$('#globalSearchInput').focus();renderGlobalSearch()}
}
function renderGlobalSearch(){
  const host=$('#globalSearchResults'),query=$('#globalSearchInput').value.trim().toLocaleLowerCase('vi');
  if(!query){host.innerHTML='<p class="muted">Nhập từ khóa để khám phá toàn bộ thư viện VIEST.</p>';return}
  const sources=[
    ...editorialItems.map(item=>({type:'Bài đọc',title:item.title,desc:item.desc,search:`${item.title} ${item.desc} ${item.category} ${item.body.join(' ')}`,route:`#article/${item.id}`})),
    ...places.map(item=>({type:'Địa danh',title:item.name,desc:`${item.province} · ${item.type}`,search:`${item.name} ${item.province} ${item.type} ${item.desc} ${(placeStories[item.name]||[]).join(' ')}`,route:`#place/${slugify(item.name)}`})),
    ...historyItems.map(item=>({type:'Lịch sử',title:item.title,desc:`${item.date} · ${item.category}`,search:`${item.title} ${item.date} ${item.category} ${item.desc} ${(item.body||[]).join(' ')}`,route:'#history',term:item.title})),
    ...heroes.map(item=>({type:'Nhân vật',title:item.name,desc:`${item.era} · ${item.tag}`,search:`${item.name} ${item.era} ${item.tag} ${item.desc} ${(heroStories[item.name]||[]).join(' ')}`,route:'#heroes',term:item.name}))
  ];
  const matches=sources.filter(item=>item.search.toLocaleLowerCase('vi').includes(query)).slice(0,10);
  host.innerHTML=matches.length
    ?`${matches.map((item,index)=>`<button class="global-search-result" type="button" data-search-result="${index}"><span>${escapeHtml(item.type)}</span><div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.desc)}</small></div></button>`).join('')}<p class="muted">Hiển thị tối đa 10 kết quả phù hợp.</p>`
    :'<p class="muted">Chưa tìm thấy kết quả. Thử tên địa danh, sự kiện hoặc nhân vật khác.</p>';
  $$('[data-search-result]',host).forEach(button=>button.addEventListener('click',()=>{
    const item=matches[Number(button.dataset.searchResult)];
    toggleGlobalSearch(false);
    if(!item)return;
    if(item.type==='Lịch sử'){
      location.hash=item.route;
      setTimeout(()=>$$('[data-history-open]').find(entry=>entry.dataset.historyOpen===item.term)?.click(),120);
    }else if(item.type==='Nhân vật'){
      location.hash=item.route;
      setTimeout(()=>$('#heroSearch').value=item.term,100);
      setTimeout(()=>renderHeroes(),110);
      setTimeout(()=>$$('[data-hero-open]').find(entry=>entry.dataset.heroOpen===item.term)?.click(),140);
    }else location.hash=item.route;
  }));
}
function renderEditorial(page){const targetMap={culture:['cultureGrid','cultureSearch','cultureFilter'],society:['societyGrid','societySearch','societyFilter'],travel:['travelGrid','travelSearch','travelFilter'],events:['eventsGrid',null,null]};const cfg=targetMap[page];if(!cfg)return;const host=$('#'+cfg[0]);if(!host)return;const q=cfg[1]?($('#'+cfg[1]).value||'').toLowerCase().trim():'';const filter=cfg[2]?$('#'+cfg[2]).value:'all';const list=editorialItems.filter(x=>x.page===page&&(!q||(x.title+' '+x.desc+' '+x.category).toLowerCase().includes(q))&&(filter==='all'||x.category===filter));host.innerHTML=list.map(editorialCard).join('')||'<p class="muted">Không tìm thấy nội dung phù hợp. Hãy thử từ khóa hoặc bộ lọc khác.</p>';bindEditorialActions(host)}
function updateArticleSaveButtons(){const detailButton=$('#saveCurrentArticle');if(detailButton)detailButton.textContent=savedButtonLabel(detailButton.dataset.saveArticle);$$('[data-save-article]').forEach(button=>button.textContent=savedButtonLabel(button.dataset.saveArticle))}
async function toggleSavedArticle(articleId){
  const article=editorialItems.find(item=>item.id===articleId);
  if(!article)return;
  if(!viestSupabase){toast('Chưa kết nối được Supabase. Hãy kiểm tra cấu hình website.');return}
  const {data:{session},error:sessionError}=await viestSupabase.auth.getSession();
  if(sessionError){toast(`Không kiểm tra được phiên đăng nhập: ${sessionError.message}`);return}
  if(!session?.user){try{sessionStorage.setItem('viest_save_after_login',articleId)}catch{}toast('Đăng nhập để lưu bài viết vào hồ sơ của bạn.');location.hash='#auth';return}
  const alreadySaved=savedArticleIds.has(articleId);
  let result;
  try{
    const query=viestSupabase.from('saved_articles');
    result=alreadySaved
      ? await query.delete().eq('user_id',session.user.id).eq('article_id',articleId)
      : await query.insert({user_id:session.user.id,article_id:articleId});
  }catch(error){
    toast(`Không thể kết nối để lưu bài viết: ${error.message}`);
    return;
  }
  if(result.error){toast(result.error.code==='23505'?'Bài viết này đã có trong thư viện của bạn.':`Chưa lưu được bài viết: ${result.error.message}`);if(result.error.code==='23505')savedArticleIds.add(articleId)}
  else if(alreadySaved)savedArticleIds.delete(articleId);
  else savedArticleIds.add(articleId);
  updateArticleSaveButtons();
  if($('#page-profile').classList.contains('active'))await loadProfile();
}
async function loadSavedIds(){
  const {data:{session},error:sessionError}=await viestSupabase.auth.getSession();
  if(sessionError)throw sessionError;
  if(!session?.user){savedArticleIds.clear();updateArticleSaveButtons();return}
  const {data,error}=await viestSupabase.from('saved_articles').select('article_id').eq('user_id',session.user.id);
  if(error)throw error;
  savedArticleIds.clear();
  (data||[]).forEach(row=>savedArticleIds.add(row.article_id));
  updateArticleSaveButtons();
}
async function loadProfile(){
  const message=$('#profileMessage'),grid=$('#savedArticlesGrid');
  message.textContent='Đang tải hồ sơ và thư viện đã lưu…';
  grid.replaceChildren();
  if(!viestSupabase){message.textContent='Chưa kết nối Supabase. Kiểm tra cấu hình website rồi thử lại.';return}
  const {data:{session},error:sessionError}=await viestSupabase.auth.getSession();
  if(sessionError){message.textContent=`Không tải được phiên đăng nhập: ${sessionError.message}`;return}
  if(!session?.user){message.textContent='Hãy đăng nhập để xem hồ sơ cá nhân.';location.hash='#auth';return}
  const user=session.user;
  const fallbackName=user.user_metadata?.display_name||user.user_metadata?.full_name||user.email?.split('@')[0]||'Thành viên VIEST';
  let profileResult,savedResult;
  try{
    [profileResult,savedResult]=await Promise.all([
      viestSupabase.from('profiles').select('display_name').eq('id',user.id).maybeSingle(),
      viestSupabase.from('saved_articles').select('article_id,created_at').eq('user_id',user.id).order('created_at',{ascending:false})
    ]);
  }catch(error){
    message.textContent=`Không thể kết nối để tải hồ sơ: ${error.message}`;
    return;
  }
  const {data:profile,error:profileError}=profileResult;
  const {data:saved,error:savedError}=savedResult;
  $('#profileName').textContent=profile?.display_name||fallbackName;
  $('#profileEmail').textContent=user.email||'';
  $('#profileAvatar').textContent=Array.from($('#profileName').textContent.trim())[0]?.toLocaleUpperCase('vi-VN')||'V';
  if(profileError)console.warn('Không tải được hồ sơ bổ sung:',profileError.message);
  if(savedError){
    savedArticleIds.clear();
    $('#savedArticleCount').textContent='—';
    message.textContent='Chưa tải được thư viện đã lưu. Hãy áp dụng phần tạo bảng saved_articles và chính sách RLS trong supabase/schema.sql, sau đó tải lại trang.';
    updateArticleSaveButtons();
    return;
  }
  savedArticleIds.clear();
  const savedItems=(saved||[]).map(row=>editorialItems.find(item=>item.id===row.article_id)).filter(Boolean);
  savedItems.forEach(item=>savedArticleIds.add(item.id));
  $('#savedArticleCount').textContent=String(savedItems.length);
  message.textContent=profileError?'Hồ sơ được hiển thị từ thông tin tài khoản; bảng hồ sơ chưa phản hồi.':'';
  grid.innerHTML=savedItems.map(editorialCard).join('')||'<div class="profile-empty"><span>♡</span><h3>Thư viện của bạn đang chờ câu chuyện đầu tiên</h3><p>Chọn “Lưu bài” ở bất kỳ câu chuyện nào để bài viết xuất hiện tại đây.</p><a class="btn btn-gold" href="#culture">Khám phá câu chuyện →</a></div>';
  bindEditorialActions(grid);
  updateArticleSaveButtons();
}
function renderArticleDetail(id){const x=editorialItems.find(a=>a.id===id);const host=$('#articleDetail');if(!host)return;if(!x){host.innerHTML='<div class="article-detail-wrap"><h1>Không tìm thấy bài viết</h1><a class="btn btn-outline" href="#home">Về trang chủ</a></div>';return}host.innerHTML=`<div class="article-detail-wrap"><a class="place-open-link" href="#${x.page}">← Quay lại ${x.page==='culture'?'Văn hóa – Di sản':x.page==='society'?'Xã hội hôm nay':x.page==='travel'?'Du lịch & Trải nghiệm':'Sự kiện & Hoạt động'}</a><div class="article-detail-hero" style="background-image:linear-gradient(0deg,#031b1a 0%,rgba(3,27,26,.12) 100%),url('${imgUrl(x.img,1500)}')"><span class="tag">${escapeHtml(x.category)} · ${escapeHtml(x.read||'Bài đọc')}</span><h1>${escapeHtml(x.title)}</h1><p>${escapeHtml(x.desc)}</p></div><article class="article-detail-content"><p class="eyebrow">CÂU CHUYỆN VIEST</p>${x.body.map(para=>`<p>${escapeHtml(para)}</p>`).join('')}<div class="source-note"><b>Nguồn tham khảo / lưu ý biên tập:</b><br>${escapeHtml(x.source)}<br><br>Nội dung giới thiệu nhằm cung cấp thông tin khái quát. Hãy kiểm tra nguồn chính thức trước khi dùng cho nghiên cứu hoặc lên kế hoạch chuyến đi.</div><div class="article-actions"><button class="btn btn-gold" id="saveCurrentArticle" data-save-article="${escapeHtml(x.id)}">${savedButtonLabel(x.id)}</button><button class="btn btn-outline" id="shareArticle">Chia sẻ câu chuyện ↗</button><a class="btn btn-outline" href="#community">Thảo luận cộng đồng</a><a class="btn btn-outline" href="#map">Mở bản đồ khám phá</a></div></article></div>`;$('#saveCurrentArticle').addEventListener('click',()=>toggleSavedArticle(id));$('#shareArticle').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);toast('Đã sao chép liên kết bài viết.')}catch{toast('Hãy sao chép liên kết trên thanh địa chỉ để chia sẻ.')}})}
['cultureSearch','cultureFilter','societySearch','societyFilter','travelSearch','travelFilter'].forEach(id=>{const el=$('#'+id);if(el)el.addEventListener(id.endsWith('Search')?'input':'change',()=>renderEditorial(id.startsWith('culture')?'culture':id.startsWith('society')?'society':'travel'))});
const oldNavigateForEditorial=navigate;navigate=function(page){oldNavigateForEditorial(page);if(['culture','society','travel','events'].includes(page))renderEditorial(page);if(page==='profile')loadProfile();};
window.addEventListener('hashchange',()=>{const raw=(location.hash||'#home').slice(1);if(raw.startsWith('article/')){navigate('article');renderArticleDetail(raw.slice(8));}});
renderEditorial('culture');renderEditorial('society');renderEditorial('travel');renderEditorial('events');renderHomeReading();
if((location.hash||'').startsWith('#article/')){navigate('article');renderArticleDetail(location.hash.slice(9));}

const daNangQuest = [
  {
    place:'Bảo tàng Điêu khắc Chăm',
    area:'Quận Hải Châu',
    mapQuery:'Bảo tàng Điêu khắc Chăm Đà Nẵng',
    story:'Người giữ ký ức bắt đầu nơi những tượng đá kể chuyện về một vương quốc xưa.',
    riddle:'Những tác phẩm điêu khắc ở đây gắn với nền văn hóa nào của miền Trung?',
    answers:['cham','champa','van hoa cham'],
    hint:'Tên nền văn hóa cũng là tên cộng đồng đã tạo nên nhiều đền tháp và tác phẩm điêu khắc trong bộ sưu tập.',
    note:'Bảo tàng lưu giữ bộ sưu tập điêu khắc Chăm; nội dung lịch sử ở đây là điểm khởi đầu cho chuyến truy tìm.',
    fragment:'DI',
    nextClue:'Từ những pho tượng, hãy tìm đến một thành lũy bên sông Hàn, gắn với cuộc phòng thủ Đà Nẵng năm 1858.'
  },
  {
    place:'Thành Điện Hải',
    area:'Quận Hải Châu',
    mapQuery:'Di tích Thành Điện Hải Đà Nẵng',
    story:'Dấu chân kế tiếp dẫn đến thành lũy từng chứng kiến buổi đầu cuộc kháng chiến chống liên quân Pháp – Tây Ban Nha tại Đà Nẵng.',
    riddle:'Liên quân Pháp – Tây Ban Nha nổ súng tấn công Đà Nẵng vào năm nào?',
    answers:['1858'],
    hint:'Năm này mở đầu cuộc tấn công vào bán đảo Sơn Trà.',
    note:'Thành Điện Hải là di tích lịch sử gắn với cuộc kháng chiến ở Đà Nẵng từ năm 1858.',
    fragment:'SẢN',
    nextClue:'Rời thành, hãy tìm nơi yên nghỉ và tưởng niệm những người đã ngã xuống trong những năm đầu kháng chiến ở Đà Nẵng.'
  },
  {
    place:'Nghĩa trủng Phước Ninh',
    area:'Quận Hải Châu',
    mapQuery:'Nghĩa trủng Phước Ninh Đà Nẵng',
    story:'Tấm bia không kể chiến công của riêng ai; nơi đây nhắc người đi đường nhớ đến những người đã hy sinh.',
    riddle:'Nghĩa trủng là nơi tưởng niệm những ai đã hy sinh trong buổi đầu kháng chiến tại Đà Nẵng?',
    answers:['nghia si','si tu','chien si','nhung nguoi hy sinh'],
    hint:'Hãy gọi tên những người chiến đấu và ngã xuống vì quê hương.',
    note:'Nghĩa trủng Phước Ninh là địa điểm tưởng niệm nghĩa sĩ; hãy giữ sự tôn nghiêm khi tham quan.',
    fragment:'LÀ',
    nextClue:'Mật thư rời phố, hướng lên cửa ải trên đèo cao, nơi nhìn ra biển và từng được xây dựng dưới triều Nguyễn.'
  },
  {
    place:'Hải Vân Quan',
    area:'Đèo Hải Vân',
    mapQuery:'Hải Vân Quan Đà Nẵng',
    story:'Trên đỉnh đèo, cánh cửa đá nối hai miền và giữ lại dấu ấn phòng thủ của triều Nguyễn.',
    riddle:'Hải Vân Quan được xây dựng dưới triều vị vua Nguyễn nào?',
    answers:['minh mang','minh mang de'],
    hint:'Vị vua này trị vì từ năm 1820 đến 1841; cửa quan được xây vào năm 1826.',
    note:'Hải Vân Quan là công trình phòng thủ trên đèo Hải Vân, được xây dựng dưới triều Minh Mạng.',
    fragment:'KÝ ỨC',
    nextClue:'Chặng cuối đưa bạn đến quần thể năm ngọn núi mang tên năm yếu tố: Kim, Mộc, Thủy, Hỏa, Thổ.'
  },
  {
    place:'Danh thắng Ngũ Hành Sơn',
    area:'Quận Ngũ Hành Sơn',
    mapQuery:'Danh thắng Ngũ Hành Sơn Đà Nẵng',
    story:'Năm ngọn núi khép lại hành trình. Dưới bóng núi, mảnh cuối cùng chờ người biết nhìn kho báu bằng sự thấu hiểu.',
    riddle:'Tên danh thắng này nhắc đến bao nhiêu ngọn núi, tương ứng với Kim – Mộc – Thủy – Hỏa – Thổ?',
    answers:['5','nam','nam ngon nui','ngu hanh'],
    hint:'Hãy đếm số yếu tố trong thuyết Ngũ hành.',
    note:'Ngũ Hành Sơn là danh thắng gồm năm ngọn núi đá vôi mang tên Kim, Mộc, Thủy, Hỏa và Thổ.',
    fragment:'ĐANG SỐNG',
    nextClue:'Bạn đã ghép đủ năm mảnh mật thư.'
  }
];
const questStorageKey='viest_da_nang_quest_v1';
function readQuestState(){
  try{
    const stored=JSON.parse(localStorage.getItem(questStorageKey)||'null');
    if(!stored||!Array.isArray(stored.solved))return {current:0,solved:daNangQuest.map(()=>false)};
    return {current:Math.max(0,Math.min(daNangQuest.length-1,Number(stored.current)||0)),solved:daNangQuest.map((_,i)=>stored.solved[i]===true)};
  }catch(error){
    console.warn('Không đọc được tiến độ hành trình trên thiết bị này.',error);
    return {current:0,solved:daNangQuest.map(()=>false)};
  }
}
let questState=readQuestState();
function saveQuestState(){
  try{localStorage.setItem(questStorageKey,JSON.stringify(questState));return true}
  catch(error){console.warn('Không thể lưu tiến độ hành trình trên thiết bị này.',error);toast('Không thể lưu tiến độ trên trình duyệt này.');return false}
}
function normalizeQuestAnswer(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/Đ/g,'d').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
}
function renderQuest(){
  const panel=$('#questPlay'),progress=$('#questProgress');
  if(!panel||!progress)return;
  const unlocked=questState.solved.findIndex(solved=>!solved);
  const lastUnlocked=unlocked<0?daNangQuest.length-1:unlocked;
  progress.innerHTML=daNangQuest.map((stage,index)=>`<button class="quest-progress-step ${index===questState.current?'active':''} ${questState.solved[index]?'solved':''}" data-quest-stage="${index}" ${index>lastUnlocked?'disabled':''}><span>${questState.solved[index]?'✓':String(index+1).padStart(2,'0')}</span><b>${escapeHtml(stage.place)}</b><small>${questState.solved[index]?`Mảnh mật thư: ${escapeHtml(stage.fragment)}`:index===questState.current?'Đang khám phá':'Chưa mở khóa'}</small></button>`).join('');
  $$('[data-quest-stage]',progress).forEach(button=>button.addEventListener('click',()=>{questState.current=Number(button.dataset.questStage);renderQuest()}));
  const index=questState.current,stage=daNangQuest[index],done=questState.solved[index];
  const allSolved=questState.solved.length===daNangQuest.length&&questState.solved.every(Boolean);
  const secret=daNangQuest.map(item=>item.fragment).join(' ');
  panel.innerHTML=`<div class="quest-stage-kicker">CHẶNG ${String(index+1).padStart(2,'0')} / ${daNangQuest.length}<span>${Math.round((questState.solved.filter(Boolean).length/daNangQuest.length)*100)}% hoàn thành</span></div><div class="quest-stage-heading"><span class="quest-stage-number">${String(index+1).padStart(2,'0')}</span><div><span class="eyebrow">${escapeHtml(stage.area)}</span><h2>${escapeHtml(stage.place)}</h2></div></div><p class="quest-story">${escapeHtml(stage.story)}</p><div class="quest-riddle"><span class="eyebrow">MẬT MÃ CỦA CHẶNG</span><p>${escapeHtml(stage.riddle)}</p>${done?`<div class="quest-answer-success">✓ Chính xác — mảnh mật thư: <strong>${escapeHtml(stage.fragment)}</strong></div>`:`<form id="questAnswerForm" class="quest-answer-form"><label for="questAnswer">Nhập câu trả lời</label><div><input id="questAnswer" autocomplete="off" maxlength="80" placeholder="Gõ câu trả lời tại đây..." required><button class="btn btn-gold" type="submit">Giải mã →</button></div><button class="quest-hint-button" type="button" id="questHint">Mở gợi ý</button><p class="quest-hint hidden" id="questHintText">${escapeHtml(stage.hint)}</p><p class="quest-feedback" id="questFeedback" role="status"></p></form>`}</div><div class="quest-stage-note"><b>Ghi nhớ lịch sử</b><p>${escapeHtml(stage.note)}</p></div><div class="quest-stage-actions"><a class="btn btn-outline" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stage.mapQuery)}" target="_blank" rel="noopener noreferrer">Tìm địa điểm trên bản đồ ↗</a>${done&&index<daNangQuest.length-1?'<button class="btn btn-gold" id="questNext">Đi theo manh mối kế tiếp →</button>':''}${done&&index>0?'<button class="btn btn-outline" id="questPrevious">← Xem chặng trước</button>':''}</div>${allSolved?`<div class="quest-final-secret"><span class="eyebrow">BÍ MẬT Ở CHẶNG CUỐI</span><h2>Kho báu không phải vàng bạc.</h2><p>Năm mảnh ghép thành lời nhắn:</p><strong>“${escapeHtml(secret)}.”</strong><p>Di sản không nằm im trong quá khứ — nó sống trong cách chúng ta tìm hiểu, gìn giữ và kể tiếp câu chuyện hôm nay.</p><a class="btn btn-gold" href="#history">Tiếp tục khám phá lịch sử →</a></div>`:''}`;
  const form=$('#questAnswerForm');
  if(form)form.addEventListener('submit',event=>{
    event.preventDefault();
    const answer=normalizeQuestAnswer($('#questAnswer').value);
    const accepted=stage.answers.map(normalizeQuestAnswer);
    const feedback=$('#questFeedback');
    if(!accepted.includes(answer)){feedback.textContent='Chưa đúng. Thử nghĩ lại về câu chuyện của địa điểm này hoặc mở gợi ý.';feedback.classList.add('is-error');return}
    questState.solved[index]=true;
    saveQuestState();
    renderQuest();
    toast(`Đã mở mảnh mật thư: ${stage.fragment}`);
  });
  $('#questHint')?.addEventListener('click',()=>{$('#questHintText').classList.toggle('hidden');$('#questHint').textContent=$('#questHintText').classList.contains('hidden')?'Mở gợi ý':'Ẩn gợi ý'});
  $('#questNext')?.addEventListener('click',()=>{questState.current=Math.min(index+1,daNangQuest.length-1);saveQuestState();renderQuest()});
  $('#questPrevious')?.addEventListener('click',()=>{questState.current=Math.max(index-1,0);renderQuest()});
  $('#questReset')?.addEventListener('click',()=>{questState={current:0,solved:daNangQuest.map(()=>false)};saveQuestState();renderQuest();toast('Đã bắt đầu lại hành trình.')});
}
window.addEventListener('hashchange',()=>{if(location.hash==='#quest')renderQuest()});
if(location.hash==='#quest')renderQuest();
