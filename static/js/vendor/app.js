let data = [];
const results = document.querySelector("#results");

function add_screen(input_data) {
  data.push(input_data);
}

function display() {
  for (var i = 0; i < data.length; i++) {
    const elem = document.createElement("p");
    elem.innerText = data[i];
    results.appendChild(elem);
  }
}

let location_data = {
  "Ba Đình": {
    "Cống Vị": {
      "Kim Mã Thượng": {
        latitude: 21.0358105,
        longitude: 105.8136389,
      },
      "Linh Lang": {
        latitude: 21.035442,
        longitude: 105.810484,
      },
      "Liễu Giai": {
        latitude: 21.033932,
        longitude: 105.813901,
      },
      "Nguyễn Văn Ngọc": {
        latitude: 21.031931,
        longitude: 105.8107566,
      },
      "Phan Kế Bính": {
        latitude: 21.035625,
        longitude: 105.8086653,
      },
      "Đào Tấn": {
        latitude: 21.032496,
        longitude: 105.809125,
      },
      "Đường Bưởi": {
        latitude: 21.0400412,
        longitude: 105.8069923,
      },
      "Đội Cấn": {
        latitude: 21.037872,
        longitude: 105.813652,
      },
    },
    "Điện Biên": {
      "Bắc Sơn": {
        latitude: 21.0357762,
        longitude: 105.8384929,
      },
      "Cao Bá Quát": {
        latitude: 21.030443,
        longitude: 105.838478,
      },
      "Chu Văn An": {
        latitude: 21.032017,
        longitude: 105.836387,
      },
      "Chùa Một Cột": {
        latitude: 21.035184,
        longitude: 105.834895,
      },
      "Hoàng Diệu": {
        latitude: 21.033281,
        longitude: 105.838907,
      },
      "Hùng Vương": {
        latitude: 21.039124,
        longitude: 105.83573,
      },
      "Khúc Hạo": {
        latitude: 21.031475,
        longitude: 105.837179,
      },
      "Lê Duẩn": {
        latitude: 21.029576,
        longitude: 105.841566,
      },
      "Lê Hồng Phong": {
        latitude: 21.033831,
        longitude: 105.835668,
      },
      "Lê Trực": {
        latitude: 21.032171,
        longitude: 105.8330541,
      },
      "Nguyễn Thái Học": {
        latitude: 21.031342,
        longitude: 105.832744,
      },
      "Nguyễn Tri Phương": {
        latitude: 21.036412,
        longitude: 105.841179,
      },
      "Sơn Tây": {
        latitude: 21.032898,
        longitude: 105.830727,
      },
      "Trần Phú": {
        latitude: 21.0315459,
        longitude: 105.8359866,
      },
      "Tôn Thất Thịêp": {
        latitude: 21.0328873,
        longitude: 105.8434293,
      },
      "Tôn Thất Đảm": {
        latitude: 21.035562,
        longitude: 105.837954,
      },
      "Yên Thế": {
        latitude: 21.0287727,
        longitude: 105.8394513,
      },
      "Ông Ích Khiêm": {
        latitude: 21.0333111,
        longitude: 105.8335649,
      },
      "Điện Biên Phủ": {
        latitude: 21.033317,
        longitude: 105.838527,
      },
      "Độc Lập": {
        latitude: 21.036299,
        longitude: 105.8364681,
      },
    },
    "Đội Cấn": {
      "Chùa Một Cột": {
        latitude: 21.035184,
        longitude: 105.834895,
      },
      "Giang Văn Minh": {
        latitude: 21.032555,
        longitude: 105.827047,
      },
      "Ngọc Hà": {
        latitude: 21.037118,
        longitude: 105.831096,
      },
      "Thanh Bảo": {
        latitude: 21.033365,
        longitude: 105.831341,
      },
      "Ông Ích Khiêm": {
        latitude: 21.0333111,
        longitude: 105.8335649,
      },
      "Đội Cấn": {
        latitude: 21.037872,
        longitude: 105.813652,
      },
    },
    "Giảng Võ": {
      "Giảng Võ": {
        latitude: 21.0279146,
        longitude: 105.8248144,
      },
      "Kim Mã": {
        latitude: 21.029744,
        longitude: 105.810345,
      },
      "Nam Cao": {
        latitude: 21.029937,
        longitude: 105.822153,
      },
      "Nguyễn Công Hoan": {
        latitude: 21.027053,
        longitude: 105.815255,
      },
      "Ngọc Khánh": {
        latitude: 21.026992,
        longitude: 105.8178,
      },
      "Núi Trúc": {
        latitude: 21.030257,
        longitude: 105.822542,
      },
      "Trần Huy Liệu": {
        latitude: 21.029485,
        longitude: 105.820778,
      },
    },
    "Kim Mã": {
      "Giang Văn Minh": {
        latitude: 21.032555,
        longitude: 105.827047,
      },
      "Giảng Võ": {
        latitude: 21.0279146,
        longitude: 105.8248144,
      },
      "Kim Mã": {
        latitude: 21.029744,
        longitude: 105.810345,
      },
      "Nguyễn Thái Học": {
        latitude: 21.031342,
        longitude: 105.832744,
      },
      "Núi Trúc": {
        latitude: 21.030257,
        longitude: 105.822542,
      },
      "Sơn Tây": {
        latitude: 21.032898,
        longitude: 105.830727,
      },
      "Trần Phú": {
        latitude: 21.0315459,
        longitude: 105.8359866,
      },
      "Vạn Phúc": {
        latitude: 21.033443,
        longitude: 105.815811,
      },
    },
    "Liễu Giai": {
      "Hoàng Hoa Thám": {
        latitude: 21.042223,
        longitude: 105.817208,
      },
      "Quần Ngựa": {
        latitude: 21.0411671,
        longitude: 105.815656,
      },
      "Văn Cao": {
        latitude: 21.039291,
        longitude: 105.815827,
      },
      "Vạn Bảo": {
        latitude: 21.03375,
        longitude: 105.817069,
      },
      "Đốc Ngữ": {
        latitude: 21.039894,
        longitude: 105.812921,
      },
      "Đội Cấn": {
        latitude: 21.037872,
        longitude: 105.813652,
      },
    },
    "Ngọc Hà": {
      "Dốc Lapho": {
        latitude: 21.039839,
        longitude: 105.8288689,
      },
      "Hoàng Hoa Thám": {
        latitude: 21.042223,
        longitude: 105.817208,
      },
      "Ngọc Hà": {
        latitude: 21.037118,
        longitude: 105.831096,
      },
    },
    "Ngọc Khánh": {
      "Cầu Giấy": {
        latitude: 21.0299181,
        longitude: 105.8022467,
      },
      "Kim Mã": {
        latitude: 21.029744,
        longitude: 105.810345,
      },
      "La Thành": {
        latitude: 21.027822,
        longitude: 105.808423,
      },
      "Liễu Giai": {
        latitude: 21.033932,
        longitude: 105.813901,
      },
      "Nguyễn Chí Thanh": {
        latitude: 21.028696,
        longitude: 105.812612,
      },
      "Nguyễn Công Hoan": {
        latitude: 21.027053,
        longitude: 105.815255,
      },
      "Nguyễn Văn Ngọc": {
        latitude: 21.031931,
        longitude: 105.8107566,
      },
      "Ngọc Khánh": {
        latitude: 21.026992,
        longitude: 105.8178,
      },
      "Phạm Huy Thông": {
        latitude: 21.027946,
        longitude: 105.810061,
      },
      "Vạn Bảo": {
        latitude: 21.03375,
        longitude: 105.817069,
      },
      "Vạn Phúc": {
        latitude: 21.033443,
        longitude: 105.815811,
      },
      "Đào Tấn": {
        latitude: 21.032496,
        longitude: 105.809125,
      },
      "Đường Bưởi": {
        latitude: 21.0400412,
        longitude: 105.8069923,
      },
    },
    "Nguyễn Trung Trực": {
      "Hàng Bún": {
        latitude: 21.042302,
        longitude: 105.845282,
      },
      "Hàng Than": {
        latitude: 21.0419084,
        longitude: 105.8472478,
      },
      "Hòe Nhai": {
        latitude: 21.040515,
        longitude: 105.845575,
      },
      "Hồng Hà": {
        latitude: 21.04578,
        longitude: 105.84523,
      },
      "Hồng Phúc": {
        latitude: 21.041224,
        longitude: 105.8482088,
      },
      "Nguyễn Khắc Nhu": {
        latitude: 21.044486,
        longitude: 105.844705,
      },
      "Nguyễn Thiếp": {
        latitude: 21.0406171237787,
        longitude: 105.849190862503,
      },
      "Nguyễn Trung Trực": {
        latitude: 21.041096,
        longitude: 105.848312,
      },
      "Nguyễn Trường Tộ": {
        latitude: 21.042804,
        longitude: 105.8442478,
      },
      "Phan Huy Ích": {
        latitude: 21.041602,
        longitude: 105.84582,
      },
      "Phạm Hồng Thái": {
        latitude: 21.043752,
        longitude: 105.844675,
      },
      "Yên Phụ": {
        latitude: 21.04683,
        longitude: 105.843625,
      },
    },
    "Phúc Xá": {
      "An Xá": {
        latitude: 21.043399,
        longitude: 105.851635,
      },
      "Hồng Hà": {
        latitude: 21.04578,
        longitude: 105.84523,
      },
      "Nghĩa Dũng": {
        latitude: 21.046775,
        longitude: 105.848575,
      },
      "Phúc Xá": {
        latitude: 21.044582,
        longitude: 105.849836,
      },
      "Tân Ấp": {
        latitude: 21.046638,
        longitude: 105.846859,
      },
    },
    "Quán Thánh": {
      "Cửa Bắc": {
        latitude: 21.044374,
        longitude: 105.84308,
      },
      "Hoàng Diệu": {
        latitude: 21.033281,
        longitude: 105.838907,
      },
      "Hoàng Văn Thụ": {
        latitude: 21.038755,
        longitude: 105.837506,
      },
      "Hàng Bún": {
        latitude: 21.042302,
        longitude: 105.845282,
      },
      "Hòe Nhai": {
        latitude: 21.040515,
        longitude: 105.845575,
      },
      "Hùng Vương": {
        latitude: 21.039124,
        longitude: 105.83573,
      },
      "Nguyễn Biểu": {
        latitude: 21.042215,
        longitude: 105.840111,
      },
      "Nguyễn Cảnh Chân": {
        latitude: 21.039198,
        longitude: 105.837589,
      },
      "Nguyễn Tri Phương": {
        latitude: 21.036412,
        longitude: 105.841179,
      },
      "Phan Đình Phùng": {
        latitude: 21.039853,
        longitude: 105.845925,
      },
      "Quán Thánh": {
        latitude: 21.042249,
        longitude: 105.84319,
      },
      "Trấn Vũ": {
        latitude: 21.044309,
        longitude: 105.841698,
      },
      "Yên Ninh": {
        latitude: 21.042799,
        longitude: 105.84428,
      },
      "Đặng Tất": {
        latitude: 21.0431275,
        longitude: 105.8380524,
      },
    },
    "Thành Công": {
      "Láng Hạ": {
        latitude: 21.019169,
        longitude: 105.816633,
      },
      "Mai Anh Tuấn": {
        latitude: 21.0186804,
        longitude: 105.818625,
      },
      "Nguyên Hồng": {
        latitude: 21.020429,
        longitude: 105.812246,
      },
      "Thành Công": {
        latitude: 21.021859,
        longitude: 105.815789,
      },
    },
    "Trúc Bạch": {
      "Châu Long": {
        latitude: 21.04459,
        longitude: 105.842387,
      },
      "Cửa Bắc": {
        latitude: 21.044374,
        longitude: 105.84308,
      },
      "Lạc Chính": {
        latitude: 21.0457805,
        longitude: 105.8414921,
      },
      "Mạc Đĩnh Chi": {
        latitude: 21.046506,
        longitude: 105.840694,
      },
      "Nam Tràng": {
        latitude: 21.046422,
        longitude: 105.840318,
      },
      "Nguyễn Khắc Hiếu": {
        latitude: 21.045772,
        longitude: 105.840983,
      },
      "Nguyễn Khắc Nhu": {
        latitude: 21.044486,
        longitude: 105.844705,
      },
      "Nguyễn Trường Tộ": {
        latitude: 21.042804,
        longitude: 105.8442478,
      },
      "Ngũ Xã": {
        latitude: 21.046223,
        longitude: 105.841721,
      },
      "Phạm Hồng Thái": {
        latitude: 21.043752,
        longitude: 105.844675,
      },
      "Thanh Niên": {
        latitude: 21.04765,
        longitude: 105.83759,
      },
      "Trúc Bạch": {
        latitude: 21.0465951,
        longitude: 105.8420227,
      },
      "Trấn Vũ": {
        latitude: 21.044309,
        longitude: 105.841698,
      },
      "Yên Ninh": {
        latitude: 21.042799,
        longitude: 105.84428,
      },
      "Yên Phụ": {
        latitude: 21.04683,
        longitude: 105.843625,
      },
      "Đặng Dung": {
        latitude: 21.0430203,
        longitude: 105.8414638,
      },
    },
    "Vĩnh Phúc": {
      "Hoàng Hoa Thám": {
        latitude: 21.042223,
        longitude: 105.817208,
      },
      "Linh Lang": {
        latitude: 21.035442,
        longitude: 105.810484,
      },
      "Lạc Long Quân": {
        latitude: 21.046841,
        longitude: 105.806168,
      },
      "Vĩnh Phúc": {
        latitude: 21.044081,
        longitude: 105.810178,
      },
      "Đường Bưởi": {
        latitude: 21.0400412,
        longitude: 105.8069923,
      },
      "Đốc Ngữ": {
        latitude: 21.039894,
        longitude: 105.812921,
      },
      "Đội Cấn": {
        latitude: 21.037872,
        longitude: 105.813652,
      },
    },
  },
  "Ba Vì": {
    "Ba Trại": {
      "Đt 86": {
        latitude: 21.1325959,
        longitude: 105.3417395,
      },
      "Đt 87a": {
        latitude: 21.1172258,
        longitude: 105.3664486,
      },
      "Đt 91": {
        latitude: 21.162175,
        longitude: 105.3857662,
      },
    },
    "Ba Vì": {
      "Ao Vua": {
        latitude: 21.0954474,
        longitude: 105.3742705,
      },
      "Đt 422": {
        latitude: 21.0953814,
        longitude: 105.328927,
      },
    },
    "Cẩm Lĩnh": {
      "Đt 91": {
        latitude: 21.162175,
        longitude: 105.3857662,
      },
    },
    "Cam Thượng": {
      "Quốc Lộ 32": {
        latitude: 21.224442,
        longitude: 105.38402,
      },
    },
    "Chu Minh": {
      "Quốc Lộ 32": {
        latitude: 21.224442,
        longitude: 105.38402,
      },
    },
    "Cổ Đô": {
      "Đt 93": {
        latitude: 21.2482058,
        longitude: 105.3831202,
      },
    },
    "Đông Quang": {
      "Quốc Lộ 32": {
        latitude: 21.224442,
        longitude: 105.38402,
      },
      "Đt 90": {
        latitude: 21.172101,
        longitude: 105.4256926,
      },
    },
    "Đồng Thái": {
      "Quốc Lộ 32": {
        latitude: 21.224442,
        longitude: 105.38402,
      },
      "Đt 411c": {
        latitude: 21.211824,
        longitude: 105.3634224,
      },
      "Đt 93": {
        latitude: 21.2482058,
        longitude: 105.3831202,
      },
    },
    "Khánh Thượng": {
      "Đt 414": {
        latitude: 21.0594114,
        longitude: 105.3000564,
      },
      "Đt 415": {
        latitude: 21.0514014,
        longitude: 105.3223723,
      },
    },
    "Minh Quang": {
      "Đt 414": {
        latitude: 21.0594114,
        longitude: 105.3000564,
      },
      "Đt 415": {
        latitude: 21.0514014,
        longitude: 105.3223723,
      },
      "Đt 422": {
        latitude: 21.0953814,
        longitude: 105.328927,
      },
      "Đt 87a": {
        latitude: 21.1172258,
        longitude: 105.3664486,
      },
    },
    "Phong Vân": {
      "Đt 93": {
        latitude: 21.2482058,
        longitude: 105.3831202,
      },
    },
    "Phú Đông": {
      "Đt 93": {
        latitude: 21.2482058,
        longitude: 105.3831202,
      },
    },
    "Phú Sơn": {
      "Quốc Lộ 32": {
        latitude: 21.224442,
        longitude: 105.38402,
      },
      "Đt 411c": {
        latitude: 21.211824,
        longitude: 105.3634224,
      },
      "Đt 92": {
        latitude: 21.1935708,
        longitude: 105.3132663,
      },
    },
    "Sơn Đà": {
      "Đt 92": {
        latitude: 21.1935708,
        longitude: 105.3132663,
      },
    },
    "Tản Lĩnh": {
      "Ao Vua": {
        latitude: 21.0954474,
        longitude: 105.3742705,
      },
      "Đt 87": {
        latitude: 21.072603,
        longitude: 105.4325725,
      },
      "Đt 87a": {
        latitude: 21.1172258,
        longitude: 105.3664486,
      },
    },
    "Tây Đằng": {
      "Quốc Lộ 32": {
        latitude: 21.224442,
        longitude: 105.38402,
      },
    },
    "Thái Hòa": {
      "Quốc Lộ 32": {
        latitude: 21.224442,
        longitude: 105.38402,
      },
    },
    "Thuần Mỹ": {
      "Đt 86": {
        latitude: 21.1325959,
        longitude: 105.3417395,
      },
      "Đt 92": {
        latitude: 21.1935708,
        longitude: 105.3132663,
      },
    },
    "Thụy An": {
      "Đt 423": {
        latitude: 21.1524747,
        longitude: 105.4221496,
      },
      "Đt 90": {
        latitude: 21.172101,
        longitude: 105.4256926,
      },
      "Đt 91": {
        latitude: 21.162175,
        longitude: 105.3857662,
      },
    },
    "Tiên Phong": {
      "Đt 90": {
        latitude: 21.172101,
        longitude: 105.4256926,
      },
    },
    "Tòng Bạt": {
      "Đt 92": {
        latitude: 21.1935708,
        longitude: 105.3132663,
      },
    },
    "Vân Hòa": {
      "Vân Hòa": {
        latitude: 21.0668071,
        longitude: 105.412629,
      },
      "Đt 87": {
        latitude: 21.072603,
        longitude: 105.4325725,
      },
    },
    "Vạn Thắng": {
      "Đt 93": {
        latitude: 21.2482058,
        longitude: 105.3831202,
      },
    },
    "Vật Lại": {
      "Quốc Lộ 32": {
        latitude: 21.224442,
        longitude: 105.38402,
      },
      "Đt 411c": {
        latitude: 21.211824,
        longitude: 105.3634224,
      },
    },
    "Yên Bài": {
      "Hòa Lạc Hòa Bình": {
        latitude: 21.0131089,
        longitude: 105.4612438,
      },
      "Yên Bài": {
        latitude: 21.0384519,
        longitude: 105.429277,
      },
      "Đt 87": {
        latitude: 21.072603,
        longitude: 105.4325725,
      },
    },
  },
  "Bắc Từ Liêm": {
    "Cổ Nhuế 1": {
      "Hoàng Quốc Việt": {
        latitude: 21.0462501,
        longitude: 105.7870461,
      },
      "Phan Bá Vành": {
        latitude: 21.05555,
        longitude: 105.773303,
      },
      "Phạm Văn Đồng": {
        latitude: 21.078572,
        longitude: 105.787727,
      },
      "Trần Cung": {
        latitude: 21.055241,
        longitude: 105.785835,
      },
      "Đặng Thùy Trâm": {
        latitude: 21.045026,
        longitude: 105.784363,
      },
    },
    "Cổ Nhuế 2": {
      "Bờ Tây Sông Nhuệ": {
        latitude: 21.07929,
        longitude: 105.770944,
      },
      "Cổ Nhuế": {
        latitude: 21.065107,
        longitude: 105.779439,
      },
      "Nguyễn Đình Tứ": {
        latitude: 21.073242,
        longitude: 105.7841693,
      },
      "Phan Bá Vành": {
        latitude: 21.05555,
        longitude: 105.773303,
      },
      "Phú Diễn": {
        latitude: 21.04884,
        longitude: 105.763422,
      },
      "Phạm Văn Nghị": {
        latitude: 21.06501,
        longitude: 105.761764,
      },
      "Phạm Văn Đồng": {
        latitude: 21.078572,
        longitude: 105.787727,
      },
      "Phố Viên": {
        latitude: 21.071221,
        longitude: 105.7724262,
      },
      "Trại Gà": {
        latitude: 21.062481,
        longitude: 105.761309,
      },
      "Trần Cung": {
        latitude: 21.055241,
        longitude: 105.785835,
      },
      "Tăng Thiết Giáp": {
        latitude: 21.057654,
        longitude: 105.780233,
      },
    },
    "Đông Ngạc": {
      "An Dương Vương": {
        latitude: 21.090957,
        longitude: 105.787416,
      },
      "Kẻ Vẽ": {
        latitude: 21.08926,
        longitude: 105.781072,
      },
      "Nhật Tảo": {
        latitude: 21.087427,
        longitude: 105.790944,
      },
      "Phạm Văn Đồng": {
        latitude: 21.078572,
        longitude: 105.787727,
      },
      "Tân Xuân": {
        latitude: 21.088504,
        longitude: 105.785521,
      },
      "Đông Ngạc": {
        latitude: 21.093938,
        longitude: 105.777619,
      },
      "Đông Thắng": {
        latitude: 21.0843109,
        longitude: 105.7796336,
      },
    },
    "Đức Thắng": {
      "Hoàng Tăng Bí": {
        latitude: 21.083857,
        longitude: 105.779358,
      },
      "Kẻ Vẽ": {
        latitude: 21.08926,
        longitude: 105.781072,
      },
      "Lê Văn Hiến": {
        latitude: 21.075444,
        longitude: 105.773554,
      },
      "Phố Viên": {
        latitude: 21.071221,
        longitude: 105.7724262,
      },
      "Sông Nhuệ": {
        latitude: 21.076948,
        longitude: 105.772249,
      },
      "Thụy Phương": {
        latitude: 21.0869982,
        longitude: 105.7770726,
      },
      "Văn Hội": {
        latitude: 21.0788861,
        longitude: 105.7737044,
      },
      "Đức Thắng": {
        latitude: 21.077481,
        longitude: 105.777653,
      },
    },
    "Liên Mạc": {
      "Hoàng Liên": {
        latitude: 21.0834942,
        longitude: 105.7579743,
      },
      "Liên Mạc": {
        latitude: 21.0873959,
        longitude: 105.7555013,
      },
      "Sùng Khang": {
        latitude: 21.081188,
        longitude: 105.740298,
      },
      "Tân Phong": {
        latitude: 21.081629,
        longitude: 105.768853,
      },
      "Yên Nội": {
        latitude: 21.082894,
        longitude: 105.748957,
      },
    },
    "Minh Khai": {
      "Cầu Diễn": {
        latitude: 21.04424,
        longitude: 105.754748,
      },
      "Hoàng Liên": {
        latitude: 21.0834942,
        longitude: 105.7579743,
      },
      "Nguyên Xá": {
        latitude: 21.05203,
        longitude: 105.7382657,
      },
      "Ngọa Long": {
        latitude: 21.0509602,
        longitude: 105.7449357,
      },
      "Phú Minh": {
        latitude: 21.0566272,
        longitude: 105.7468681,
      },
      "Phạm Văn Nghị": {
        latitude: 21.06501,
        longitude: 105.761764,
      },
      "Phố Nhổn": {
        latitude: 21.0542565,
        longitude: 105.7330992,
      },
      "Thanh Lâm": {
        latitude: 21.047537,
        longitude: 105.737568,
      },
      "Tây Tựu": {
        latitude: 21.074923,
        longitude: 105.727817,
      },
      "Văn Tiến Dũng": {
        latitude: 21.051019,
        longitude: 105.749611,
      },
      "Văn Trì": {
        latitude: 21.0537,
        longitude: 105.744754,
      },
      "Xuân Phương": {
        latitude: 21.051556,
        longitude: 105.735865,
      },
      "Đường Cn6": {
        latitude: 21.047839,
        longitude: 105.740009,
      },
      "Đường Cn8": {
        latitude: 21.0436582,
        longitude: 105.742258,
      },
    },
    "Phú Diễn": {
      "Cầu Diễn": {
        latitude: 21.04424,
        longitude: 105.754748,
      },
      "Phan Bá Vành": {
        latitude: 21.05555,
        longitude: 105.773303,
      },
      "Phú Diễn": {
        latitude: 21.04884,
        longitude: 105.763422,
      },
      "Đức Diễn": {
        latitude: 21.05035,
        longitude: 105.752893,
      },
    },
    "Phúc Diễn": {
      "Cầu Diễn": {
        latitude: 21.04424,
        longitude: 105.754748,
      },
      "Kiều Mai": {
        latitude: 21.041282,
        longitude: 105.751494,
      },
      "Phú Diễn": {
        latitude: 21.04884,
        longitude: 105.763422,
      },
      "Phú Kiều": {
        latitude: 21.043212,
        longitude: 105.751895,
      },
      "Phú Minh": {
        latitude: 21.0566272,
        longitude: 105.7468681,
      },
      "Phúc Minh": {
        latitude: 21.0479676,
        longitude: 105.7524466,
      },
      "Tiền Phong": {
        latitude: 21.0499193,
        longitude: 105.753483,
      },
      "Tân Tiến": {
        latitude: 21.0495609,
        longitude: 105.754837,
      },
      "Võ Quý Huân": {
        latitude: 21.047602,
        longitude: 105.750204,
      },
      "Văn Tiến Dũng": {
        latitude: 21.051019,
        longitude: 105.749611,
      },
      "Yên Lộc": {
        latitude: 21.0496315,
        longitude: 105.7531906,
      },
      "Đường Cn8": {
        latitude: 21.0436582,
        longitude: 105.742258,
      },
      "Đức Diễn": {
        latitude: 21.05035,
        longitude: 105.752893,
      },
    },
    "Tây Tựu": {
      "Phú Minh": {
        latitude: 21.0566272,
        longitude: 105.7468681,
      },
      "Phố Nhổn": {
        latitude: 21.0542565,
        longitude: 105.7330992,
      },
      "Trung Tựu": {
        latitude: 21.0692878,
        longitude: 105.7405025,
      },
      "Tây Tựu": {
        latitude: 21.074923,
        longitude: 105.727817,
      },
      "Yên Nội": {
        latitude: 21.082894,
        longitude: 105.748957,
      },
    },
    "Thượng Cát": {
      "Châu Đài": {
        latitude: 21.090835,
        longitude: 105.7324149,
      },
      "Kỳ Vũ": {
        latitude: 21.0873079,
        longitude: 105.7347348,
      },
      "Sùng Khang": {
        latitude: 21.081188,
        longitude: 105.740298,
      },
      "Thượng Cát": {
        latitude: 21.095688,
        longitude: 105.733314,
      },
      "Tây Tựu": {
        latitude: 21.074923,
        longitude: 105.727817,
      },
    },
    "Thụy Phương": {
      "Bờ Tây Sông Nhuệ": {
        latitude: 21.07929,
        longitude: 105.770944,
      },
      "Hoàng Tăng Bí": {
        latitude: 21.083857,
        longitude: 105.779358,
      },
      "Liên Mạc": {
        latitude: 21.0873959,
        longitude: 105.7555013,
      },
      "Phố Viên": {
        latitude: 21.071221,
        longitude: 105.7724262,
      },
      "Sông Nhuệ": {
        latitude: 21.076948,
        longitude: 105.772249,
      },
      "Thụy Phương": {
        latitude: 21.0869982,
        longitude: 105.7770726,
      },
      "Tân Nhuệ": {
        latitude: 21.086393,
        longitude: 105.771402,
      },
      "Tân Phong": {
        latitude: 21.081629,
        longitude: 105.768853,
      },
      "Đông Ngạc": {
        latitude: 21.093938,
        longitude: 105.777619,
      },
    },
    "Xuân Đỉnh": {
      "Hoàng Tăng Bí": {
        latitude: 21.083857,
        longitude: 105.779358,
      },
      "Nguyễn Hoàng Tôn": {
        latitude: 21.076366,
        longitude: 105.793308,
      },
      "Nguyễn Văn Huyên": {
        latitude: 21.062939,
        longitude: 105.797736,
      },
      "Nguyễn Đình Tứ": {
        latitude: 21.073242,
        longitude: 105.7841693,
      },
      "Phạm Văn Đồng": {
        latitude: 21.078572,
        longitude: 105.787727,
      },
      "Phố Lộc": {
        latitude: 21.0667853,
        longitude: 105.7891384,
      },
      "Pineapple Lane": {
        latitude: 21.07688,
        longitude: 105.796203,
      },
      "Pomelo Lane": {
        latitude: 21.076145,
        longitude: 105.79909,
      },
      "Tân Xuân": {
        latitude: 21.088504,
        longitude: 105.785521,
      },
      "Xuân Đỉnh": {
        latitude: 21.071342,
        longitude: 105.794198,
      },
      "Đỗ Nhuận": {
        latitude: 21.065201,
        longitude: 105.789889,
      },
    },
    "Xuân Tảo": {
      "Nguyễn Văn Huyên": {
        latitude: 21.062939,
        longitude: 105.797736,
      },
      "Nguyễn Xuân Khoát": {
        latitude: 21.0673499,
        longitude: 105.7975807,
      },
      "Phạm Văn Đồng": {
        latitude: 21.078572,
        longitude: 105.787727,
      },
      "Xuân La": {
        latitude: 21.067521,
        longitude: 105.803723,
      },
      "Xuân Đỉnh": {
        latitude: 21.071342,
        longitude: 105.794198,
      },
      "Đỗ Nhuận": {
        latitude: 21.065201,
        longitude: 105.789889,
      },
    },
  },
  "Cầu Giấy": {
    "Dịch Vọng": {
      "Chùa Hà": {
        latitude: 21.0373317,
        longitude: 105.7946087,
      },
      "Cầu Giấy": {
        latitude: 21.0342609,
        longitude: 105.7961123,
      },
      "Dịch Vọng": {
        latitude: 21.0329542,
        longitude: 105.7935134,
      },
      "Khúc Thừa Dụ": {
        latitude: 21.0331519,
        longitude: 105.7920374,
      },
      "Nguyễn Khánh Toàn": {
        latitude: 21.0389993,
        longitude: 105.7993703,
      },
      "Nguyễn Đỗ Cung": {
        latitude: 21.0402615,
        longitude: 105.791773,
      },
      "Phạm Văn Bạch": {
        latitude: 21.026407,
        longitude: 105.7882099,
      },
      "Thành Thái": {
        latitude: 21.0287446,
        longitude: 105.7944382,
      },
      "Thọ Tháp": {
        latitude: 21.0311882,
        longitude: 105.7913716,
      },
      "Trương Công Giai": {
        latitude: 21.0286776,
        longitude: 105.7892658,
      },
      "Trần Quý Kiên": {
        latitude: 21.0366552,
        longitude: 105.7918159,
      },
      "Trần Thái Tông": {
        latitude: 21.03295,
        longitude: 105.7887757,
      },
      "Trần Đăng Ninh": {
        latitude: 21.0374735,
        longitude: 105.7939238,
      },
      "Tô Hiệu": {
        latitude: 21.0428539,
        longitude: 105.7966892,
      },
      "Đường A4": {
        latitude: 21.0382006,
        longitude: 105.7932149,
      },
    },
    "Dịch Vọng Hậu": {
      "Cầu Giấy": {
        latitude: 21.0342609,
        longitude: 105.7961123,
      },
      "Cốm Vòng": {
        latitude: 21.0317418,
        longitude: 105.7847794,
      },
      "Duy Tân": {
        latitude: 21.0307652,
        longitude: 105.7846975,
      },
      "Dịch Vọng Hậu": {
        latitude: 21.0314929,
        longitude: 105.7865449,
      },
      "Hồ Tùng Mậu": {
        latitude: 21.0371746,
        longitude: 105.7757261,
      },
      "Nghĩa Tân": {
        latitude: 21.0436278,
        longitude: 105.7938827,
      },
      "Nguyễn Phong Sắc": {
        latitude: 21.0386302,
        longitude: 105.7905112,
      },
      "Phan Văn Trường": {
        latitude: 21.0390109,
        longitude: 105.7860615,
      },
      "Phạm Tuấn Tài": {
        latitude: 21.0434177,
        longitude: 105.7862907,
      },
      "Phạm Văn Đồng": {
        latitude: 21.0408616,
        longitude: 105.7807057,
      },
      "Thọ Tháp": {
        latitude: 21.0311882,
        longitude: 105.7913716,
      },
      "Trần Quốc Hoàn": {
        latitude: 21.0416653,
        longitude: 105.7854217,
      },
      "Trần Quốc Vượng": {
        latitude: 21.0352345,
        longitude: 105.7853817,
      },
      "Trần Thái Tông": {
        latitude: 21.03295,
        longitude: 105.7887757,
      },
      "Tô Hiệu": {
        latitude: 21.0428539,
        longitude: 105.7966892,
      },
      "Tôn Thất Thuyết": {
        latitude: 21.0279594,
        longitude: 105.7856438,
      },
      "Xuân Thủy": {
        latitude: 21.0365104,
        longitude: 105.7847569,
      },
      "Đường Số 2": {
        latitude: 21.032635,
        longitude: 105.7916236,
      },
      "Đặng Thùy Trâm": {
        latitude: 21.0439415,
        longitude: 105.7857324,
      },
    },
    "Mai Dịch": {
      "Doãn Kế Thiện": {
        latitude: 21.0416759,
        longitude: 105.7764848,
      },
      "Dương Khuê": {
        latitude: 21.0356734,
        longitude: 105.7731119,
      },
      "Hồ Tùng Mậu": {
        latitude: 21.0371746,
        longitude: 105.7757261,
      },
      "Lê Đức Thọ": {
        latitude: 21.0366453,
        longitude: 105.7712619,
      },
      "Mai Dịch": {
        latitude: 21.0420822,
        longitude: 105.7750737,
      },
      "Nguyễn Khả Trạc": {
        latitude: 21.0449726,
        longitude: 105.7770445,
      },
      "Phạm Thận Duật": {
        latitude: 21.0442389,
        longitude: 105.7784652,
      },
      "Phạm Văn Đồng": {
        latitude: 21.0408616,
        longitude: 105.7807057,
      },
      "Trần Bình": {
        latitude: 21.033771,
        longitude: 105.7788271,
      },
      "Trần Quốc Hoàn": {
        latitude: 21.0416653,
        longitude: 105.7854217,
      },
      "Trần Vỹ": {
        latitude: 21.0425696,
        longitude: 105.7736563,
      },
    },
    "Nghĩa Đô": {
      "Hoàng Quốc Việt": {
        latitude: 21.0460416,
        longitude: 105.7930959,
      },
      "Hoàng Sâm": {
        latitude: 21.0437269,
        longitude: 105.7993488,
      },
      "Lạc Long Quân": {
        latitude: 21.0523331,
        longitude: 105.8090081,
      },
      "Nghĩa Đô": {
        latitude: 21.0485044,
        longitude: 105.7955963,
      },
      "Nguyễn Văn Huyên": {
        latitude: 21.0390066,
        longitude: 105.7977478,
      },
      "Nguyễn Đình Hoàn": {
        latitude: 21.042386,
        longitude: 105.8051849,
      },
      "Phùng Chí Kiên": {
        latitude: 21.0426402,
        longitude: 105.8025409,
      },
      "Tô Hiệu": {
        latitude: 21.0428539,
        longitude: 105.7966892,
      },
      "Võ Chí Công": {
        latitude: 21.0499366,
        longitude: 105.8045156,
      },
      "Đông Quan": {
        latitude: 21.039919,
        longitude: 105.8031286,
      },
      "Đường Bưởi": {
        latitude: 21.0420266,
        longitude: 105.8057177,
      },
      "Đường Số 800a": {
        latitude: 21.0409124,
        longitude: 105.8007949,
      },
    },
    "Nghĩa Tân": {
      "Hoàng Quốc Việt": {
        latitude: 21.0460416,
        longitude: 105.7930959,
      },
      "Nghĩa Tân": {
        latitude: 21.0436278,
        longitude: 105.7938827,
      },
      "Nguyễn Phong Sắc": {
        latitude: 21.0386302,
        longitude: 105.7905112,
      },
      "Trần Cung": {
        latitude: 21.0469555,
        longitude: 105.7902247,
      },
      "Trần Tử Bình": {
        latitude: 21.0442487,
        longitude: 105.7917128,
      },
      "Tô Hiệu": {
        latitude: 21.0428539,
        longitude: 105.7966892,
      },
    },
    "Quan Hoa": {
      "Cầu Giấy": {
        latitude: 21.0342609,
        longitude: 105.7961123,
      },
      "Dương Quảng Hàm": {
        latitude: 21.0344,
        longitude: 105.7995104,
      },
      "Nguyễn Khang": {
        latitude: 21.0233771,
        longitude: 105.7980898,
      },
      "Nguyễn Khánh Toàn": {
        latitude: 21.0389993,
        longitude: 105.7993703,
      },
      "Nguyễn Văn Huyên": {
        latitude: 21.0390066,
        longitude: 105.7977478,
      },
      "Quan Hoa": {
        latitude: 21.032808,
        longitude: 105.8032427,
      },
    },
    "Trung Hòa": {
      "Hoàng Minh Giám": {
        latitude: 21.0063175,
        longitude: 105.7969519,
      },
      "Hoàng Ngân": {
        latitude: 21.0099878,
        longitude: 105.8046614,
      },
      "Hoàng Đạo Thúy": {
        latitude: 21.0091148,
        longitude: 105.8009096,
      },
      "Khuất Duy Tiến": {
        latitude: 21.004339,
        longitude: 105.793274,
      },
      "Lê Văn Lương": {
        latitude: 21.0089485,
        longitude: 105.8094563,
      },
      "Mạc Thái Tông": {
        latitude: 21.0119583,
        longitude: 105.7923665,
      },
      "Nguyễn Chánh": {
        latitude: 21.0167345,
        longitude: 105.7885038,
      },
      "Nguyễn Khang": {
        latitude: 21.0233771,
        longitude: 105.7980898,
      },
      "Nguyễn Ngọc Vũ": {
        latitude: 21.0105454,
        longitude: 105.8101341,
      },
      "Nguyễn Thị Thập": {
        latitude: 21.0045906,
        longitude: 105.7994398,
      },
      "Nguyễn Thị Định": {
        latitude: 21.0110573,
        longitude: 105.804612,
      },
      "Nguyễn Xuân Linh": {
        latitude: 21.0071161,
        longitude: 105.7999888,
      },
      "Phạm Hùng": {
        latitude: 21.0061942,
        longitude: 105.7917368,
      },
      "Trung Hòa": {
        latitude: 21.0159153,
        longitude: 105.8003854,
      },
      "Trung Kính": {
        latitude: 21.0141992,
        longitude: 105.7956586,
      },
      "Trung Yên 10": {
        latitude: 21.0159924,
        longitude: 105.8011395,
      },
      "Trung Yên 11": {
        latitude: 21.0150147,
        longitude: 105.8005113,
      },
      "Trung Yên 11a": {
        latitude: 21.0146471,
        longitude: 105.7978409,
      },
      "Trung Yên 11b": {
        latitude: 21.0145756,
        longitude: 105.7972036,
      },
      "Trung Yên 11c": {
        latitude: 21.0143679,
        longitude: 105.7973862,
      },
      "Trung Yên 14": {
        latitude: 21.0174005,
        longitude: 105.8017113,
      },
      "Trung Yên 15": {
        latitude: 21.0145544,
        longitude: 105.8000952,
      },
      "Trung Yên 3": {
        latitude: 21.0156159,
        longitude: 105.8007097,
      },
      "Trung Yên 7": {
        latitude: 21.0148282,
        longitude: 105.7994092,
      },
      "Trung Yên 8": {
        latitude: 21.0143196,
        longitude: 105.7968368,
      },
      "Trung Yên 9": {
        latitude: 21.0157844,
        longitude: 105.8022909,
      },
      "Trần Duy Hưng": {
        latitude: 21.0087184,
        longitude: 105.7972793,
      },
      "Tú Mỡ": {
        latitude: 21.0108436,
        longitude: 105.7951254,
      },
      "Vũ Phạm Hàm": {
        latitude: 21.0179694,
        longitude: 105.7986125,
      },
      "Đinh Núp": {
        latitude: 21.0111429,
        longitude: 105.791274,
      },
      "Đỗ Quang": {
        latitude: 21.0113323,
        longitude: 105.8017317,
      },
    },
    "Yên Hòa": {
      "Dương Đình Nghệ": {
        latitude: 21.0232852,
        longitude: 105.7900372,
      },
      "Hoa Bằng": {
        latitude: 21.024899,
        longitude: 105.795315,
      },
      "Hạ Yên": {
        latitude: 21.021546,
        longitude: 105.796951,
      },
      "Lộc Vừng": {
        latitude: 21.0230406,
        longitude: 105.7886697,
      },
      "Mạc Thái Tổ": {
        latitude: 21.0180467,
        longitude: 105.7906287,
      },
      "Nguyễn Chánh": {
        latitude: 21.0167345,
        longitude: 105.7885038,
      },
      "Nguyễn Khang": {
        latitude: 21.0233771,
        longitude: 105.7980898,
      },
      "Nguyễn Quốc Trị": {
        latitude: 21.0181255,
        longitude: 105.7850262,
      },
      "Nguyễn Thị Duệ": {
        latitude: 21.0183438,
        longitude: 105.7887881,
      },
      "Phạm Văn Bạch": {
        latitude: 21.026407,
        longitude: 105.7882099,
      },
      "Trung Hòa": {
        latitude: 21.0159153,
        longitude: 105.8003854,
      },
      "Trung Kính": {
        latitude: 21.0141992,
        longitude: 105.7956586,
      },
      "Trung Yên 10": {
        latitude: 21.0159924,
        longitude: 105.8011395,
      },
      "Trung Yên 10a": {
        latitude: 21.0179836,
        longitude: 105.7992547,
      },
      "Trung Yên 11": {
        latitude: 21.0150147,
        longitude: 105.8005113,
      },
      "Trung Yên 12": {
        latitude: 21.0174491,
        longitude: 105.8016707,
      },
      "Trung Yên 14": {
        latitude: 21.0174005,
        longitude: 105.8017113,
      },
      "Trung Yên 6": {
        latitude: 21.0180846,
        longitude: 105.8012935,
      },
      "Trung Yên 9": {
        latitude: 21.0157844,
        longitude: 105.8022909,
      },
      "Trần Kim Xuyến": {
        latitude: 21.01865,
        longitude: 105.7947923,
      },
      "Vũ Phạm Hàm": {
        latitude: 21.0179694,
        longitude: 105.7986125,
      },
      "Yên Hòa": {
        latitude: 21.0231871,
        longitude: 105.794927,
      },
      "Đinh Núp": {
        latitude: 21.0111429,
        longitude: 105.791274,
      },
    },
  },
  "Chương Mỹ": {
    "Chúc Sơn": {
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
      "Đt 419": {
        latitude: 20.9189675,
        longitude: 105.7027284,
      },
    },
    "Đại Yên": {
      "Đt 419": {
        latitude: 20.9189675,
        longitude: 105.7027284,
      },
    },
    "Đồng Phú": {
      "Đt 419": {
        latitude: 20.9189675,
        longitude: 105.7027284,
      },
    },
    "Đông Phương Yên": {
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
    },
    "Đông Sơn": {
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
    },
    "Hoàng Văn Thụ": {
      "Quốc Lộ 21a": {
        latitude: 20.8532384,
        longitude: 105.5962543,
      },
    },
    "Hồng Phong": {
      "Đt 419": {
        latitude: 20.9189675,
        longitude: 105.7027284,
      },
    },
    "Hợp Đồng": {
      "Đt 419": {
        latitude: 20.9189675,
        longitude: 105.7027284,
      },
    },
    "Hữu Văn": {
      "Quốc Lộ 21a": {
        latitude: 20.8532384,
        longitude: 105.5962543,
      },
    },
    "Mỹ Lương": {
      "Quốc Lộ 21a": {
        latitude: 20.8532384,
        longitude: 105.5962543,
      },
    },
    "Nam Phương Tiến": {
      "Quốc Lộ 21a": {
        latitude: 20.8532384,
        longitude: 105.5962543,
      },
    },
    "Ngọc Hòa": {
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
      "Đt 419": {
        latitude: 20.9189675,
        longitude: 105.7027284,
      },
    },
    "Phú Nghĩa": {
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
    },
    "Phụng Châu": {
      "Phương Bản": {
        latitude: 20.955469,
        longitude: 105.6900742,
      },
      "Phượng Bãi": {
        latitude: 20.934818,
        longitude: 105.714026,
      },
      "Phượng Yên": {
        latitude: 20.9464151,
        longitude: 105.7059037,
      },
      "Đê Mới": {
        latitude: 20.9463826,
        longitude: 105.6983116,
      },
      "Đường Hoa": {
        latitude: 20.942984,
        longitude: 105.708102,
      },
    },
    "Quảng Bị": {
      "Đt 419": {
        latitude: 20.9189675,
        longitude: 105.7027284,
      },
    },
    "Tân Tiến": {
      "Quốc Lộ 21a": {
        latitude: 20.8532384,
        longitude: 105.5962543,
      },
    },
    "Thanh Bình": {
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
    },
    "Thủy Xuân Tiên": {
      "Quốc Lộ 21a": {
        latitude: 20.8532384,
        longitude: 105.5962543,
      },
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
    },
    "Tiên Phương": {
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
      "Đt 419": {
        latitude: 20.9189675,
        longitude: 105.7027284,
      },
      "Đê Mới": {
        latitude: 20.9463826,
        longitude: 105.6983116,
      },
    },
    "Trần Phú": {
      "Quốc Lộ 21a": {
        latitude: 20.8532384,
        longitude: 105.5962543,
      },
    },
    "Trường Yên": {
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
    },
    "Xuân Mai": {
      "Chiến Thắng": {
        latitude: 20.8920872,
        longitude: 105.5658715,
      },
      "Quốc Lộ 21a": {
        latitude: 20.8532384,
        longitude: 105.5962543,
      },
      "Quốc Lộ 6": {
        latitude: 20.9239209,
        longitude: 105.6957867,
      },
      "Đt 421b": {
        latitude: 20.90721,
        longitude: 105.591102,
      },
    },
  },
  "Đan Phượng": {
    "Đan Phượng": {
      "Hòa Bình": {
        latitude: 21.0909363,
        longitude: 105.664562,
      },
      "Phượng Trì": {
        latitude: 21.089608,
        longitude: 105.6616409,
      },
      "Thượng Mỗ": {
        latitude: 21.0996895,
        longitude: 105.6728571,
      },
      "Thắng Lợi": {
        latitude: 21.0917325,
        longitude: 105.6629769,
      },
      "Đoài Khê": {
        latitude: 21.0918618,
        longitude: 105.6655491,
      },
      "Đt 417": {
        latitude: 21.1107113,
        longitude: 105.6566581,
      },
      "Đông Bắc": {
        latitude: 21.0888189,
        longitude: 105.6689541,
      },
      "Đông Khê": {
        latitude: 21.0885186,
        longitude: 105.6669907,
      },
      "Đường Hùng": {
        latitude: 21.0914051,
        longitude: 105.6668246,
      },
      "Đường Đê": {
        latitude: 21.1035442,
        longitude: 105.6617208,
      },
      "Đại Phùng 1": {
        latitude: 21.0905052,
        longitude: 105.6632137,
      },
      "Đại Phùng 2": {
        latitude: 21.0876677,
        longitude: 105.6659393,
      },
      "Đồng Ông": {
        latitude: 21.0966815,
        longitude: 105.6793791,
      },
    },
    "Đồng Tháp": {
      "Bãi Tháp": {
        latitude: 21.0790627,
        longitude: 105.6517248,
      },
      "Nguyễn Thái Học": {
        latitude: 21.0886987,
        longitude: 105.6594273,
      },
      "Phan Đình Phùng": {
        latitude: 21.0856335,
        longitude: 105.6537667,
      },
      "Quốc Lộ 32": {
        latitude: 21.086477,
        longitude: 105.6642356,
      },
      "Đường Số 1 Bãi Thụy": {
        latitude: 21.0808301,
        longitude: 105.650143,
      },
      "Đường Số 2 Bãi Thụy": {
        latitude: 21.0822498,
        longitude: 105.6493894,
      },
      "Đường Đê": {
        latitude: 21.1035442,
        longitude: 105.6617208,
      },
    },
    "Hạ Mỗ": {
      "Liên Hồng": {
        latitude: 21.1197688,
        longitude: 105.7061389,
      },
      "Ngõ Ngoài": {
        latitude: 21.1092683,
        longitude: 105.6862533,
      },
      "Vạn Xuân": {
        latitude: 21.1101839,
        longitude: 105.6894159,
      },
      "Ô Diên": {
        latitude: 21.1221122,
        longitude: 105.6750553,
      },
      "Đường Đê": {
        latitude: 21.1035442,
        longitude: 105.6617208,
      },
    },
    "Hồng Hà": {
      "Bãi Tiên Tân": {
        latitude: 21.1253683,
        longitude: 105.6778755,
      },
      "Cơ Đê": {
        latitude: 21.1348246,
        longitude: 105.6862084,
      },
      "Cổng Đông": {
        latitude: 21.1254226,
        longitude: 105.6833285,
      },
      "Hồng Hà": {
        latitude: 21.1352536,
        longitude: 105.6859265,
      },
      "Lãnh Nguyệt Hàn": {
        latitude: 21.1345183,
        longitude: 105.6883645,
      },
      "Nam Sông Hồng": {
        latitude: 21.1246115,
        longitude: 105.6743619,
      },
      "Đường Kè": {
        latitude: 21.1338074,
        longitude: 105.680208,
      },
      "Đường Đê": {
        latitude: 21.1035442,
        longitude: 105.6617208,
      },
    },
    "Liên Hà": {
      "Liên Hà": {
        latitude: 21.1041224,
        longitude: 105.7139708,
      },
      "Liên Hồng": {
        latitude: 21.1197688,
        longitude: 105.7061389,
      },
      "Làng Quý": {
        latitude: 21.1090722,
        longitude: 105.7191465,
      },
      "Làng Đoài": {
        latitude: 21.1105929,
        longitude: 105.7175416,
      },
      "Thành Công": {
        latitude: 21.109802,
        longitude: 105.7085495,
      },
    },
    "Liên Hồng": {
      "Cơ Đê": {
        latitude: 21.1348246,
        longitude: 105.6862084,
      },
      "Liên Hồng": {
        latitude: 21.1197688,
        longitude: 105.7061389,
      },
      "Làng Tổ": {
        latitude: 21.1218524,
        longitude: 105.7049454,
      },
      "Đông Lai": {
        latitude: 21.1233898,
        longitude: 105.701257,
      },
    },
    "Liên Trung": {
      "Kim Ngọc": {
        latitude: 21.096719,
        longitude: 105.7201671,
      },
      "Liên Hà": {
        latitude: 21.1041224,
        longitude: 105.7139708,
      },
      "Liên Thôn 1": {
        latitude: 21.1026707,
        longitude: 105.72609,
      },
      "Liên Thôn 2": {
        latitude: 21.1049665,
        longitude: 105.7249022,
      },
      "Đường Số 1 Thôn Trung": {
        latitude: 21.1083204,
        longitude: 105.7230209,
      },
      "Đường Số 2 Thôn Trung": {
        latitude: 21.106727,
        longitude: 105.7247762,
      },
    },
    "Phương Đình": {
      "Phạm Bạch Hổ": {
        latitude: 21.0969183,
        longitude: 105.6488371,
      },
      "Đt 417": {
        latitude: 21.1107113,
        longitude: 105.6566581,
      },
      "Đường Đê": {
        latitude: 21.1035442,
        longitude: 105.6617208,
      },
      "Đạc 10": {
        latitude: 21.1189441,
        longitude: 105.6597309,
      },
      "Đạc 9": {
        latitude: 21.1189713,
        longitude: 105.6578609,
      },
    },
    "Song Phượng": {
      "Khu Đìa Đừng": {
        latitude: 21.0832405,
        longitude: 105.6694916,
      },
      "Tháp Thụy": {
        latitude: 21.083223,
        longitude: 105.6640387,
      },
      "Thụy Ứng": {
        latitude: 21.0841972,
        longitude: 105.6649884,
      },
      "Vườn Thị": {
        latitude: 21.0831464,
        longitude: 105.663599,
      },
    },
    "Tân Hội": {
      "Liên Hà": {
        latitude: 21.1041224,
        longitude: 105.7139708,
      },
      "NH Kỳ": {
        latitude: 21.095591,
        longitude: 105.700405,
      },
      "Nhuệ Giang": {
        latitude: 21.0947811,
        longitude: 105.7024253,
      },
      "Phan Long": {
        latitude: 21.0908767,
        longitude: 105.7032495,
      },
      "Thúy Hội": {
        latitude: 21.0980819,
        longitude: 105.7017355,
      },
      "Thượng Hội": {
        latitude: 21.0911988,
        longitude: 105.7057796,
      },
      "Vĩnh K": {
        latitude: 21.09543,
        longitude: 105.7006535,
      },
      "Vĩnh Kỳ": {
        latitude: 21.097709,
        longitude: 105.6991205,
      },
      "Đt 422": {
        latitude: 21.08347,
        longitude: 105.7091851,
      },
      "Đường Nhánh 422": {
        latitude: 21.0886785,
        longitude: 105.712717,
      },
      "Đỗ Bá Lược": {
        latitude: 21.0961625,
        longitude: 105.6980788,
      },
    },
    "Tân Lập": {
      "Bát Phúc": {
        latitude: 21.0783783,
        longitude: 105.7053523,
      },
      "Bình Minh": {
        latitude: 21.0816208,
        longitude: 105.7178814,
      },
      "Cầu Khoát": {
        latitude: 21.0791092,
        longitude: 105.7211664,
      },
      "Cầu Kênh": {
        latitude: 21.0860761,
        longitude: 105.7116976,
      },
      "Cụm Trường": {
        latitude: 21.0869791,
        longitude: 105.7161266,
      },
      "Hạ Hồi": {
        latitude: 21.0836333,
        longitude: 105.713795,
      },
      "Hạnh Đàn": {
        latitude: 21.0788634,
        longitude: 105.7081854,
      },
      "Kim Ngọc": {
        latitude: 21.096719,
        longitude: 105.7201671,
      },
      "Ngọc Kiệu": {
        latitude: 21.0839405,
        longitude: 105.7105078,
      },
      "Sông Nhuệ": {
        latitude: 21.084872,
        longitude: 105.712409,
      },
      "Thượng Hội": {
        latitude: 21.0911988,
        longitude: 105.7057796,
      },
      "Đan Hội": {
        latitude: 21.0823971,
        longitude: 105.7076751,
      },
      "Đt 422": {
        latitude: 21.08347,
        longitude: 105.7091851,
      },
      "Đường Nhánh 422": {
        latitude: 21.0886785,
        longitude: 105.712717,
      },
    },
    "Thị Trấn Phùng": {
      "Khu Đìa Đừng": {
        latitude: 21.0832405,
        longitude: 105.6694916,
      },
      "Nguyễn Thái Học": {
        latitude: 21.0886987,
        longitude: 105.6594273,
      },
      "Phan Đình Phùng": {
        latitude: 21.0856335,
        longitude: 105.6537667,
      },
      "Phùng Hưng": {
        latitude: 21.0880435,
        longitude: 105.659231,
      },
      "Phượng Trì": {
        latitude: 21.089608,
        longitude: 105.6616409,
      },
      "Quốc Lộ 32": {
        latitude: 21.086477,
        longitude: 105.6642356,
      },
      "Thụy Ứng": {
        latitude: 21.0841972,
        longitude: 105.6649884,
      },
      "Đt 417": {
        latitude: 21.1107113,
        longitude: 105.6566581,
      },
      "Đông Khê": {
        latitude: 21.0885186,
        longitude: 105.6669907,
      },
      "Đường Đê": {
        latitude: 21.1035442,
        longitude: 105.6617208,
      },
      "Đại Phùng 2": {
        latitude: 21.0876677,
        longitude: 105.6659393,
      },
    },
    "Thọ An": {
      "An Thịnh": {
        latitude: 21.1348839,
        longitude: 105.6466149,
      },
      "Cụm 2": {
        latitude: 21.1243549,
        longitude: 105.6425974,
      },
      "Hoàng Chân": {
        latitude: 21.1219002,
        longitude: 105.6402694,
      },
      "Miếu Đinh Nguyên": {
        latitude: 21.1242419,
        longitude: 105.6357139,
      },
      "Mới An": {
        latitude: 21.1275012,
        longitude: 105.6444479,
      },
      "Phúc Lâm": {
        latitude: 21.1203827,
        longitude: 105.6415726,
      },
      "Phố Cầu": {
        latitude: 21.1253706,
        longitude: 105.6403023,
      },
      "Phố Nguyễn": {
        latitude: 21.1220632,
        longitude: 105.6421739,
      },
      "Tam Đạc 1": {
        latitude: 21.1228216,
        longitude: 105.63884,
      },
      "Tam Đạc 2": {
        latitude: 21.1246268,
        longitude: 105.6368232,
      },
      "Thanh Hải": {
        latitude: 21.1220599,
        longitude: 105.6421677,
      },
      "Thanh Xuân": {
        latitude: 21.1214929,
        longitude: 105.6349084,
      },
      "Thọ Vực": {
        latitude: 21.1279787,
        longitude: 105.6360236,
      },
      "Trung Dương Đông": {
        latitude: 21.1315431,
        longitude: 105.6387468,
      },
      "Tây Sơn": {
        latitude: 21.1233285,
        longitude: 105.6364081,
      },
      "Tây Đạc 3": {
        latitude: 21.1225324,
        longitude: 105.6436321,
      },
      "Xóm Chùa": {
        latitude: 21.119758,
        longitude: 105.641449,
      },
      "Đt 417": {
        latitude: 21.1107113,
        longitude: 105.6566581,
      },
      "Đình Thọ Lão": {
        latitude: 21.1238161,
        longitude: 105.6444808,
      },
      "Đông Hải": {
        latitude: 21.1197795,
        longitude: 105.6406055,
      },
      "Đông Thanh Hải": {
        latitude: 21.1254303,
        longitude: 105.6404687,
      },
      "Đường Trung Tâm": {
        latitude: 21.1273649,
        longitude: 105.6378094,
      },
      "Đạc 2": {
        latitude: 21.1215777,
        longitude: 105.6432435,
      },
      "Đạc 2 Đạo": {
        latitude: 21.1265353,
        longitude: 105.642361,
      },
      "Đạc Nhất 1": {
        latitude: 21.1258902,
        longitude: 105.6397603,
      },
      "Đạc Nhất 2": {
        latitude: 21.1246252,
        longitude: 105.6399109,
      },
      "Đạc Nhất 3": {
        latitude: 21.1246223,
        longitude: 105.6399028,
      },
      "Đạc Nhất 4": {
        latitude: 21.123921,
        longitude: 105.6401163,
      },
      "Đạc Nhất 5": {
        latitude: 21.121411,
        longitude: 105.6402589,
      },
      "Đạc Nhất 6": {
        latitude: 21.1203545,
        longitude: 105.6398879,
      },
    },
    "Thọ Xuân": {
      "Bắc Hòa Bình": {
        latitude: 21.1273808,
        longitude: 105.6463318,
      },
      "Bắc Thống Nhất": {
        latitude: 21.1223669,
        longitude: 105.6494652,
      },
      "Cổ Bồng": {
        latitude: 21.1214032,
        longitude: 105.6589004,
      },
      "Cực Nam": {
        latitude: 21.1149628,
        longitude: 105.6404319,
      },
      "Mới An": {
        latitude: 21.1275012,
        longitude: 105.6444479,
      },
      "Phương Vinh": {
        latitude: 21.1186247,
        longitude: 105.6570152,
      },
      "Thọ Xuân": {
        latitude: 21.1229914,
        longitude: 105.6521025,
      },
      "Thống Nhất": {
        latitude: 21.1200852,
        longitude: 105.6507882,
      },
      "Tiến Bộ": {
        latitude: 21.1215479,
        longitude: 105.6459024,
      },
      "Trung Hà Trại": {
        latitude: 21.1232515,
        longitude: 105.6568759,
      },
      "Tây Đạc 3": {
        latitude: 21.1225324,
        longitude: 105.6436321,
      },
      "Tây Đạc Tư Đình": {
        latitude: 21.1246651,
        longitude: 105.6441992,
      },
      "Đt 417": {
        latitude: 21.1107113,
        longitude: 105.6566581,
      },
      "Đình Thọ Lão": {
        latitude: 21.1238161,
        longitude: 105.6444808,
      },
      "Đạc 10": {
        latitude: 21.1189441,
        longitude: 105.6597309,
      },
      "Đạc 6 Nội": {
        latitude: 21.1261639,
        longitude: 105.6470799,
      },
      "Đạc 9": {
        latitude: 21.1189713,
        longitude: 105.6578609,
      },
      "Đạc Tư Đình": {
        latitude: 21.1251298,
        longitude: 105.6449668,
      },
    },
    "Thượng Mỗ": {
      "An Bài": {
        latitude: 21.1050454,
        longitude: 105.6801631,
      },
      "Hạ Mỗ": {
        latitude: 21.1080168,
        longitude: 105.6801224,
      },
      "Ngõ Ngoài": {
        latitude: 21.1092683,
        longitude: 105.6862533,
      },
      "Thượng Mỗ": {
        latitude: 21.0996895,
        longitude: 105.6728571,
      },
      "Trung Thành": {
        latitude: 21.1132883,
        longitude: 105.6673748,
      },
      "Tân Thành": {
        latitude: 21.1121275,
        longitude: 105.6765197,
      },
      "Đường Đê": {
        latitude: 21.1035442,
        longitude: 105.6617208,
      },
      "Đại Phú": {
        latitude: 21.105811,
        longitude: 105.6806745,
      },
    },
  },
  "Đông Anh": {
    "Bắc Hồng": {
      "Bắc Làng": {
        latitude: 21.1850325,
        longitude: 105.8048821,
      },
      "Cửa Bắc": {
        latitude: 21.1846735,
        longitude: 105.8045192,
      },
      "Cửa Nam": {
        latitude: 21.1807479,
        longitude: 105.8004258,
      },
      "Làng Cần": {
        latitude: 21.1782117,
        longitude: 105.8032421,
      },
      "Làng Thụy Hà": {
        latitude: 21.1838921,
        longitude: 105.8012362,
      },
      "Nam Hồng": {
        latitude: 21.1659968,
        longitude: 105.7976505,
      },
      "Phù Thụy": {
        latitude: 21.1811727,
        longitude: 105.7986006,
      },
      "Quan Âm": {
        latitude: 21.1751175,
        longitude: 105.8101381,
      },
      "Tây Làng": {
        latitude: 21.1808925,
        longitude: 105.7997253,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.1614183,
        longitude: 105.8195171,
      },
      "Xóm Nam": {
        latitude: 21.1817382,
        longitude: 105.8066736,
      },
      "Xóm Đình 3": {
        latitude: 21.16386,
        longitude: 105.8111308,
      },
      "Đồng Rộc": {
        latitude: 21.1803224,
        longitude: 105.8028793,
      },
    },
    "Cổ Loa": {
      "Cổ Loa": {
        latitude: 21.1163964,
        longitude: 105.8754263,
      },
      "Quốc Lộ 3": {
        latitude: 21.116031,
        longitude: 105.8460935,
      },
      "Đào Duy Tùng": {
        latitude: 21.1248447,
        longitude: 105.8538168,
      },
      "Đông Hội": {
        latitude: 21.086424,
        longitude: 105.8710198,
      },
    },
    "Dục Tú": {
      "Dục Nội": {
        latitude: 21.1277428,
        longitude: 105.8792001,
      },
      "Dục Tú": {
        latitude: 21.1129905,
        longitude: 105.8937149,
      },
      "Hà Nội Thái Nguyên": {
        latitude: 21.1396529,
        longitude: 105.9082235,
      },
      "Lý Thường Kiệt": {
        latitude: 21.122392,
        longitude: 105.9123947,
      },
      "Nghĩa Vũ": {
        latitude: 21.1080222,
        longitude: 105.8922173,
      },
      "Quốc Lộ 3": {
        latitude: 21.116031,
        longitude: 105.8460935,
      },
      "Xóm Chùa": {
        latitude: 21.1003522,
        longitude: 105.8958223,
      },
      "Đồng Dầu": {
        latitude: 21.1032876,
        longitude: 105.8969238,
      },
      "Đồng Kỵ": {
        latitude: 21.1338761,
        longitude: 105.9111617,
      },
    },
    "Đại Mạch": {
      "Tỉnh Lộ 23b": {
        latitude: 21.1217246,
        longitude: 105.76331,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1049117,
        longitude: 105.7746198,
      },
      "Đại Mạch": {
        latitude: 21.1131721,
        longitude: 105.7545608,
      },
    },
    "Đông Anh": {
      "Cao Lỗ": {
        latitude: 21.1397048,
        longitude: 105.8539793,
      },
      "Hàng Kênh": {
        latitude: 21.1523089,
        longitude: 105.8507857,
      },
      "Lâm Tiên": {
        latitude: 21.1624019,
        longitude: 105.8511503,
      },
      "Phúc Lộc": {
        latitude: 21.135763,
        longitude: 105.8478532,
      },
      "Quốc Lộ 23": {
        latitude: 21.1564876,
        longitude: 105.8050889,
      },
      "Quốc Lộ 3": {
        latitude: 21.116031,
        longitude: 105.8460935,
      },
      "Uy Nỗ": {
        latitude: 21.1673685,
        longitude: 105.8575911,
      },
      "Đản Dị": {
        latitude: 21.1531615,
        longitude: 105.861628,
      },
      "Đản Mỗ": {
        latitude: 21.1490013,
        longitude: 105.8522262,
      },
    },
    "Đông Hội": {
      "Lại Đà": {
        latitude: 21.0859047,
        longitude: 105.8714189,
      },
      "Mai Lam": {
        latitude: 21.0829825,
        longitude: 105.881158,
      },
      "Quốc Lộ 3": {
        latitude: 21.116031,
        longitude: 105.8460935,
      },
      "Quốc Lộ 5": {
        latitude: 21.123387,
        longitude: 105.8362472,
      },
      "Trường Sa": {
        latitude: 21.1071391,
        longitude: 105.8500882,
      },
      "Đê Phương Trạch": {
        latitude: 21.0699338,
        longitude: 105.8620723,
      },
      "Đông Hội": {
        latitude: 21.086424,
        longitude: 105.8710198,
      },
    },
    "Hải Bối": {
      "Hải Bối": {
        latitude: 21.1143647,
        longitude: 105.8018788,
      },
      "Phương Trạch": {
        latitude: 21.11638,
        longitude: 105.8149602,
      },
      "Phố Cổ Điển": {
        latitude: 21.1088092,
        longitude: 105.7906983,
      },
      "Phố Cổ Điển 1": {
        latitude: 21.1096875,
        longitude: 105.7907747,
      },
      "Phố Cổ Điển 2": {
        latitude: 21.1101142,
        longitude: 105.7912005,
      },
      "Phố Cổ Điển 3": {
        latitude: 21.1105485,
        longitude: 105.7917008,
      },
      "Phố Cổ Điển 4": {
        latitude: 21.1100897,
        longitude: 105.7919181,
      },
      "Võ Văn Kiệt": {
        latitude: 21.1344539,
        longitude: 105.7784753,
      },
      "Vũ Huy Tài": {
        latitude: 21.1144289,
        longitude: 105.7890663,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1049117,
        longitude: 105.7746198,
      },
      "Đường Cụt": {
        latitude: 21.1081716,
        longitude: 105.7830023,
      },
      "Đường Số 6": {
        latitude: 21.1159517,
        longitude: 105.7898519,
      },
    },
    "Kim Chung": {
      "Cổng Gỗ": {
        latitude: 21.1270446,
        longitude: 105.7784432,
      },
      "Cổng Hậu 1": {
        latitude: 21.1213296,
        longitude: 105.7718272,
      },
      "Cổng Hậu 2": {
        latitude: 21.1216665,
        longitude: 105.7718162,
      },
      "Cổng Si": {
        latitude: 21.1264289,
        longitude: 105.7764979,
      },
      "Cửa Đình": {
        latitude: 21.1242638,
        longitude: 105.7680382,
      },
      "Hoàng Sa": {
        latitude: 21.1247791,
        longitude: 105.7936915,
      },
      "Hậu Dưỡng": {
        latitude: 21.1224189,
        longitude: 105.770008,
      },
      "Kim Chung": {
        latitude: 21.1276719,
        longitude: 105.7764251,
      },
      "Kim Quy": {
        latitude: 21.128001,
        longitude: 105.7786767,
      },
      "Quốc Lộ 5": {
        latitude: 21.123387,
        longitude: 105.8362472,
      },
      "Tây Cao Tốc": {
        latitude: 21.1438862,
        longitude: 105.7782612,
      },
      "Tỉnh Lộ 23b": {
        latitude: 21.1217246,
        longitude: 105.76331,
      },
      "Võ Văn Kiệt": {
        latitude: 21.1344539,
        longitude: 105.7784753,
      },
      "Văn Học": {
        latitude: 21.128247,
        longitude: 105.7832089,
      },
      "Đa Lộc": {
        latitude: 21.1285193,
        longitude: 105.7799539,
      },
      "Đường Bờ Sông": {
        latitude: 21.1254692,
        longitude: 105.7681571,
      },
      "Đường Mới": {
        latitude: 21.1248935,
        longitude: 105.7746443,
      },
      "Đường Số 3": {
        latitude: 21.1213358,
        longitude: 105.7752885,
      },
      "Đền Bầu Xóm Tây": {
        latitude: 21.1259901,
        longitude: 105.7774585,
      },
    },
    "Kim Nỗ": {
      "Hoàng Sa": {
        latitude: 21.1247791,
        longitude: 105.7936915,
      },
      "Quốc Lộ 5": {
        latitude: 21.123387,
        longitude: 105.8362472,
      },
    },
    "Liên Hà": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.1396529,
        longitude: 105.9082235,
      },
      "Liên Hà": {
        latitude: 21.1545654,
        longitude: 105.8931311,
      },
      "Nguyễn Thực": {
        latitude: 21.1481598,
        longitude: 105.9158997,
      },
      "Việt Hùng": {
        latitude: 21.1419728,
        longitude: 105.8730351,
      },
    },
    "Mai Lâm": {
      "Lại Đà": {
        latitude: 21.0859047,
        longitude: 105.8714189,
      },
      "Mai Hiên": {
        latitude: 21.0856223,
        longitude: 105.8878508,
      },
      "Mai Lam": {
        latitude: 21.0829825,
        longitude: 105.881158,
      },
      "Quốc Lộ 3": {
        latitude: 21.116031,
        longitude: 105.8460935,
      },
      "Đê Phương Trạch": {
        latitude: 21.0699338,
        longitude: 105.8620723,
      },
      "Đồng Dầu": {
        latitude: 21.1032876,
        longitude: 105.8969238,
      },
    },
    "Nam Hồng": {
      "Mê Linh": {
        latitude: 21.1692489040593,
        longitude: 105.770165980773,
      },
      "Nam Hồng": {
        latitude: 21.1659968,
        longitude: 105.7976505,
      },
      "Quốc Lộ 23": {
        latitude: 21.1564876,
        longitude: 105.8050889,
      },
      "Thôn Địa": {
        latitude: 21.1601832,
        longitude: 105.7817268,
      },
      "Võ Văn Kiệt": {
        latitude: 21.1344539,
        longitude: 105.7784753,
      },
    },
    "Nguyên Khê": {
      "Lê Hữu Tựu": {
        latitude: 21.1774594,
        longitude: 105.831672,
      },
      "Nguyên Khê": {
        latitude: 21.177745,
        longitude: 105.8524742,
      },
      "Quốc Lộ 3": {
        latitude: 21.116031,
        longitude: 105.8460935,
      },
      "Uy Nỗ": {
        latitude: 21.1673685,
        longitude: 105.8575911,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.1614183,
        longitude: 105.8195171,
      },
      "Đường Đê": {
        latitude: 21.1852149,
        longitude: 105.8852237,
      },
    },
    "Tàm Xá": {
      "Quốc Lộ 5": {
        latitude: 21.123387,
        longitude: 105.8362472,
      },
      "Trường Sa": {
        latitude: 21.1071391,
        longitude: 105.8500882,
      },
      "Đê Phương Trạch": {
        latitude: 21.0699338,
        longitude: 105.8620723,
      },
    },
    "Thuỵ Lâm": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.1396529,
        longitude: 105.9082235,
      },
      "Thư Lâm": {
        latitude: 21.1735935,
        longitude: 105.8993592,
      },
      "Thụy Lôi": {
        latitude: 21.1801077,
        longitude: 105.9180042,
      },
      "Đường Đê": {
        latitude: 21.1852149,
        longitude: 105.8852237,
      },
    },
    "Tiên Dương": {
      "Quốc Lộ 23": {
        latitude: 21.1564876,
        longitude: 105.8050889,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.1614183,
        longitude: 105.8195171,
      },
    },
    "Uy Nỗ": {
      "Cao Lỗ": {
        latitude: 21.1397048,
        longitude: 105.8539793,
      },
      "Cổ Loa": {
        latitude: 21.1163964,
        longitude: 105.8754263,
      },
      "Gia Lương": {
        latitude: 21.1293938,
        longitude: 105.8713158,
      },
      "Hàng Kênh": {
        latitude: 21.1523089,
        longitude: 105.8507857,
      },
      "Kính Nỗ 3": {
        latitude: 21.1590928,
        longitude: 105.8596861,
      },
      "Phúc Lộc": {
        latitude: 21.135763,
        longitude: 105.8478532,
      },
      "Uy Nỗ": {
        latitude: 21.1673685,
        longitude: 105.8575911,
      },
      "Đào Cam Mộc": {
        latitude: 21.1447619,
        longitude: 105.8641729,
      },
      "Đào Duy Tùng": {
        latitude: 21.1248447,
        longitude: 105.8538168,
      },
      "Đản Dị": {
        latitude: 21.1531615,
        longitude: 105.861628,
      },
      "Đản Mỗ": {
        latitude: 21.1490013,
        longitude: 105.8522262,
      },
    },
    "Vân Hà": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.1396529,
        longitude: 105.9082235,
      },
      "Liên Hà": {
        latitude: 21.1545654,
        longitude: 105.8931311,
      },
      "Nguyễn Thực": {
        latitude: 21.1481598,
        longitude: 105.9158997,
      },
      "Nguyễn Văn Cừ": {
        latitude: 21.1434853,
        longitude: 105.921442,
      },
      "Đồng Kỵ": {
        latitude: 21.1338761,
        longitude: 105.9111617,
      },
    },
    "Vân Nội": {
      "Quốc Lộ 23": {
        latitude: 21.1564876,
        longitude: 105.8050889,
      },
      "Vân Trì": {
        latitude: 21.1400286,
        longitude: 105.813653,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.1614183,
        longitude: 105.8195171,
      },
      "Văn Nội": {
        latitude: 21.1573051,
        longitude: 105.8155743,
      },
    },
    "Việt Hùng": {
      "Cao Lỗ": {
        latitude: 21.1397048,
        longitude: 105.8539793,
      },
      "Cổ Vân": {
        latitude: 21.1391699,
        longitude: 105.8733252,
      },
      "Dục Nội": {
        latitude: 21.1277428,
        longitude: 105.8792001,
      },
      "Gia Lương": {
        latitude: 21.1293938,
        longitude: 105.8713158,
      },
      "Liên Hà": {
        latitude: 21.1545654,
        longitude: 105.8931311,
      },
      "Việt Hùng": {
        latitude: 21.1419728,
        longitude: 105.8730351,
      },
      "Đào Cam Mộc": {
        latitude: 21.1447619,
        longitude: 105.8641729,
      },
    },
    "Vĩnh Ngọc": {
      "Bắc Thăng Long Hải Bối": {
        latitude: 21.1233661,
        longitude: 105.8376768,
      },
      "Cầu Ranh": {
        latitude: 21.1162907,
        longitude: 105.8189246,
      },
      "Hoàng Sa": {
        latitude: 21.1247791,
        longitude: 105.7936915,
      },
      "Phương Trạch": {
        latitude: 21.11638,
        longitude: 105.8149602,
      },
      "Quốc Lộ 3": {
        latitude: 21.116031,
        longitude: 105.8460935,
      },
      "Quốc Lộ 5": {
        latitude: 21.123387,
        longitude: 105.8362472,
      },
      "Trường Sa": {
        latitude: 21.1071391,
        longitude: 105.8500882,
      },
      "Vân Trì": {
        latitude: 21.1400286,
        longitude: 105.813653,
      },
      "Xóm Trai": {
        latitude: 21.1182114,
        longitude: 105.8140064,
      },
      "Đê Phương Trạch": {
        latitude: 21.0699338,
        longitude: 105.8620723,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1049117,
        longitude: 105.7746198,
      },
      "Đường Số 6": {
        latitude: 21.1159517,
        longitude: 105.7898519,
      },
      "Đồng Quan": {
        latitude: 21.1115317,
        longitude: 105.8373287,
      },
    },
    "Võng La": {
      "Võ Văn Kiệt": {
        latitude: 21.1344539,
        longitude: 105.7784753,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1049117,
        longitude: 105.7746198,
      },
      "Đường Cụt": {
        latitude: 21.1081716,
        longitude: 105.7830023,
      },
      "Đại Mạch": {
        latitude: 21.1131721,
        longitude: 105.7545608,
      },
    },
    "Xuân Canh": {
      "Quốc Lộ 3": {
        latitude: 21.116031,
        longitude: 105.8460935,
      },
      "Quốc Lộ 5": {
        latitude: 21.123387,
        longitude: 105.8362472,
      },
      "Trường Sa": {
        latitude: 21.1071391,
        longitude: 105.8500882,
      },
      "Xuân Canh": {
        latitude: 21.098478,
        longitude: 105.8512851,
      },
      "Đê Phương Trạch": {
        latitude: 21.0699338,
        longitude: 105.8620723,
      },
    },
    "Xuân Nộn": {
      "Nguyên Khê": {
        latitude: 21.177745,
        longitude: 105.8524742,
      },
      "Thư Lâm": {
        latitude: 21.1735935,
        longitude: 105.8993592,
      },
      "Xuân Nộn": {
        latitude: 21.1735385,
        longitude: 105.8654407,
      },
      "Đường Đê": {
        latitude: 21.1852149,
        longitude: 105.8852237,
      },
      "Đản Dị": {
        latitude: 21.1531615,
        longitude: 105.861628,
      },
    },
  },
  "Đống Đa": {
    "Cát Linh": {
      "An Trạch": {
        latitude: 21.027651,
        longitude: 105.830193,
      },
      "Cát Linh": {
        latitude: 21.02873,
        longitude: 105.831793,
      },
      "Giảng Võ": {
        latitude: 21.030725,
        longitude: 105.828928,
      },
      "Hàng Bột": {
        latitude: 21.029153,
        longitude: 105.8343161,
      },
      "Hàng Cháo": {
        latitude: 21.030248,
        longitude: 105.834472,
      },
      "Hào Nam": {
        latitude: 21.024904,
        longitude: 105.82732,
      },
      "Phan Phu Tiên": {
        latitude: 21.0287833,
        longitude: 105.8340836,
      },
      "Trịnh Hoài Đức": {
        latitude: 21.02873,
        longitude: 105.831793,
      },
      "Tôn Đức Thắng": {
        latitude: 21.02404,
        longitude: 105.832531,
      },
      "Vũ Thạnh": {
        latitude: 21.026655,
        longitude: 105.826186,
      },
    },
    "Hàng Bột": {
      "Cẩm Văn": {
        latitude: 21.0206105,
        longitude: 105.8287587,
      },
      "Hồ Văn Chương": {
        latitude: 21.0222826,
        longitude: 105.8333067,
      },
      "Phan Văn Trị": {
        latitude: 21.025725,
        longitude: 105.831962,
      },
      "Quan Thổ 1": {
        latitude: 21.0239385,
        longitude: 105.8291585,
      },
      "Thịnh Hào 1": {
        latitude: 21.0240076,
        longitude: 105.8305696,
      },
      "Thịnh Hào 3": {
        latitude: 21.0222772,
        longitude: 105.8314056,
      },
      "Tôn Đức Thắng": {
        latitude: 21.02404,
        longitude: 105.832531,
      },
      "Văn Hương": {
        latitude: 21.024341,
        longitude: 105.834088,
      },
    },
    "Khâm Thiên": {
      "Khâm Thiên": {
        latitude: 21.0194252,
        longitude: 105.8318137,
      },
      "Lê Duẩn": {
        latitude: 21.015319,
        longitude: 105.841422,
      },
      "Trung Tiền": {
        latitude: 21.0200046,
        longitude: 105.8380308,
      },
    },
    "Khương Thượng": {
      "Khương Thượng": {
        latitude: 21.0031997,
        longitude: 105.8243757,
      },
      "Tam Khương": {
        latitude: 21.004494,
        longitude: 105.828306,
      },
      "Trường Chinh": {
        latitude: 21.000282,
        longitude: 105.830805,
      },
      "Tôn Thất Tùng": {
        latitude: 21.0050196,
        longitude: 105.8306219,
      },
      "Đại La": {
        latitude: 21.0012137,
        longitude: 105.8275948,
      },
    },
    "Kim Liên": {
      "Hoàng Tích Trí": {
        latitude: 21.008374,
        longitude: 105.83625,
      },
      "Trung Tự": {
        latitude: 21.0043888,
        longitude: 105.8340211,
      },
      "Đào Duy Anh": {
        latitude: 21.00798,
        longitude: 105.839154,
      },
      "Đông Tác": {
        latitude: 21.005859,
        longitude: 105.8333959,
      },
    },
    "Láng Hạ": {
      "Hoàng Ngọc Phách": {
        latitude: 21.015572,
        longitude: 105.812568,
      },
      "Huỳnh Thúc Kháng": {
        latitude: 21.019038,
        longitude: 105.80995,
      },
      "Láng Hạ": {
        latitude: 21.022358,
        longitude: 105.819221,
      },
      "Láng Trung": {
        latitude: 21.014892,
        longitude: 105.80725,
      },
      "Nguyên Hồng": {
        latitude: 21.016534,
        longitude: 105.810827,
      },
      "Nguyễn Văn Tuyết": {
        latitude: 21.008881,
        longitude: 105.820779,
      },
      "Thái Hà": {
        latitude: 21.014333,
        longitude: 105.818217,
      },
      "Thái Thịnh": {
        latitude: 21.010484,
        longitude: 105.818445,
      },
      "Trúc Khê": {
        latitude: 21.016197,
        longitude: 105.808227,
      },
      "Vũ Ngọc Phan": {
        latitude: 21.014174,
        longitude: 105.810768,
      },
      "Yên Lãng": {
        latitude: 21.01076,
        longitude: 105.816344,
      },
      "Đường Láng": {
        latitude: 21.02024,
        longitude: 105.801836,
      },
    },
    "Láng Thượng": {
      "Chùa Láng": {
        latitude: 21.023569,
        longitude: 105.805173,
      },
      "Nguyễn Chí Thanh": {
        latitude: 21.019435,
        longitude: 105.807856,
      },
      "Pháo Đài Láng": {
        latitude: 21.019403,
        longitude: 105.805488,
      },
      "Đường Láng": {
        latitude: 21.02024,
        longitude: 105.801836,
      },
    },
    "Nam Đồng": {
      "Hồ Đắc Di": {
        latitude: 21.012509,
        longitude: 105.82862,
      },
      "Nam Đồng": {
        latitude: 21.0126331,
        longitude: 105.832424,
      },
      "Nguyễn Lương Bằng": {
        latitude: 21.018502,
        longitude: 105.829733,
      },
      "Nguyễn Ngọc Doãn": {
        latitude: 21.0089092,
        longitude: 105.8300708,
      },
      "Trung Phụng": {
        latitude: 21.016101,
        longitude: 105.8355646,
      },
      "Trần Hữu Tước": {
        latitude: 21.015036,
        longitude: 105.830054,
      },
      "Xã Đàn": {
        latitude: 21.0100709,
        longitude: 105.837829,
      },
      "Xã Đàn 2": {
        latitude: 21.0160679,
        longitude: 105.8307398,
      },
      "Đông Các": {
        latitude: 21.018581,
        longitude: 105.828413,
      },
      "Đặng Văn Ngữ": {
        latitude: 21.010327,
        longitude: 105.831027,
      },
    },
    "Ngã Tư Sở": {
      "Khương Thượng": {
        latitude: 21.0031997,
        longitude: 105.8243757,
      },
      "Nguyễn Trãi": {
        latitude: 21.0017115840254,
        longitude: 105.818076960065,
      },
      "Nguyễn Văn Tuyết": {
        latitude: 21.008881,
        longitude: 105.820779,
      },
      "Thái Thịnh": {
        latitude: 21.010484,
        longitude: 105.818445,
      },
      "Trường Chinh": {
        latitude: 21.000282,
        longitude: 105.830805,
      },
      "Tây Sơn": {
        latitude: 21.006676,
        longitude: 105.823012,
      },
      "Vĩnh Hồ": {
        latitude: 21.006535,
        longitude: 105.8207199,
      },
      "Đường Láng": {
        latitude: 21.02024,
        longitude: 105.801836,
      },
      "Đại La": {
        latitude: 21.0012137,
        longitude: 105.8275948,
      },
    },
    "Ô Chợ Dừa": {
      "An Trạch": {
        latitude: 21.027651,
        longitude: 105.830193,
      },
      "Cẩm Văn": {
        latitude: 21.0206105,
        longitude: 105.8287587,
      },
      "Hoàng Cầu": {
        latitude: 21.016598,
        longitude: 105.823577,
      },
      "Hào Nam": {
        latitude: 21.024904,
        longitude: 105.82732,
      },
      "La Thành": {
        latitude: 21.022776,
        longitude: 105.822118,
      },
      "Mai Anh Tuấn": {
        latitude: 21.0191712,
        longitude: 105.8206014,
      },
      "Nguyễn Lương Bằng": {
        latitude: 21.018502,
        longitude: 105.829733,
      },
      "Nguyễn Phúc Lai": {
        latitude: 21.0219381,
        longitude: 105.8222454,
      },
      "Quan Thổ 1": {
        latitude: 21.0239385,
        longitude: 105.8291585,
      },
      "Trần Quang Diệu": {
        latitude: 21.014682,
        longitude: 105.823952,
      },
      "Võ Văn Dũng": {
        latitude: 21.0162231,
        longitude: 105.8233841,
      },
      "Vũ Thạnh": {
        latitude: 21.026655,
        longitude: 105.826186,
      },
      "Ô Chợ Dừa": {
        latitude: 21.0190665,
        longitude: 105.828982,
      },
      "Đông Các": {
        latitude: 21.018581,
        longitude: 105.828413,
      },
    },
    "Phương Liên": {
      "Hoàng Tích Trí": {
        latitude: 21.008374,
        longitude: 105.83625,
      },
      "Kim Hoa": {
        latitude: 21.010397,
        longitude: 105.8384,
      },
      "Lê Duẩn": {
        latitude: 21.015319,
        longitude: 105.841422,
      },
      "Phạm Ngọc Thạch": {
        latitude: 21.009174,
        longitude: 105.834798,
      },
      "Xã Đàn": {
        latitude: 21.0100709,
        longitude: 105.837829,
      },
      "Ô Đồng Lầm": {
        latitude: 21.0139308,
        longitude: 105.8396383,
      },
    },
    "Phương Mai": {
      "Giải Phóng": {
        latitude: 21.003052,
        longitude: 105.841302,
      },
      "Lê Duẩn": {
        latitude: 21.015319,
        longitude: 105.841422,
      },
      "Lương Định Của": {
        latitude: 21.001333,
        longitude: 105.8360148,
      },
      "Phương Mai": {
        latitude: 21.0037916,
        longitude: 105.8374303,
      },
      "Phố Vọng": {
        latitude: 20.9989504,
        longitude: 105.8419412,
      },
      "Trường Chinh": {
        latitude: 21.000282,
        longitude: 105.830805,
      },
      "Xã Đàn": {
        latitude: 21.0100709,
        longitude: 105.837829,
      },
      "Đào Duy Anh": {
        latitude: 21.00798,
        longitude: 105.839154,
      },
      "Đại La": {
        latitude: 21.0012137,
        longitude: 105.8275948,
      },
    },
    "Quang Trung": {
      "Chùa Bộc": {
        latitude: 21.006884,
        longitude: 105.829832,
      },
      "Hồ Đắc Di": {
        latitude: 21.012509,
        longitude: 105.82862,
      },
      "Liên Việt": {
        latitude: 21.0140375,
        longitude: 105.8277647,
      },
      "Nguyễn Lương Bằng": {
        latitude: 21.018502,
        longitude: 105.829733,
      },
      "Nguyễn Ngọc Doãn": {
        latitude: 21.0089092,
        longitude: 105.8300708,
      },
      "Trần Quang Diệu": {
        latitude: 21.014682,
        longitude: 105.823952,
      },
      "Tây Sơn": {
        latitude: 21.006676,
        longitude: 105.823012,
      },
    },
    "Quốc Tử Giám": {
      "An Trạch": {
        latitude: 21.027651,
        longitude: 105.830193,
      },
      "An Trạch 1": {
        latitude: 21.0268611,
        longitude: 105.8300549,
      },
      "An Trạch 2": {
        latitude: 21.0263933,
        longitude: 105.8311145,
      },
      "Bích Câu": {
        latitude: 21.027206,
        longitude: 105.832214,
      },
      "Cát Linh": {
        latitude: 21.02873,
        longitude: 105.831793,
      },
      "Hồ Giám": {
        latitude: 21.026465,
        longitude: 105.8343807,
      },
      "Quốc Tử Giám": {
        latitude: 21.0263523,
        longitude: 105.8371573,
      },
      "Thông Phong": {
        latitude: 21.0257411,
        longitude: 105.8347557,
      },
      "Tôn Đức Thắng": {
        latitude: 21.02404,
        longitude: 105.832531,
      },
      "Đoàn Thi Điểm": {
        latitude: 21.026513,
        longitude: 105.831929,
      },
      "Đặng Trần Côn": {
        latitude: 21.0275393,
        longitude: 105.8331702,
      },
    },
    "Thịnh Quang": {
      "Thái Thịnh": {
        latitude: 21.010484,
        longitude: 105.818445,
      },
      "Thái Thịnh 1": {
        latitude: 21.009371,
        longitude: 105.8162708,
      },
      "Thịnh Quang": {
        latitude: 21.0078221,
        longitude: 105.8179004,
      },
      "Vĩnh Hồ": {
        latitude: 21.006535,
        longitude: 105.8207199,
      },
      "Yên Lãng": {
        latitude: 21.01076,
        longitude: 105.816344,
      },
      "Đường Láng": {
        latitude: 21.02024,
        longitude: 105.801836,
      },
    },
    "Thổ Quan": {
      "Hồ Văn Chương": {
        latitude: 21.0222826,
        longitude: 105.8333067,
      },
      "Khâm Thiên": {
        latitude: 21.0194252,
        longitude: 105.8318137,
      },
      "Thổ Quan": {
        latitude: 21.0171175,
        longitude: 105.8334839,
      },
      "Trung Phụng": {
        latitude: 21.016101,
        longitude: 105.8355646,
      },
      "Trung Tả": {
        latitude: 21.0202436,
        longitude: 105.8344784,
      },
    },
    "Trung Liệt": {
      "Chùa Bộc": {
        latitude: 21.006884,
        longitude: 105.829832,
      },
      "Hoàng Cầu": {
        latitude: 21.016598,
        longitude: 105.823577,
      },
      "Nguyễn Văn Tuyết": {
        latitude: 21.008881,
        longitude: 105.820779,
      },
      "Tam Khương": {
        latitude: 21.004494,
        longitude: 105.828306,
      },
      "Thái Hà": {
        latitude: 21.014333,
        longitude: 105.818217,
      },
      "Trung Liệt": {
        latitude: 21.010684,
        longitude: 105.819898,
      },
      "Trần Quang Diệu": {
        latitude: 21.014682,
        longitude: 105.823952,
      },
      "Tây Sơn": {
        latitude: 21.006676,
        longitude: 105.823012,
      },
      "Võ Văn Dũng": {
        latitude: 21.0162231,
        longitude: 105.8233841,
      },
      "Đặng Tiến Đông": {
        latitude: 21.0131715,
        longitude: 105.822865,
      },
    },
    "Trung Phụng": {
      "Lê Duẩn": {
        latitude: 21.015319,
        longitude: 105.841422,
      },
      "Trung Phụng": {
        latitude: 21.016101,
        longitude: 105.8355646,
      },
      "Ô Đồng Lầm": {
        latitude: 21.0139308,
        longitude: 105.8396383,
      },
    },
    "Trung Tự": {
      "Chùa Bộc": {
        latitude: 21.006884,
        longitude: 105.829832,
      },
      "Nguyễn Ngọc Doãn": {
        latitude: 21.0089092,
        longitude: 105.8300708,
      },
      "Phạm Ngọc Thạch": {
        latitude: 21.009174,
        longitude: 105.834798,
      },
      "Tam Khương": {
        latitude: 21.004494,
        longitude: 105.828306,
      },
      "Tôn Thất Tùng": {
        latitude: 21.0050196,
        longitude: 105.8306219,
      },
      "Đông Tác": {
        latitude: 21.005859,
        longitude: 105.8333959,
      },
      "Đặng Văn Ngữ": {
        latitude: 21.010327,
        longitude: 105.831027,
      },
    },
    "Văn Chương": {
      "Hồ Văn Chương": {
        latitude: 21.0222826,
        longitude: 105.8333067,
      },
      "Linh Quang": {
        latitude: 21.023917,
        longitude: 105.8373506,
      },
      "Lương Sử A": {
        latitude: 21.0259003,
        longitude: 105.836478,
      },
      "Lương Sử B": {
        latitude: 21.0262484,
        longitude: 105.8363144,
      },
      "Lương Sử C": {
        latitude: 21.025429,
        longitude: 105.837432,
      },
      "Ngô Sĩ Liên": {
        latitude: 21.026552,
        longitude: 105.8384284,
      },
      "Quốc Tử Giám": {
        latitude: 21.0263523,
        longitude: 105.8371573,
      },
      "Trung Tiền": {
        latitude: 21.0200046,
        longitude: 105.8380308,
      },
      "Văn Chương": {
        latitude: 21.0223447,
        longitude: 105.8355849,
      },
    },
    "Văn Miếu": {
      "Lê Duẩn": {
        latitude: 21.015319,
        longitude: 105.841422,
      },
      "Nguyễn Khuyến": {
        latitude: 21.028185,
        longitude: 105.839168,
      },
      "Nguyễn Như Đổ": {
        latitude: 21.0265735,
        longitude: 105.8392923,
      },
      "Ngô Sĩ Liên": {
        latitude: 21.026552,
        longitude: 105.8384284,
      },
      "Ngô Tất Tố": {
        latitude: 21.0276406,
        longitude: 105.8370901,
      },
      "Thanh Miến": {
        latitude: 21.029241,
        longitude: 105.837983,
      },
      "Trần Quý Cáp": {
        latitude: 21.026385,
        longitude: 105.839904,
      },
      "Văn Miếu": {
        latitude: 21.029435,
        longitude: 105.83672,
      },
      "Yên Thế": {
        latitude: 21.0288013659608,
        longitude: 105.83929092117,
      },
    },
  },
  "Gia Lâm": {
    "Bát Tràng": {
      "Bát Tràng": {
        latitude: 20.9748395,
        longitude: 105.9116864,
      },
      "Giang Cao": {
        latitude: 20.978375,
        longitude: 105.9159261,
      },
      "Xuân Quan Long Biên": {
        latitude: 20.9926305,
        longitude: 105.9173143,
      },
    },
    "Cổ Bi": {
      "Cổ Bi": {
        latitude: 21.027842,
        longitude: 105.940697,
      },
      "Hà Nội Bắc Giang": {
        latitude: 21.063079,
        longitude: 105.9543602,
      },
      "Nguyễn Văn Linh": {
        latitude: 21.0253192,
        longitude: 105.9281871,
      },
      "Quốc Lộ 5": {
        latitude: 21.0093565,
        longitude: 105.9549106,
      },
      "Đê Vàng": {
        latitude: 21.0359858,
        longitude: 105.9653065,
      },
    },
    "Dương Hà": {
      "Dương Hà": {
        latitude: 21.0762152,
        longitude: 105.9325143,
      },
      "Đê Đuống": {
        latitude: 21.0727826,
        longitude: 105.9262112,
      },
    },
    "Dương Quang": {
      "Dương Xá": {
        latitude: 21.0083537,
        longitude: 105.9684409,
      },
    },
    "Dương Xá": {
      "Dương Xá": {
        latitude: 21.0083537,
        longitude: 105.9684409,
      },
      "Kiêu Kỵ": {
        latitude: 20.982848,
        longitude: 105.959871,
      },
      "Lò Gạch Mới": {
        latitude: 21.011754,
        longitude: 105.9614905,
      },
      "Nguyễn Bình": {
        latitude: 21.0031194,
        longitude: 105.9636201,
      },
      "Quốc Lộ 5": {
        latitude: 21.0093565,
        longitude: 105.9549106,
      },
      "Sao Biển 10": {
        latitude: 20.9962732,
        longitude: 105.9533119,
      },
      "Sao Biển 8": {
        latitude: 20.9966846,
        longitude: 105.953173,
      },
      "Ỷ Lan": {
        latitude: 21.0107599,
        longitude: 105.9667996,
      },
    },
    "Đa Tốn": {
      "Chín Khúc": {
        latitude: 20.9805053,
        longitude: 105.9290647,
      },
      "Chùa Cự Đà": {
        latitude: 20.9835104,
        longitude: 105.9300665,
      },
      "Chợ Bún": {
        latitude: 20.9853162,
        longitude: 105.9292858,
      },
      "Cổng Cái": {
        latitude: 20.9787876,
        longitude: 105.9328384,
      },
      "Giáp Hải": {
        latitude: 20.983529,
        longitude: 105.925418,
      },
      "Hà Nội Hải Phòng": {
        latitude: 21.0025911,
        longitude: 105.9270325,
      },
      "Hải Đăng 2": {
        latitude: 20.9960512,
        longitude: 105.9425548,
      },
      "Lê Xá": {
        latitude: 20.9871054,
        longitude: 105.9361341,
      },
      "Lý Thánh Tông": {
        latitude: 20.9976096,
        longitude: 105.9335663,
      },
      "Ngõ Thùa": {
        latitude: 20.9797284,
        longitude: 105.9278756,
      },
      "San Hô": {
        latitude: 20.9918852,
        longitude: 105.9485673,
      },
      "San Hô 1": {
        latitude: 20.990081,
        longitude: 105.9499592,
      },
      "San Hô 11": {
        latitude: 20.9918781,
        longitude: 105.9468351,
      },
      "San Hô 12": {
        latitude: 20.9922174,
        longitude: 105.9465481,
      },
      "San Hô 15": {
        latitude: 20.9924703,
        longitude: 105.9462316,
      },
      "San Hô 16": {
        latitude: 20.992672,
        longitude: 105.9458951,
      },
      "San Hô 8": {
        latitude: 20.991298,
        longitude: 105.94791,
      },
      "Xuân Quan Long Biên": {
        latitude: 20.9926305,
        longitude: 105.9173143,
      },
      "Xóm Xúc": {
        latitude: 20.980615,
        longitude: 105.9281847,
      },
      "Xóm Đá": {
        latitude: 20.984024,
        longitude: 105.9304927,
      },
      "Đa Tốn": {
        latitude: 20.9860864,
        longitude: 105.9294967,
      },
      "Đào Xuyên": {
        latitude: 20.989742,
        longitude: 105.931202,
      },
      "Đại Dương 1": {
        latitude: 20.9920971,
        longitude: 105.9422252,
      },
      "Đại Dương 2": {
        latitude: 20.9930327,
        longitude: 105.9400586,
      },
      "Đại Dương 8": {
        latitude: 20.9916171,
        longitude: 105.9405501,
      },
      "Đại Dương 9": {
        latitude: 20.9925469,
        longitude: 105.9411208,
      },
    },
    "Đặng Xá": {
      "Quốc Lộ 17": {
        latitude: 21.0213764,
        longitude: 105.9686513,
      },
      "Đê Vàng": {
        latitude: 21.0359858,
        longitude: 105.9653065,
      },
      "Đường ĐX10": {
        latitude: 21.0146443,
        longitude: 105.9509665,
      },
      "Đường ĐX3": {
        latitude: 21.0160583,
        longitude: 105.9512845,
      },
      "Ỷ Lan": {
        latitude: 21.0107599,
        longitude: 105.9667996,
      },
    },
    "Đình Xuyên": {
      "Dương Hà": {
        latitude: 21.0762152,
        longitude: 105.9325143,
      },
      "Đình Xuyên": {
        latitude: 21.08936,
        longitude: 105.928901,
      },
    },
    "Đông Dư": {
      "Bát Khối": {
        latitude: 21.0035413,
        longitude: 105.9092817,
      },
      "Giáp Hải": {
        latitude: 20.983529,
        longitude: 105.925418,
      },
      "Hà Nội Hải Phòng": {
        latitude: 21.0025911,
        longitude: 105.9270325,
      },
      "Lý Thánh Tông": {
        latitude: 20.9976096,
        longitude: 105.9335663,
      },
      "Xuân Quan Long Biên": {
        latitude: 20.9926305,
        longitude: 105.9173143,
      },
    },
    "Kiêu Kỵ": {
      "Hà Nội Hải Phòng": {
        latitude: 21.0025911,
        longitude: 105.9270325,
      },
      "Kiêu Kỵ": {
        latitude: 20.982848,
        longitude: 105.959871,
      },
      "San Hô 1": {
        latitude: 20.990081,
        longitude: 105.9499592,
      },
    },
    "Kim Lan": {
      "Văn Đức Kim Lan": {
        latitude: 20.9492179,
        longitude: 105.9021658,
      },
    },
    "Kim Sơn": {
      "Ngõ Cả": {
        latitude: 21.0237042,
        longitude: 105.9978924,
      },
      "Quốc Lộ 17": {
        latitude: 21.0213764,
        longitude: 105.9686513,
      },
      "Đê Vàng": {
        latitude: 21.0359858,
        longitude: 105.9653065,
      },
    },
    "Lệ Chi": {
      "Quốc Lộ 17": {
        latitude: 21.0213764,
        longitude: 105.9686513,
      },
      "Đê Vàng": {
        latitude: 21.0359858,
        longitude: 105.9653065,
      },
    },
    "Ninh Hiệp": {
      "Dương Hà": {
        latitude: 21.0762152,
        longitude: 105.9325143,
      },
      "Hà Nội Bắc Giang": {
        latitude: 21.063079,
        longitude: 105.9543602,
      },
      "Hà Nội Thái Nguyên": {
        latitude: 21.098652,
        longitude: 105.934842,
      },
      "Ninh Hiệp": {
        latitude: 21.082448,
        longitude: 105.939997,
      },
    },
    "Phù Đổng": {
      "Hà Nội Bắc Giang": {
        latitude: 21.063079,
        longitude: 105.9543602,
      },
      "Ninh Hiệp": {
        latitude: 21.082448,
        longitude: 105.939997,
      },
      "Phù Đổng": {
        latitude: 21.0618222,
        longitude: 105.9667314,
      },
      "Đt 179": {
        latitude: 21.0614439,
        longitude: 105.9659482,
      },
    },
    "Phú Thị": {
      "Lò Gạch Mới": {
        latitude: 21.011754,
        longitude: 105.9614905,
      },
      "Quốc Lộ 17": {
        latitude: 21.0213764,
        longitude: 105.9686513,
      },
      "Thôn Hàn Lạc": {
        latitude: 21.0263671,
        longitude: 105.9708681,
      },
      "Thôn Tô Khê": {
        latitude: 21.0295536,
        longitude: 105.9677283,
      },
      "Đê Vàng": {
        latitude: 21.0359858,
        longitude: 105.9653065,
      },
      "Ỷ Lan": {
        latitude: 21.0107599,
        longitude: 105.9667996,
      },
    },
    "Trâu Quỳ": {
      "An Lạc": {
        latitude: 21.0150362,
        longitude: 105.9257081,
      },
      "An Đào A": {
        latitude: 21.0028252,
        longitude: 105.9393154,
      },
      "An Đào B": {
        latitude: 21.0023083,
        longitude: 105.9390315,
      },
      "An Đào C": {
        latitude: 20.9998905,
        longitude: 105.9419617,
      },
      "An Đào D": {
        latitude: 20.9978492,
        longitude: 105.9432612,
      },
      "Chính Trung": {
        latitude: 21.0159883,
        longitude: 105.9375721,
      },
      "Cổ Bi": {
        latitude: 21.027842,
        longitude: 105.940697,
      },
      "Cửu Việt": {
        latitude: 21.014165,
        longitude: 105.9395688,
      },
      "Cửu Việt 1": {
        latitude: 21.0096517,
        longitude: 105.9385268,
      },
      "Cửu Việt 2": {
        latitude: 21.0091309,
        longitude: 105.9367167,
      },
      "Hà Nội Hải Phòng": {
        latitude: 21.0025911,
        longitude: 105.9270325,
      },
      "Hải Đăng 2": {
        latitude: 20.9960512,
        longitude: 105.9425548,
      },
      "Kiên Thành": {
        latitude: 21.0072984,
        longitude: 105.9494052,
      },
      "Lý Thánh Tông": {
        latitude: 20.9976096,
        longitude: 105.9335663,
      },
      "Nguyễn Bình": {
        latitude: 21.0031194,
        longitude: 105.9636201,
      },
      "Nguyễn Khiêm Ích": {
        latitude: 21.0135522,
        longitude: 105.9389625,
      },
      "Nguyễn Mậu Tài": {
        latitude: 21.016497,
        longitude: 105.941,
      },
      "Nguyễn Đức Thuận": {
        latitude: 21.0148925,
        longitude: 105.9468267,
      },
      "Ngô Xuân Quảng": {
        latitude: 21.0134591,
        longitude: 105.9362249,
      },
      "Quốc Lộ 17": {
        latitude: 21.0213764,
        longitude: 105.9686513,
      },
      "Quốc Lộ 5": {
        latitude: 21.0093565,
        longitude: 105.9549106,
      },
      "Thành Trung": {
        latitude: 21.010292,
        longitude: 105.938432,
      },
      "Trâu Qùy": {
        latitude: 21.0052147,
        longitude: 105.9378612,
      },
      "Đoàn Quang Dung": {
        latitude: 21.0119334,
        longitude: 105.9446012,
      },
      "Đường E": {
        latitude: 20.9994024,
        longitude: 105.9410076,
      },
      "Đường G": {
        latitude: 21.0076196,
        longitude: 105.9356495,
      },
      "Đường N": {
        latitude: 21.0079552,
        longitude: 105.9358373,
      },
      "Đường T": {
        latitude: 21.0066707,
        longitude: 105.9352229,
      },
      "Đường U": {
        latitude: 21.0068353,
        longitude: 105.9363333,
      },
    },
    "Trung Mầu": {
      "Trung Mầu": {
        latitude: 21.0618532,
        longitude: 105.9834118,
      },
    },
    "Văn Đức": {
      "Trung Quan": {
        latitude: 20.9502501,
        longitude: 105.8954739,
      },
      "Văn Đức Kim Lan": {
        latitude: 20.9492179,
        longitude: 105.9021658,
      },
      "Đội 1": {
        latitude: 20.949801,
        longitude: 105.897044,
      },
      "Đội 10": {
        latitude: 20.9460967,
        longitude: 105.8974433,
      },
      "Đội 2": {
        latitude: 20.9489118,
        longitude: 105.896867,
      },
      "Đội 3": {
        latitude: 20.9487286,
        longitude: 105.8975983,
      },
      "Đội 4": {
        latitude: 20.9482176,
        longitude: 105.8974803,
      },
      "Đội 5": {
        latitude: 20.9478205,
        longitude: 105.89748,
      },
      "Đội 6": {
        latitude: 20.9473273,
        longitude: 105.8980666,
      },
    },
    "Yên Thường": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.098652,
        longitude: 105.934842,
      },
      "Ninh Hiệp": {
        latitude: 21.082448,
        longitude: 105.939997,
      },
      "Yên Thường": {
        latitude: 21.096542,
        longitude: 105.91496,
      },
      "Đặng Phúc Thông": {
        latitude: 21.098586,
        longitude: 105.930589,
      },
    },
    "Yên Viên": {
      "Hà Huy Tập": {
        latitude: 21.088675,
        longitude: 105.920578,
      },
      "Phan Đăng Lưu": {
        latitude: 21.0805808,
        longitude: 105.9090772,
      },
      "Đình Xuyên": {
        latitude: 21.08936,
        longitude: 105.928901,
      },
    },
  },
  "Hà Đông": {
    "Biên Giang": {
      "Quang Trung": {
        latitude: 20.969753,
        longitude: 105.774231,
      },
      "Quốc Lộ 6": {
        latitude: 20.947906,
        longitude: 105.745965,
      },
    },
    "Dương Nội": {
      "Chùa Võ": {
        latitude: 20.9816618,
        longitude: 105.7466191,
      },
      "Dương Nội": {
        latitude: 20.9817024,
        longitude: 105.7423936,
      },
      "La Dương": {
        latitude: 20.9914314,
        longitude: 105.737516,
      },
      "La Nội": {
        latitude: 20.9844873,
        longitude: 105.749014,
      },
      "Lê Trọng Tấn": {
        latitude: 20.971983,
        longitude: 105.748344,
      },
      "Nguyễn Văn Trác": {
        latitude: 20.9603801,
        longitude: 105.7437533,
      },
      "Tiền Thành": {
        latitude: 20.9923272,
        longitude: 105.7408758,
      },
      "Yên Lộ": {
        latitude: 20.964267,
        longitude: 105.750683,
      },
    },
    "Đồng Mai": {
      "Quang Trung": {
        latitude: 20.969753,
        longitude: 105.774231,
      },
      "Quốc Lộ 6": {
        latitude: 20.947906,
        longitude: 105.745965,
      },
      "Yên Nghĩa": {
        latitude: 20.9422954,
        longitude: 105.7374299,
      },
    },
    "Hà Cầu": {
      "Bà Triệu": {
        latitude: 20.968819,
        longitude: 105.781499,
      },
      "Hà Cầu": {
        latitude: 20.9640012,
        longitude: 105.7702769,
      },
      "Hà Trì": {
        latitude: 20.963894,
        longitude: 105.783105,
      },
      "Lê Hồng Phong": {
        latitude: 20.966665,
        longitude: 105.77487,
      },
      "Lê Lai": {
        latitude: 20.964716,
        longitude: 105.776845,
      },
      "Lê Lợi": {
        latitude: 20.969181,
        longitude: 105.779344,
      },
      "Lê Quý Đôn": {
        latitude: 20.967288,
        longitude: 105.781081,
      },
      "Lương Văn Can": {
        latitude: 20.966633,
        longitude: 105.776595,
      },
      "Quang Trung": {
        latitude: 20.969753,
        longitude: 105.774231,
      },
      "Quốc Lộ 6": {
        latitude: 20.947906,
        longitude: 105.745965,
      },
      "Tô Hiệu": {
        latitude: 20.967041,
        longitude: 105.777924,
      },
    },
    "Kiến Hưng": {
      "Hà Trì": {
        latitude: 20.963894,
        longitude: 105.783105,
      },
      "Phúc La": {
        latitude: 20.9605062,
        longitude: 105.7921861,
      },
    },
    "La Khê": {
      "Lê Trọng Tấn": {
        latitude: 20.971983,
        longitude: 105.748344,
      },
      "Lý Tự Trọng": {
        latitude: 20.970179,
        longitude: 105.761633,
      },
      "Nguyễn Viết Xuân": {
        latitude: 20.9705733,
        longitude: 105.7700352,
      },
      "Nguyễn Văn Trác": {
        latitude: 20.9603801,
        longitude: 105.7437533,
      },
      "Ngô Quyền": {
        latitude: 20.970556,
        longitude: 105.761724,
      },
      "Ngô Đình Mẫn": {
        latitude: 20.967541,
        longitude: 105.759746,
      },
      "Phan Đình Giót": {
        latitude: 20.966481,
        longitude: 105.765441,
      },
      "Quang Trung": {
        latitude: 20.969753,
        longitude: 105.774231,
      },
      "Tố Hữu": {
        latitude: 20.970508,
        longitude: 105.754751,
      },
      "Văn Khê": {
        latitude: 20.9753072,
        longitude: 105.7621905,
      },
      "Yên Lộ": {
        latitude: 20.964267,
        longitude: 105.750683,
      },
    },
    "Mộ Lao": {
      "An Hòa": {
        latitude: 20.983401,
        longitude: 105.790179,
      },
      "Ao Sen": {
        latitude: 20.982042,
        longitude: 105.788354,
      },
      "Mỗ Lao": {
        latitude: 20.98327,
        longitude: 105.7823339,
      },
      "Nguyễn Khắc Hạnh": {
        latitude: 20.981889,
        longitude: 105.77975,
      },
      "Nguyễn Văn Lộc": {
        latitude: 20.9855487,
        longitude: 105.7825913,
      },
      "Nguyễn Văn Trỗi": {
        latitude: 20.979917,
        longitude: 105.786728,
      },
      "Ngô Thì Sỹ": {
        latitude: 20.979266,
        longitude: 105.77911,
      },
      "Thanh Bình": {
        latitude: 20.980262,
        longitude: 105.779429,
      },
      "Vũ Trọng Khánh": {
        latitude: 20.983666,
        longitude: 105.782231,
      },
    },
    "Nguyễn Trãi": {
      "An Hòa": {
        latitude: 20.983401,
        longitude: 105.790179,
      },
      "Ao Sen": {
        latitude: 20.982042,
        longitude: 105.788354,
      },
      "Mỗ Lao": {
        latitude: 20.98327,
        longitude: 105.7823339,
      },
      "Nguyễn Khắc Hạnh": {
        latitude: 20.981889,
        longitude: 105.77975,
      },
      "Nguyễn Văn Lộc": {
        latitude: 20.9855487,
        longitude: 105.7825913,
      },
      "Nguyễn Văn Trỗi": {
        latitude: 20.979917,
        longitude: 105.786728,
      },
      "Ngô Thì Sỹ": {
        latitude: 20.979266,
        longitude: 105.77911,
      },
      "Thanh Bình": {
        latitude: 20.980262,
        longitude: 105.779429,
      },
      "Vũ Trọng Khánh": {
        latitude: 20.983666,
        longitude: 105.782231,
      },
    },
    "Phú La": {
      "An Hòa": {
        latitude: 20.983401,
        longitude: 105.790179,
      },
      "Ao Sen": {
        latitude: 20.982042,
        longitude: 105.788354,
      },
      "Mỗ Lao": {
        latitude: 20.98327,
        longitude: 105.7823339,
      },
      "Nguyễn Khắc Hạnh": {
        latitude: 20.981889,
        longitude: 105.77975,
      },
      "Nguyễn Văn Lộc": {
        latitude: 20.9855487,
        longitude: 105.7825913,
      },
      "Nguyễn Văn Trỗi": {
        latitude: 20.979917,
        longitude: 105.786728,
      },
      "Ngô Thì Sỹ": {
        latitude: 20.979266,
        longitude: 105.77911,
      },
      "Thanh Bình": {
        latitude: 20.980262,
        longitude: 105.779429,
      },
      "Vũ Trọng Khánh": {
        latitude: 20.983666,
        longitude: 105.782231,
      },
    },
    "Phú Lãm": {
      "Quang Trung": {
        latitude: 20.969753,
        longitude: 105.774231,
      },
      "Quốc Lộ 21b": {
        latitude: 20.9436415,
        longitude: 105.7567351,
      },
      "Quốc Lộ 6": {
        latitude: 20.947906,
        longitude: 105.745965,
      },
    },
    "Phú Lương": {
      "Quốc Lộ 21b": {
        latitude: 20.9436415,
        longitude: 105.7567351,
      },
    },
    "Phúc La": {
      "19/5": {
        latitude: 20.9767708,
        longitude: 105.7909314,
      },
      "Bạch Thái Bưởi": {
        latitude: 20.969707,
        longitude: 105.788525,
      },
      "Lê Hữu Trác": {
        latitude: 20.9667711,
        longitude: 105.7865257,
      },
      "Nguyễn Công Trứ": {
        latitude: 20.971684,
        longitude: 105.784555,
      },
      "Nguyễn Khuyến": {
        latitude: 20.971641,
        longitude: 105.790634,
      },
      "Phùng Hưng": {
        latitude: 20.972325,
        longitude: 105.782596,
      },
      "Phúc La": {
        latitude: 20.9605062,
        longitude: 105.7921861,
      },
      "Tuyến K15": {
        latitude: 20.973425,
        longitude: 105.787878,
      },
      "Tô Hiến Thành": {
        latitude: 20.97132,
        longitude: 105.784444,
      },
      "Văn Yên": {
        latitude: 20.972579,
        longitude: 105.7849015,
      },
      "Xa La": {
        latitude: 20.9639246,
        longitude: 105.7892446,
      },
      "Yên Bình": {
        latitude: 20.971556,
        longitude: 105.787868,
      },
      "Yên Phúc": {
        latitude: 20.97035,
        longitude: 105.78791,
      },
    },
    "Quang Trung": {
      "Bà Triệu": {
        latitude: 20.968819,
        longitude: 105.781499,
      },
      "Bế Văn Đàn": {
        latitude: 20.969304,
        longitude: 105.77269,
      },
      "Hoàng Hoa Thám": {
        latitude: 20.971557,
        longitude: 105.777353,
      },
      "Lê Hồng Phong": {
        latitude: 20.966665,
        longitude: 105.77487,
      },
      "Lê Lợi": {
        latitude: 20.969181,
        longitude: 105.779344,
      },
      "Lý Thường Kiệt": {
        latitude: 20.9653375,
        longitude: 105.7695198,
      },
      "Lý Tự Trọng": {
        latitude: 20.970179,
        longitude: 105.761633,
      },
      "Nguyễn Thái Học": {
        latitude: 20.972552,
        longitude: 105.775431,
      },
      "Nguyễn Viết Xuân": {
        latitude: 20.9705733,
        longitude: 105.7700352,
      },
      "Ngô Quyền": {
        latitude: 20.970556,
        longitude: 105.761724,
      },
      "Ngô Thì Nhậm": {
        latitude: 20.9682077,
        longitude: 105.7696603,
      },
      "Phan Đình Giót": {
        latitude: 20.966481,
        longitude: 105.765441,
      },
      "Phan Đình Phùng": {
        latitude: 20.9738555,
        longitude: 105.7776546,
      },
      "Quang Trung": {
        latitude: 20.969753,
        longitude: 105.774231,
      },
      "Quốc Lộ 6": {
        latitude: 20.947906,
        longitude: 105.745965,
      },
      "Trưng Nhị": {
        latitude: 20.971401,
        longitude: 105.778138,
      },
      "Trương Công Định": {
        latitude: 20.973063,
        longitude: 105.775425,
      },
      "Trần Đăng Ninh": {
        latitude: 20.9642604,
        longitude: 105.7686564,
      },
      "Đoàn Trần Nghiệp": {
        latitude: 20.9705208,
        longitude: 105.774764,
      },
    },
    "Vạn Phúc": {
      "Cầu Am": {
        latitude: 20.9774408,
        longitude: 105.7758669,
      },
      "Ngô Quyền": {
        latitude: 20.970556,
        longitude: 105.761724,
      },
      "Ngô Thì Sỹ": {
        latitude: 20.979266,
        longitude: 105.77911,
      },
      "Phố Lụa": {
        latitude: 20.9805109,
        longitude: 105.7752236,
      },
      "Tố Hữu": {
        latitude: 20.970508,
        longitude: 105.754751,
      },
      "Vạn Phúc": {
        latitude: 20.978411,
        longitude: 105.773994,
      },
    },
    "Văn Quán": {
      "19/5": {
        latitude: 20.9767708,
        longitude: 105.7909314,
      },
      "Chiến Thắng": {
        latitude: 20.978546,
        longitude: 105.796775,
      },
      "Lương Ngọc Quyến": {
        latitude: 20.98432,
        longitude: 105.794797,
      },
      "Mỗ Lao": {
        latitude: 20.98327,
        longitude: 105.7823339,
      },
      "Nguyễn Khuyến": {
        latitude: 20.971641,
        longitude: 105.790634,
      },
      "Nguyễn Trãi": {
        latitude: 20.985967,
        longitude: 105.7955433,
      },
      "Nguyễn Văn Lộc": {
        latitude: 20.9855487,
        longitude: 105.7825913,
      },
      "Phùng Hưng": {
        latitude: 20.972325,
        longitude: 105.782596,
      },
      "Trần Phú": {
        latitude: 20.975468,
        longitude: 105.781978,
      },
      "Văn Quán": {
        latitude: 20.978724,
        longitude: 105.796025,
      },
      "Văn Yên": {
        latitude: 20.972579,
        longitude: 105.7849015,
      },
      "Vũ Trọng Khánh": {
        latitude: 20.983666,
        longitude: 105.782231,
      },
      "Đại An": {
        latitude: 20.979634,
        longitude: 105.7909352,
      },
    },
    "Yên Nghĩa": {
      "Nguyễn Văn Trác": {
        latitude: 20.9603801,
        longitude: 105.7437533,
      },
      "Quang Trung": {
        latitude: 20.969753,
        longitude: 105.774231,
      },
      "Quốc Lộ 6": {
        latitude: 20.947906,
        longitude: 105.745965,
      },
      "Yên Lộ": {
        latitude: 20.964267,
        longitude: 105.750683,
      },
      "Yên Nghĩa": {
        latitude: 20.9422954,
        longitude: 105.7374299,
      },
    },
    "Yết Kiêu": {
      "Cao Thắng": {
        latitude: 20.974147,
        longitude: 105.774628,
      },
      "Chu Văn An": {
        latitude: 20.974712,
        longitude: 105.777594,
      },
      "Huỳnh Thúc Kháng": {
        latitude: 20.972842,
        longitude: 105.776247,
      },
      "Nguyễn Thái Học": {
        latitude: 20.972552,
        longitude: 105.775431,
      },
      "Nguyễn Thượng Hiền": {
        latitude: 20.973383,
        longitude: 105.775776,
      },
      "Ngô Gia Khảm": {
        latitude: 20.974244,
        longitude: 105.775457,
      },
      "Nhuệ Giang": {
        latitude: 20.972801,
        longitude: 105.780449,
      },
      "Phan Chu Trinh": {
        latitude: 20.9738149,
        longitude: 105.7771101,
      },
      "Phan Huy Chú": {
        latitude: 20.974147,
        longitude: 105.774628,
      },
      "Phan Đình Phùng": {
        latitude: 20.9738555,
        longitude: 105.7776546,
      },
      "Quang Trung": {
        latitude: 20.969753,
        longitude: 105.774231,
      },
      "Quốc Lộ 6": {
        latitude: 20.947906,
        longitude: 105.745965,
      },
      "Trương Công Định": {
        latitude: 20.973063,
        longitude: 105.775425,
      },
      "Tây Sơn": {
        latitude: 20.974427,
        longitude: 105.776104,
      },
    },
  },
  "Hai Bà Trưng": {
    "Bạch Đằng": {
      "Bạch Đằng": {
        latitude: 21.010002,
        longitude: 105.86803,
      },
      "Lãng Yên": {
        latitude: 21.009394,
        longitude: 105.86696,
      },
      "Lê Quý Đôn": {
        latitude: 21.0131319,
        longitude: 105.8610124,
      },
      "Lương Yên": {
        latitude: 21.011603,
        longitude: 105.8626888,
      },
      "Nguyễn Cao": {
        latitude: 21.0126437,
        longitude: 105.8611129,
      },
      "Nguyễn Huy Tự": {
        latitude: 21.0137393,
        longitude: 105.8610953,
      },
      "Nguyễn Khoái": {
        latitude: 21.012032,
        longitude: 105.863753,
      },
      "Trần Hưng Đạo": {
        latitude: 21.019044,
        longitude: 105.858708,
      },
      "Trần Khánh Dư": {
        latitude: 21.013997,
        longitude: 105.86285,
      },
      "Trần Khát Chân": {
        latitude: 21.008642,
        longitude: 105.863347,
      },
      "Trần Thánh Tông": {
        latitude: 21.0156743,
        longitude: 105.8594969,
      },
      "Tây Kết": {
        latitude: 21.015175,
        longitude: 105.864346,
      },
      "Vạn Kiếp": {
        latitude: 21.0187045,
        longitude: 105.8627915,
      },
      "Đê Trần Khát Chân": {
        latitude: 21.006838,
        longitude: 105.86595,
      },
      "Đầm Trấu": {
        latitude: 21.0120352,
        longitude: 105.8655045,
      },
    },
    "Bách Khoa": {
      "Giải Phóng": {
        latitude: 21.0029194,
        longitude: 105.8414624,
      },
      "Hầm Kim Liên": {
        latitude: 21.0076916,
        longitude: 105.8428374,
      },
      "Lê Thanh Nghị": {
        latitude: 21.003379,
        longitude: 105.84869,
      },
      "Nguyễn Hiền": {
        latitude: 21.0005591,
        longitude: 105.8462597,
      },
      "Trần Đại Nghĩa": {
        latitude: 21.0022,
        longitude: 105.844822,
      },
      "Tạ Quang Bửu": {
        latitude: 21.005176,
        longitude: 105.847111,
      },
      "Đại Cồ Việt": {
        latitude: 21.007694,
        longitude: 105.84363,
      },
    },
    "Bạch Mai": {
      "Bùi Ngọc Dương": {
        latitude: 20.999992,
        longitude: 105.852833,
      },
      "Bạch Mai": {
        latitude: 21.000148,
        longitude: 105.85052,
      },
      "Chùa Quỳnh": {
        latitude: 20.99937,
        longitude: 105.8573008,
      },
      "Hồng Mai": {
        latitude: 20.998837,
        longitude: 105.853619,
      },
      "Lê Thanh Nghị": {
        latitude: 21.003379,
        longitude: 105.84869,
      },
      "Sông Lấp": {
        latitude: 21.000454,
        longitude: 105.854582,
      },
      "Thanh Nhàn": {
        latitude: 21.002788,
        longitude: 105.855704,
      },
    },
    "Bùi Thị Xuân": {
      "Bà Triệu": {
        latitude: 21.013346,
        longitude: 105.849203,
      },
      "Bùi Thị Xuân": {
        latitude: 21.0158913,
        longitude: 105.8498361,
      },
      "Mai Hắc Đế": {
        latitude: 21.0110032,
        longitude: 105.850858,
      },
      "Nguyễn Du": {
        latitude: 21.018882,
        longitude: 105.848463,
      },
      "Triệu Việt Vương": {
        latitude: 21.014473,
        longitude: 105.8503637,
      },
      "Tuệ Tĩnh": {
        latitude: 21.015158,
        longitude: 105.849244,
      },
      "Tô Hiến Thành": {
        latitude: 21.0133,
        longitude: 105.848629,
      },
    },
    "Cầu Dền": {
      "Bạch Mai": {
        latitude: 21.000148,
        longitude: 105.85052,
      },
      "Lê Thanh Nghị": {
        latitude: 21.003379,
        longitude: 105.84869,
      },
      "Trần Khát Chân": {
        latitude: 21.008642,
        longitude: 105.863347,
      },
      "Tô Hoàng": {
        latitude: 21.007537,
        longitude: 105.850184,
      },
      "Đê Tô Hoàng": {
        latitude: 21.0072,
        longitude: 105.849617,
      },
      "Đại Cồ Việt": {
        latitude: 21.007694,
        longitude: 105.84363,
      },
    },
    "Đống Mác": {
      "Cảm Hội": {
        latitude: 21.011142,
        longitude: 105.860761,
      },
      "Lò Đúc": {
        latitude: 21.0140291,
        longitude: 105.8574963,
      },
      "Nguyễn Cao": {
        latitude: 21.0126437,
        longitude: 105.8611129,
      },
      "Nguyễn Công Trứ": {
        latitude: 21.0139934,
        longitude: 105.8553239,
      },
      "Thọ Lão": {
        latitude: 21.01103,
        longitude: 105.856594,
      },
      "Đống Mác": {
        latitude: 21.009683,
        longitude: 105.860347,
      },
    },
    "Đồng Nhân": {
      "Hương Viên": {
        latitude: 21.01282,
        longitude: 105.8562705,
      },
      "Lê Gia Đỉnh": {
        latitude: 21.010853,
        longitude: 105.8545646,
      },
      "Nguyễn Công Trứ": {
        latitude: 21.0139934,
        longitude: 105.8553239,
      },
      "Đồng Nhân": {
        latitude: 21.0132752,
        longitude: 105.8551073,
      },
      "Đỗ Ngọc Du": {
        latitude: 21.01339,
        longitude: 105.855847,
      },
    },
    "Đồng Tâm": {
      "Giải Phóng": {
        latitude: 21.0029194,
        longitude: 105.8414624,
      },
      "Lê Thanh Nghị": {
        latitude: 21.003379,
        longitude: 105.84869,
      },
      "Nguyễn An Ninh": {
        latitude: 20.9934277,
        longitude: 105.8431607,
      },
      "Phố Vọng": {
        latitude: 20.99484,
        longitude: 105.842597,
      },
      "Trần Đại Nghĩa": {
        latitude: 21.0022,
        longitude: 105.844822,
      },
    },
    "Lê Đại Hành": {
      "Bà Triệu": {
        latitude: 21.013346,
        longitude: 105.849203,
      },
      "Bùi Thị Xuân": {
        latitude: 21.0158913,
        longitude: 105.8498361,
      },
      "Cao Đạt": {
        latitude: 21.009504,
        longitude: 105.849894,
      },
      "Hoa Lư": {
        latitude: 21.010015,
        longitude: 105.847829,
      },
      "Lê Duẩn": {
        latitude: 21.017135,
        longitude: 105.841456,
      },
      "Lê Đại Hành": {
        latitude: 21.009746,
        longitude: 105.849996,
      },
      "Mai Hắc Đế": {
        latitude: 21.0110032,
        longitude: 105.850858,
      },
      "Nguyễn Bỉnh Khiêm": {
        latitude: 21.0136998,
        longitude: 105.8482733,
      },
      "Nguyễn Đình Chiểu": {
        latitude: 21.009502,
        longitude: 105.845721,
      },
      "Thái Phiên": {
        latitude: 21.010579,
        longitude: 105.850049,
      },
      "Thể Giao": {
        latitude: 21.0131982,
        longitude: 105.8473594,
      },
      "Trần Nhân Tông": {
        latitude: 21.01739,
        longitude: 105.843742,
      },
      "Tô Hiến Thành": {
        latitude: 21.0133,
        longitude: 105.848629,
      },
      "Vân Hồ 3": {
        latitude: 21.0099228,
        longitude: 105.8462096,
      },
      "Đoàn Trần Nghiệp": {
        latitude: 21.011796,
        longitude: 105.849854,
      },
      "Đội Cung": {
        latitude: 21.0096606,
        longitude: 105.8485659,
      },
    },
    "Minh Khai": {
      "Kim Ngưu": {
        latitude: 21.0001256,
        longitude: 105.8616081,
      },
      "Minh Khai": {
        latitude: 20.998322,
        longitude: 105.867558,
      },
      "Tam Trinh": {
        latitude: 20.9948167,
        longitude: 105.8621103,
      },
    },
    "Ngô Thì Nhậm": {
      "Hoà Mã": {
        latitude: 21.015324,
        longitude: 105.853809,
      },
      "Lê Văn Hưu": {
        latitude: 21.017892,
        longitude: 105.8540767,
      },
      "Nguyễn Công Trứ": {
        latitude: 21.0139934,
        longitude: 105.8553239,
      },
      "Ngô Quyền": {
        latitude: 21.018167,
        longitude: 105.852911,
      },
      "Ngô Thì Nhậm": {
        latitude: 21.015255,
        longitude: 105.85319,
      },
      "Phù Đổng Thiên Vương": {
        latitude: 21.0160509,
        longitude: 105.8536396,
      },
      "Phùng Khắc Khoan": {
        latitude: 21.015156,
        longitude: 105.852295,
      },
      "Phố Huế": {
        latitude: 21.013494,
        longitude: 105.851733,
      },
      "Thi Sách": {
        latitude: 21.0150313,
        longitude: 105.8543869,
      },
      "Trần Xuân Soạn": {
        latitude: 21.016946,
        longitude: 105.854099,
      },
    },
    "Nguyễn Du": {
      "Bà Triệu": {
        latitude: 21.013346,
        longitude: 105.849203,
      },
      "Hồ Xuân Hương": {
        latitude: 21.0181785,
        longitude: 105.8485121,
      },
      "Lê Duẩn": {
        latitude: 21.017135,
        longitude: 105.841456,
      },
      "Nguyễn Bỉnh Khiêm": {
        latitude: 21.0136998,
        longitude: 105.8482733,
      },
      "Nguyễn Du": {
        latitude: 21.018882,
        longitude: 105.848463,
      },
      "Nguyễn Quyền": {
        latitude: 21.018111,
        longitude: 105.84379,
      },
      "Nguyễn Thượng Hiền": {
        latitude: 21.01884,
        longitude: 105.842237,
      },
      "Nguyễn Đình Chiểu": {
        latitude: 21.009502,
        longitude: 105.845721,
      },
      "Quang Trung": {
        latitude: 21.01709,
        longitude: 105.846947,
      },
      "Thiền Quang": {
        latitude: 21.019322,
        longitude: 105.844131,
      },
      "Trần Bình Trọng": {
        latitude: 21.018268,
        longitude: 105.843829,
      },
      "Trần Nhân Tông": {
        latitude: 21.01739,
        longitude: 105.843742,
      },
      "Tuệ Tĩnh": {
        latitude: 21.015158,
        longitude: 105.849244,
      },
      "Vũ Hữu Lợi": {
        latitude: 21.019377,
        longitude: 105.842018,
      },
      "Yết Kiêu": {
        latitude: 21.019816,
        longitude: 105.8425051,
      },
      "Đỗ Hành": {
        latitude: 21.0199028,
        longitude: 105.8422009,
      },
    },
    "Phạm Đình Hổ": {
      "Hoà Mã": {
        latitude: 21.015324,
        longitude: 105.853809,
      },
      "Hàn Thuyên": {
        latitude: 21.018366,
        longitude: 105.855011,
      },
      "Hàng Chuối": {
        latitude: 21.016617,
        longitude: 105.857584,
      },
      "Lê Ngọc Hân": {
        latitude: 21.015812,
        longitude: 105.855366,
      },
      "Lê Văn Hưu": {
        latitude: 21.017892,
        longitude: 105.8540767,
      },
      "Lò Đúc": {
        latitude: 21.0140291,
        longitude: 105.8574963,
      },
      "Nguyễn Cao": {
        latitude: 21.0126437,
        longitude: 105.8611129,
      },
      "Nguyễn Công Trứ": {
        latitude: 21.0139934,
        longitude: 105.8553239,
      },
      "Phạm Đình Hổ": {
        latitude: 21.016617,
        longitude: 105.857584,
      },
      "Trần Hưng Đạo": {
        latitude: 21.019044,
        longitude: 105.858708,
      },
      "Trần Thánh Tông": {
        latitude: 21.0156743,
        longitude: 105.8594969,
      },
      "Trần Xuân Soạn": {
        latitude: 21.016946,
        longitude: 105.854099,
      },
      "Tăng Bạt Hổ": {
        latitude: 21.017363,
        longitude: 105.8582436,
      },
      "Yec Xanh": {
        latitude: 21.0133094,
        longitude: 105.8591422,
      },
    },
    "Phố Huế": {
      "Chùa Vua": {
        latitude: 21.009609,
        longitude: 105.853979,
      },
      "Lê Gia Đỉnh": {
        latitude: 21.010853,
        longitude: 105.8545646,
      },
      "Nguyễn Công Trứ": {
        latitude: 21.0139934,
        longitude: 105.8553239,
      },
      "Phố Huế": {
        latitude: 21.013494,
        longitude: 105.851733,
      },
      "Thái Phiên": {
        latitude: 21.010579,
        longitude: 105.850049,
      },
      "Thịnh Yên": {
        latitude: 21.0099875,
        longitude: 105.8528721,
      },
      "Trần Cao Vân": {
        latitude: 21.0108337,
        longitude: 105.8526975,
      },
      "Yên Bái": {
        latitude: 21.012627,
        longitude: 105.8523309,
      },
      "Đoàn Trần Nghiệp": {
        latitude: 21.011796,
        longitude: 105.849854,
      },
      "Đồng Nhân": {
        latitude: 21.0132752,
        longitude: 105.8551073,
      },
    },
    "Quỳnh Lôi": {
      "Chùa Quỳnh": {
        latitude: 20.99937,
        longitude: 105.8573008,
      },
      "Hồng Mai": {
        latitude: 20.998837,
        longitude: 105.853619,
      },
      "Sông Lấp": {
        latitude: 21.000454,
        longitude: 105.854582,
      },
      "Thanh Nhàn": {
        latitude: 21.002788,
        longitude: 105.855704,
      },
    },
    "Quỳnh Mai": {
      "8/3": {
        latitude: 20.9983674,
        longitude: 105.8598,
      },
      "Chùa Quỳnh": {
        latitude: 20.99937,
        longitude: 105.8573008,
      },
      "Kim Ngưu": {
        latitude: 21.0001256,
        longitude: 105.8616081,
      },
      "Quỳnh Lôi": {
        latitude: 21.0019394,
        longitude: 105.8596967,
      },
      "Quỳnh Mai": {
        latitude: 21.001075,
        longitude: 105.860349,
      },
      "Thanh Nhàn": {
        latitude: 21.002788,
        longitude: 105.855704,
      },
    },
    "Thanh Lương": {
      "Bạch Đằng": {
        latitude: 21.010002,
        longitude: 105.86803,
      },
      "Kim Ngưu": {
        latitude: 21.0001256,
        longitude: 105.8616081,
      },
      "Minh Khai": {
        latitude: 20.998322,
        longitude: 105.867558,
      },
      "Nguyễn Khoái": {
        latitude: 21.012032,
        longitude: 105.863753,
      },
      "Trần Khát Chân": {
        latitude: 21.008642,
        longitude: 105.863347,
      },
      "Đê Trần Khát Chân": {
        latitude: 21.006838,
        longitude: 105.86595,
      },
    },
    "Thanh Nhàn": {
      "Kim Ngưu": {
        latitude: 21.0001256,
        longitude: 105.8616081,
      },
      "Lạc Nghiệp": {
        latitude: 21.0078627,
        longitude: 105.8580967,
      },
      "Thanh Nhàn": {
        latitude: 21.002788,
        longitude: 105.855704,
      },
      "Trại Găng": {
        latitude: 21.0034285,
        longitude: 105.852831,
      },
      "Trần Khát Chân": {
        latitude: 21.008642,
        longitude: 105.863347,
      },
      "Võ Thị Sáu": {
        latitude: 21.005749,
        longitude: 105.854955,
      },
    },
    "Trương Định": {
      "Bạch Mai": {
        latitude: 21.000148,
        longitude: 105.85052,
      },
      "Minh Khai": {
        latitude: 20.998322,
        longitude: 105.867558,
      },
      "Trương Định": {
        latitude: 20.992373,
        longitude: 105.849476,
      },
      "Trần Đại Nghĩa": {
        latitude: 21.0022,
        longitude: 105.844822,
      },
      "Đại La": {
        latitude: 20.995976,
        longitude: 105.848687,
      },
    },
    "Vĩnh Tuy": {
      "Dương Văn Bé": {
        latitude: 20.995883,
        longitude: 105.874019,
      },
      "Kim Ngưu": {
        latitude: 21.0001256,
        longitude: 105.8616081,
      },
      "Lạc Trung": {
        latitude: 21.003008,
        longitude: 105.864424,
      },
      "Minh Khai": {
        latitude: 20.998322,
        longitude: 105.867558,
      },
      "Mạc Thị Bưởi": {
        latitude: 21.001092,
        longitude: 105.8690697,
      },
      "Nguyễn Khoái": {
        latitude: 21.012032,
        longitude: 105.863753,
      },
      "Yên Lạc": {
        latitude: 21.000553,
        longitude: 105.863646,
      },
      "Đường Số 1": {
        latitude: 20.997586,
        longitude: 105.867697,
      },
      "Đường Số 2": {
        latitude: 20.996822,
        longitude: 105.867699,
      },
      "Đường Số 3": {
        latitude: 20.994673,
        longitude: 105.865964,
      },
      "Đường Số 5": {
        latitude: 20.995084,
        longitude: 105.870093,
      },
      "Đường Số 7": {
        latitude: 20.993089,
        longitude: 105.867772,
      },
    },
  },
  "Hoài Đức": {
    "An Khánh": {
      "An Khang": {
        latitude: 21.0008951,
        longitude: 105.717846,
      },
      "An Khang 1": {
        latitude: 21.0002177,
        longitude: 105.7155487,
      },
      "An Khang 2": {
        latitude: 21.0005029,
        longitude: 105.7159647,
      },
      "An Khang 3": {
        latitude: 21.0004679,
        longitude: 105.7166836,
      },
      "An Khang 4": {
        latitude: 21.0004147,
        longitude: 105.7174427,
      },
      "An Khang 5": {
        latitude: 21.0005305,
        longitude: 105.7185028,
      },
      "An Khang 6": {
        latitude: 21.0006532,
        longitude: 105.719237,
      },
      "An Khang 7": {
        latitude: 21.0010338,
        longitude: 105.7198499,
      },
      "An Khang 8": {
        latitude: 21.0011039,
        longitude: 105.7205781,
      },
      "An Khánh": {
        latitude: 21.0090413,
        longitude: 105.7203464,
      },
      "An Thọ": {
        latitude: 21.006296,
        longitude: 105.722672,
      },
      "An Thọ 2": {
        latitude: 21.0070905,
        longitude: 105.7259283,
      },
      "An Vượng": {
        latitude: 21.0003724,
        longitude: 105.7186969,
      },
      "An Vượng 1": {
        latitude: 20.9997013,
        longitude: 105.7151839,
      },
      "An Vượng 2": {
        latitude: 20.999603,
        longitude: 105.7171138,
      },
      "An Vượng 3": {
        latitude: 20.9999617,
        longitude: 105.7192548,
      },
      "An Vượng 4": {
        latitude: 21.0004031,
        longitude: 105.7206193,
      },
      "Ao Sen": {
        latitude: 21.0086834,
        longitude: 105.7143343,
      },
      "Bắc Yên Lũng": {
        latitude: 21.0092495,
        longitude: 105.7143404,
      },
      "Cầu Đông": {
        latitude: 21.0082531,
        longitude: 105.7156582,
      },
      "Cộng Hòa": {
        latitude: 20.9936464,
        longitude: 105.7203634,
      },
      "Long Cảnh": {
        latitude: 20.9986858,
        longitude: 105.7200839,
      },
      "Long Cảnh Tây 1": {
        latitude: 20.998118,
        longitude: 105.715308,
      },
      "Long Cảnh Tây 2": {
        latitude: 20.998591,
        longitude: 105.717124,
      },
      "Long Cảnh Tây 3": {
        latitude: 20.99903,
        longitude: 105.71969,
      },
      "Long Cảnh Đông 1": {
        latitude: 20.9990813,
        longitude: 105.7208875,
      },
      "Long Cảnh Đông 2": {
        latitude: 20.9985667,
        longitude: 105.7226427,
      },
      "Long Hưng 2": {
        latitude: 20.996997,
        longitude: 105.71556,
      },
      "Long Hưng 3": {
        latitude: 20.9975151,
        longitude: 105.7168868,
      },
      "Long Hưng 4": {
        latitude: 20.9966026,
        longitude: 105.7160199,
      },
      "Long Khánh 1": {
        latitude: 20.9975249,
        longitude: 105.717955,
      },
      "Long Khánh 2": {
        latitude: 20.9977839,
        longitude: 105.7185305,
      },
      "Long Khánh 3": {
        latitude: 20.9979675,
        longitude: 105.7190625,
      },
      "Long Khánh 4": {
        latitude: 20.9981836,
        longitude: 105.7198181,
      },
      "Long Khánh 5": {
        latitude: 20.9976643,
        longitude: 105.7197847,
      },
      "Long Khánh 6": {
        latitude: 20.998073,
        longitude: 105.7206816,
      },
      "Long Khánh 7": {
        latitude: 20.9978316,
        longitude: 105.7212111,
      },
      "Long Phú 1": {
        latitude: 20.9977737,
        longitude: 105.7217792,
      },
      "Long Phú 2": {
        latitude: 20.998258,
        longitude: 105.723647,
      },
      "Long Phú 3": {
        latitude: 20.9979147,
        longitude: 105.7224109,
      },
      "Long Phú 4": {
        latitude: 20.9974204,
        longitude: 105.7231968,
      },
      "Long Phú 5": {
        latitude: 20.997767,
        longitude: 105.7242611,
      },
      "Lê Trọng Tấn": {
        latitude: 21.0011496,
        longitude: 105.7332892,
      },
      "Lê Văn Huân": {
        latitude: 21.0131173,
        longitude: 105.7313893,
      },
      "Nam An Khánh": {
        latitude: 21.0028933,
        longitude: 105.7227044,
      },
      "Nam Yên Lũng": {
        latitude: 21.0077187,
        longitude: 105.7143012,
      },
      "Ngã Tư Kim Đan": {
        latitude: 21.003637,
        longitude: 105.7237811,
      },
      "Nông Dân": {
        latitude: 21.0053108,
        longitude: 105.7154971,
      },
      "Phú Vinh": {
        latitude: 21.0074591,
        longitude: 105.7175065,
      },
      "Phú Yên": {
        latitude: 21.0093282,
        longitude: 105.7172731,
      },
      "Phố Đông": {
        latitude: 20.9982669,
        longitude: 105.7247421,
      },
      "Thanh Niên": {
        latitude: 21.0059394,
        longitude: 105.7177609,
      },
      "Tỉnh Lộ 72": {
        latitude: 20.9868484,
        longitude: 105.6974168,
      },
      "Vân Lũng": {
        latitude: 21.0045363,
        longitude: 105.7174021,
      },
      "Yên Lũng": {
        latitude: 21.0074527,
        longitude: 105.7129043,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.008348,
        longitude: 105.7040791,
      },
    },
    "An Thượng": {
      "An Hạ 1": {
        latitude: 20.9922053,
        longitude: 105.7015576,
      },
      "An Hạ 2": {
        latitude: 20.991027,
        longitude: 105.708917,
      },
      "An Hạ 3": {
        latitude: 20.9912774,
        longitude: 105.703853,
      },
      "An Hạ 4": {
        latitude: 20.9901837,
        longitude: 105.7037328,
      },
      "Long Cảnh Tây 1": {
        latitude: 20.998118,
        longitude: 105.715308,
      },
      "Long Hưng 1": {
        latitude: 20.9962586,
        longitude: 105.7149229,
      },
      "Ngự Câu": {
        latitude: 20.9982512,
        longitude: 105.7028921,
      },
      "Ngự Câu 2": {
        latitude: 20.9958366,
        longitude: 105.7043083,
      },
      "Sau Đồng": {
        latitude: 20.996418,
        longitude: 105.7060438,
      },
      "Tỉnh Lộ 72": {
        latitude: 20.9868484,
        longitude: 105.6974168,
      },
      "Đê Đào Nguyên": {
        latitude: 20.9956991,
        longitude: 105.6994847,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.008348,
        longitude: 105.7040791,
      },
    },
    "Cát Quế": {
      "Cát Quế": {
        latitude: 21.0507484,
        longitude: 105.6778924,
      },
      "Đt 422": {
        latitude: 21.054576,
        longitude: 105.7051513,
      },
      "Đường Đê": {
        latitude: 21.0443294,
        longitude: 105.6729456,
      },
    },
    "Di Trạch": {
      "Di Trạch": {
        latitude: 21.0479066,
        longitude: 105.7178677,
      },
      "Văn Minh": {
        latitude: 21.0492222,
        longitude: 105.7209849,
      },
      "Đan Khê": {
        latitude: 21.0462748,
        longitude: 105.7188631,
      },
      "Đt 422b": {
        latitude: 21.0400085,
        longitude: 105.7232878,
      },
    },
    "Dương Liễu": {
      "Chàng Trũng": {
        latitude: 21.0589562,
        longitude: 105.6779733,
      },
      "Gia Đồng": {
        latitude: 21.0579231,
        longitude: 105.6769823,
      },
      "Đường Đê": {
        latitude: 21.0443294,
        longitude: 105.6729456,
      },
    },
    "Đắc Sở": {
      "Yên Sở Song Phương": {
        latitude: 21.0318044,
        longitude: 105.6875958,
      },
      "Đường Đê": {
        latitude: 21.0443294,
        longitude: 105.6729456,
      },
      "Đắc Sở": {
        latitude: 21.0343213,
        longitude: 105.6831866,
      },
    },
    "Đông La": {
      "La Tinh": {
        latitude: 20.9676664,
        longitude: 105.7311067,
      },
      "Quán Chảy": {
        latitude: 20.9573336,
        longitude: 105.724873,
      },
      "Yên Lộ": {
        latitude: 20.9600887,
        longitude: 105.7312018,
      },
      "Đông La": {
        latitude: 20.9663286,
        longitude: 105.7208245,
      },
      "Đồng Nhân": {
        latitude: 20.968307,
        longitude: 105.7264867,
      },
    },
    "Đức Giang": {
      "Cao Hạ": {
        latitude: 21.0593377,
        longitude: 105.6997472,
      },
      "Cao Trung 1": {
        latitude: 21.0659823,
        longitude: 105.7013511,
      },
      "Cao Trung 3": {
        latitude: 21.0632635,
        longitude: 105.7011968,
      },
      "Cổng Chùa": {
        latitude: 21.0591385,
        longitude: 105.7019276,
      },
      "Cổng Đậu": {
        latitude: 21.0596537,
        longitude: 105.7048225,
      },
      "Lũng Kính": {
        latitude: 21.0567046,
        longitude: 105.7042523,
      },
      "Nam 32": {
        latitude: 21.0697488,
        longitude: 105.7033148,
      },
      "Vạn Xuân": {
        latitude: 21.0684882,
        longitude: 105.710011,
      },
      "Đh 6": {
        latitude: 21.0584955,
        longitude: 105.6998731,
      },
      "Đt 422": {
        latitude: 21.054576,
        longitude: 105.7051513,
      },
    },
    "Đức Thượng": {
      "Cao Xá 3": {
        latitude: 21.0666944,
        longitude: 105.6981568,
      },
      "Cựu Quán": {
        latitude: 21.0738051,
        longitude: 105.6968714,
      },
      "Quốc Lộ 32": {
        latitude: 21.0797461,
        longitude: 105.6854223,
      },
      "Thôn Chiền 1": {
        latitude: 21.0745215,
        longitude: 105.6914796,
      },
      "Thôn Nhuệ": {
        latitude: 21.0763297,
        longitude: 105.6908257,
      },
      "Thôn Nội 1": {
        latitude: 21.0759442,
        longitude: 105.6843318,
      },
      "Thôn Nội 2": {
        latitude: 21.0751483,
        longitude: 105.685056,
      },
      "Thôn Nội 3": {
        latitude: 21.0747886,
        longitude: 105.6877033,
      },
      "Thú Y": {
        latitude: 21.077567,
        longitude: 105.69362,
      },
      "Thượng Thụy": {
        latitude: 21.0779113,
        longitude: 105.683908,
      },
      "Vạn Xuân": {
        latitude: 21.0684882,
        longitude: 105.710011,
      },
      "Đức Thượng": {
        latitude: 21.0735016,
        longitude: 105.6941816,
      },
    },
    "Kim Chung": {
      "Di Trạch": {
        latitude: 21.0479066,
        longitude: 105.7178677,
      },
      "Kim Chung Di Trạch": {
        latitude: 21.0582574,
        longitude: 105.7137694,
      },
      "Lai Xá": {
        latitude: 21.0623173,
        longitude: 105.7248362,
      },
      "Văn Minh": {
        latitude: 21.0492222,
        longitude: 105.7209849,
      },
      "Vạn Xuân": {
        latitude: 21.0684882,
        longitude: 105.710011,
      },
      "Yên Bệ": {
        latitude: 21.0478571,
        longitude: 105.7075218,
      },
      "Yên Vĩnh": {
        latitude: 21.0497437,
        longitude: 105.7096745,
      },
      "Đt 422": {
        latitude: 21.054576,
        longitude: 105.7051513,
      },
      "Đt 422b": {
        latitude: 21.0400085,
        longitude: 105.7232878,
      },
    },
    "La Phù": {
      "Dương Nội": {
        latitude: 20.9838782,
        longitude: 105.7405013,
      },
      "Hoa Thám": {
        latitude: 20.9758482,
        longitude: 105.7347492,
      },
      "La Phú": {
        latitude: 20.9789481,
        longitude: 105.731251,
      },
      "La Tinh": {
        latitude: 20.9676664,
        longitude: 105.7311067,
      },
      "Lê Trọng Tấn": {
        latitude: 21.0011496,
        longitude: 105.7332892,
      },
      "Tỉnh Lộ 72": {
        latitude: 20.9868484,
        longitude: 105.6974168,
      },
      "Đường Số 3": {
        latitude: 20.9894441,
        longitude: 105.7298342,
      },
      "Đồng Nhân": {
        latitude: 20.968307,
        longitude: 105.7264867,
      },
      "Đồng Tiến": {
        latitude: 20.9812025,
        longitude: 105.7292584,
      },
    },
    "Lại Yên": {
      "Lại Yên": {
        latitude: 21.0250529,
        longitude: 105.7099756,
      },
      "Phương Bảng": {
        latitude: 21.0213722,
        longitude: 105.6961986,
      },
      "Đồng Ốc": {
        latitude: 21.0253224,
        longitude: 105.7048409,
      },
    },
    "Minh Khai": {
      "Tân Thành": {
        latitude: 21.0629025,
        longitude: 105.6715372,
      },
      "Đường Đê": {
        latitude: 21.0443294,
        longitude: 105.6729456,
      },
    },
    "Sơn Đồng": {
      "Sơn Đồng": {
        latitude: 21.0398435,
        longitude: 105.702087,
      },
      "Yên Bệ": {
        latitude: 21.0478571,
        longitude: 105.7075218,
      },
      "Đt 422": {
        latitude: 21.054576,
        longitude: 105.7051513,
      },
      "Đt 422b": {
        latitude: 21.0400085,
        longitude: 105.7232878,
      },
      "Đình Hát": {
        latitude: 21.0419516,
        longitude: 105.6998056,
      },
    },
    "Song Phương": {
      "Lại Yên": {
        latitude: 21.0250529,
        longitude: 105.7099756,
      },
      "Mộc Hoàn Đình": {
        latitude: 21.0007258,
        longitude: 105.682995,
      },
      "Phương Bảng": {
        latitude: 21.0213722,
        longitude: 105.6961986,
      },
      "Tiền Lệ": {
        latitude: 21.0213296,
        longitude: 105.6842903,
      },
      "Yên Sở Song Phương": {
        latitude: 21.0318044,
        longitude: 105.6875958,
      },
      "Đê Sông Phương": {
        latitude: 21.0155419,
        longitude: 105.6972151,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.008348,
        longitude: 105.7040791,
      },
    },
    "Tiền Yên": {
      "Cối Sa": {
        latitude: 21.0165398,
        longitude: 105.6821775,
      },
      "Tiền Lệ": {
        latitude: 21.0213296,
        longitude: 105.6842903,
      },
      "Yên Sở Song Phương": {
        latitude: 21.0318044,
        longitude: 105.6875958,
      },
      "Yên Thái": {
        latitude: 21.0274316,
        longitude: 105.6893497,
      },
      "Đê Sông Phương": {
        latitude: 21.0155419,
        longitude: 105.6972151,
      },
      "Đường Đê": {
        latitude: 21.0443294,
        longitude: 105.6729456,
      },
      "Đắc Sở": {
        latitude: 21.0343213,
        longitude: 105.6831866,
      },
    },
    "Trạm Trôi": {
      "Tuyến 1": {
        latitude: 21.0692821,
        longitude: 105.7135779,
      },
      "Tuyến 10": {
        latitude: 21.0692826,
        longitude: 105.7151506,
      },
      "Tuyến 12": {
        latitude: 21.0690619,
        longitude: 105.7153572,
      },
      "Tuyến 13": {
        latitude: 21.0704655,
        longitude: 105.7158412,
      },
      "Tuyến 14": {
        latitude: 21.0711025,
        longitude: 105.7153977,
      },
      "Tuyến 15": {
        latitude: 21.070592,
        longitude: 105.7163016,
      },
      "Tuyến 16": {
        latitude: 21.0708766,
        longitude: 105.7166192,
      },
      "Tuyến 17": {
        latitude: 21.0692832,
        longitude: 105.7122738,
      },
      "Tuyến 18": {
        latitude: 21.0690138,
        longitude: 105.7127009,
      },
      "Tuyến 2": {
        latitude: 21.0686639,
        longitude: 105.7126499,
      },
      "Tuyến 20": {
        latitude: 21.0705869,
        longitude: 105.7112282,
      },
      "Tuyến 21": {
        latitude: 21.0701126,
        longitude: 105.7116517,
      },
      "Tuyến 22": {
        latitude: 21.0712306,
        longitude: 105.7101428,
      },
      "Tuyến 23": {
        latitude: 21.0707259,
        longitude: 105.7099002,
      },
      "Tuyến 25": {
        latitude: 21.0721972,
        longitude: 105.710566,
      },
      "Tuyến 29": {
        latitude: 21.0718034,
        longitude: 105.7139408,
      },
      "Tuyến 3": {
        latitude: 21.0700614,
        longitude: 105.7110494,
      },
      "Tuyến 30": {
        latitude: 21.0717493,
        longitude: 105.7143812,
      },
      "Tuyến 31": {
        latitude: 21.073102,
        longitude: 105.7119747,
      },
      "Tuyến 32": {
        latitude: 21.0682488,
        longitude: 105.7157861,
      },
      "Tuyến 4": {
        latitude: 21.0722151,
        longitude: 105.7133224,
      },
      "Tuyến 5": {
        latitude: 21.0698119,
        longitude: 105.7140696,
      },
      "Tuyến 6": {
        latitude: 21.0708475,
        longitude: 105.7142301,
      },
      "Tuyến 7": {
        latitude: 21.0685823,
        longitude: 105.7145796,
      },
      "Tuyến 8": {
        latitude: 21.0679494,
        longitude: 105.7152537,
      },
      "Tuyến 9": {
        latitude: 21.0678941,
        longitude: 105.7133343,
      },
      "Tương Lai": {
        latitude: 21.0690172,
        longitude: 105.7057688,
      },
      "Vạn Xuân": {
        latitude: 21.0684882,
        longitude: 105.710011,
      },
      "Đt 422": {
        latitude: 21.054576,
        longitude: 105.7051513,
      },
    },
    "Vân Canh": {
      "An Trai": {
        latitude: 21.0312547,
        longitude: 105.7350746,
      },
      "HUD Vân Canh": {
        latitude: 21.0378381,
        longitude: 105.733299,
      },
      "Hậu Ái": {
        latitude: 21.036403,
        longitude: 105.727235,
      },
      "Kim Hoàng": {
        latitude: 21.0339792,
        longitude: 105.731007,
      },
      "Lê Văn Huân": {
        latitude: 21.0131173,
        longitude: 105.7313893,
      },
      "Trịnh Văn Bô": {
        latitude: 21.0427391,
        longitude: 105.7298248,
      },
      "Vân Canh": {
        latitude: 21.0335683,
        longitude: 105.72768,
      },
      "Xuân Phương": {
        latitude: 21.0348,
        longitude: 105.7384168,
      },
      "Đt 422b": {
        latitude: 21.0400085,
        longitude: 105.7232878,
      },
      "Đường Xóm": {
        latitude: 21.0289346,
        longitude: 105.7336167,
      },
    },
    "Vân Côn": {
      "Mộc Hoàn Đình": {
        latitude: 21.0007258,
        longitude: 105.682995,
      },
      "Tỉnh Lộ 72": {
        latitude: 20.9868484,
        longitude: 105.6974168,
      },
      "Vân Côn": {
        latitude: 20.992401,
        longitude: 105.6763583,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.008348,
        longitude: 105.7040791,
      },
    },
    "Yên Sở": {
      "Cống Bi": {
        latitude: 21.0434865,
        longitude: 105.6829583,
      },
      "Khu Cầu": {
        latitude: 21.0396428,
        longitude: 105.6763085,
      },
      "Khu Hạ": {
        latitude: 21.038294,
        longitude: 105.6770124,
      },
      "Quyết Tiến": {
        latitude: 21.0408187,
        longitude: 105.6779716,
      },
      "Yên Sở": {
        latitude: 21.0440529,
        longitude: 105.6819534,
      },
      "Yên Sở Song Phương": {
        latitude: 21.0318044,
        longitude: 105.6875958,
      },
      "Đh 5": {
        latitude: 21.0433274,
        longitude: 105.6801095,
      },
      "Đt 422": {
        latitude: 21.054576,
        longitude: 105.7051513,
      },
      "Đường Nấm": {
        latitude: 21.0391614,
        longitude: 105.6795927,
      },
      "Đường Đê": {
        latitude: 21.0443294,
        longitude: 105.6729456,
      },
    },
  },
  "Hoàn Kiếm": {
    "Chương Dương": {
      "Bạch Đằng": {
        latitude: 21.024258,
        longitude: 105.862203,
      },
      "Chương Dương Độ": {
        latitude: 21.029822,
        longitude: 105.859437,
      },
      "Cầu Đất": {
        latitude: 21.0250365,
        longitude: 105.8609484,
      },
      "Hàm Tử Quan": {
        latitude: 21.031592,
        longitude: 105.85726,
      },
      "Hồng Hà": {
        latitude: 21.0366733,
        longitude: 105.854047,
      },
      "Trần Quang Khải": {
        latitude: 21.0315495,
        longitude: 105.8565554,
      },
      "Vọng Hà": {
        latitude: 21.032329,
        longitude: 105.85692,
      },
    },
    "Cửa Đông": {
      "Bát Đàn": {
        latitude: 21.0336515,
        longitude: 105.8463587,
      },
      "Cửa Đông": {
        latitude: 21.034553,
        longitude: 105.846383,
      },
      "Hàng Da": {
        latitude: 21.03122,
        longitude: 105.846725,
      },
      "Hàng Nón": {
        latitude: 21.0324351,
        longitude: 105.8479723,
      },
      "Hàng Điếu": {
        latitude: 21.032076,
        longitude: 105.846797,
      },
      "Lý Nam Đế": {
        latitude: 21.034864,
        longitude: 105.844989,
      },
      "Nguyễn Quang Bích": {
        latitude: 21.032307,
        longitude: 105.845717,
      },
      "Nguyễn Văn Tố": {
        latitude: 21.031665,
        longitude: 105.846006,
      },
      "Nhà Hoả": {
        latitude: 21.034195,
        longitude: 105.846782,
      },
      "Phùng Hưng": {
        latitude: 21.034721,
        longitude: 105.845696,
      },
      "Yên Thái": {
        latitude: 21.031775,
        longitude: 105.847148,
      },
      "Đường Thành": {
        latitude: 21.031903,
        longitude: 105.846738,
      },
    },
    "Cửa Nam": {
      "Cửa Nam": {
        latitude: 21.027814,
        longitude: 105.8423538,
      },
      "Hai Bà Trưng": {
        latitude: 21.024704,
        longitude: 105.851349,
      },
      "Lê Duẩn": {
        latitude: 21.026521,
        longitude: 105.841538,
      },
      "Lý Thường Kiệt": {
        latitude: 21.0228923,
        longitude: 105.851908,
      },
      "Nam Ngư": {
        latitude: 21.0265046,
        longitude: 105.8423965,
      },
      "Nguyễn Thái Học": {
        latitude: 21.028361,
        longitude: 105.8431971,
      },
      "Phan Bội Châu": {
        latitude: 21.026944,
        longitude: 105.843834,
      },
      "Trần Hưng Đạo": {
        latitude: 21.021599,
        longitude: 105.850318,
      },
      "Tống Duy Tân": {
        latitude: 21.02933,
        longitude: 105.84363,
      },
      "Tức Mặc": {
        latitude: 21.023146,
        longitude: 105.842592,
      },
      "Yết Kiêu": {
        latitude: 21.021816,
        longitude: 105.843245,
      },
      "Điện Biên Phủ": {
        latitude: 21.0285616,
        longitude: 105.8431293,
      },
      "Đình Ngang": {
        latitude: 21.027858,
        longitude: 105.842624,
      },
    },
    "Đồng Xuân": {
      "Cao Thắng": {
        latitude: 21.03895,
        longitude: 105.851387,
      },
      "Cầu Đông": {
        latitude: 21.0377526,
        longitude: 105.84978,
      },
      "Gầm Cầu": {
        latitude: 21.039229,
        longitude: 105.848133,
      },
      "Hàng Chiếu": {
        latitude: 21.036982,
        longitude: 105.849994,
      },
      "Hàng Khoai": {
        latitude: 21.0384502,
        longitude: 105.8491268,
      },
      "Hàng Đậu": {
        latitude: 21.040133,
        longitude: 105.848118,
      },
      "Nguyễn Thiếp": {
        latitude: 21.039749,
        longitude: 105.849651,
      },
      "Nguyễn Thiện Thuật": {
        latitude: 21.038126,
        longitude: 105.850591,
      },
      "Thanh Hà": {
        latitude: 21.037772,
        longitude: 105.851784,
      },
      "Trần Nhật Duật": {
        latitude: 21.03857,
        longitude: 105.851947,
      },
      "Đồng Xuân": {
        latitude: 21.0375473,
        longitude: 105.8490681,
      },
    },
    "Hàng Bạc": {
      "Cầu Gỗ": {
        latitude: 21.032225,
        longitude: 105.852971,
      },
      "Gia Ngư": {
        latitude: 21.0330534,
        longitude: 105.8522764,
      },
      "Hàng Bè": {
        latitude: 21.0331261,
        longitude: 105.8538258,
      },
      "Hàng Bạc": {
        latitude: 21.0339072,
        longitude: 105.852375,
      },
      "Hồ Hoàn Kiếm": {
        latitude: 21.0318555,
        longitude: 105.8531361,
      },
      "Lò Sũ": {
        latitude: 21.031404,
        longitude: 105.853996,
      },
      "Đinh Liệt": {
        latitude: 21.033077,
        longitude: 105.851936,
      },
      "Đinh Tiên Hoàng": {
        latitude: 21.031737,
        longitude: 105.853047,
      },
    },
    "Hàng Bài": {
      "Bà Triệu": {
        latitude: 21.020624,
        longitude: 105.84997,
      },
      "Hàm Long": {
        latitude: 21.0193,
        longitude: 105.852946,
      },
      "Hàng Bài": {
        latitude: 21.022581,
        longitude: 105.852581,
      },
      "Lý Thường Kiệt": {
        latitude: 21.0228923,
        longitude: 105.851908,
      },
      "Nguyễn Chế Nghĩa": {
        latitude: 21.019742,
        longitude: 105.852829,
      },
      "Ngô Văn Sở": {
        latitude: 21.020658,
        longitude: 105.849224,
      },
      "Phạm Sư Mạnh": {
        latitude: 21.022752,
        longitude: 105.855238,
      },
      "Phố Huế": {
        latitude: 21.0183313815025,
        longitude: 105.851661854551,
      },
      "Trần Hưng Đạo": {
        latitude: 21.021599,
        longitude: 105.850318,
      },
      "Trần Quốc Toản": {
        latitude: 21.020347,
        longitude: 105.847196,
      },
      "Vọng Đức": {
        latitude: 21.021899,
        longitude: 105.853672,
      },
    },
    "Hàng Bồ": {
      "Bát Sứ": {
        latitude: 21.034219,
        longitude: 105.847344,
      },
      "Bát Đàn": {
        latitude: 21.0336515,
        longitude: 105.8463587,
      },
      "Hàng Bút": {
        latitude: 21.03488,
        longitude: 105.848188,
      },
      "Hàng Bồ": {
        latitude: 21.033871,
        longitude: 105.84898,
      },
      "Hàng Cá": {
        latitude: 21.036108,
        longitude: 105.84902,
      },
      "Hàng Gà": {
        latitude: 21.035555,
        longitude: 105.847022,
      },
      "Hàng Phèn": {
        latitude: 21.034369,
        longitude: 105.847386,
      },
      "Hàng Thiếc": {
        latitude: 21.033565,
        longitude: 105.847909,
      },
      "Hàng Vải": {
        latitude: 21.035555,
        longitude: 105.847022,
      },
      "Hàng Đồng": {
        latitude: 21.03621,
        longitude: 105.847717,
      },
      "Lãn Ông": {
        latitude: 21.035286,
        longitude: 105.849435,
      },
      "Lò Rèn": {
        latitude: 21.036195,
        longitude: 105.848047,
      },
      "Thuốc Bắc": {
        latitude: 21.0354,
        longitude: 105.8482634,
      },
    },
    "Hàng Bông": {
      "Hà Trung": {
        latitude: 21.030434,
        longitude: 105.8460583,
      },
      "Hàng Bông": {
        latitude: 21.029866,
        longitude: 105.846429,
      },
      "Hàng Da": {
        latitude: 21.03122,
        longitude: 105.846725,
      },
      "Hội Vũ": {
        latitude: 21.028707,
        longitude: 105.845328,
      },
      "Phùng Hưng": {
        latitude: 21.034721,
        longitude: 105.845696,
      },
      "Phủ Doãn": {
        latitude: 21.0277609,
        longitude: 105.8477303,
      },
      "Quán Sứ": {
        latitude: 21.026923,
        longitude: 105.845812,
      },
      "Tràng Thi": {
        latitude: 21.027264,
        longitude: 105.847031,
      },
      "Trần Phú": {
        latitude: 21.030037,
        longitude: 105.844444,
      },
      "Tống Duy Tân": {
        latitude: 21.02933,
        longitude: 105.84363,
      },
      "Đường Thành": {
        latitude: 21.031903,
        longitude: 105.846738,
      },
    },
    "Hàng Buồm": {
      "Chợ Gạo": {
        latitude: 21.0368294,
        longitude: 105.8526138,
      },
      "Hàng Buồm": {
        latitude: 21.035898,
        longitude: 105.851823,
      },
      "Hàng Chĩnh": {
        latitude: 21.035521,
        longitude: 105.853392,
      },
      "Hàng Giầy": {
        latitude: 21.035628,
        longitude: 105.850967,
      },
      "Lương Ngọc Quyến": {
        latitude: 21.03474,
        longitude: 105.852398,
      },
      "Mã Mây": {
        latitude: 21.035762,
        longitude: 105.853346,
      },
      "Nguyễn Siêu": {
        latitude: 21.036568,
        longitude: 105.85173,
      },
      "Trần Nhật Duật": {
        latitude: 21.03857,
        longitude: 105.851947,
      },
      "Tạ Hiện": {
        latitude: 21.034475,
        longitude: 105.852138,
      },
      "Ô Quan Chưởng": {
        latitude: 21.037361,
        longitude: 105.852409,
      },
      "Đào Duy Từ": {
        latitude: 21.036055,
        longitude: 105.852793,
      },
      "Đông Thái": {
        latitude: 21.036037,
        longitude: 105.852967,
      },
    },
    "Hàng Đào": {
      "Chả Cá": {
        latitude: 21.036108,
        longitude: 105.84902,
      },
      "Gia Ngư": {
        latitude: 21.0330534,
        longitude: 105.8522764,
      },
      "Hàng Bạc": {
        latitude: 21.0339072,
        longitude: 105.852375,
      },
      "Hàng Bồ": {
        latitude: 21.033871,
        longitude: 105.84898,
      },
      "Hàng Cá": {
        latitude: 21.036108,
        longitude: 105.84902,
      },
      "Hàng Cân": {
        latitude: 21.034042,
        longitude: 105.849932,
      },
      "Hàng Ngang": {
        latitude: 21.034612,
        longitude: 105.850375,
      },
      "Hàng Đào": {
        latitude: 21.032658,
        longitude: 105.851276,
      },
      "Hàng Đường": {
        latitude: 21.036355,
        longitude: 105.849662,
      },
      "Lãn Ông": {
        latitude: 21.035286,
        longitude: 105.849435,
      },
      "Lương Văn Can": {
        latitude: 21.032319,
        longitude: 105.850728,
      },
    },
    "Hàng Gai": {
      "Hàng Bông": {
        latitude: 21.029866,
        longitude: 105.846429,
      },
      "Hàng Gai": {
        latitude: 21.032205,
        longitude: 105.850505,
      },
      "Hàng Hòm": {
        latitude: 21.031746,
        longitude: 105.848902,
      },
      "Hàng Mành": {
        latitude: 21.032151,
        longitude: 105.848199,
      },
      "Hàng Nón": {
        latitude: 21.0324351,
        longitude: 105.8479723,
      },
      "Hàng Quạt": {
        latitude: 21.032699,
        longitude: 105.849457,
      },
      "Hàng Thiếc": {
        latitude: 21.033565,
        longitude: 105.847909,
      },
      "Lương Văn Can": {
        latitude: 21.032319,
        longitude: 105.850728,
      },
      "Tô Tịch": {
        latitude: 21.032205,
        longitude: 105.850505,
      },
      "Yên Thái": {
        latitude: 21.031775,
        longitude: 105.847148,
      },
    },
    "Hàng Mã": {
      "Cổng Đục": {
        latitude: 21.0356121,
        longitude: 105.8464703,
      },
      "Gầm Cầu": {
        latitude: 21.039229,
        longitude: 105.848133,
      },
      "Hàng Chai": {
        latitude: 21.037461,
        longitude: 105.847693,
      },
      "Hàng Cót": {
        latitude: 21.038616,
        longitude: 105.84717,
      },
      "Hàng Hương": {
        latitude: 21.035257,
        longitude: 105.8455,
      },
      "Hàng Khoai": {
        latitude: 21.0384502,
        longitude: 105.8491268,
      },
      "Hàng Lược": {
        latitude: 21.037502,
        longitude: 105.848108,
      },
      "Hàng Mã": {
        latitude: 21.036651,
        longitude: 105.847769,
      },
      "Hàng Rươi": {
        latitude: 21.037438,
        longitude: 105.847948,
      },
      "Hàng Vải": {
        latitude: 21.035555,
        longitude: 105.847022,
      },
      "Lê Văn Linh": {
        latitude: 21.037409,
        longitude: 105.846074,
      },
      "Lý Nam Đế": {
        latitude: 21.034864,
        longitude: 105.844989,
      },
      "Phùng Hưng": {
        latitude: 21.034721,
        longitude: 105.845696,
      },
    },
    "Hàng Trống": {
      "Bà Triệu": {
        latitude: 21.020624,
        longitude: 105.84997,
      },
      "Bảo Khánh": {
        latitude: 21.0298635,
        longitude: 105.8501345,
      },
      "Chân Cầm": {
        latitude: 21.029978,
        longitude: 105.847721,
      },
      "Hàng Bông": {
        latitude: 21.029866,
        longitude: 105.846429,
      },
      "Hàng Hành": {
        latitude: 21.0315628,
        longitude: 105.8505662,
      },
      "Hàng Khay": {
        latitude: 21.025509,
        longitude: 105.853107,
      },
      "Hàng Trống": {
        latitude: 21.0295269,
        longitude: 105.850406,
      },
      "Lê Thái Tổ": {
        latitude: 21.03029,
        longitude: 105.851144,
      },
      "Lý Quốc Sư": {
        latitude: 21.029763,
        longitude: 105.849188,
      },
      "Lương Văn Can": {
        latitude: 21.032319,
        longitude: 105.850728,
      },
      "Nhà Chung": {
        latitude: 21.027477,
        longitude: 105.850109,
      },
      "Nhà Thờ": {
        latitude: 21.028863,
        longitude: 105.849575,
      },
      "Phủ Doãn": {
        latitude: 21.0277609,
        longitude: 105.8477303,
      },
      "Thọ Xương": {
        latitude: 21.028603,
        longitude: 105.848087,
      },
      "Tràng Thi": {
        latitude: 21.027264,
        longitude: 105.847031,
      },
      "Đinh Tiên Hoàng": {
        latitude: 21.031737,
        longitude: 105.853047,
      },
      "Ấu Triệu": {
        latitude: 21.0287701,
        longitude: 105.8485404,
      },
    },
    "Lý Thái Tổ": {
      "Hàng Muối": {
        latitude: 21.0340636,
        longitude: 105.8546816,
      },
      "Hàng Mắm": {
        latitude: 21.0337947,
        longitude: 105.8544042,
      },
      "Hàng Thùng": {
        latitude: 21.03215,
        longitude: 105.854534,
      },
      "Hàng Tre": {
        latitude: 21.032538,
        longitude: 105.855508,
      },
      "Hàng Vôi": {
        latitude: 21.030715,
        longitude: 105.856206,
      },
      "Lò Sũ": {
        latitude: 21.031404,
        longitude: 105.853996,
      },
      "Lý Thái Tổ": {
        latitude: 21.0275809,
        longitude: 105.8560875,
      },
      "Lương Ngọc Quyến": {
        latitude: 21.03474,
        longitude: 105.852398,
      },
      "Nguyễn Hữu Huân": {
        latitude: 21.033042,
        longitude: 105.85446,
      },
      "Ngô Quyền": {
        latitude: 21.026312,
        longitude: 105.855643,
      },
      "Trần Nguyên Hãn": {
        latitude: 21.029023,
        longitude: 105.856556,
      },
      "Trần Quang Khải": {
        latitude: 21.0315495,
        longitude: 105.8565554,
      },
      "Tông Đản": {
        latitude: 21.026158,
        longitude: 105.857867,
      },
      "Đinh Tiên Hoàng": {
        latitude: 21.031737,
        longitude: 105.853047,
      },
    },
    "Phan Chu Trinh": {
      "Hàm Long": {
        latitude: 21.0193,
        longitude: 105.852946,
      },
      "Lê Thánh Tông": {
        latitude: 21.0222056,
        longitude: 105.8577002,
      },
      "Lý Thường Kiệt": {
        latitude: 21.0228923,
        longitude: 105.851908,
      },
      "Nguyễn Khắc Cần": {
        latitude: 21.022752,
        longitude: 105.855238,
      },
      "Phan Chu Trinh": {
        latitude: 21.021118,
        longitude: 105.855952,
      },
      "Phan Huy Chú": {
        latitude: 21.021264,
        longitude: 105.857558,
      },
      "Phạm Ngũ Lão": {
        latitude: 21.022346,
        longitude: 105.85977,
      },
      "Phạm Sư Mạnh": {
        latitude: 21.022752,
        longitude: 105.855238,
      },
      "Trần Hưng Đạo": {
        latitude: 21.021599,
        longitude: 105.850318,
      },
      "Trần Khánh Dư": {
        latitude: 21.0228191,
        longitude: 105.8609806,
      },
      "Đinh Công Tráng": {
        latitude: 21.018939805007,
        longitude: 105.859924088231,
      },
      "Đặng Thái Thân": {
        latitude: 21.0230746,
        longitude: 105.858673,
      },
    },
    "Phúc Tân": {
      "Bảo Linh": {
        latitude: 21.0374892,
        longitude: 105.8552888,
      },
      "Hồng Hà": {
        latitude: 21.0366733,
        longitude: 105.854047,
      },
      "Nguyên Khiết": {
        latitude: 21.03507,
        longitude: 105.857204,
      },
      "Nguyễn Tư Giản": {
        latitude: 21.038696,
        longitude: 105.854602,
      },
      "Phúc Tân": {
        latitude: 21.035832,
        longitude: 105.855359,
      },
      "Thanh Yên": {
        latitude: 21.037984,
        longitude: 105.854622,
      },
      "Trần Nhật Duật": {
        latitude: 21.03857,
        longitude: 105.851947,
      },
      "Trần Quang Khải": {
        latitude: 21.0315495,
        longitude: 105.8565554,
      },
    },
    "Trần Hưng Đạo": {
      "19/12": {
        latitude: 21.02487,
        longitude: 105.847877,
      },
      "Dã Tượng": {
        latitude: 21.023516,
        longitude: 105.846602,
      },
      "Hai Bà Trưng": {
        latitude: 21.024704,
        longitude: 105.851349,
      },
      "Hà Hồi": {
        latitude: 21.0213328,
        longitude: 105.8470201,
      },
      "Hỏa Lò": {
        latitude: 21.02483,
        longitude: 105.846475,
      },
      "Liên Trì": {
        latitude: 21.020148,
        longitude: 105.845899,
      },
      "Lý Thường Kiệt": {
        latitude: 21.0228923,
        longitude: 105.851908,
      },
      "Nguyễn Gia Thiều": {
        latitude: 21.019824,
        longitude: 105.847012,
      },
      "Ngô Văn Sở": {
        latitude: 21.020658,
        longitude: 105.849224,
      },
      "Phan Bội Châu": {
        latitude: 21.026944,
        longitude: 105.843834,
      },
      "Quang Trung": {
        latitude: 21.022049,
        longitude: 105.848612,
      },
      "Quán Sứ": {
        latitude: 21.026923,
        longitude: 105.845812,
      },
      "Thợ Nhuộm": {
        latitude: 21.0231089,
        longitude: 105.8483873,
      },
      "Triệu Quốc Đạt": {
        latitude: 21.026432,
        longitude: 105.84762,
      },
      "Trương Hán Siêu": {
        latitude: 21.019843,
        longitude: 105.848829,
      },
      "Trần Bình Trọng": {
        latitude: 21.021534,
        longitude: 105.844926,
      },
      "Trần Hưng Đạo": {
        latitude: 21.021599,
        longitude: 105.850318,
      },
      "Trần Quốc Toản": {
        latitude: 21.020347,
        longitude: 105.847196,
      },
    },
    "Tràng Tiền": {
      "Bà Triệu": {
        latitude: 21.020624,
        longitude: 105.84997,
      },
      "Cổ Tân": {
        latitude: 21.02475,
        longitude: 105.857422,
      },
      "Hai Bà Trưng": {
        latitude: 21.024704,
        longitude: 105.851349,
      },
      "Hàng Bài": {
        latitude: 21.022581,
        longitude: 105.852581,
      },
      "Hàng Khay": {
        latitude: 21.025509,
        longitude: 105.853107,
      },
      "Lê Lai": {
        latitude: 21.0275809,
        longitude: 105.8560875,
      },
      "Lê Phụng Hiểu": {
        latitude: 21.0258504,
        longitude: 105.8564654,
      },
      "Lê Thánh Tông": {
        latitude: 21.0222056,
        longitude: 105.8577002,
      },
      "Lê Thạch": {
        latitude: 21.02712,
        longitude: 105.854808,
      },
      "Lý Thái Tổ": {
        latitude: 21.0275809,
        longitude: 105.8560875,
      },
      "Lý Đạo Thành": {
        latitude: 21.025099,
        longitude: 105.856694,
      },
      "Nguyễn Khắc Cần": {
        latitude: 21.022752,
        longitude: 105.855238,
      },
      "Nguyễn Xí": {
        latitude: 21.025112,
        longitude: 105.854421,
      },
      "Ngô Quyền": {
        latitude: 21.026312,
        longitude: 105.855643,
      },
      "Phan Chu Trinh": {
        latitude: 21.021118,
        longitude: 105.855952,
      },
      "Quang Trung": {
        latitude: 21.022049,
        longitude: 105.848612,
      },
      "Tràng Tiền": {
        latitude: 21.0244229,
        longitude: 105.8569002,
      },
      "Trần Khánh Dư": {
        latitude: 21.0228191,
        longitude: 105.8609806,
      },
      "Tông Đản": {
        latitude: 21.026158,
        longitude: 105.857867,
      },
      "Đinh Lễ": {
        latitude: 21.025652,
        longitude: 105.854575,
      },
    },
  },
  "Hoàng Mai": {
    "Đại Kim": {
      "Bằng Liệt": {
        latitude: 20.960941,
        longitude: 105.818565,
      },
      "Hoàng Liệt": {
        latitude: 20.966969,
        longitude: 105.832359,
      },
      "Hồng Quang": {
        latitude: 20.974287,
        longitude: 105.832848,
      },
      "Kim Giang": {
        latitude: 20.977166,
        longitude: 105.824316,
      },
      "Linh Đàm": {
        latitude: 20.9712201,
        longitude: 105.8274289,
      },
      "Nghiêm Xuân Yêm": {
        latitude: 20.9732844,
        longitude: 105.8179377,
      },
      "Nguyễn Công Thái": {
        latitude: 20.975732,
        longitude: 105.834499,
      },
      "Nguyễn Cảnh Dị": {
        latitude: 20.975869,
        longitude: 105.835971,
      },
      "Nguyễn Hữu Thọ": {
        latitude: 20.969577,
        longitude: 105.830876,
      },
      "Nguyễn Xiển": {
        latitude: 20.9791962,
        longitude: 105.8120445,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9639606,
        longitude: 105.8655924,
      },
      "Trần Hòa": {
        latitude: 20.977499,
        longitude: 105.825148,
      },
      "Trịnh Đình Cửu": {
        latitude: 20.9761976,
        longitude: 105.8322167,
      },
      "Vành Đai 3": {
        latitude: 20.9646529,
        longitude: 105.8565638,
      },
      "Đại Từ": {
        latitude: 20.971272,
        longitude: 105.834208,
      },
      "Đặng Xuân Bảng": {
        latitude: 20.971752,
        longitude: 105.829515,
      },
    },
    "Định Công": {
      "Bùi Xương Trạch": {
        latitude: 20.9843464,
        longitude: 105.819663,
      },
      "Hồng Quang": {
        latitude: 20.974287,
        longitude: 105.832848,
      },
      "Nguyễn Công Thái": {
        latitude: 20.975732,
        longitude: 105.834499,
      },
      "Nguyễn Cảnh Dị": {
        latitude: 20.975869,
        longitude: 105.835971,
      },
      "Trần Hòa": {
        latitude: 20.977499,
        longitude: 105.825148,
      },
      "Trần Nguyên Đán": {
        latitude: 20.986583,
        longitude: 105.832667,
      },
      "Trần Điền": {
        latitude: 20.984906,
        longitude: 105.828681,
      },
      "Trịnh Đình Cửu": {
        latitude: 20.9761976,
        longitude: 105.8322167,
      },
      "Vũ Tông Phan": {
        latitude: 20.9806275,
        longitude: 105.8189674,
      },
      "Định Công": {
        latitude: 20.9830053,
        longitude: 105.8350998,
      },
      "Định Công Hạ": {
        latitude: 20.981941,
        longitude: 105.829756,
      },
      "Định Công Thượng": {
        latitude: 20.9842726,
        longitude: 105.8222944,
      },
    },
    "Giáp Bát": {
      "Giáp Bát": {
        latitude: 20.985272,
        longitude: 105.843605,
      },
      "Giải Phóng": {
        latitude: 20.9752049,
        longitude: 105.8407848,
      },
      "Kim Đồng": {
        latitude: 20.983726,
        longitude: 105.843322,
      },
      "Trương Định": {
        latitude: 20.984733,
        longitude: 105.846269,
      },
    },
    "Hoàng Liệt": {
      "Bùi Huy Bích": {
        latitude: 20.967528,
        longitude: 105.845098,
      },
      "Bằng B": {
        latitude: 20.956552,
        longitude: 105.828987,
      },
      "Bằng Liệt": {
        latitude: 20.960941,
        longitude: 105.818565,
      },
      "Giải Phóng": {
        latitude: 20.9752049,
        longitude: 105.8407848,
      },
      "Hoàng Liệt": {
        latitude: 20.966969,
        longitude: 105.832359,
      },
      "Linh Đường": {
        latitude: 20.959433,
        longitude: 105.829905,
      },
      "Nguyễn Duy Trinh": {
        latitude: 20.96412,
        longitude: 105.832615,
      },
      "Nguyễn Hữu Thọ": {
        latitude: 20.969577,
        longitude: 105.830876,
      },
      "Ngọc Hồi": {
        latitude: 20.96019,
        longitude: 105.842383,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.9592792,
        longitude: 105.8494685,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9639606,
        longitude: 105.8655924,
      },
      "Trần Thủ Độ": {
        latitude: 20.958029,
        longitude: 105.846406,
      },
      "Vành Đai 3": {
        latitude: 20.9646529,
        longitude: 105.8565638,
      },
    },
    "Hoàng Văn Thụ": {
      "Gốc Đề": {
        latitude: 20.9929773,
        longitude: 105.8545597,
      },
      "Hoàng Mai": {
        latitude: 20.988605,
        longitude: 105.855692,
      },
      "Nguyễn Đức Cảnh": {
        latitude: 20.986821,
        longitude: 105.853248,
      },
      "Tam Trinh": {
        latitude: 20.9824535,
        longitude: 105.8640402,
      },
      "Tân Mai": {
        latitude: 20.9836383,
        longitude: 105.8518849,
      },
      "Đền Lừ": {
        latitude: 20.9841541,
        longitude: 105.8599079,
      },
      "Đền Lừ 1": {
        latitude: 20.9846931,
        longitude: 105.8605728,
      },
    },
    "Lĩnh Nam": {
      "Lĩnh Nam": {
        latitude: 20.983566,
        longitude: 105.875573,
      },
      "Nam Dư": {
        latitude: 20.982135,
        longitude: 105.886663,
      },
      "Nguyễn Khoái": {
        latitude: 20.9798562,
        longitude: 105.8932109,
      },
      "Ngũ Nhạc": {
        latitude: 20.989887,
        longitude: 105.891258,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9639606,
        longitude: 105.8655924,
      },
      "Thúy Lĩnh": {
        latitude: 20.973826,
        longitude: 105.894216,
      },
      "Vành Đai 3": {
        latitude: 20.9646529,
        longitude: 105.8565638,
      },
    },
    "Mai Động": {
      "Hoàng Mai": {
        latitude: 20.988605,
        longitude: 105.855692,
      },
      "Lĩnh Nam": {
        latitude: 20.983566,
        longitude: 105.875573,
      },
      "Mai Động": {
        latitude: 20.989014,
        longitude: 105.861149,
      },
      "Tam Trinh": {
        latitude: 20.9824535,
        longitude: 105.8640402,
      },
      "Đường Số 1": {
        latitude: 20.99115,
        longitude: 105.867614,
      },
      "Đường Số 3": {
        latitude: 20.9924071,
        longitude: 105.865644,
      },
    },
    "Tân Mai": {
      "Kim Đồng": {
        latitude: 20.983726,
        longitude: 105.843322,
      },
      "Nguyễn Chính": {
        latitude: 20.980222,
        longitude: 105.847934,
      },
      "Nguyễn Đức Cảnh": {
        latitude: 20.986821,
        longitude: 105.853248,
      },
      "Trương Định": {
        latitude: 20.984733,
        longitude: 105.846269,
      },
      "Tân Mai": {
        latitude: 20.9836383,
        longitude: 105.8518849,
      },
    },
    "Thanh Trì": {
      "Nam Dư": {
        latitude: 20.982135,
        longitude: 105.886663,
      },
      "Nguyễn Khoái": {
        latitude: 20.9798562,
        longitude: 105.8932109,
      },
      "Ngũ Nhạc": {
        latitude: 20.989887,
        longitude: 105.891258,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9639606,
        longitude: 105.8655924,
      },
      "Thanh Lân": {
        latitude: 20.991352,
        longitude: 105.888666,
      },
      "Thanh Đàm": {
        latitude: 20.993304,
        longitude: 105.889714,
      },
      "Vành Đai 3": {
        latitude: 20.9646529,
        longitude: 105.8565638,
      },
      "Vĩnh Hưng": {
        latitude: 20.995217,
        longitude: 105.88003,
      },
      "Đại Đồng": {
        latitude: 20.9965615,
        longitude: 105.8828235,
      },
    },
    "Thịnh Liệt": {
      "Bùi Huy Bích": {
        latitude: 20.967528,
        longitude: 105.845098,
      },
      "Giáp Nhị": {
        latitude: 20.976559,
        longitude: 105.844323,
      },
      "Giải Phóng": {
        latitude: 20.9752049,
        longitude: 105.8407848,
      },
      "Nguyễn Chính": {
        latitude: 20.980222,
        longitude: 105.847934,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9639606,
        longitude: 105.8655924,
      },
      "Thịnh Liệt": {
        latitude: 20.9739754,
        longitude: 105.8420225,
      },
      "Vành Đai 3": {
        latitude: 20.9646529,
        longitude: 105.8565638,
      },
      "Đại Từ": {
        latitude: 20.971272,
        longitude: 105.834208,
      },
    },
    "Trần Phú": {
      "Khuyến Lương": {
        latitude: 20.9716882,
        longitude: 105.884343,
      },
      "Nam Dư": {
        latitude: 20.982135,
        longitude: 105.886663,
      },
      "Nguyễn Khoái": {
        latitude: 20.9798562,
        longitude: 105.8932109,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9639606,
        longitude: 105.8655924,
      },
      "Tây Trà": {
        latitude: 20.976773,
        longitude: 105.883521,
      },
      "Vành Đai 3": {
        latitude: 20.9646529,
        longitude: 105.8565638,
      },
      "Đường Số 2 2 Gamuda": {
        latitude: 20.970946,
        longitude: 105.878344,
      },
      "Đường Số 2 3 Gamuda": {
        latitude: 20.9694583,
        longitude: 105.8780549,
      },
      "Đường Số 2 4 Gamuda": {
        latitude: 20.968453,
        longitude: 105.8769533,
      },
      "Đường Số 2 5 Gamuda": {
        latitude: 20.96902,
        longitude: 105.878054,
      },
      "Đường Số 2 Gamuda": {
        latitude: 20.971185,
        longitude: 105.877948,
      },
    },
    "Tương Mai": {
      "Hoàng Mai": {
        latitude: 20.988605,
        longitude: 105.855692,
      },
      "Lương Khánh Thiện": {
        latitude: 20.9853,
        longitude: 105.85127,
      },
      "Nguyễn An Ninh": {
        latitude: 20.990429,
        longitude: 105.845086,
      },
      "Nguyễn Đức Cảnh": {
        latitude: 20.986821,
        longitude: 105.853248,
      },
      "Trương Định": {
        latitude: 20.984733,
        longitude: 105.846269,
      },
      "Trần Đại Nghĩa": {
        latitude: 20.993871,
        longitude: 105.844272,
      },
      "Tân Mai": {
        latitude: 20.9836383,
        longitude: 105.8518849,
      },
      "Tương Mai": {
        latitude: 20.992044,
        longitude: 105.842632,
      },
    },
    "Vĩnh Hưng": {
      "Dương Văn Bé": {
        latitude: 20.993548,
        longitude: 105.8739031,
      },
      "Lĩnh Nam": {
        latitude: 20.983566,
        longitude: 105.875573,
      },
      "Tân Khai": {
        latitude: 20.9910993,
        longitude: 105.8727165,
      },
      "Vĩnh Hưng": {
        latitude: 20.995217,
        longitude: 105.88003,
      },
      "Đông Thiên": {
        latitude: 20.986303,
        longitude: 105.8783945,
      },
    },
    "Yên Sở": {
      "Hưng Phúc": {
        latitude: 20.9615224,
        longitude: 105.8678907,
      },
      "Hưng Thịnh": {
        latitude: 20.961723,
        longitude: 105.865248,
      },
      "Nguyễn Khoái": {
        latitude: 20.9798562,
        longitude: 105.8932109,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9639606,
        longitude: 105.8655924,
      },
      "Sở Thượng": {
        latitude: 20.966371,
        longitude: 105.865974,
      },
      "Tam Trinh": {
        latitude: 20.9824535,
        longitude: 105.8640402,
      },
      "Vành Đai 3": {
        latitude: 20.9646529,
        longitude: 105.8565638,
      },
      "Yên Duyên": {
        latitude: 20.967688,
        longitude: 105.872038,
      },
      "Yên Sở": {
        latitude: 20.9667523,
        longitude: 105.8700343,
      },
    },
  },
  "Long Biên": {
    "Bồ Đề": {
      "Bồ Đề": {
        latitude: 21.0372665,
        longitude: 105.8724695,
      },
      "Hoàng Minh Đạo": {
        latitude: 21.0427558,
        longitude: 105.8817524,
      },
      "Hoàng Như Tiếp": {
        latitude: 21.041117,
        longitude: 105.877079,
      },
      "Hồng Tiến": {
        latitude: 21.0385586,
        longitude: 105.8761784,
      },
      "Lâm Hạ": {
        latitude: 21.0399951,
        longitude: 105.8826336,
      },
      "Nguyễn Sơn": {
        latitude: 21.0468099,
        longitude: 105.8782373,
      },
      "Nguyễn Văn Cừ": {
        latitude: 21.046754,
        longitude: 105.877915,
      },
      "Phú Hựu": {
        latitude: 21.0401935,
        longitude: 105.8749464,
      },
      "Phú Viên": {
        latitude: 21.0321465,
        longitude: 105.8718786,
      },
      "Xuân Quan Long Biên": {
        latitude: 21.019593,
        longitude: 105.9021211,
      },
      "Ái Mộ": {
        latitude: 21.0405743,
        longitude: 105.873736,
      },
    },
    "Cự Khối": {
      "Bát Khối": {
        latitude: 21.0209562,
        longitude: 105.901337,
      },
      "Ngõ Độc Lập": {
        latitude: 21.0031616,
        longitude: 105.9029717,
      },
      "Quốc Lộ 1a": {
        latitude: 21.0182404,
        longitude: 105.9230624,
      },
      "Xuân Quan Long Biên": {
        latitude: 21.019593,
        longitude: 105.9021211,
      },
      "Xuân Đỗ": {
        latitude: 21.0105031,
        longitude: 105.9096307,
      },
    },
    "Đức Giang": {
      "Bùi Thiện Ngộ": {
        latitude: 21.0623191,
        longitude: 105.9105366,
      },
      "Hoa Lâm": {
        latitude: 21.057058,
        longitude: 105.895466,
      },
      "Kim Quan": {
        latitude: 21.059682,
        longitude: 105.896334,
      },
      "Nguyễn Cao Luyện": {
        latitude: 21.064593,
        longitude: 105.9079311,
      },
      "Nguyễn Văn Cừ": {
        latitude: 21.046754,
        longitude: 105.877915,
      },
      "Nguyễn Văn Linh": {
        latitude: 21.0419592,
        longitude: 105.8969704,
      },
      "Ngô Gia Tự": {
        latitude: 21.0652855,
        longitude: 105.8976832,
      },
      "Phan Văn Đáng": {
        latitude: 21.064315,
        longitude: 105.9017489,
      },
      "Thép Mới": {
        latitude: 21.0642962,
        longitude: 105.909388,
      },
      "Trường Lâm": {
        latitude: 21.062196,
        longitude: 105.897438,
      },
      "Trần Văn Trà": {
        latitude: 21.064392,
        longitude: 105.9045505,
      },
      "Vũ Đức Thận": {
        latitude: 21.0529639,
        longitude: 105.8934465,
      },
      "Vạn Hạnh": {
        latitude: 21.0663815,
        longitude: 105.9062277,
      },
      "Ô Cách": {
        latitude: 21.0598317,
        longitude: 105.8961652,
      },
      "Đặng Vũ Hỷ": {
        latitude: 21.072603,
        longitude: 105.898952,
      },
      "Đức Giang": {
        latitude: 21.068711,
        longitude: 105.889113,
      },
    },
    "Gia Thụy": {
      "Gia Quất": {
        latitude: 21.053705,
        longitude: 105.877178,
      },
      "Gia Thụy": {
        latitude: 21.0485891,
        longitude: 105.884917,
      },
      "Hoàng Minh Đạo": {
        latitude: 21.0427558,
        longitude: 105.8817524,
      },
      "Nguyễn Văn Cừ": {
        latitude: 21.046754,
        longitude: 105.877915,
      },
      "Nguyễn Văn Linh": {
        latitude: 21.0419592,
        longitude: 105.8969704,
      },
      "Ngô Gia Khảm": {
        latitude: 21.0483779,
        longitude: 105.8781935,
      },
      "Ngô Gia Tự": {
        latitude: 21.0652855,
        longitude: 105.8976832,
      },
      "Ngọc Lâm": {
        latitude: 21.047452,
        longitude: 105.872948,
      },
      "Việt Hưng": {
        latitude: 21.0527339,
        longitude: 105.8998742,
      },
    },
    "Giang Biên": {
      "Bùi Thiện Ngộ": {
        latitude: 21.0623191,
        longitude: 105.9105366,
      },
      "Giang Biên": {
        latitude: 21.0605354,
        longitude: 105.9170945,
      },
      "Hội Xá": {
        latitude: 21.0458883,
        longitude: 105.9202545,
      },
      "Kẻ Tạnh": {
        latitude: 21.062101,
        longitude: 105.916493,
      },
      "Lưu Khánh Đàm": {
        latitude: 21.0603478,
        longitude: 105.9105063,
      },
      "Mai Chí Thọ": {
        latitude: 21.0616126,
        longitude: 105.9130833,
      },
      "Nguyễn Cao Luyện": {
        latitude: 21.064593,
        longitude: 105.9079311,
      },
      "Nguyễn Văn Hưởng": {
        latitude: 21.0589742,
        longitude: 105.9160303,
      },
      "Nguyễn Văn Ninh": {
        latitude: 21.0592532,
        longitude: 105.9105256,
      },
      "Ngô Viết Thụ": {
        latitude: 21.0560877,
        longitude: 105.9095329,
      },
      "Phúc Lợi": {
        latitude: 21.0477204,
        longitude: 105.9230602,
      },
      "Phạm Khắc Quảng": {
        latitude: 21.0620181,
        longitude: 105.9154989,
      },
      "Thép Mới": {
        latitude: 21.0642962,
        longitude: 105.909388,
      },
      "Trần Văn Trà": {
        latitude: 21.064392,
        longitude: 105.9045505,
      },
      "Tình Quang": {
        latitude: 21.0685952,
        longitude: 105.920007,
      },
      "Vạn Hạnh": {
        latitude: 21.0663815,
        longitude: 105.9062277,
      },
      "Đào Văn Tập": {
        latitude: 21.053916,
        longitude: 105.909928,
      },
      "Đê Vàng": {
        latitude: 21.055293,
        longitude: 105.920403,
      },
    },
    "Long Biên": {
      "163 Tư Đình": {
        latitude: 21.0331136,
        longitude: 105.8918909,
      },
      "Bát Khối": {
        latitude: 21.0209562,
        longitude: 105.901337,
      },
      "Công Nghiệp 2": {
        latitude: 21.0325252,
        longitude: 105.9071424,
      },
      "Công Nghiệp 3": {
        latitude: 21.0290704,
        longitude: 105.9025879,
      },
      "Công Nghiệp 4": {
        latitude: 21.0275185,
        longitude: 105.9044482,
      },
      "Công Nghiệp 6": {
        latitude: 21.0260137,
        longitude: 105.9034812,
      },
      "Cầu Vĩnh Tuy": {
        latitude: 21.0161996,
        longitude: 105.8882778,
      },
      "Cổ Linh": {
        latitude: 21.0286198,
        longitude: 105.8910479,
      },
      "Minh Tâm": {
        latitude: 21.0302089,
        longitude: 105.8852231,
      },
      "Phố Trạm": {
        latitude: 21.0261488,
        longitude: 105.8936538,
      },
      "Thạch Cầu": {
        latitude: 21.0210388,
        longitude: 105.8798768,
      },
      "Tư Đình": {
        latitude: 21.02906,
        longitude: 105.884741,
      },
      "Xuân Quan Long Biên": {
        latitude: 21.019593,
        longitude: 105.9021211,
      },
      "Đàm Quang Trung": {
        latitude: 21.0301364,
        longitude: 105.8991387,
      },
    },
    "Ngọc Lâm": {
      "Long Biên": {
        latitude: 21.0436338,
        longitude: 105.8653418,
      },
      "Long Biên 1": {
        latitude: 21.0458384,
        longitude: 105.8678125,
      },
      "Long Biên 2": {
        latitude: 21.0448807,
        longitude: 105.8663922,
      },
      "Nguyễn Sơn": {
        latitude: 21.0468099,
        longitude: 105.8782373,
      },
      "Nguyễn Văn Cừ": {
        latitude: 21.046754,
        longitude: 105.877915,
      },
      "Ngô Gia Khảm": {
        latitude: 21.0483779,
        longitude: 105.8781935,
      },
      "Ngọc Lâm": {
        latitude: 21.047452,
        longitude: 105.872948,
      },
      "Ngọc Thụy": {
        latitude: 21.0574207,
        longitude: 105.8657287,
      },
    },
    "Ngọc Thụy": {
      "Bắc Cầu": {
        latitude: 21.0699595,
        longitude: 105.8549498,
      },
      "Gia Thượng": {
        latitude: 21.0736463,
        longitude: 105.8889501,
      },
      "Lý Sơn": {
        latitude: 21.0653723,
        longitude: 105.8808993,
      },
      "Ngọc Thụy": {
        latitude: 21.0574207,
        longitude: 105.8657287,
      },
    },
    "Phúc Đồng": {
      "163 Tư Đình": {
        latitude: 21.0331136,
        longitude: 105.8918909,
      },
      "Chu Huy Mân": {
        latitude: 21.0430886,
        longitude: 105.9069766,
      },
      "Công Nghiệp 2": {
        latitude: 21.0325252,
        longitude: 105.9071424,
      },
      "Cổ Linh": {
        latitude: 21.0286198,
        longitude: 105.8910479,
      },
      "Hoàng Thế Thiện": {
        latitude: 21.0376955,
        longitude: 105.9064881,
      },
      "Huỳnh Văn Nghệ": {
        latitude: 21.0396482,
        longitude: 105.9081989,
      },
      "Hướng Dương 1": {
        latitude: 21.0432715,
        longitude: 105.9101486,
      },
      "Hướng Dương 3": {
        latitude: 21.0419568,
        longitude: 105.9099227,
      },
      "Hướng Dương 4": {
        latitude: 21.042485,
        longitude: 105.9097582,
      },
      "Mai Phúc": {
        latitude: 21.040856,
        longitude: 105.900962,
      },
      "Nguyễn Lam": {
        latitude: 21.042467,
        longitude: 105.902393,
      },
      "Nguyễn Sơn": {
        latitude: 21.0468099,
        longitude: 105.8782373,
      },
      "Nguyễn Văn Linh": {
        latitude: 21.0419592,
        longitude: 105.8969704,
      },
      "Nguyệt Quế 1": {
        latitude: 21.0440041,
        longitude: 105.9091774,
      },
      "Nguyệt Quế 12": {
        latitude: 21.045433,
        longitude: 105.90553,
      },
      "Nguyệt Quế 15": {
        latitude: 21.0452985,
        longitude: 105.9060069,
      },
      "Nguyệt Quế 16": {
        latitude: 21.0442913,
        longitude: 105.9057472,
      },
      "Nguyệt Quế 18": {
        latitude: 21.0438213,
        longitude: 105.9078387,
      },
      "Nguyệt Quế 19": {
        latitude: 21.0434325,
        longitude: 105.9082442,
      },
      "Nguyệt Quế 2": {
        latitude: 21.0478666,
        longitude: 105.9025131,
      },
      "Nguyệt Quế 20": {
        latitude: 21.0434475,
        longitude: 105.9092849,
      },
      "Nguyệt Quế 21": {
        latitude: 21.0445114,
        longitude: 105.9094673,
      },
      "Nguyệt Quế 3": {
        latitude: 21.0489372,
        longitude: 105.9026425,
      },
      "Nguyệt Quế 4": {
        latitude: 21.0485193,
        longitude: 105.9028128,
      },
      "Nguyệt Quế 5": {
        latitude: 21.0483603,
        longitude: 105.9034697,
      },
      "Nguyệt Quế 6": {
        latitude: 21.0472525,
        longitude: 105.9034074,
      },
      "Nguyệt Quế 7": {
        latitude: 21.0468212,
        longitude: 105.903603,
      },
      "Nguyệt Quế 8": {
        latitude: 21.0462489,
        longitude: 105.9033981,
      },
      "Nguyệt Quế 9": {
        latitude: 21.0458915,
        longitude: 105.9036304,
      },
      "Phong Lan 1": {
        latitude: 21.0410869,
        longitude: 105.9065007,
      },
      "Phong Lan 2": {
        latitude: 21.0410265,
        longitude: 105.9073337,
      },
      "Phong Lan 3": {
        latitude: 21.0412843,
        longitude: 105.9060443,
      },
      "Phong Lan 4": {
        latitude: 21.040328,
        longitude: 105.9065434,
      },
      "Phong Lan 5": {
        latitude: 21.0405521,
        longitude: 105.907188,
      },
      "Tân Thụy": {
        latitude: 21.043528,
        longitude: 105.898221,
      },
      "Đàm Quang Trung": {
        latitude: 21.0301364,
        longitude: 105.8991387,
      },
    },
    "Phúc Lợi": {
      "Anh Đào 10": {
        latitude: 21.0476409,
        longitude: 105.9145353,
      },
      "Anh Đào 11": {
        latitude: 21.0474138,
        longitude: 105.9140311,
      },
      "Anh Đào 9": {
        latitude: 21.0471519,
        longitude: 105.9150406,
      },
      "Bằng Lăng": {
        latitude: 21.052498,
        longitude: 105.912641,
      },
      "Chu Huy Mân": {
        latitude: 21.0430886,
        longitude: 105.9069766,
      },
      "Hoa Hồng": {
        latitude: 21.0446823,
        longitude: 105.9166341,
      },
      "Hoa Lan": {
        latitude: 21.0444552,
        longitude: 105.9194809,
      },
      "Hoa Lan 1": {
        latitude: 21.0468333,
        longitude: 105.9189881,
      },
      "Hoa Lan 2": {
        latitude: 21.045306,
        longitude: 105.9193922,
      },
      "Hoa Lan 3": {
        latitude: 21.0445336,
        longitude: 105.9202922,
      },
      "Hoa Lan 4": {
        latitude: 21.0433601,
        longitude: 105.9203855,
      },
      "Hoa Lan 5": {
        latitude: 21.0425908,
        longitude: 105.9205302,
      },
      "Hoa Lan 6": {
        latitude: 21.0419727,
        longitude: 105.9209137,
      },
      "Hoa Lan 7": {
        latitude: 21.041456,
        longitude: 105.921503,
      },
      "Hoa Lan 8": {
        latitude: 21.0407323,
        longitude: 105.9215381,
      },
      "Hoa Phượng": {
        latitude: 21.048161,
        longitude: 105.916794,
      },
      "Hoa Phượng 1": {
        latitude: 21.0551862,
        longitude: 105.9140281,
      },
      "Hoa Phượng 2": {
        latitude: 21.05358,
        longitude: 105.915054,
      },
      "Hoa Phượng 3": {
        latitude: 21.052407,
        longitude: 105.915861,
      },
      "Hoa Phượng 4": {
        latitude: 21.0462595,
        longitude: 105.9153167,
      },
      "Hoa Phượng 5": {
        latitude: 21.0439067,
        longitude: 105.917408,
      },
      "Hoa Phượng 6": {
        latitude: 21.0429208,
        longitude: 105.9192803,
      },
      "Hoa Phượng 7": {
        latitude: 21.0415626,
        longitude: 105.9195332,
      },
      "Hoa Phượng 8": {
        latitude: 21.0398155,
        longitude: 105.9171596,
      },
      "Hoa Sữa": {
        latitude: 21.0413735,
        longitude: 105.9171703,
      },
      "Hoa Sữa 1": {
        latitude: 21.045478,
        longitude: 105.915172,
      },
      "Hoa Sữa 10": {
        latitude: 21.0391366,
        longitude: 105.9207129,
      },
      "Hoa Sữa 11": {
        latitude: 21.0377737,
        longitude: 105.9210756,
      },
      "Hoa Sữa 3": {
        latitude: 21.0444194,
        longitude: 105.914913,
      },
      "Hoa Sữa 4": {
        latitude: 21.04343,
        longitude: 105.916107,
      },
      "Hoa Sữa 5": {
        latitude: 21.0420193,
        longitude: 105.9159271,
      },
      "Hoa Sữa 6": {
        latitude: 21.041416,
        longitude: 105.9164697,
      },
      "Hoa Sữa 7": {
        latitude: 21.0402268,
        longitude: 105.918293,
      },
      "Hoa Sữa 8": {
        latitude: 21.0393479,
        longitude: 105.9188524,
      },
      "Hoa Sữa 9": {
        latitude: 21.039344,
        longitude: 105.919846,
      },
      "Hội Xá": {
        latitude: 21.0458883,
        longitude: 105.9202545,
      },
      "Phúc Lợi": {
        latitude: 21.0477204,
        longitude: 105.9230602,
      },
      "Trần Danh Tuyên": {
        latitude: 21.0392011,
        longitude: 105.9169483,
      },
      "Vũ Xuân Thiều": {
        latitude: 21.0355267,
        longitude: 105.9198155,
      },
      "Đê Vàng": {
        latitude: 21.055293,
        longitude: 105.920403,
      },
    },
    "Sài Đồng": {
      "Cầu Bây": {
        latitude: 21.0306641,
        longitude: 105.9210525,
      },
      "Hoa Sữa 5": {
        latitude: 21.0420193,
        longitude: 105.9159271,
      },
      "Hoa Sữa 6": {
        latitude: 21.041416,
        longitude: 105.9164697,
      },
      "Hoàng Thế Thiện": {
        latitude: 21.0376955,
        longitude: 105.9064881,
      },
      "Huỳnh Văn Nghệ": {
        latitude: 21.0396482,
        longitude: 105.9081989,
      },
      "Nguyễn Văn Linh": {
        latitude: 21.0419592,
        longitude: 105.8969704,
      },
      "Sài Đồng": {
        latitude: 21.035604,
        longitude: 105.910833,
      },
      "Trần Danh Tuyên": {
        latitude: 21.0392011,
        longitude: 105.9169483,
      },
      "Vũ Xuân Thiều": {
        latitude: 21.0355267,
        longitude: 105.9198155,
      },
    },
    "Thạch Bàn": {
      "Bát Khối": {
        latitude: 21.0209562,
        longitude: 105.901337,
      },
      "Công Nghiệp 2": {
        latitude: 21.0325252,
        longitude: 105.9071424,
      },
      "Công Nghiệp 6": {
        latitude: 21.0260137,
        longitude: 105.9034812,
      },
      "Cổ Linh": {
        latitude: 21.0286198,
        longitude: 105.8910479,
      },
      "Huỳnh Tấn Phát": {
        latitude: 21.0272975,
        longitude: 105.9060968,
      },
      "Khu Đô Thị Garden City": {
        latitude: 21.0179694,
        longitude: 105.9189767,
      },
      "Nguyễn Thời Trung": {
        latitude: 21.0281573,
        longitude: 105.918111,
      },
      "Nguyễn Văn Linh": {
        latitude: 21.0419592,
        longitude: 105.8969704,
      },
      "Ngọc Trì": {
        latitude: 21.0214032,
        longitude: 105.9093545,
      },
      "Quốc Lộ 1a": {
        latitude: 21.0182404,
        longitude: 105.9230624,
      },
      "Thạch Bàn": {
        latitude: 21.02477,
        longitude: 105.907459,
      },
      "Tổ 12": {
        latitude: 21.0161844,
        longitude: 105.9181329,
      },
      "Xuân Quan Long Biên": {
        latitude: 21.019593,
        longitude: 105.9021211,
      },
      "Đồng Dinh": {
        latitude: 21.0223874,
        longitude: 105.9129287,
      },
    },
    "Thượng Thanh": {
      "Gia Quất": {
        latitude: 21.053705,
        longitude: 105.877178,
      },
      "Gia Thượng": {
        latitude: 21.0736463,
        longitude: 105.8889501,
      },
      "Lý Sơn": {
        latitude: 21.0653723,
        longitude: 105.8808993,
      },
      "Nam Đuống": {
        latitude: 21.0747384,
        longitude: 105.8922418,
      },
      "Nguyễn Văn Linh": {
        latitude: 21.0419592,
        longitude: 105.8969704,
      },
      "Ngô Gia Tự": {
        latitude: 21.0652855,
        longitude: 105.8976832,
      },
      "Thanh Am": {
        latitude: 21.0712745,
        longitude: 105.9000041,
      },
      "Thượng Thanh": {
        latitude: 21.057374,
        longitude: 105.887126,
      },
      "Đê Vàng": {
        latitude: 21.055293,
        longitude: 105.920403,
      },
      "Đặng Vũ Hỷ": {
        latitude: 21.072603,
        longitude: 105.898952,
      },
      "Đức Giang": {
        latitude: 21.068711,
        longitude: 105.889113,
      },
    },
    "Việt Hưng": {
      "Anh Đào": {
        latitude: 21.044309,
        longitude: 105.9121592,
      },
      "Anh Đào 1": {
        latitude: 21.0468071,
        longitude: 105.9126915,
      },
      "Anh Đào 12": {
        latitude: 21.0473785,
        longitude: 105.9132165,
      },
      "Anh Đào 2": {
        latitude: 21.0465011,
        longitude: 105.9123493,
      },
      "Anh Đào 3": {
        latitude: 21.0461324,
        longitude: 105.9122149,
      },
      "Anh Đào 4": {
        latitude: 21.0457451,
        longitude: 105.91211,
      },
      "Anh Đào 6": {
        latitude: 21.045991,
        longitude: 105.912657,
      },
      "Anh Đào 7": {
        latitude: 21.044392,
        longitude: 105.912385,
      },
      "Anh Đào 8": {
        latitude: 21.0452477,
        longitude: 105.9129037,
      },
      "Anh Đào 9": {
        latitude: 21.0471519,
        longitude: 105.9150406,
      },
      "Bùi Thiện Ngộ": {
        latitude: 21.0623191,
        longitude: 105.9105366,
      },
      "Bằng Lăng": {
        latitude: 21.052498,
        longitude: 105.912641,
      },
      "Bằng Lăng 1": {
        latitude: 21.0521038,
        longitude: 105.908291,
      },
      "Bằng Lăng 11": {
        latitude: 21.0498209,
        longitude: 105.9134244,
      },
      "Bằng Lăng 3": {
        latitude: 21.0528986,
        longitude: 105.9101587,
      },
      "Bằng Lăng 5": {
        latitude: 21.0536338,
        longitude: 105.911485,
      },
      "Bằng Lăng 7": {
        latitude: 21.0525879,
        longitude: 105.9128267,
      },
      "Chu Huy Mân": {
        latitude: 21.0430886,
        longitude: 105.9069766,
      },
      "Hoa Hồng": {
        latitude: 21.0446823,
        longitude: 105.9166341,
      },
      "Hoa Lâm": {
        latitude: 21.057058,
        longitude: 105.895466,
      },
      "Hoa Phượng": {
        latitude: 21.048161,
        longitude: 105.916794,
      },
      "Hoa Phượng 4": {
        latitude: 21.0462595,
        longitude: 105.9153167,
      },
      "Hoa Sữa": {
        latitude: 21.0413735,
        longitude: 105.9171703,
      },
      "Hoa Sữa 1": {
        latitude: 21.045478,
        longitude: 105.915172,
      },
      "Hoa Sữa 2": {
        latitude: 21.0451168,
        longitude: 105.9136821,
      },
      "Hoa Sữa 3": {
        latitude: 21.0444194,
        longitude: 105.914913,
      },
      "Hoa Sữa 5": {
        latitude: 21.0420193,
        longitude: 105.9159271,
      },
      "Hoa Sữa 6": {
        latitude: 21.041416,
        longitude: 105.9164697,
      },
      "Huỳnh Văn Nghệ": {
        latitude: 21.0396482,
        longitude: 105.9081989,
      },
      "Hướng Dương 1": {
        latitude: 21.0432715,
        longitude: 105.9101486,
      },
      "Kim Quan": {
        latitude: 21.059682,
        longitude: 105.896334,
      },
      "Kim Quan Thượng": {
        latitude: 21.058935,
        longitude: 105.901603,
      },
      "Lưu Khánh Đàm": {
        latitude: 21.0603478,
        longitude: 105.9105063,
      },
      "Lệ Mật": {
        latitude: 21.056631,
        longitude: 105.899247,
      },
      "Nguyễn Cao Luyện": {
        latitude: 21.064593,
        longitude: 105.9079311,
      },
      "Nguyễn Văn Ninh": {
        latitude: 21.0592532,
        longitude: 105.9105256,
      },
      "Nguyệt Quế 17": {
        latitude: 21.0445214,
        longitude: 105.910463,
      },
      "Nguyệt Quế 18": {
        latitude: 21.0438213,
        longitude: 105.9078387,
      },
      "Nguyệt Quế 2": {
        latitude: 21.0478666,
        longitude: 105.9025131,
      },
      "Nguyệt Quế 20": {
        latitude: 21.0434475,
        longitude: 105.9092849,
      },
      "Nguyệt Quế 21": {
        latitude: 21.0445114,
        longitude: 105.9094673,
      },
      "Nguyệt Quế 22": {
        latitude: 21.0446666,
        longitude: 105.9098676,
      },
      "Nguyệt Quế 3": {
        latitude: 21.0489372,
        longitude: 105.9026425,
      },
      "Nguyệt Quế 4": {
        latitude: 21.0485193,
        longitude: 105.9028128,
      },
      "Nguyệt Quế 5": {
        latitude: 21.0483603,
        longitude: 105.9034697,
      },
      "Ngô Huy Quỳnh": {
        latitude: 21.0571031,
        longitude: 105.9080912,
      },
      "Ngô Viết Thụ": {
        latitude: 21.0560877,
        longitude: 105.9095329,
      },
      "Phan Văn Đáng": {
        latitude: 21.064315,
        longitude: 105.9017489,
      },
      "Quốc Phương Trại": {
        latitude: 21.0539168,
        longitude: 105.8948547,
      },
      "Thép Mới": {
        latitude: 21.0642962,
        longitude: 105.909388,
      },
      "Trường Lâm": {
        latitude: 21.062196,
        longitude: 105.897438,
      },
      "Trần Danh Tuyên": {
        latitude: 21.0392011,
        longitude: 105.9169483,
      },
      "Trần Văn Trà": {
        latitude: 21.064392,
        longitude: 105.9045505,
      },
      "Tulip 1": {
        latitude: 21.0492544,
        longitude: 105.906244,
      },
      "Tulip 3": {
        latitude: 21.0513787,
        longitude: 105.9063653,
      },
      "Tulip 4": {
        latitude: 21.0503492,
        longitude: 105.9054376,
      },
      "Tulip 5": {
        latitude: 21.050307,
        longitude: 105.9063734,
      },
      "Tulip 6": {
        latitude: 21.0494519,
        longitude: 105.9046314,
      },
      "Tulip 7": {
        latitude: 21.0497534,
        longitude: 105.9062773,
      },
      "Việt Hưng": {
        latitude: 21.0527339,
        longitude: 105.8998742,
      },
      "Vũ Đức Thận": {
        latitude: 21.0529639,
        longitude: 105.8934465,
      },
      "Vạn Hạnh": {
        latitude: 21.0663815,
        longitude: 105.9062277,
      },
      "Ô Cách": {
        latitude: 21.0598317,
        longitude: 105.8961652,
      },
      "Đoàn Khuê": {
        latitude: 21.0543669,
        longitude: 105.9058846,
      },
      "Đào Văn Tập": {
        latitude: 21.053916,
        longitude: 105.909928,
      },
    },
  },
  "Mê Linh": {
    "Chi Đông": {
      "Ngô Miễn": {
        latitude: 21.2215977,
        longitude: 105.7428835,
      },
      "Quang Minh": {
        latitude: 21.1991741,
        longitude: 105.775558,
      },
      "Đt 35": {
        latitude: 21.2045198,
        longitude: 105.7466639,
      },
      "Đường Zế": {
        latitude: 21.2112692,
        longitude: 105.7606615,
      },
    },
    "Chu Phan": {
      "Bến Phan Chu": {
        latitude: 21.1589708,
        longitude: 105.6494839,
      },
      "Đt 308": {
        latitude: 21.1950291,
        longitude: 105.6476592,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1688114,
        longitude: 105.6598124,
      },
    },
    "Đại Thịnh": {
      "Mê Linh": {
        latitude: 21.1832644,
        longitude: 105.7152465,
      },
      "Quốc Lộ 23": {
        latitude: 21.1837896,
        longitude: 105.724754,
      },
      "Thường Lệ": {
        latitude: 21.1509266,
        longitude: 105.7252046,
      },
      "Đt 35": {
        latitude: 21.2045198,
        longitude: 105.7466639,
      },
      "Đại Thịnh": {
        latitude: 21.184435,
        longitude: 105.718933,
      },
    },
    "Hoàng Kim": {
      "Thạch Đà": {
        latitude: 21.1596482,
        longitude: 105.6823966,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1688114,
        longitude: 105.6598124,
      },
    },
    "Kim Hoa": {
      "Ngô Miễn": {
        latitude: 21.2215977,
        longitude: 105.7428835,
      },
      "Đt 35": {
        latitude: 21.2045198,
        longitude: 105.7466639,
      },
    },
    "Liên Mạc": {
      "Liên Mạc": {
        latitude: 21.1892253,
        longitude: 105.6593318,
      },
      "Vạn Yên Liên Mạc": {
        latitude: 21.2062671,
        longitude: 105.6373364,
      },
      "Yên Bài": {
        latitude: 21.2151279,
        longitude: 105.644267,
      },
      "Đt 308": {
        latitude: 21.1950291,
        longitude: 105.6476592,
      },
    },
    "Mê Linh": {
      "Mê Linh": {
        latitude: 21.1832644,
        longitude: 105.7152465,
      },
      "Quốc Lộ 23": {
        latitude: 21.1837896,
        longitude: 105.724754,
      },
      "Thường Lệ": {
        latitude: 21.1509266,
        longitude: 105.7252046,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1688114,
        longitude: 105.6598124,
      },
    },
    "Quang Minh": {
      "Hoa Phượng Vĩ": {
        latitude: 21.195123,
        longitude: 105.7813932,
      },
      "Quang Minh": {
        latitude: 21.1991741,
        longitude: 105.775558,
      },
      "Võ Văn Kiệt": {
        latitude: 21.1894124,
        longitude: 105.7806308,
      },
    },
    "Tam Đồng": {
      "Mê Linh": {
        latitude: 21.1832644,
        longitude: 105.7152465,
      },
      "Đt 312": {
        latitude: 21.189205,
        longitude: 105.681607,
      },
    },
    "Thạch Đà": {
      "Liên Mạc": {
        latitude: 21.1892253,
        longitude: 105.6593318,
      },
      "Thạch Đà": {
        latitude: 21.1596482,
        longitude: 105.6823966,
      },
      "Đt 312": {
        latitude: 21.189205,
        longitude: 105.681607,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1688114,
        longitude: 105.6598124,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.1723217,
        longitude: 105.6721258,
      },
    },
    "Thanh Lâm": {
      "Mê Linh": {
        latitude: 21.1832644,
        longitude: 105.7152465,
      },
      "Quốc Lộ 23": {
        latitude: 21.1837896,
        longitude: 105.724754,
      },
      "Đt 312": {
        latitude: 21.189205,
        longitude: 105.681607,
      },
      "Đt 35": {
        latitude: 21.2045198,
        longitude: 105.7466639,
      },
    },
    "Tiền Phong": {
      "Mê Linh": {
        latitude: 21.1832644,
        longitude: 105.7152465,
      },
      "Phố Yên": {
        latitude: 21.1483864,
        longitude: 105.7588108,
      },
      "Quốc Lộ 23": {
        latitude: 21.1837896,
        longitude: 105.724754,
      },
    },
    "Tiến Thắng": {
      "Đt 308": {
        latitude: 21.1950291,
        longitude: 105.6476592,
      },
    },
    "Tiến Thịnh": {
      "Tiến Thịnh": {
        latitude: 21.1894265,
        longitude: 105.6323871,
      },
      "Đt 308": {
        latitude: 21.1950291,
        longitude: 105.6476592,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1688114,
        longitude: 105.6598124,
      },
    },
    "Tráng Việt": {
      "Thường Lệ": {
        latitude: 21.1509266,
        longitude: 105.7252046,
      },
      "Ven Sông Đẹp Thôn": {
        latitude: 21.1277404,
        longitude: 105.7357149,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1688114,
        longitude: 105.6598124,
      },
      "Đẹp Thôn": {
        latitude: 21.1299235,
        longitude: 105.7370811,
      },
    },
    "Tự Lập": {
      "Tự Lập": {
        latitude: 21.2147548,
        longitude: 105.6578683,
      },
      "Yên Bài": {
        latitude: 21.2151279,
        longitude: 105.644267,
      },
      "Đt 308": {
        latitude: 21.1950291,
        longitude: 105.6476592,
      },
    },
    "Văn Khê": {
      "Mê Linh": {
        latitude: 21.1832644,
        longitude: 105.7152465,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1688114,
        longitude: 105.6598124,
      },
    },
    "Vạn Yên": {
      "Vạn Yên": {
        latitude: 21.2017233,
        longitude: 105.6252797,
      },
      "Vạn Yên Liên Mạc": {
        latitude: 21.2062671,
        longitude: 105.6373364,
      },
      "Đê Tả Sông Hồng": {
        latitude: 21.1688114,
        longitude: 105.6598124,
      },
    },
  },
  "Mỹ Đức": {
    "An Mỹ": {
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
    },
    "An Phú": {
      "Đường Hồ Chí Minh": {
        latitude: 20.6270146,
        longitude: 105.6870058,
      },
    },
    "Bột Xuyên": {
      "Thôn Lai Tảo": {
        latitude: 20.7747329,
        longitude: 105.7218487,
      },
      "Trần Phú": {
        latitude: 20.7721786,
        longitude: 105.720273,
      },
    },
    "Đại Hưng": {
      "Thợ Sơn": {
        latitude: 20.6797013,
        longitude: 105.7534972,
      },
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
    },
    "Đại Nghĩa": {
      "Thợ Sơn": {
        latitude: 20.6797013,
        longitude: 105.7534972,
      },
      "Tế Tiêu": {
        latitude: 20.6905012,
        longitude: 105.7424395,
      },
      "Văn Giang": {
        latitude: 20.6841898,
        longitude: 105.7473186,
      },
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
      "Đt 76": {
        latitude: 20.6872104,
        longitude: 105.7151343,
      },
    },
    "Đốc Tín": {
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
    },
    "Đồng Tâm": {
      "Đt 429": {
        latitude: 20.8089417,
        longitude: 105.6739391,
      },
    },
    "Hồng Sơn": {
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
    },
    "Hợp Thanh": {
      "Chợ Vải": {
        latitude: 20.674632,
        longitude: 105.7003558,
      },
      "Cầu Ái Nàng": {
        latitude: 20.6643069,
        longitude: 105.7135934,
      },
    },
    "Hợp Tiến": {
      "Chợ Vải": {
        latitude: 20.674632,
        longitude: 105.7003558,
      },
      "Đt 76": {
        latitude: 20.6872104,
        longitude: 105.7151343,
      },
    },
    "Hương Sơn": {
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
      "Đt 74": {
        latitude: 20.5932195,
        longitude: 105.771712,
      },
      "Đt 978": {
        latitude: 20.610784,
        longitude: 105.79915,
      },
    },
    "Lê Thanh": {
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
    },
    "Mỹ Thành": {
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
    },
    "Phù Lưu Tế": {
      "Phù Lưu Tế": {
        latitude: 20.7042647,
        longitude: 105.760233,
      },
      "Tế Tiêu": {
        latitude: 20.6905012,
        longitude: 105.7424395,
      },
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
      "Đt 76": {
        latitude: 20.6872104,
        longitude: 105.7151343,
      },
    },
    "Phúc Lâm": {
      "Ngõ Trũng": {
        latitude: 20.8062618,
        longitude: 105.7052574,
      },
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
      "Đt 429": {
        latitude: 20.8089417,
        longitude: 105.6739391,
      },
      "Đê Hội Triều": {
        latitude: 20.8271846,
        longitude: 105.7022128,
      },
    },
    "Phùng Xá": {
      "Phù Lưu Tế": {
        latitude: 20.7042647,
        longitude: 105.760233,
      },
    },
    "Vạn Kim": {
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
    },
    "Xuy Xá": {
      "Đt 419": {
        latitude: 20.6795078,
        longitude: 105.748077,
      },
      "Đường Trục": {
        latitude: 20.7239045,
        longitude: 105.7438861,
      },
    },
  },
  "Nam Từ Liêm": {
    "Cầu Diễn": {
      "Cầu Diễn": {
        latitude: 21.0406213,
        longitude: 105.7639267,
      },
      "Hoàng Công Chất": {
        latitude: 21.043311,
        longitude: 105.765292,
      },
      "Hàm Nghi": {
        latitude: 21.035444,
        longitude: 105.762889,
      },
      "Hồ Tùng Mậu": {
        latitude: 21.040807,
        longitude: 105.76415,
      },
      "Liên Cơ": {
        latitude: 21.038977,
        longitude: 105.766212,
      },
      "Lưu Hữu Phước": {
        latitude: 21.032297,
        longitude: 105.765045,
      },
      "Nguyễn Cơ Thạch": {
        latitude: 21.033887,
        longitude: 105.765841,
      },
      "Nguyễn Văn Giáp": {
        latitude: 21.0301639,
        longitude: 105.7591477,
      },
      "Nguyễn Đổng Chi": {
        latitude: 21.037533,
        longitude: 105.764115,
      },
      "Trần Hữu Dực": {
        latitude: 21.029082,
        longitude: 105.764609,
      },
      "Tân Mỹ": {
        latitude: 21.025134,
        longitude: 105.76298,
      },
      "Đỗ Xuân Hợp": {
        latitude: 21.021486,
        longitude: 105.762226,
      },
    },
    "Đại Mỗ": {
      "Hữu Hưng": {
        latitude: 20.9958535,
        longitude: 105.7469765,
      },
      "Ngọc Trục": {
        latitude: 20.987248,
        longitude: 105.769703,
      },
      "Quang Tiến": {
        latitude: 20.999832,
        longitude: 105.756929,
      },
      "Sa Đôi": {
        latitude: 20.9987322,
        longitude: 105.7640053,
      },
      "Tây Mỗ": {
        latitude: 21.002916,
        longitude: 105.750168,
      },
      "Tố Hữu": {
        latitude: 20.9923406,
        longitude: 105.7858851,
      },
      "Vũ Trọng Khánh": {
        latitude: 20.9864930340751,
        longitude: 105.779484003781,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.002468,
        longitude: 105.7809255,
      },
      "Đại Mỗ": {
        latitude: 20.989024,
        longitude: 105.765531,
      },
    },
    "Mễ Trì": {
      "Châu Văn Liêm": {
        latitude: 21.009664,
        longitude: 105.771176,
      },
      "Cương Kiên": {
        latitude: 20.997606,
        longitude: 105.779978,
      },
      "Dương Đình Nghệ": {
        latitude: 21.01791,
        longitude: 105.782368,
      },
      "Hoàng Lan": {
        latitude: 20.9996328,
        longitude: 105.7877162,
      },
      "Hoàng Lan 1": {
        latitude: 21.000918,
        longitude: 105.785927,
      },
      "Hoàng Lan 2": {
        latitude: 20.999987,
        longitude: 105.786495,
      },
      "Hoàng Lan 3": {
        latitude: 21.000301,
        longitude: 105.789084,
      },
      "Lê Quang Đạo": {
        latitude: 21.008517,
        longitude: 105.77403,
      },
      "Lương Thế Vinh": {
        latitude: 20.9965931,
        longitude: 105.7882153,
      },
      "Miếu Đầm": {
        latitude: 21.0051619,
        longitude: 105.7827978,
      },
      "Mạc Thái Tông": {
        latitude: 21.010286,
        longitude: 105.790079,
      },
      "Mạc Thái Tổ": {
        latitude: 21.014602,
        longitude: 105.78543,
      },
      "Mễ Trì": {
        latitude: 21.0130218,
        longitude: 105.7757309,
      },
      "Mễ Trì Hạ": {
        latitude: 21.0127642,
        longitude: 105.7830863,
      },
      "Mễ Trì Thượng": {
        latitude: 21.0074016,
        longitude: 105.7769326,
      },
      "Mộc Lan": {
        latitude: 21.000781,
        longitude: 105.7848296,
      },
      "Nguyễn Quốc Trị": {
        latitude: 21.013546,
        longitude: 105.787665,
      },
      "Phạm Hùng": {
        latitude: 21.0176,
        longitude: 105.781931,
      },
      "Thạch Thảo": {
        latitude: 21.00006,
        longitude: 105.789391,
      },
      "Thạch Thảo 1": {
        latitude: 20.998606,
        longitude: 105.787985,
      },
      "Thạch Thảo 2": {
        latitude: 20.99909,
        longitude: 105.788804,
      },
      "Thạch Thảo 3": {
        latitude: 20.999557,
        longitude: 105.789597,
      },
      "Thạch Thảo 4": {
        latitude: 20.999516,
        longitude: 105.790225,
      },
      "Thạch Thảo 5": {
        latitude: 20.999828,
        longitude: 105.790626,
      },
      "Thạch Thảo 6": {
        latitude: 21.000636,
        longitude: 105.790677,
      },
      "Vũ Quỳnh": {
        latitude: 21.0126941,
        longitude: 105.7753418,
      },
      "Vườn Cam": {
        latitude: 21.0139,
        longitude: 105.7717968,
      },
      "Đại Linh": {
        latitude: 20.994892,
        longitude: 105.772923,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.002468,
        longitude: 105.7809255,
      },
      "Đồng Me": {
        latitude: 21.0094449,
        longitude: 105.7792251,
      },
      "Đỗ Đức Dục": {
        latitude: 21.009015,
        longitude: 105.783095,
      },
    },
    "Mỹ Đình 1": {
      "Bùi Xuân Phái": {
        latitude: 21.031873,
        longitude: 105.766405,
      },
      "Dương Đình Nghệ": {
        latitude: 21.01791,
        longitude: 105.782368,
      },
      "Hoài Thanh": {
        latitude: 21.029922,
        longitude: 105.766599,
      },
      "Hoàng Trọng Mậu": {
        latitude: 21.015825,
        longitude: 105.775956,
      },
      "Lê Quang Đạo": {
        latitude: 21.008517,
        longitude: 105.77403,
      },
      "Lê Đức Thọ": {
        latitude: 21.02815,
        longitude: 105.768272,
      },
      "Lưu Hữu Phước": {
        latitude: 21.032297,
        longitude: 105.765045,
      },
      "Mễ Trì": {
        latitude: 21.0130218,
        longitude: 105.7757309,
      },
      "Mỹ Đình": {
        latitude: 21.02446,
        longitude: 105.773937,
      },
      "Nguyễn Cơ Thạch": {
        latitude: 21.033887,
        longitude: 105.765841,
      },
      "Nguyễn Văn Giáp": {
        latitude: 21.0301639,
        longitude: 105.7591477,
      },
      "Nguyễn Xuân Nguyên": {
        latitude: 21.03162,
        longitude: 105.767214,
      },
      "Phạm Hùng": {
        latitude: 21.0176,
        longitude: 105.781931,
      },
      "Trần Hữu Dực": {
        latitude: 21.029082,
        longitude: 105.764609,
      },
      "Trần Văn Cẩn": {
        latitude: 21.029689,
        longitude: 105.767318,
      },
      "Trần Văn Lai": {
        latitude: 21.015825,
        longitude: 105.775956,
      },
      "Tân Mỹ": {
        latitude: 21.025134,
        longitude: 105.76298,
      },
      "Đình Thôn": {
        latitude: 21.017831,
        longitude: 105.775927,
      },
      "Đỗ Xuân Hợp": {
        latitude: 21.021486,
        longitude: 105.762226,
      },
      "Đỗ Đình Thiện": {
        latitude: 21.0149194,
        longitude: 105.7767643,
      },
    },
    "Mỹ Đình 2": {
      "Bùi Xuân Phái": {
        latitude: 21.031873,
        longitude: 105.766405,
      },
      "Cao Xuân Huy": {
        latitude: 21.032539,
        longitude: 105.767938,
      },
      "Hàm Nghi": {
        latitude: 21.035444,
        longitude: 105.762889,
      },
      "Lê Đức Thọ": {
        latitude: 21.02815,
        longitude: 105.768272,
      },
      "Mỹ Đình": {
        latitude: 21.02446,
        longitude: 105.773937,
      },
      "Nguyễn Cơ Thạch": {
        latitude: 21.033887,
        longitude: 105.765841,
      },
      "Nguyễn Hoàng": {
        latitude: 21.0316444,
        longitude: 105.7741387,
      },
      "Nguyễn Xuân Nguyên": {
        latitude: 21.03162,
        longitude: 105.767214,
      },
      "Phạm Hùng": {
        latitude: 21.0176,
        longitude: 105.781931,
      },
      "Thiên Hiền": {
        latitude: 21.022397,
        longitude: 105.776303,
      },
      "Trần Bình": {
        latitude: 21.0306439,
        longitude: 105.7763172,
      },
      "Trần Văn Cẩn": {
        latitude: 21.029689,
        longitude: 105.767318,
      },
      "Tôn Thất Thuyết": {
        latitude: 21.0284308,
        longitude: 105.7825185,
      },
      "Đình Thôn": {
        latitude: 21.017831,
        longitude: 105.775927,
      },
      "Đồng Bát": {
        latitude: 21.0312863,
        longitude: 105.7749709,
      },
    },
    "Phú Đô": {
      "Châu Văn Liêm": {
        latitude: 21.009664,
        longitude: 105.771176,
      },
      "Nguyễn Văn Giáp": {
        latitude: 21.0301639,
        longitude: 105.7591477,
      },
      "Phú Đô": {
        latitude: 21.0090582,
        longitude: 105.7656976,
      },
      "Sa Đôi": {
        latitude: 20.9987322,
        longitude: 105.7640053,
      },
      "Đại Linh": {
        latitude: 20.994892,
        longitude: 105.772923,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.002468,
        longitude: 105.7809255,
      },
      "Đỗ Xuân Hợp": {
        latitude: 21.021486,
        longitude: 105.762226,
      },
    },
    "Phương Canh": {
      "Hòe Thị": {
        latitude: 21.036313,
        longitude: 105.740984,
      },
      "Phúc Diễn": {
        latitude: 21.0272933,
        longitude: 105.7551439,
      },
      "Phương Canh": {
        latitude: 21.035163,
        longitude: 105.751616,
      },
      "Trịnh Văn Bô": {
        latitude: 21.037361,
        longitude: 105.747748,
      },
      "Xuân Phương": {
        latitude: 21.047696,
        longitude: 105.735788,
      },
      "Đường Cn1": {
        latitude: 21.0421593,
        longitude: 105.7423951,
      },
      "Đường Cn2": {
        latitude: 21.041232,
        longitude: 105.740196,
      },
      "Đường Cn4": {
        latitude: 21.0441649,
        longitude: 105.7371797,
      },
      "Đường Cn9": {
        latitude: 21.0415118,
        longitude: 105.7428146,
      },
    },
    "Tây Mỗ": {
      "Cầu Cốc": {
        latitude: 21.0038346,
        longitude: 105.7424146,
      },
      "Do Nha": {
        latitude: 21.017058,
        longitude: 105.74067,
      },
      "Hữu Hưng": {
        latitude: 20.9958535,
        longitude: 105.7469765,
      },
      "Miêu Nha": {
        latitude: 21.012664,
        longitude: 105.746597,
      },
      "Phúc Diễn": {
        latitude: 21.0272933,
        longitude: 105.7551439,
      },
      "Tây Mỗ": {
        latitude: 21.002916,
        longitude: 105.750168,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.002468,
        longitude: 105.7809255,
      },
    },
    "Trung Văn": {
      "Cương Kiên": {
        latitude: 20.997606,
        longitude: 105.779978,
      },
      "Hồ Mễ Trì": {
        latitude: 20.9990986,
        longitude: 105.7904938,
      },
      "Lương Thế Vinh": {
        latitude: 20.9965931,
        longitude: 105.7882153,
      },
      "Nguyễn Trãi": {
        latitude: 20.987138,
        longitude: 105.796901,
      },
      "Phùng Khoang": {
        latitude: 20.989974,
        longitude: 105.793232,
      },
      "Thanh Bình": {
        latitude: 20.988541,
        longitude: 105.7809242,
      },
      "Trung Văn": {
        latitude: 20.989303,
        longitude: 105.786852,
      },
      "Tố Hữu": {
        latitude: 20.9923406,
        longitude: 105.7858851,
      },
      "Vũ Hữu": {
        latitude: 20.9952801,
        longitude: 105.7963186,
      },
      "Đại Linh": {
        latitude: 20.994892,
        longitude: 105.772923,
      },
    },
    "Xuân Phương": {
      "Hòe Thị": {
        latitude: 21.036313,
        longitude: 105.740984,
      },
      "Phúc Diễn": {
        latitude: 21.0272933,
        longitude: 105.7551439,
      },
      "Phương Canh": {
        latitude: 21.035163,
        longitude: 105.751616,
      },
      "Trịnh Văn Bô": {
        latitude: 21.037361,
        longitude: 105.747748,
      },
      "Xuân Phương": {
        latitude: 21.047696,
        longitude: 105.735788,
      },
      "Đường Cn1": {
        latitude: 21.0421593,
        longitude: 105.7423951,
      },
      "Đường Cn2": {
        latitude: 21.041232,
        longitude: 105.740196,
      },
      "Đường Cn4": {
        latitude: 21.0441649,
        longitude: 105.7371797,
      },
      "Đường Cn9": {
        latitude: 21.0415118,
        longitude: 105.7428146,
      },
    },
  },
  "Phú Xuyên": {
    "Châu Can": {
      "Quốc Lộ 1a": {
        latitude: 20.5737763,
        longitude: 105.9256443,
      },
    },
    "Chuyên Mỹ": {
      "Dọc Sông Nhuệ": {
        latitude: 20.8254922,
        longitude: 105.8402061,
      },
    },
    "Đại Xuyên": {
      "Cầu Giễ Ninh Bình": {
        latitude: 20.6992169,
        longitude: 105.9206748,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.7019156,
        longitude: 105.9195367,
      },
      "Quốc Lộ 1a": {
        latitude: 20.5737763,
        longitude: 105.9256443,
      },
    },
    "Hoàng Long": {
      "Dọc Sông Nhuệ": {
        latitude: 20.8254922,
        longitude: 105.8402061,
      },
    },
    "Hồng Thái": {
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Khai Thái": {
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Minh Tân": {
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Nam Phong": {
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.7019156,
        longitude: 105.9195367,
      },
      "Quốc Lộ 1a": {
        latitude: 20.5737763,
        longitude: 105.9256443,
      },
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Nam Triều": {
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Phú Minh": {
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Phú Xuyên": {
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.7019156,
        longitude: 105.9195367,
      },
      "Quốc Lộ 1a": {
        latitude: 20.5737763,
        longitude: 105.9256443,
      },
    },
    "Phú Yên": {
      "Dọc Sông Nhuệ": {
        latitude: 20.8254922,
        longitude: 105.8402061,
      },
      "Quốc Lộ 1a": {
        latitude: 20.5737763,
        longitude: 105.9256443,
      },
      "Đt 428": {
        latitude: 20.6936382,
        longitude: 105.8943727,
      },
    },
    "Phúc Tiến": {
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.7019156,
        longitude: 105.9195367,
      },
      "Quốc Lộ 1a": {
        latitude: 20.5737763,
        longitude: 105.9256443,
      },
    },
    "Phượng Dực": {
      "Dọc Sông Nhuệ": {
        latitude: 20.8254922,
        longitude: 105.8402061,
      },
    },
    "Quang Lãng": {
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Tân Dân": {
      "Dọc Sông Nhuệ": {
        latitude: 20.8254922,
        longitude: 105.8402061,
      },
    },
    "Thụy Phú": {
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Văn Hoàng": {
      "Dọc Sông Nhuệ": {
        latitude: 20.8254922,
        longitude: 105.8402061,
      },
    },
    "Văn Nhân": {
      "Đt 427": {
        latitude: 20.6513071,
        longitude: 106.0247519,
      },
    },
    "Vân Từ": {
      "Dọc Sông Nhuệ": {
        latitude: 20.8254922,
        longitude: 105.8402061,
      },
    },
  },
  "Phúc Thọ": {
    "Cẩm Đình": {
      "Đt 82": {
        latitude: 21.1220629,
        longitude: 105.5454197,
      },
      "Đường Đê": {
        latitude: 21.1356193,
        longitude: 105.5696902,
      },
    },
    "Hát Môn": {
      "Phố Hát": {
        latitude: 21.1277059,
        longitude: 105.6152163,
      },
      "Thanh Đa": {
        latitude: 21.1154487,
        longitude: 105.6144133,
      },
      "Trưng Nhị": {
        latitude: 21.1316847,
        longitude: 105.6117812,
      },
      "Trưng Trắc": {
        latitude: 21.12887,
        longitude: 105.608745,
      },
      "Đội 1": {
        latitude: 21.1302036,
        longitude: 105.6148496,
      },
      "Đội 2": {
        latitude: 21.125084,
        longitude: 105.6169932,
      },
    },
    "Hiệp Thuận": {
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
      "Đt 421": {
        latitude: 21.065227,
        longitude: 105.6364235,
      },
    },
    "Liên Hiệp": {
      "Đt 421": {
        latitude: 21.065227,
        longitude: 105.6364235,
      },
    },
    "Long Xuyên": {
      "Hai Bà Trưng": {
        latitude: 21.1181214,
        longitude: 105.5842292,
      },
      "Hoàng Diệu": {
        latitude: 21.1100531,
        longitude: 105.5827475,
      },
      "Nguyễn Trãi": {
        latitude: 21.1208802,
        longitude: 105.5917625,
      },
      "Nguyễn Tất Thành": {
        latitude: 21.121177,
        longitude: 105.5914368,
      },
      "Phúc Hòa": {
        latitude: 21.1075666,
        longitude: 105.5588488,
      },
      "Tôn Đức Thắng": {
        latitude: 21.1200759,
        longitude: 105.5918263,
      },
      "Đường Đê": {
        latitude: 21.1356193,
        longitude: 105.5696902,
      },
    },
    "Ngọc Tảo": {
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
      "Thanh Đa": {
        latitude: 21.1154487,
        longitude: 105.6144133,
      },
      "Đường Đê": {
        latitude: 21.1356193,
        longitude: 105.5696902,
      },
    },
    "Phúc Hòa": {
      "Phúc Hòa": {
        latitude: 21.1075666,
        longitude: 105.5588488,
      },
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
    },
    "Phúc Thọ": {
      "Phúc Hòa": {
        latitude: 21.1075666,
        longitude: 105.5588488,
      },
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
      "Đt 419": {
        latitude: 21.0976842,
        longitude: 105.5548673,
      },
      "Đt 82": {
        latitude: 21.1220629,
        longitude: 105.5454197,
      },
    },
    "Phụng Thượng": {
      "Hoàng Diệu": {
        latitude: 21.1100531,
        longitude: 105.5827475,
      },
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
    },
    "Phương Độ": {
      "Đường Đê": {
        latitude: 21.1356193,
        longitude: 105.5696902,
      },
    },
    "Sen Chiểu": {
      "Sen Chiểu": {
        latitude: 21.1401551,
        longitude: 105.5276854,
      },
      "Đường Đê": {
        latitude: 21.1356193,
        longitude: 105.5696902,
      },
    },
    "Tam Hiệp": {
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
      "Tam Hiệp": {
        latitude: 21.0777095,
        longitude: 105.6191728,
      },
      "Đt 421": {
        latitude: 21.065227,
        longitude: 105.6364235,
      },
      "Đường Đê": {
        latitude: 21.1356193,
        longitude: 105.5696902,
      },
    },
    "Tam Thuấn": {
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
    },
    "Thanh Đa": {
      "Thanh Đa": {
        latitude: 21.1154487,
        longitude: 105.6144133,
      },
    },
    "Thọ Lộc": {
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
    },
    "Thượng Cốc": {
      "Bà Triệu": {
        latitude: 21.1230512,
        longitude: 105.593127,
      },
      "Hai Bà Trưng": {
        latitude: 21.1181214,
        longitude: 105.5842292,
      },
      "Lạc Long Quân": {
        latitude: 21.1216468,
        longitude: 105.594611,
      },
      "Nguyễn Huệ": {
        latitude: 21.1216262,
        longitude: 105.5921537,
      },
      "Nguyễn Trãi": {
        latitude: 21.1208802,
        longitude: 105.5917625,
      },
      "Nguyễn Tất Thành": {
        latitude: 21.121177,
        longitude: 105.5914368,
      },
      "Phạm Ngũ Lão": {
        latitude: 21.1198409,
        longitude: 105.5922198,
      },
      "Thanh Đa": {
        latitude: 21.1154487,
        longitude: 105.6144133,
      },
      "Trạng Trình": {
        latitude: 21.1210311,
        longitude: 105.5914492,
      },
      "Tôn Đức Thắng": {
        latitude: 21.1200759,
        longitude: 105.5918263,
      },
      "Đường Đê": {
        latitude: 21.1356193,
        longitude: 105.5696902,
      },
    },
    "Tích Giang": {
      "Quốc Lộ 32": {
        latitude: 21.0922244,
        longitude: 105.5827078,
      },
      "Tích Giang": {
        latitude: 21.1095419,
        longitude: 105.5095829,
      },
    },
    "Trạch Mỹ Lộc": {
      "Đt 82": {
        latitude: 21.1220629,
        longitude: 105.5454197,
      },
    },
    "Vân Hà": {
      "Bãi Bò": {
        latitude: 21.1530706,
        longitude: 105.6167885,
      },
    },
    "Vân Nam": {
      "Phố Hát": {
        latitude: 21.1277059,
        longitude: 105.6152163,
      },
      "Vân Nam": {
        latitude: 21.1510189,
        longitude: 105.5904886,
      },
    },
    "Vân Phúc": {
      "Vân Nam": {
        latitude: 21.1510189,
        longitude: 105.5904886,
      },
    },
    "Võng Xuyên": {
      "Bảo Lộc": {
        latitude: 21.1256543,
        longitude: 105.5665615,
      },
      "Võng Xuyên": {
        latitude: 21.1271274,
        longitude: 105.5537148,
      },
      "Đt 82": {
        latitude: 21.1220629,
        longitude: 105.5454197,
      },
      "Đường Đê": {
        latitude: 21.1356193,
        longitude: 105.5696902,
      },
    },
    "Xuân Phú": {
      "Vân Nam": {
        latitude: 21.1510189,
        longitude: 105.5904886,
      },
    },
  },
  "Quốc Oai": {
    "Cộng Hòa": {
      "Đt 419": {
        latitude: 20.9793103,
        longitude: 105.6734267,
      },
    },
    "Đồng Quang": {
      "Đt 419": {
        latitude: 20.9793103,
        longitude: 105.6734267,
      },
    },
    "Đông Yên": {
      "Quốc Lộ 21": {
        latitude: 20.9447909,
        longitude: 105.545538,
      },
    },
    "Hòa Thạch": {
      "Quốc Lộ 21": {
        latitude: 20.9447909,
        longitude: 105.545538,
      },
    },
    "Ngọc Liệp": {
      "Đại Lộ Thăng Long": {
        latitude: 21.001719,
        longitude: 105.6269312,
      },
    },
    "Ngọc Mỹ": {
      "Đại Lộ Thăng Long": {
        latitude: 21.001719,
        longitude: 105.6269312,
      },
    },
    "Phú Cát": {
      "Quốc Lộ 21": {
        latitude: 20.9447909,
        longitude: 105.545538,
      },
    },
    "Phú Mãn": {
      "Quốc Lộ 21": {
        latitude: 20.9447909,
        longitude: 105.545538,
      },
    },
    "Phượng Cách": {
      "Đt 421b": {
        latitude: 21.024275,
        longitude: 105.646334,
      },
    },
    "Quốc Oai": {
      "Phủ Quốc": {
        latitude: 20.9939308,
        longitude: 105.6403984,
      },
      "Đt 419": {
        latitude: 20.9793103,
        longitude: 105.6734267,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.001719,
        longitude: 105.6269312,
      },
    },
    "Sài Sơn": {
      "Đt 421b": {
        latitude: 21.024275,
        longitude: 105.646334,
      },
    },
    "Tân Hòa": {
      "Đt 419": {
        latitude: 20.9793103,
        longitude: 105.6734267,
      },
    },
    "Thạch Thán": {
      "Phủ Quốc": {
        latitude: 20.9939308,
        longitude: 105.6403984,
      },
      "Đt 419": {
        latitude: 20.9793103,
        longitude: 105.6734267,
      },
    },
    "Yên Sơn": {
      "Đt 421b": {
        latitude: 21.024275,
        longitude: 105.646334,
      },
      "Đại Lộ Thăng Long": {
        latitude: 21.001719,
        longitude: 105.6269312,
      },
    },
  },
  "Sóc Sơn": {
    "Bắc Phú": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.276956,
        longitude: 105.888613,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
      "Đt 296": {
        latitude: 21.2719931,
        longitude: 105.8858222,
      },
      "Đt 418": {
        latitude: 21.2852458,
        longitude: 105.882573,
      },
    },
    "Bắc Sơn": {
      "Bắc Sơn": {
        latitude: 21.3532158,
        longitude: 105.8278065,
      },
      "Bờ Vòng": {
        latitude: 21.3704263,
        longitude: 105.813731,
      },
    },
    "Đông Xuân": {
      "Quốc Lộ 18": {
        latitude: 21.205887,
        longitude: 105.8378412,
      },
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Đt 286": {
        latitude: 21.2117611,
        longitude: 105.8782814,
      },
      "Đê Xuân Dương": {
        latitude: 21.2019751,
        longitude: 105.8921983,
      },
    },
    "Đức Hoà": {
      "Đê Lương Phúc": {
        latitude: 21.2111628,
        longitude: 105.914659,
      },
    },
    "Hiền Ninh": {
      "Đt 35": {
        latitude: 21.30576,
        longitude: 105.8191,
      },
      "Đường Số 35": {
        latitude: 21.2767596,
        longitude: 105.8204871,
      },
    },
    "Hồng Kỳ": {
      "Bắc Sơn": {
        latitude: 21.3532158,
        longitude: 105.8278065,
      },
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Đt 35": {
        latitude: 21.30576,
        longitude: 105.8191,
      },
    },
    "Kim Lũ": {
      "Quốc Lộ 18": {
        latitude: 21.205887,
        longitude: 105.8378412,
      },
      "Đt 286": {
        latitude: 21.2117611,
        longitude: 105.8782814,
      },
      "Đê Lương Phúc": {
        latitude: 21.2111628,
        longitude: 105.914659,
      },
    },
    "Mai Đình": {
      "Quốc Lộ 18": {
        latitude: 21.205887,
        longitude: 105.8378412,
      },
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.2055887,
        longitude: 105.82804,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
    },
    "Minh Phú": {
      "Liên Thôn Minh Trí": {
        latitude: 21.2628491,
        longitude: 105.750282,
      },
      "Đt 35": {
        latitude: 21.30576,
        longitude: 105.8191,
      },
    },
    "Minh Trí": {
      "Hoàng Thanh": {
        latitude: 21.2652607,
        longitude: 105.7486444,
      },
      "Liên Thôn Minh Trí": {
        latitude: 21.2628491,
        longitude: 105.750282,
      },
      "Lập Trí Minh Trí Sóc Sơn": {
        latitude: 105.7461615,
        longitude: 21.2823901,
      },
      "Nguyễn Hoàng Thanh": {
        latitude: 21.289326,
        longitude: 105.7470715,
      },
      "Thanh Loan": {
        latitude: 21.2797775,
        longitude: 105.7467415,
      },
      "Thắng Trí": {
        latitude: 21.2709995,
        longitude: 105.7432613,
      },
      "Đường Lập Trí": {
        latitude: 21.2851597,
        longitude: 105.7494903,
      },
    },
    "Nam Sơn": {
      "Liên Thôn": {
        latitude: 21.3154402,
        longitude: 105.8259183,
      },
      "Đt 35": {
        latitude: 21.30576,
        longitude: 105.8191,
      },
    },
    "Phú Cường": {
      "Quốc Lộ 18": {
        latitude: 21.205887,
        longitude: 105.8378412,
      },
      "Quốc Lộ 2a": {
        latitude: 21.200377,
        longitude: 105.810229,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.2055887,
        longitude: 105.82804,
      },
      "Võ Văn Kiệt": {
        latitude: 21.207906,
        longitude: 105.7793881,
      },
    },
    "Phù Linh": {
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
    },
    "Phù Lỗ": {
      "Quốc Lộ 18": {
        latitude: 21.205887,
        longitude: 105.8378412,
      },
      "Quốc Lộ 2a": {
        latitude: 21.200377,
        longitude: 105.810229,
      },
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.2055887,
        longitude: 105.82804,
      },
      "Đt 286": {
        latitude: 21.2117611,
        longitude: 105.8782814,
      },
    },
    "Phú Minh": {
      "Quốc Lộ 18": {
        latitude: 21.205887,
        longitude: 105.8378412,
      },
      "Quốc Lộ 2a": {
        latitude: 21.200377,
        longitude: 105.810229,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.2055887,
        longitude: 105.82804,
      },
    },
    "Quang Tiến": {
      "Võ Nguyên Giáp": {
        latitude: 21.2055887,
        longitude: 105.82804,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
    },
    "Sóc Sơn": {
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
    },
    "Tân Dân": {
      "Hà Nội Lào Cai": {
        latitude: 21.2442108,
        longitude: 105.7536178,
      },
      "Liên Thôn Minh Trí": {
        latitude: 21.2628491,
        longitude: 105.750282,
      },
      "Quốc Lộ 2a": {
        latitude: 21.200377,
        longitude: 105.810229,
      },
      "Đt 35": {
        latitude: 21.30576,
        longitude: 105.8191,
      },
    },
    "Tân Hưng": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.276956,
        longitude: 105.888613,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
      "Đt 296": {
        latitude: 21.2719931,
        longitude: 105.8858222,
      },
    },
    "Tân Minh": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.276956,
        longitude: 105.888613,
      },
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
      "Đt 296": {
        latitude: 21.2719931,
        longitude: 105.8858222,
      },
      "Đt 418": {
        latitude: 21.2852458,
        longitude: 105.882573,
      },
    },
    "Thanh Xuân": {
      "Hà Nội Lào Cai": {
        latitude: 21.2442108,
        longitude: 105.7536178,
      },
      "Quốc Lộ 18": {
        latitude: 21.205887,
        longitude: 105.8378412,
      },
      "Quốc Lộ 2a": {
        latitude: 21.200377,
        longitude: 105.810229,
      },
      "Võ Nguyên Giáp": {
        latitude: 21.2055887,
        longitude: 105.82804,
      },
      "Võ Văn Kiệt": {
        latitude: 21.207906,
        longitude: 105.7793881,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
      "Đt 35": {
        latitude: 21.30576,
        longitude: 105.8191,
      },
    },
    "Tiên Dược": {
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
    },
    "Trung Giã": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.276956,
        longitude: 105.888613,
      },
      "Quốc Lộ 3": {
        latitude: 21.2700188,
        longitude: 105.8554178,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
      "Đt 35": {
        latitude: 21.30576,
        longitude: 105.8191,
      },
      "Đt 418": {
        latitude: 21.2852458,
        longitude: 105.882573,
      },
    },
    "Việt Long": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.276956,
        longitude: 105.888613,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
    },
    "Xuân Giang": {
      "Hà Nội Thái Nguyên": {
        latitude: 21.276956,
        longitude: 105.888613,
      },
      "Đt 131": {
        latitude: 21.2494246,
        longitude: 105.9327674,
      },
      "Đê Lương Phúc": {
        latitude: 21.2111628,
        longitude: 105.914659,
      },
    },
    "Xuân Thu": {
      "Quốc Lộ 18": {
        latitude: 21.205887,
        longitude: 105.8378412,
      },
      "Đt 286": {
        latitude: 21.2117611,
        longitude: 105.8782814,
      },
      "Đê Lương Phúc": {
        latitude: 21.2111628,
        longitude: 105.914659,
      },
      "Đê Xuân Dương": {
        latitude: 21.2019751,
        longitude: 105.8921983,
      },
    },
  },
  "Sơn Tây": {
    "Cổ Đông": {
      "Bình Sơn": {
        latitude: 21.0751994,
        longitude: 105.5166724,
      },
      "Ngã Tư Lục Quân": {
        latitude: 21.044835,
        longitude: 105.4998136,
      },
      "Quốc Lộ 21": {
        latitude: 21.1002954,
        longitude: 105.4978035,
      },
      "Thôn Bống": {
        latitude: 21.0723162,
        longitude: 105.5108145,
      },
      "Đt 82": {
        latitude: 21.077916,
        longitude: 105.5098231,
      },
      "Đồng Trang": {
        latitude: 21.0413288,
        longitude: 105.524757,
      },
    },
    "Đường Lâm": {
      "Quốc Lộ 21": {
        latitude: 21.1002954,
        longitude: 105.4978035,
      },
      "Quốc Lộ 32": {
        latitude: 21.1543665,
        longitude: 105.4877978,
      },
      "Đường Lâm": {
        latitude: 21.1570595,
        longitude: 105.4727488,
      },
      "Đường Đê": {
        latitude: 21.1539712,
        longitude: 105.4981284,
      },
    },
    "Kim Sơn": {
      "Đt 416": {
        latitude: 21.0936076,
        longitude: 105.4720838,
      },
    },
    "Lê Lợi": {
      "Lê Lai": {
        latitude: 21.1437332,
        longitude: 105.5062123,
      },
      "Lê Lợi": {
        latitude: 21.1456405,
        longitude: 105.5054766,
      },
      "Nguyễn Thái Học": {
        latitude: 21.1375994,
        longitude: 105.5028317,
      },
      "Phan Chu Trinh": {
        latitude: 21.1400335,
        longitude: 105.5024983,
      },
      "Phó Đức Chính": {
        latitude: 21.1409436,
        longitude: 105.5054577,
      },
      "Phù Sa": {
        latitude: 21.1503848,
        longitude: 105.5091726,
      },
      "Phú Nhi": {
        latitude: 21.1507468,
        longitude: 105.4987254,
      },
      "Phạm Ngũ Lão": {
        latitude: 21.1382061,
        longitude: 105.5064352,
      },
      "Quốc Lộ 32": {
        latitude: 21.1543665,
        longitude: 105.4877978,
      },
      "Trưng Vương": {
        latitude: 21.1411869,
        longitude: 105.5076798,
      },
      "Đinh Tiên Hoàng": {
        latitude: 21.1431505,
        longitude: 105.5041348,
      },
      "Đường Đê": {
        latitude: 21.1539712,
        longitude: 105.4981284,
      },
      "Đốc Ngữ": {
        latitude: 21.1433827,
        longitude: 105.506315,
      },
    },
    "Ngô Quyền": {
      "Ngô Quyền": {
        latitude: 21.1443783,
        longitude: 105.4993253,
      },
      "Phan Chu Trinh": {
        latitude: 21.1400335,
        longitude: 105.5024983,
      },
      "Phó Đức Chính": {
        latitude: 21.1409436,
        longitude: 105.5054577,
      },
      "Phùng Hưng": {
        latitude: 21.1425792,
        longitude: 105.5025948,
      },
      "Phú Hà": {
        latitude: 21.1452093,
        longitude: 105.5025908,
      },
      "Quốc Lộ 32": {
        latitude: 21.1543665,
        longitude: 105.4877978,
      },
      "Trần Hưng Đạo": {
        latitude: 21.1419747,
        longitude: 105.5012294,
      },
      "Đinh Tiên Hoàng": {
        latitude: 21.1431505,
        longitude: 105.5041348,
      },
      "Đền Và": {
        latitude: 21.1392574,
        longitude: 105.4901213,
      },
    },
    "Phú Thịnh": {
      "Phú Hà": {
        latitude: 21.1452093,
        longitude: 105.5025908,
      },
      "Phú Nhi": {
        latitude: 21.1507468,
        longitude: 105.4987254,
      },
      "Quốc Lộ 32": {
        latitude: 21.1543665,
        longitude: 105.4877978,
      },
      "Đường Đê": {
        latitude: 21.1539712,
        longitude: 105.4981284,
      },
    },
    "Quang Trung": {
      "Bùi Thị Xuân": {
        latitude: 21.1337736,
        longitude: 105.5083712,
      },
      "Chùa Thông": {
        latitude: 21.1261414,
        longitude: 105.5021649,
      },
      "Hoàng Diệu": {
        latitude: 21.1360151,
        longitude: 105.5061785,
      },
      "Mai Trai": {
        latitude: 21.1309521,
        longitude: 105.5077093,
      },
      "Nghĩa Phủ": {
        latitude: 21.1299989,
        longitude: 105.5028916,
      },
      "Nguyễn Thái Học": {
        latitude: 21.1375994,
        longitude: 105.5028317,
      },
      "Phùng Khắc Khoan": {
        latitude: 21.1349944,
        longitude: 105.5085973,
      },
      "Phạm Ngũ Lão": {
        latitude: 21.1382061,
        longitude: 105.5064352,
      },
      "Quang Trung": {
        latitude: 21.1330358,
        longitude: 105.5017653,
      },
      "Quốc Lộ 32": {
        latitude: 21.1543665,
        longitude: 105.4877978,
      },
      "Thuần Nghệ": {
        latitude: 21.1358237,
        longitude: 105.5086678,
      },
    },
    "Sơn Đông": {
      "Bình Sơn": {
        latitude: 21.0751994,
        longitude: 105.5166724,
      },
      "Cao Sơn": {
        latitude: 21.074799,
        longitude: 105.5133723,
      },
      "Khoang Sau": {
        latitude: 21.0720764,
        longitude: 105.5036394,
      },
      "Quốc Lộ 21": {
        latitude: 21.1002954,
        longitude: 105.4978035,
      },
      "Sơn Đông": {
        latitude: 21.0849723,
        longitude: 105.4879505,
      },
      "Thôn Bắc": {
        latitude: 21.075473,
        longitude: 105.5086363,
      },
      "Thôn Bống": {
        latitude: 21.0723162,
        longitude: 105.5108145,
      },
      "Thôn Năn": {
        latitude: 21.0763242,
        longitude: 105.511426,
      },
      "Thôn Đình": {
        latitude: 21.0749627,
        longitude: 105.5076172,
      },
      "Tân An": {
        latitude: 21.0852871,
        longitude: 105.5046704,
      },
      "Tân Phú": {
        latitude: 21.0813896,
        longitude: 105.5079249,
      },
      "Vạn An": {
        latitude: 21.0864079,
        longitude: 105.5123094,
      },
      "Đt 82": {
        latitude: 21.077916,
        longitude: 105.5098231,
      },
      "Đông A": {
        latitude: 21.0742584,
        longitude: 105.5127242,
      },
      "Đại Quang": {
        latitude: 21.0820087,
        longitude: 105.5143392,
      },
      "Đồi Chợ": {
        latitude: 21.0810677,
        longitude: 105.5130604,
      },
      "Đồi Tầm": {
        latitude: 21.0777356,
        longitude: 105.5050603,
      },
      "Đồi Vua": {
        latitude: 21.0896674,
        longitude: 105.507283,
      },
    },
    "Sơn Lộc": {
      "Chùa Thông": {
        latitude: 21.1261414,
        longitude: 105.5021649,
      },
      "Cầu Trì": {
        latitude: 21.1284234,
        longitude: 105.5016411,
      },
      "Nghĩa Phủ": {
        latitude: 21.1299989,
        longitude: 105.5028916,
      },
      "Quốc Lộ 21": {
        latitude: 21.1002954,
        longitude: 105.4978035,
      },
      "Đt 87a": {
        latitude: 21.1130527,
        longitude: 105.4764261,
      },
    },
    "Thanh Mỹ": {
      "Quốc Lộ 21": {
        latitude: 21.1002954,
        longitude: 105.4978035,
      },
      "Đt 416": {
        latitude: 21.0936076,
        longitude: 105.4720838,
      },
      "Đt 423": {
        latitude: 21.1294629,
        longitude: 105.4508519,
      },
      "Đt 87a": {
        latitude: 21.1130527,
        longitude: 105.4764261,
      },
    },
    "Trung Hưng": {
      "Cầu Trì": {
        latitude: 21.1284234,
        longitude: 105.5016411,
      },
      "Nghĩa Phủ": {
        latitude: 21.1299989,
        longitude: 105.5028916,
      },
      "Quang Trung": {
        latitude: 21.1330358,
        longitude: 105.5017653,
      },
      "Quốc Lộ 21": {
        latitude: 21.1002954,
        longitude: 105.4978035,
      },
      "Đền Và": {
        latitude: 21.1392574,
        longitude: 105.4901213,
      },
    },
    "Trung Sơn Trầm": {
      "Quốc Lộ 21": {
        latitude: 21.1002954,
        longitude: 105.4978035,
      },
      "Sơn Lộc": {
        latitude: 21.1122339,
        longitude: 105.4889816,
      },
      "Đt 416": {
        latitude: 21.0936076,
        longitude: 105.4720838,
      },
    },
    "Viên Sơn": {
      "Cổng Ô": {
        latitude: 21.1418599,
        longitude: 105.5110711,
      },
      "Phù Sa": {
        latitude: 21.1503848,
        longitude: 105.5091726,
      },
      "Quốc Lộ 32": {
        latitude: 21.1543665,
        longitude: 105.4877978,
      },
      "Thanh Niên": {
        latitude: 21.1458352,
        longitude: 105.5093481,
      },
      "Thiều Xuân": {
        latitude: 21.1475512,
        longitude: 105.5151922,
      },
      "Thuần Nghệ": {
        latitude: 21.1358237,
        longitude: 105.5086678,
      },
      "Tiền Huân": {
        latitude: 21.1362402,
        longitude: 105.5137892,
      },
      "Đường Đê": {
        latitude: 21.1539712,
        longitude: 105.4981284,
      },
    },
    "Xuân Khanh": {
      "Hữu Nghị": {
        latitude: 21.112417,
        longitude: 105.4413175,
      },
      "Mỹ Trung": {
        latitude: 21.1179852,
        longitude: 105.4408061,
      },
      "Đt 87a": {
        latitude: 21.1130527,
        longitude: 105.4764261,
      },
    },
    "Xuân Sơn": {
      "Xuân Sơn": {
        latitude: 21.1341191,
        longitude: 105.4339988,
      },
      "Đt 423": {
        latitude: 21.1294629,
        longitude: 105.4508519,
      },
    },
  },
  "Tây Hồ": {
    "Nhật Tân": {
      "Lạc Long Quân": {
        latitude: 21.074221,
        longitude: 105.813065,
      },
      "Nhật Chiêu": {
        latitude: 21.0724029,
        longitude: 105.8165959,
      },
      "Quảng Bá": {
        latitude: 21.0662505,
        longitude: 105.8192197,
      },
      "Trịnh Công Sơn": {
        latitude: 21.077225,
        longitude: 105.81719,
      },
      "Vũ Tuấn Chiêu": {
        latitude: 21.0778672,
        longitude: 105.8187649,
      },
      "Vệ Hồ": {
        latitude: 21.064821,
        longitude: 105.810748,
      },
      "Âu Cơ": {
        latitude: 21.065658,
        longitude: 105.828512,
      },
    },
    "Phú Thượng": {
      "An Dương Vương": {
        latitude: 21.089607,
        longitude: 105.8126882,
      },
      "Bùi Trang Chước": {
        latitude: 21.086593,
        longitude: 105.8122002,
      },
      "Coconut Lane": {
        latitude: 21.074716,
        longitude: 105.802726,
      },
      "Lạc Long Quân": {
        latitude: 21.074221,
        longitude: 105.813065,
      },
      "Nguyễn Hoàng Tôn": {
        latitude: 21.069781,
        longitude: 105.810498,
      },
      "Phú Gia": {
        latitude: 21.086841,
        longitude: 105.80941,
      },
      "Phú Thượng": {
        latitude: 21.08719,
        longitude: 105.809074,
      },
      "Phú Xá": {
        latitude: 21.087927,
        longitude: 105.811975,
      },
      "Phúc Hoa": {
        latitude: 21.086973,
        longitude: 105.811147,
      },
      "Thượng Thụy": {
        latitude: 21.087364,
        longitude: 105.795599,
      },
      "Võ Chí Công": {
        latitude: 21.06923,
        longitude: 105.808266,
      },
      "Vườn Đào": {
        latitude: 21.079359,
        longitude: 105.814894,
      },
      "Âu Cơ": {
        latitude: 21.065658,
        longitude: 105.828512,
      },
      "Đường Atlas": {
        latitude: 21.074338,
        longitude: 105.806937,
      },
      "Đường Pegasus": {
        latitude: 21.072664,
        longitude: 105.808412,
      },
      "Đường Unis": {
        latitude: 21.076526,
        longitude: 105.807478,
      },
    },
    "Phường Bưởi": {
      "Hoàng Hoa Thám": {
        latitude: 21.042287,
        longitude: 105.81706,
      },
      "Lạc Long Quân": {
        latitude: 21.074221,
        longitude: 105.813065,
      },
      "Thụy Khuê": {
        latitude: 21.0433721,
        longitude: 105.8178758,
      },
      "Trích Sài": {
        latitude: 21.0536611,
        longitude: 105.8122562,
      },
      "Võng Thị": {
        latitude: 21.051202,
        longitude: 105.810767,
      },
      "Vệ Hồ": {
        latitude: 21.064821,
        longitude: 105.810748,
      },
      "Đồng Cổ": {
        latitude: 21.0465029,
        longitude: 105.8116174,
      },
    },
    "Quảng An": {
      "Nghi Tàm": {
        latitude: 21.0577737,
        longitude: 105.8353036,
      },
      "Nước Phần Lan": {
        latitude: 21.069023,
        longitude: 105.830859,
      },
      "Quảng An": {
        latitude: 21.058862,
        longitude: 105.825749,
      },
      "Quảng Bá": {
        latitude: 21.0662505,
        longitude: 105.8192197,
      },
      "Quảng Khánh": {
        latitude: 21.0593908,
        longitude: 105.8184144,
      },
      "Tây Hồ": {
        latitude: 21.0653645,
        longitude: 105.8244356,
      },
      "Tô Ngọc Vân": {
        latitude: 21.06881,
        longitude: 105.824273,
      },
      "Từ Hoa": {
        latitude: 21.057943,
        longitude: 105.8293778,
      },
      "Xuân Diệu": {
        latitude: 21.063355,
        longitude: 105.828925,
      },
      "Xóm Chùa": {
        latitude: 21.061004,
        longitude: 105.820398,
      },
      "Yên Phụ": {
        latitude: 21.053065,
        longitude: 105.837073,
      },
      "Âu Cơ": {
        latitude: 21.065658,
        longitude: 105.828512,
      },
      "Đường Hoa": {
        latitude: 21.067711,
        longitude: 105.828927,
      },
      "Đặng Thai Mai": {
        latitude: 21.061235,
        longitude: 105.823924,
      },
    },
    "Thụy Khuê": {
      "Dốc Lapho": {
        latitude: 21.040735,
        longitude: 105.828934,
      },
      "Dốc Tam Đa": {
        latitude: 21.0436104,
        longitude: 105.8185528,
      },
      "Hoàng Hoa Thám": {
        latitude: 21.042287,
        longitude: 105.81706,
      },
      "Mai Xuân Thưởng": {
        latitude: 21.0425,
        longitude: 105.8351373,
      },
      "Nguyễn Đình Thi": {
        latitude: 21.042051,
        longitude: 105.826239,
      },
      "Thanh Niên": {
        latitude: 21.048047,
        longitude: 105.837861,
      },
      "Thụy Khuê": {
        latitude: 21.0433721,
        longitude: 105.8178758,
      },
      "Trích Sài": {
        latitude: 21.0536611,
        longitude: 105.8122562,
      },
      "Văn Cao": {
        latitude: 21.0433322,
        longitude: 105.817026,
      },
      "Đồng Cổ": {
        latitude: 21.0465029,
        longitude: 105.8116174,
      },
    },
    "Tứ Liên": {
      "Nước Phần Lan": {
        latitude: 21.069023,
        longitude: 105.830859,
      },
      "Tứ Liên": {
        latitude: 21.0634544,
        longitude: 105.8330554,
      },
      "Âu Cơ": {
        latitude: 21.065658,
        longitude: 105.828512,
      },
      "Đường Hoa": {
        latitude: 21.067711,
        longitude: 105.828927,
      },
    },
    "Xuân La": {
      "Lạc Long Quân": {
        latitude: 21.074221,
        longitude: 105.813065,
      },
      "Nguyễn Hoàng Tôn": {
        latitude: 21.069781,
        longitude: 105.810498,
      },
      "Nguyễn Văn Huyên": {
        latitude: 21.052238,
        longitude: 105.797793,
      },
      "Võ Chí Công": {
        latitude: 21.06923,
        longitude: 105.808266,
      },
      "Vệ Hồ": {
        latitude: 21.064821,
        longitude: 105.810748,
      },
      "Xuân La": {
        latitude: 21.062787,
        longitude: 105.807466,
      },
      "Đường Pegasus": {
        latitude: 21.072664,
        longitude: 105.808412,
      },
    },
    "Yên Phụ": {
      "Hồng Hà": {
        latitude: 21.0514693,
        longitude: 105.8395161,
      },
      "Nghi Tàm": {
        latitude: 21.0577737,
        longitude: 105.8353036,
      },
      "Thanh Niên": {
        latitude: 21.048047,
        longitude: 105.837861,
      },
      "Yên Hoa": {
        latitude: 21.052142,
        longitude: 105.837155,
      },
      "Yên Phụ": {
        latitude: 21.053065,
        longitude: 105.837073,
      },
      "Đường Số 1": {
        latitude: 21.050941,
        longitude: 105.844158,
      },
      "Đường Số 2": {
        latitude: 21.0498524,
        longitude: 105.8427437,
      },
      "Đường Số 3": {
        latitude: 21.0504115,
        longitude: 105.8438489,
      },
      "Đường Số 4": {
        latitude: 21.050179,
        longitude: 105.843552,
      },
      "Đường Số 5": {
        latitude: 21.0509811,
        longitude: 105.8451916,
      },
      "Đường Số 6": {
        latitude: 21.049844,
        longitude: 105.84356,
      },
    },
  },
  "Thạch Thất": {
    "Bình Phú": {
      "Đt 419": {
        latitude: 21.0583455,
        longitude: 105.5749481,
      },
    },
    "Bình Yên": {
      "Quốc Lộ 21": {
        latitude: 21.0007606,
        longitude: 105.5218867,
      },
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
    },
    "Canh Nậu": {
      "Canh Nậu": {
        latitude: 21.054335,
        longitude: 105.6138546,
      },
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
      "Đình Trong": {
        latitude: 21.0510254,
        longitude: 105.6138842,
      },
    },
    "Chàng Sơn": {
      "Đt 419": {
        latitude: 21.0583455,
        longitude: 105.5749481,
      },
    },
    "Dị Nậu": {
      "Canh Nậu": {
        latitude: 21.054335,
        longitude: 105.6138546,
      },
      "Dị Nậu": {
        latitude: 21.0529695,
        longitude: 105.6227812,
      },
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
    },
    "Đại Đồng": {
      "Đt 419": {
        latitude: 21.0583455,
        longitude: 105.5749481,
      },
    },
    "Đồng Trúc": {
      "Đại Lộ Thăng Long": {
        latitude: 20.9909072,
        longitude: 105.5471826,
      },
    },
    "Hạ Bằng": {
      "Đại Lộ Thăng Long": {
        latitude: 20.9909072,
        longitude: 105.5471826,
      },
    },
    "Hương Ngải": {
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
    },
    "Kim Quan": {
      "Đt 419": {
        latitude: 21.0583455,
        longitude: 105.5749481,
      },
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
    },
    "Liên Quan": {
      "Chi Quan": {
        latitude: 21.0553842,
        longitude: 105.5766023,
      },
      "Đt 419": {
        latitude: 21.0583455,
        longitude: 105.5749481,
      },
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
    },
    "Phú Kim": {
      "Đt 419": {
        latitude: 21.0583455,
        longitude: 105.5749481,
      },
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
    },
    "Phùng Xá": {
      "Đt 419": {
        latitude: 21.0583455,
        longitude: 105.5749481,
      },
    },
    "Tân Xã": {
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
    },
    "Thạch Hoà": {
      "Bãi Dài": {
        latitude: 20.9856044,
        longitude: 105.4763315,
      },
      "Quốc Lộ 21": {
        latitude: 21.0007606,
        longitude: 105.5218867,
      },
      "Trại Mới": {
        latitude: 20.9779358,
        longitude: 105.4981103,
      },
      "Yên Bình": {
        latitude: 20.9938193,
        longitude: 105.4602825,
      },
      "Đt 420": {
        latitude: 21.0480929,
        longitude: 105.5579631,
      },
      "Đt 87": {
        latitude: 20.9918983,
        longitude: 105.4941851,
      },
      "Đại Lộ Thăng Long": {
        latitude: 20.9909072,
        longitude: 105.5471826,
      },
    },
    "Thạch Xá": {
      "Đt 419": {
        latitude: 21.0583455,
        longitude: 105.5749481,
      },
    },
    "Tiến Xuân": {
      "Bãi Dài": {
        latitude: 20.9856044,
        longitude: 105.4763315,
      },
      "Trại Mới": {
        latitude: 20.9779358,
        longitude: 105.4981103,
      },
      "Tỉnh Lộ 446": {
        latitude: 20.9889062,
        longitude: 105.4453102,
      },
      "Đt 87": {
        latitude: 20.9918983,
        longitude: 105.4941851,
      },
    },
    "Yên Bình": {
      "Bãi Dài": {
        latitude: 20.9856044,
        longitude: 105.4763315,
      },
      "Hòa Lạc Hòa Bình": {
        latitude: 21.0043564,
        longitude: 105.4258644,
      },
      "Tỉnh Lộ 446": {
        latitude: 20.9889062,
        longitude: 105.4453102,
      },
      "Yên Bình": {
        latitude: 20.9938193,
        longitude: 105.4602825,
      },
    },
    "Yên Trung": {
      "Hòa Lạc Hòa Bình": {
        latitude: 21.0043564,
        longitude: 105.4258644,
      },
      "Tỉnh Lộ 446": {
        latitude: 20.9889062,
        longitude: 105.4453102,
      },
    },
  },
  "Thanh Oai": {
    "Bích Hòa": {
      "Bờ Sông": {
        latitude: 20.9114513,
        longitude: 105.7647131,
      },
      "Quốc Lộ 21b": {
        latitude: 20.853637,
        longitude: 105.7684941,
      },
      "Thạch Bích": {
        latitude: 20.9199261,
        longitude: 105.759853,
      },
      "Đồng Dương": {
        latitude: 20.9234494,
        longitude: 105.7524645,
      },
    },
    "Bình Minh": {
      "10/3": {
        latitude: 20.8888338,
        longitude: 105.7612926,
      },
      "3/2": {
        latitude: 20.8935718,
        longitude: 105.7810158,
      },
      "8/3": {
        latitude: 20.8892634,
        longitude: 105.7657733,
      },
      "Ao Lấp": {
        latitude: 20.893557,
        longitude: 105.7799242,
      },
      "Bình Minh": {
        latitude: 20.8936786,
        longitude: 105.7759597,
      },
      "Bình Minh 2": {
        latitude: 20.901248,
        longitude: 105.7661999,
      },
      "Bảo Đà": {
        latitude: 20.8984757,
        longitude: 105.765742,
      },
      "Chân Thánh": {
        latitude: 20.8933071,
        longitude: 105.7676085,
      },
      "Cây Dừa": {
        latitude: 20.8926474,
        longitude: 105.7746002,
      },
      "Cổng Cầu": {
        latitude: 20.8924465,
        longitude: 105.774126,
      },
      "Cổng Đồn": {
        latitude: 20.8929752,
        longitude: 105.7799606,
      },
      "Hùng Vương": {
        latitude: 20.8942823,
        longitude: 105.7693896,
      },
      "Lạc Long Quân": {
        latitude: 20.8950442,
        longitude: 105.7658643,
      },
      "Minh Kha": {
        latitude: 20.8916059,
        longitude: 105.7808374,
      },
      "Minh Sinh": {
        latitude: 20.8926988,
        longitude: 105.7756324,
      },
      "Ngô Long": {
        latitude: 20.8907729,
        longitude: 105.772558,
      },
      "Ngõ Cá": {
        latitude: 20.8920351,
        longitude: 105.7803609,
      },
      "Ngõ Giếng": {
        latitude: 20.8929739,
        longitude: 105.7787538,
      },
      "Phạm Ngũ Lão": {
        latitude: 20.8943095,
        longitude: 105.7788131,
      },
      "Phạm Văn Đồng": {
        latitude: 20.8976397,
        longitude: 105.7705772,
      },
      "Quốc Lộ 21b": {
        latitude: 20.853637,
        longitude: 105.7684941,
      },
      "Sinh Quả": {
        latitude: 20.8898217,
        longitude: 105.7711738,
      },
      "Thanh Quả": {
        latitude: 20.889633,
        longitude: 105.7728081,
      },
      "Thành Quách 1": {
        latitude: 20.8949163,
        longitude: 105.76766,
      },
      "Thành Quách 2": {
        latitude: 20.8958517,
        longitude: 105.7679282,
      },
      "Thắng Lợi": {
        latitude: 20.8976531,
        longitude: 105.755038,
      },
      "Tê Quả": {
        latitude: 20.8896199,
        longitude: 105.7790271,
      },
      "Vườn Trũng": {
        latitude: 20.8918274,
        longitude: 105.7722115,
      },
      "Xóm Cây Thị": {
        latitude: 20.8918802,
        longitude: 105.7732422,
      },
      "Xóm Lầy": {
        latitude: 20.8914596,
        longitude: 105.7745466,
      },
      "Xóm Sau": {
        latitude: 20.8923764,
        longitude: 105.7726589,
      },
      "Âu Cơ": {
        latitude: 20.8930205,
        longitude: 105.7662473,
      },
      "Đt 427b": {
        latitude: 20.8775244,
        longitude: 105.7956711,
      },
      "Đìa 1": {
        latitude: 20.896889,
        longitude: 105.7676954,
      },
      "Đìa 2": {
        latitude: 20.8972365,
        longitude: 105.766188,
      },
    },
    "Cao Dương": {
      "Đt 429": {
        latitude: 20.8040687,
        longitude: 105.7429639,
      },
      "Đê Tả Đáy": {
        latitude: 20.8622941,
        longitude: 105.7444443,
      },
    },
    "Cao Viên": {
      "Bờ Sông": {
        latitude: 20.9114513,
        longitude: 105.7647131,
      },
      "Liên Thôn": {
        latitude: 20.9031929,
        longitude: 105.7444156,
      },
      "Quan Âm": {
        latitude: 20.9056531,
        longitude: 105.74433,
      },
      "Thắng Lợi": {
        latitude: 20.8976531,
        longitude: 105.755038,
      },
      "Xóm Biêu": {
        latitude: 20.9047959,
        longitude: 105.7438337,
      },
      "Xóm Côn": {
        latitude: 20.9086823,
        longitude: 105.740551,
      },
      "Xóm Giữa Thôn Vỹ": {
        latitude: 20.9052344,
        longitude: 105.7436269,
      },
      "Xóm Âm": {
        latitude: 20.9036253,
        longitude: 105.7457049,
      },
      "Xóm Đậu Thôn Vỹ": {
        latitude: 20.9053096,
        longitude: 105.742715,
      },
      "Đê Tả Đáy": {
        latitude: 20.8622941,
        longitude: 105.7444443,
      },
      "Đường Mương": {
        latitude: 20.9007349,
        longitude: 105.7542079,
      },
    },
    "Cự Khê": {
      "Bờ Sông": {
        latitude: 20.9114513,
        longitude: 105.7647131,
      },
      "Hữu Hòa": {
        latitude: 20.928704,
        longitude: 105.7935734,
      },
      "Đường Sái": {
        latitude: 20.9043491,
        longitude: 105.785964,
      },
      "Đường Trục Phía Nam": {
        latitude: 20.8495625,
        longitude: 105.8022895,
      },
    },
    "Dân Hòa": {
      "Liên Thôn Xã": {
        latitude: 20.8299492,
        longitude: 105.804449,
      },
      "Quốc Lộ 21b": {
        latitude: 20.853637,
        longitude: 105.7684941,
      },
      "Đt 429": {
        latitude: 20.8040687,
        longitude: 105.7429639,
      },
    },
    "Hồng Dương": {
      "Quốc Lộ 21b": {
        latitude: 20.853637,
        longitude: 105.7684941,
      },
      "Đường Trục Phía Nam": {
        latitude: 20.8495625,
        longitude: 105.8022895,
      },
    },
    "Kim An": {
      "Đê Tả Đáy": {
        latitude: 20.8622941,
        longitude: 105.7444443,
      },
    },
    "Kim Bài": {
      "Quốc Lộ 21b": {
        latitude: 20.853637,
        longitude: 105.7684941,
      },
      "Đê Tả Đáy": {
        latitude: 20.8622941,
        longitude: 105.7444443,
      },
      "Đường Muỗi": {
        latitude: 20.8701948,
        longitude: 105.7828633,
      },
    },
    "Kim Thư": {
      "Quốc Lộ 21b": {
        latitude: 20.853637,
        longitude: 105.7684941,
      },
      "Xóm 4": {
        latitude: 20.8374731,
        longitude: 105.7645561,
      },
      "Xóm 5": {
        latitude: 20.8383355,
        longitude: 105.7652857,
      },
      "Xóm Dưới": {
        latitude: 20.8395602,
        longitude: 105.7672195,
      },
      "Xóm Giữa": {
        latitude: 20.8403553,
        longitude: 105.7661789,
      },
      "Xóm Thông": {
        latitude: 20.8415186,
        longitude: 105.7658409,
      },
      "Đê Tả Đáy": {
        latitude: 20.8622941,
        longitude: 105.7444443,
      },
    },
    "Liên Châu": {
      "Đường Trục Phía Nam": {
        latitude: 20.8495625,
        longitude: 105.8022895,
      },
    },
    "Mỹ Hưng": {
      "Sông Ái": {
        latitude: 20.8914286,
        longitude: 105.794529,
      },
      "Thạch Nham": {
        latitude: 20.9037363,
        longitude: 105.8039173,
      },
      "Trục Xã": {
        latitude: 20.9104416,
        longitude: 105.7962752,
      },
      "Xóm Chùa": {
        latitude: 20.9094572,
        longitude: 105.7985399,
      },
      "Đường Sái": {
        latitude: 20.9043491,
        longitude: 105.785964,
      },
      "Đường Trục Phía Nam": {
        latitude: 20.8495625,
        longitude: 105.8022895,
      },
    },
    "Phương Trung": {
      "Quốc Lộ 21b": {
        latitude: 20.853637,
        longitude: 105.7684941,
      },
      "Trạm Bơm": {
        latitude: 20.8323537,
        longitude: 105.7650977,
      },
      "Đê Tả Đáy": {
        latitude: 20.8622941,
        longitude: 105.7444443,
      },
    },
    "Tam Hưng": {
      "Bình Minh": {
        latitude: 20.8936786,
        longitude: 105.7759597,
      },
      "Bùi Xá": {
        latitude: 20.8672379,
        longitude: 105.7953224,
      },
      "Cổng Làng": {
        latitude: 20.8881255,
        longitude: 105.7823116,
      },
      "Ngô Long": {
        latitude: 20.8907729,
        longitude: 105.772558,
      },
      "Sau Làng": {
        latitude: 20.8900591,
        longitude: 105.7833571,
      },
      "Sông Ái": {
        latitude: 20.8914286,
        longitude: 105.794529,
      },
      "Tam Hưng": {
        latitude: 20.8813669,
        longitude: 105.7857394,
      },
      "Thanh Niên": {
        latitude: 20.8886142,
        longitude: 105.7787979,
      },
      "Tê Quả": {
        latitude: 20.8896199,
        longitude: 105.7790271,
      },
      "Văn Khê": {
        latitude: 20.8692932,
        longitude: 105.7893362,
      },
      "Đt 427b": {
        latitude: 20.8775244,
        longitude: 105.7956711,
      },
      "Đường Chảy": {
        latitude: 20.8888353,
        longitude: 105.7762414,
      },
      "Đường Muỗi": {
        latitude: 20.8701948,
        longitude: 105.7828633,
      },
      "Đường Sái": {
        latitude: 20.9043491,
        longitude: 105.785964,
      },
      "Đường Trục Phía Nam": {
        latitude: 20.8495625,
        longitude: 105.8022895,
      },
      "Đại Thắng": {
        latitude: 20.8909638,
        longitude: 105.778945,
      },
    },
    "Tân Ước": {
      "Liên Thôn Xã": {
        latitude: 20.8299492,
        longitude: 105.804449,
      },
      "Đường Trục Phía Nam": {
        latitude: 20.8495625,
        longitude: 105.8022895,
      },
    },
    "Thanh Cao": {
      "10/3": {
        latitude: 20.8888338,
        longitude: 105.7612926,
      },
      "Bình Minh Thanh Cao": {
        latitude: 20.8852236,
        longitude: 105.752835,
      },
      "Liên Thôn": {
        latitude: 20.9031929,
        longitude: 105.7444156,
      },
      "Đê Tả Đáy": {
        latitude: 20.8622941,
        longitude: 105.7444443,
      },
      "Đường Mương": {
        latitude: 20.9007349,
        longitude: 105.7542079,
      },
    },
    "Thanh Mai": {
      "Quốc Lộ 21b": {
        latitude: 20.853637,
        longitude: 105.7684941,
      },
      "Đê Tả Đáy": {
        latitude: 20.8622941,
        longitude: 105.7444443,
      },
    },
    "Thanh Thùy": {
      "Bùi Xá": {
        latitude: 20.8672379,
        longitude: 105.7953224,
      },
      "Liên Thôn Xã": {
        latitude: 20.8299492,
        longitude: 105.804449,
      },
      "Đt 427b": {
        latitude: 20.8775244,
        longitude: 105.7956711,
      },
      "Đường Trục Phía Nam": {
        latitude: 20.8495625,
        longitude: 105.8022895,
      },
    },
    "Thanh Văn": {
      "Liên Thôn Xã": {
        latitude: 20.8299492,
        longitude: 105.804449,
      },
      "Đường Trục Phía Nam": {
        latitude: 20.8495625,
        longitude: 105.8022895,
      },
    },
    "Xuân Dương": {
      "Đt 429": {
        latitude: 20.8040687,
        longitude: 105.7429639,
      },
    },
  },
  "Thanh Trì": {
    "Duyên Hà": {
      "Đê Hữu Hồng": {
        latitude: 20.9239972,
        longitude: 105.8806541,
      },
    },
    "Đại áng": {
      "Đại Áng": {
        latitude: 20.9119974,
        longitude: 105.8314832,
      },
    },
    "Đông Mỹ": {
      "Đại Áng": {
        latitude: 20.9119974,
        longitude: 105.8314832,
      },
    },
    "Hữu Hoà": {
      "Đại Áng": {
        latitude: 20.9119974,
        longitude: 105.8314832,
      },
    },
    "Liên Ninh": {
      "Liên Ninh": {
        latitude: 20.9182353,
        longitude: 105.8441992,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.9463267,
        longitude: 105.8573271,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9065688,
        longitude: 105.8527473,
      },
      "Đông Mỹ Liên Ninh": {
        latitude: 20.9106511,
        longitude: 105.8680391,
      },
    },
    "Ngọc Hồi": {
      "Liên Ninh": {
        latitude: 20.9182353,
        longitude: 105.8441992,
      },
      "Lạc Thị": {
        latitude: 20.9244802,
        longitude: 105.8348423,
      },
      "Ngọc Hồi": {
        latitude: 20.9400073,
        longitude: 105.8439052,
      },
      "Quang Trung": {
        latitude: 20.9233421,
        longitude: 105.8430554,
      },
      "Quốc Lộ 1a": {
        latitude: 20.9065688,
        longitude: 105.8527473,
      },
      "Vĩnh Quỳnh": {
        latitude: 20.935635,
        longitude: 105.8376022,
      },
    },
    "Ngũ Hiệp": {
      "Lưu Phái": {
        latitude: 20.929604,
        longitude: 105.8524384,
      },
      "Ngũ Hiệp": {
        latitude: 20.9226571,
        longitude: 105.859266,
      },
      "Ngọc Hồi": {
        latitude: 20.9400073,
        longitude: 105.8439052,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.9463267,
        longitude: 105.8573271,
      },
      "Quang Lai": {
        latitude: 20.9327239,
        longitude: 105.8500899,
      },
      "Vũ Lăng": {
        latitude: 20.932527,
        longitude: 105.8530522,
      },
      "Đê Hữu Hồng": {
        latitude: 20.9239972,
        longitude: 105.8806541,
      },
      "Đông Mỹ": {
        latitude: 20.9161362,
        longitude: 105.8722765,
      },
    },
    "Tả Thanh Oai": {
      "Nhân Hòa": {
        latitude: 20.9348487,
        longitude: 105.8054913,
      },
      "Siêu Quần": {
        latitude: 20.913016,
        longitude: 105.8064853,
      },
      "Tả Thanh Oai": {
        latitude: 20.931649,
        longitude: 105.7984692,
      },
      "Đt 70a": {
        latitude: 20.9506377,
        longitude: 105.8201128,
      },
    },
    "Tam Hiệp": {
      "Tựu Liệt": {
        latitude: 20.952977,
        longitude: 105.835198,
      },
      "Đt 70a": {
        latitude: 20.9506377,
        longitude: 105.8201128,
      },
    },
    "Tân Triều": {
      "Chu Văn An": {
        latitude: 20.9673648,
        longitude: 105.8034124,
      },
      "Cầu Bươu": {
        latitude: 20.9618298,
        longitude: 105.7991005,
      },
      "Mương Nổi": {
        latitude: 20.9745273,
        longitude: 105.8056243,
      },
      "Triều Khúc": {
        latitude: 20.9819493,
        longitude: 105.8007806,
      },
      "Tân Triều": {
        latitude: 20.9804482,
        longitude: 105.8029197,
      },
      "Tân Triều Mới": {
        latitude: 20.9773549,
        longitude: 105.8047858,
      },
      "Yên Xá": {
        latitude: 20.9697199,
        longitude: 105.7984527,
      },
      "Đt 70a": {
        latitude: 20.9506377,
        longitude: 105.8201128,
      },
    },
    "Thanh Liệt": {
      "Chu Văn An": {
        latitude: 20.9673648,
        longitude: 105.8034124,
      },
      "Kim Giang": {
        latitude: 20.9631552,
        longitude: 105.8172983,
      },
      "Nghiêm Xuân Yêm": {
        latitude: 20.9713082,
        longitude: 105.8226096,
      },
      "Thanh Liệt": {
        latitude: 20.9672608,
        longitude: 105.8183086,
      },
      "Đt 70a": {
        latitude: 20.9506377,
        longitude: 105.8201128,
      },
    },
    "Tứ Hiệp": {
      "Cương Ngô": {
        latitude: 20.9448556,
        longitude: 105.8507742,
      },
      "Cổ Điển": {
        latitude: 20.9428932,
        longitude: 105.8517285,
      },
      "Cổ Điển B": {
        latitude: 20.9453159,
        longitude: 105.8534046,
      },
      "Nguyễn Bặc": {
        latitude: 20.9467222,
        longitude: 105.8488974,
      },
      "Nguyễn Bồ": {
        latitude: 20.9520781,
        longitude: 105.848518,
      },
      "Nguyễn Khoái": {
        latitude: 20.947621,
        longitude: 105.8643834,
      },
      "Ngọc Hồi": {
        latitude: 20.9400073,
        longitude: 105.8439052,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.9463267,
        longitude: 105.8573271,
      },
      "Quang Lai": {
        latitude: 20.9327239,
        longitude: 105.8500899,
      },
      "Tứ Hiệp": {
        latitude: 20.9462345,
        longitude: 105.8562686,
      },
      "Vũ Lăng": {
        latitude: 20.932527,
        longitude: 105.8530522,
      },
      "Đê Hữu Hồng": {
        latitude: 20.9239972,
        longitude: 105.8806541,
      },
    },
    "Văn Điển": {
      "Cổ Điển": {
        latitude: 20.9428932,
        longitude: 105.8517285,
      },
      "Nguyễn Bặc": {
        latitude: 20.9467222,
        longitude: 105.8488974,
      },
      "Nguyễn Bồ": {
        latitude: 20.9520781,
        longitude: 105.848518,
      },
      "Ngọc Hồi": {
        latitude: 20.9400073,
        longitude: 105.8439052,
      },
      "Tứ Hiệp": {
        latitude: 20.9462345,
        longitude: 105.8562686,
      },
      "Tựu Liệt": {
        latitude: 20.952977,
        longitude: 105.835198,
      },
      "Vĩnh Quỳnh": {
        latitude: 20.935635,
        longitude: 105.8376022,
      },
      "Đt 70a": {
        latitude: 20.9506377,
        longitude: 105.8201128,
      },
    },
    "Vạn Phúc": {
      "Đê Hữu Hồng": {
        latitude: 20.9239972,
        longitude: 105.8806541,
      },
    },
    "Vĩnh Quỳnh": {
      "Ngọc Hồi": {
        latitude: 20.9400073,
        longitude: 105.8439052,
      },
      "Quỳnh Đô": {
        latitude: 20.9355985,
        longitude: 105.843661,
      },
      "Vĩnh Quỳnh": {
        latitude: 20.935635,
        longitude: 105.8376022,
      },
      "Đt 70a": {
        latitude: 20.9506377,
        longitude: 105.8201128,
      },
    },
    "Yên Mỹ": {
      "Liên Xã": {
        latitude: 20.9369549,
        longitude: 105.8693585,
      },
      "Tứ Hiệp": {
        latitude: 20.9462345,
        longitude: 105.8562686,
      },
      "Đê Hữu Hồng": {
        latitude: 20.9239972,
        longitude: 105.8806541,
      },
    },
  },
  "Thanh Xuân": {
    "Hạ Đình": {
      "Hạ Đình": {
        latitude: 20.988815,
        longitude: 105.808483,
      },
      "Khương Đình": {
        latitude: 20.989259,
        longitude: 105.812981,
      },
      "Kim Giang": {
        latitude: 20.984774,
        longitude: 105.814319,
      },
      "Nguyễn Xiển": {
        latitude: 20.984715,
        longitude: 105.8084435,
      },
    },
    "Khương Đình": {
      "Bùi Xương Trạch": {
        latitude: 20.9892085,
        longitude: 105.8178418,
      },
      "Khương Hạ": {
        latitude: 20.992102,
        longitude: 105.81637,
      },
      "Khương Trung": {
        latitude: 20.996887,
        longitude: 105.818048,
      },
      "Kim Giang": {
        latitude: 20.984774,
        longitude: 105.814319,
      },
      "Vũ Tông Phan": {
        latitude: 20.986184,
        longitude: 105.814168,
      },
    },
    "Khương Mai": {
      "Cù Chính Lan": {
        latitude: 20.9990722,
        longitude: 105.8233189,
      },
      "Hoàng Văn Thái": {
        latitude: 20.996631,
        longitude: 105.825704,
      },
      "Lê Trọng Tấn": {
        latitude: 20.995614,
        longitude: 105.830456,
      },
      "Nguyễn Ngọc Nại": {
        latitude: 20.999416,
        longitude: 105.825194,
      },
      "Nguyễn Viết Xuân": {
        latitude: 20.997919,
        longitude: 105.827148,
      },
      "Trường Chinh": {
        latitude: 21.0003008,
        longitude: 105.8300127,
      },
      "Trần Điền": {
        latitude: 20.991737,
        longitude: 105.832851,
      },
      "Tôn Thất Tùng": {
        latitude: 20.999573,
        longitude: 105.828775,
      },
      "Đại La": {
        latitude: 20.9986538,
        longitude: 105.8368696,
      },
    },
    "Khương Trung": {
      "Hoàng Văn Thái": {
        latitude: 20.996631,
        longitude: 105.825704,
      },
      "Khương Trung": {
        latitude: 20.996887,
        longitude: 105.818048,
      },
      "Nguyễn Ngọc Nại": {
        latitude: 20.999416,
        longitude: 105.825194,
      },
      "Trường Chinh": {
        latitude: 21.0003008,
        longitude: 105.8300127,
      },
      "Tô Vĩnh Diện": {
        latitude: 20.999246,
        longitude: 105.820581,
      },
      "Vũ Tông Phan": {
        latitude: 20.986184,
        longitude: 105.814168,
      },
      "Vương Thừa Vũ": {
        latitude: 20.995935,
        longitude: 105.8219564,
      },
      "Đại La": {
        latitude: 20.9986538,
        longitude: 105.8368696,
      },
    },
    "Kim Giang": {
      "Hoàng Đạo Thành": {
        latitude: 20.9830666,
        longitude: 105.8123174,
      },
      "Kim Giang": {
        latitude: 20.984774,
        longitude: 105.814319,
      },
    },
    "Nhân Chính": {
      "Chính Kinh": {
        latitude: 20.9998387,
        longitude: 105.8112746,
      },
      "Cự Lộc": {
        latitude: 21.0013312,
        longitude: 105.8141345,
      },
      "Giáp Nhất": {
        latitude: 21.005126,
        longitude: 105.816387,
      },
      "Hoàng Minh Giám": {
        latitude: 21.0040880952388,
        longitude: 105.798846178825,
      },
      "Hoàng Ngân": {
        latitude: 21.007043,
        longitude: 105.810229,
      },
      "Hoàng Đạo Thúy": {
        latitude: 21.0061165,
        longitude: 105.8038604,
      },
      "Khuất Duy Tiến": {
        latitude: 20.997167,
        longitude: 105.799055,
      },
      "Lê Văn Lương": {
        latitude: 21.0035252,
        longitude: 105.8021818,
      },
      "Lê Văn Thiêm": {
        latitude: 21.001089,
        longitude: 105.803655,
      },
      "Nguyễn Thị Thập": {
        latitude: 21.006631,
        longitude: 105.802408,
      },
      "Nguyễn Thị Định": {
        latitude: 21.007634,
        longitude: 105.805341,
      },
      "Nguyễn Tuân": {
        latitude: 20.998492,
        longitude: 105.803195,
      },
      "Nguyễn Xuân Linh": {
        latitude: 21.00518,
        longitude: 105.801537,
      },
      "Ngụy Như Kon Tum": {
        latitude: 21.000238,
        longitude: 105.802417,
      },
      "Nhân Hòa": {
        latitude: 21.0020685,
        longitude: 105.8081994,
      },
      "Quan Nhân": {
        latitude: 21.004792,
        longitude: 105.811354,
      },
      "Tố Hữu": {
        latitude: 20.998497619719,
        longitude: 105.795789935466,
      },
    },
    "Phương Liệt": {
      "Giải Phóng": {
        latitude: 20.993761,
        longitude: 105.841299,
      },
      "Hồ Rùa": {
        latitude: 20.9934229,
        longitude: 105.8361986,
      },
      "Lê Trọng Tấn": {
        latitude: 20.995614,
        longitude: 105.830456,
      },
      "Nguyễn Lân": {
        latitude: 20.990766,
        longitude: 105.837009,
      },
      "Nguyễn Văn Trỗi": {
        latitude: 20.9872888,
        longitude: 105.8383403,
      },
      "Phan Đình Giót": {
        latitude: 20.991234,
        longitude: 105.839688,
      },
      "Phương Liệt": {
        latitude: 20.9968042,
        longitude: 105.8385117,
      },
      "Phố Vọng": {
        latitude: 20.9946732,
        longitude: 105.8423652,
      },
      "Định Công": {
        latitude: 20.9847826,
        longitude: 105.8393512,
      },
    },
    "Thanh Xuân Bắc": {
      "Nguyễn Quý Đức": {
        latitude: 20.992198,
        longitude: 105.799553,
      },
      "Tố Hữu": {
        latitude: 20.998497619719,
        longitude: 105.795789935466,
      },
      "Vũ Hữu": {
        latitude: 20.9937195,
        longitude: 105.7963068,
      },
    },
    "Thanh Xuân Nam": {
      "Triều Khúc": {
        latitude: 20.985578,
        longitude: 105.798779,
      },
    },
    "Thanh Xuân Trung": {
      "Chính Kinh": {
        latitude: 20.9998387,
        longitude: 105.8112746,
      },
      "Hạ Đình": {
        latitude: 20.988815,
        longitude: 105.808483,
      },
      "Khuất Duy Tiến": {
        latitude: 20.997167,
        longitude: 105.799055,
      },
      "Lê Văn Thiêm": {
        latitude: 21.001089,
        longitude: 105.803655,
      },
      "Nguyễn Huy Tưởng": {
        latitude: 20.998599,
        longitude: 105.805909,
      },
      "Nguyễn Trãi": {
        latitude: 20.996592,
        longitude: 105.810411,
      },
      "Nguyễn Tuân": {
        latitude: 20.998492,
        longitude: 105.803195,
      },
      "Nguyễn Xiển": {
        latitude: 20.984715,
        longitude: 105.8084435,
      },
      "Ngụy Như Kon Tum": {
        latitude: 21.000238,
        longitude: 105.802417,
      },
      "Nhân Hòa": {
        latitude: 21.0020685,
        longitude: 105.8081994,
      },
      "Quan Nhân": {
        latitude: 21.004792,
        longitude: 105.811354,
      },
      "Vũ Trọng Phụng": {
        latitude: 21.000894,
        longitude: 105.80723,
      },
    },
    "Thượng Đình": {
      "Chính Kinh": {
        latitude: 20.9998387,
        longitude: 105.8112746,
      },
      "Cự Lộc": {
        latitude: 21.0013312,
        longitude: 105.8141345,
      },
      "Giáp Nhất": {
        latitude: 21.005126,
        longitude: 105.816387,
      },
      "Nguyễn Trãi": {
        latitude: 20.996592,
        longitude: 105.810411,
      },
      "Thượng Đình": {
        latitude: 20.999584,
        longitude: 105.817799,
      },
    },
  },
  "Thường Tín": {
    "Chương Dương": {
      "Chương Dương": {
        latitude: 20.8465112,
        longitude: 105.9016007,
      },
      "Chương Dương Lê Lợi": {
        latitude: 20.8366146,
        longitude: 105.8983884,
      },
      "Chương Dương Thư Phú": {
        latitude: 20.8589226,
        longitude: 105.905291,
      },
      "Kênh Xóm 2": {
        latitude: 20.8400982,
        longitude: 105.9067589,
      },
      "Xóm 2": {
        latitude: 20.8411877,
        longitude: 105.9091083,
      },
      "Đê Sông Hồng": {
        latitude: 20.8431337,
        longitude: 105.9133151,
      },
    },
    "Dũng Tiến": {
      "Dũng Tiến": {
        latitude: 20.8199298,
        longitude: 105.8511119,
      },
    },
    "Duyên Thái": {
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
    },
    "Hà Hồi": {
      "Hòa Lương": {
        latitude: 20.8613501,
        longitude: 105.8710035,
      },
      "Khê Hồi": {
        latitude: 20.8693308,
        longitude: 105.8770693,
      },
      "Ngõ Nội Chùa La": {
        latitude: 20.8604023,
        longitude: 105.8724369,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
      "Phú Cốc": {
        latitude: 20.8665838,
        longitude: 105.8768551,
      },
      "Phạm Hồng Thái": {
        latitude: 20.8641857,
        longitude: 105.8702266,
      },
      "Quang Trung": {
        latitude: 20.865471,
        longitude: 105.8766919,
      },
      "Quang Trung Khu Mơ": {
        latitude: 20.8649036,
        longitude: 105.8771457,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
      "Thiên Lý": {
        latitude: 20.8627511,
        longitude: 105.8701634,
      },
      "Thượng Hiền": {
        latitude: 20.8661818,
        longitude: 105.8727617,
      },
      "Xóm Chánh": {
        latitude: 20.8694368,
        longitude: 105.8788121,
      },
      "Xóm Chùa": {
        latitude: 20.86967,
        longitude: 105.877293,
      },
      "Xóm Phạm": {
        latitude: 20.8679283,
        longitude: 105.8780579,
      },
      "Xóm Đông": {
        latitude: 20.8683676,
        longitude: 105.8794976,
      },
      "Đinh Tiên Hoàng": {
        latitude: 20.8649772,
        longitude: 105.8745672,
      },
      "Đt 427": {
        latitude: 20.8671056,
        longitude: 105.8957292,
      },
    },
    "Hiền Giang": {
      "Thăng Long": {
        latitude: 20.8597926,
        longitude: 105.8303843,
      },
      "Trần Phú": {
        latitude: 20.8693321,
        longitude: 105.8348002,
      },
    },
    "Hòa Bình": {
      "Trần Phú": {
        latitude: 20.8693321,
        longitude: 105.8348002,
      },
    },
    "Hồng Vân": {
      "Nỏ Bạn": {
        latitude: 20.871835,
        longitude: 105.8970137,
      },
      "Đt 427": {
        latitude: 20.8671056,
        longitude: 105.8957292,
      },
      "Đê Hữu Hồng": {
        latitude: 20.8952784,
        longitude: 105.8898487,
      },
      "Đê Sông Hồng": {
        latitude: 20.8431337,
        longitude: 105.9133151,
      },
    },
    "Khánh Hà": {
      "Liễu Ngoại": {
        latitude: 20.890001,
        longitude: 105.8215032,
      },
    },
    "Lê Lợi": {
      "Chương Dương Lê Lợi": {
        latitude: 20.8366146,
        longitude: 105.8983884,
      },
      "Hà Vỹ": {
        latitude: 20.8206265,
        longitude: 105.9012832,
      },
      "Từ Vân Lê Lợi": {
        latitude: 20.8331852,
        longitude: 105.8972925,
      },
      "Đê Sông Hồng": {
        latitude: 20.8431337,
        longitude: 105.9133151,
      },
      "Đường Cả Hà Vỹ": {
        latitude: 20.8227365,
        longitude: 105.9077014,
      },
      "Đường Dài Hà Vỹ": {
        latitude: 20.8210642,
        longitude: 105.9002375,
      },
    },
    "Liên Phương": {
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
    },
    "Minh Cường": {
      "Cầu Chui Vạn Điểm": {
        latitude: 20.7764419,
        longitude: 105.9139886,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
    },
    "Nghiêm Xuyên": {
      "Cống Xuyên": {
        latitude: 20.807618,
        longitude: 105.8589884,
      },
      "Dũng Tiến": {
        latitude: 20.8199298,
        longitude: 105.8511119,
      },
      "Liễu Viên": {
        latitude: 20.8053951,
        longitude: 105.8420612,
      },
      "Nghiêm Xuyên": {
        latitude: 20.8044646,
        longitude: 105.8485602,
      },
      "Nghiêm Xá": {
        latitude: 20.810753,
        longitude: 105.8511427,
      },
      "Đt 429": {
        latitude: 20.8020313,
        longitude: 105.8662714,
      },
    },
    "Nguyễn Trãi": {
      "Dũng Tiến": {
        latitude: 20.8199298,
        longitude: 105.8511119,
      },
      "Sông Nhuệ": {
        latitude: 20.8526748,
        longitude: 105.847058,
      },
    },
    "Nhị Khê": {
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
      "Xóm 3": {
        latitude: 20.8956046,
        longitude: 105.8524056,
      },
      "Xóm 4": {
        latitude: 20.8957497,
        longitude: 105.8518343,
      },
    },
    "Ninh Sở": {
      "Đê Hữu Hồng": {
        latitude: 20.8952784,
        longitude: 105.8898487,
      },
    },
    "Quất Động": {
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
      "Quất Động": {
        latitude: 20.842652,
        longitude: 105.8783435,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
    },
    "Thắng Lợi": {
      "Hai Doan": {
        latitude: 20.8291311,
        longitude: 105.8819283,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
    },
    "Thống Nhất": {
      "Bách Phúc": {
        latitude: 20.7949708,
        longitude: 105.9043834,
      },
      "Bộ Đầu Vạn Điểm": {
        latitude: 20.7884683,
        longitude: 105.9099765,
      },
      "Hà Vỹ": {
        latitude: 20.8206265,
        longitude: 105.9012832,
      },
      "Phúc Lộc": {
        latitude: 20.7954395,
        longitude: 105.9035761,
      },
      "Phúc Trạch": {
        latitude: 20.7957202,
        longitude: 105.9045189,
      },
      "Vạn Phúc": {
        latitude: 20.79885,
        longitude: 105.9020773,
      },
      "Xóm Dưới": {
        latitude: 20.7950448,
        longitude: 105.9041108,
      },
      "Đt 73": {
        latitude: 20.8086688,
        longitude: 105.8961509,
      },
      "Đê Sông Hồng": {
        latitude: 20.8431337,
        longitude: 105.9133151,
      },
    },
    "Thư Phú": {
      "Chương Dương Thư Phú": {
        latitude: 20.8589226,
        longitude: 105.905291,
      },
      "Vĩnh Lộc": {
        latitude: 20.8647283,
        longitude: 105.9041126,
      },
      "Đt 427": {
        latitude: 20.8671056,
        longitude: 105.8957292,
      },
      "Đê Sông Hồng": {
        latitude: 20.8431337,
        longitude: 105.9133151,
      },
    },
    "Thường Tín": {
      "Chợ Bằng": {
        latitude: 20.8730327,
        longitude: 105.8653878,
      },
      "Danh Hương": {
        latitude: 20.8700935,
        longitude: 105.8641941,
      },
      "Lý Công Bật": {
        latitude: 20.8667083,
        longitude: 105.8670438,
      },
      "Nguyễn Du": {
        latitude: 20.8710141,
        longitude: 105.8615813,
      },
      "Nguyễn Trãi": {
        latitude: 20.8693217,
        longitude: 105.8601043,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
      "Thiên Lý": {
        latitude: 20.8627511,
        longitude: 105.8701634,
      },
      "Thượng Hiền": {
        latitude: 20.8661818,
        longitude: 105.8727617,
      },
      "Trần Phú": {
        latitude: 20.8693321,
        longitude: 105.8348002,
      },
      "Từ Bá Cơ": {
        latitude: 20.8700864,
        longitude: 105.8619499,
      },
      "Từ Giấy": {
        latitude: 20.8699038,
        longitude: 105.8599034,
      },
      "Vũ Đức Trinh": {
        latitude: 20.8711444,
        longitude: 105.8603665,
      },
      "Đt 427": {
        latitude: 20.8671056,
        longitude: 105.8957292,
      },
    },
    "Tiền Phong": {
      "Phố Mới": {
        latitude: 20.8592601,
        longitude: 105.8319347,
      },
      "Thăng Long": {
        latitude: 20.8597926,
        longitude: 105.8303843,
      },
      "Xóm Minh Ngọc": {
        latitude: 20.8554271,
        longitude: 105.8371634,
      },
      "Xóm Đình": {
        latitude: 20.854877,
        longitude: 105.8356524,
      },
      "Xóm Đầm Sen": {
        latitude: 20.8542118,
        longitude: 105.8372519,
      },
      "Đường Láng": {
        latitude: 20.859971,
        longitude: 105.8299138,
      },
    },
    "Tô Hiệu": {
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
      "Phúc Trạch": {
        latitude: 20.7957202,
        longitude: 105.9045189,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
      "Thôn An Định": {
        latitude: 20.796751,
        longitude: 105.8868611,
      },
      "Tử Dương": {
        latitude: 20.8055336,
        longitude: 105.880462,
      },
      "Đt 429": {
        latitude: 20.8020313,
        longitude: 105.8662714,
      },
      "Đt 73": {
        latitude: 20.8086688,
        longitude: 105.8961509,
      },
    },
    "Tự Nhiên": {
      "Đê Sông Hồng": {
        latitude: 20.8431337,
        longitude: 105.9133151,
      },
    },
    "Văn Bình": {
      "30/4": {
        latitude: 20.8882383,
        longitude: 105.8604552,
      },
      "Bạch Đằng": {
        latitude: 20.8847207,
        longitude: 105.863728,
      },
      "Chợ Bằng": {
        latitude: 20.8730327,
        longitude: 105.8653878,
      },
      "Cộng Hòa": {
        latitude: 20.8858712,
        longitude: 105.8588135,
      },
      "Giáp Hội": {
        latitude: 20.8871625,
        longitude: 105.8610639,
      },
      "Giải Phóng": {
        latitude: 20.8816746,
        longitude: 105.8615902,
      },
      "Hòa Bình": {
        latitude: 20.882827,
        longitude: 105.8602406,
      },
      "Nam Lang": {
        latitude: 20.873673,
        longitude: 105.8690026,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
      "Thanh Niên": {
        latitude: 20.8857578,
        longitude: 105.8681211,
      },
      "Thượng Hồng": {
        latitude: 20.884679,
        longitude: 105.8605125,
      },
      "Trung Hòa": {
        latitude: 20.8865433,
        longitude: 105.8597339,
      },
      "Trần Hữu Nhưng": {
        latitude: 20.8807413,
        longitude: 105.8606965,
      },
      "Trần Trọng Liêu": {
        latitude: 20.885749,
        longitude: 105.8675333,
      },
      "Tôn Đức Thắng": {
        latitude: 20.8822232,
        longitude: 105.8601106,
      },
      "Đoàn Kết": {
        latitude: 20.8852916,
        longitude: 105.8596049,
      },
      "Đt 427": {
        latitude: 20.8671056,
        longitude: 105.8957292,
      },
      "Đường Đình": {
        latitude: 20.8860037,
        longitude: 105.8655778,
      },
    },
    "Vạn Điểm": {
      "Bộ Đầu Vạn Điểm": {
        latitude: 20.7884683,
        longitude: 105.9099765,
      },
      "Cầu Gạo": {
        latitude: 20.7813394,
        longitude: 105.9109937,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
      "Phú Thịnh": {
        latitude: 20.7854854,
        longitude: 105.9115957,
      },
      "Phố Chợ": {
        latitude: 20.7732656,
        longitude: 105.90131,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
      "Rạng Đông": {
        latitude: 20.7858984,
        longitude: 105.9127775,
      },
      "Thôn Đặng Xá": {
        latitude: 20.7822452,
        longitude: 105.9125214,
      },
      "Thống Nhất": {
        latitude: 20.7745453,
        longitude: 105.9077882,
      },
      "Vạn Long": {
        latitude: 20.7750003,
        longitude: 105.9074762,
      },
      "Vạn Lộc": {
        latitude: 20.7735873,
        longitude: 105.908415,
      },
      "Vạn Lợi": {
        latitude: 20.7740126,
        longitude: 105.9081377,
      },
      "Vạn Minh": {
        latitude: 20.7755366,
        longitude: 105.9071342,
      },
      "Xóm Cộng Hòa": {
        latitude: 20.7802147,
        longitude: 105.9095971,
      },
      "Xóm Nam Phong": {
        latitude: 20.7791555,
        longitude: 105.9109854,
      },
      "Xóm Thanh Bình": {
        latitude: 20.7800451,
        longitude: 105.9101566,
      },
      "Xóm Đông Bình": {
        latitude: 20.780468,
        longitude: 105.9122185,
      },
      "Xóm Đồng Tiến": {
        latitude: 20.7803154,
        longitude: 105.9091704,
      },
      "Xóm Độc Lập": {
        latitude: 20.7847282,
        longitude: 105.9111212,
      },
      "Đê Sông Hồng": {
        latitude: 20.8431337,
        longitude: 105.9133151,
      },
      "Đê Vạn Thành": {
        latitude: 20.7744841,
        longitude: 105.9109972,
      },
      "Đường Gòong": {
        latitude: 20.7744189,
        longitude: 105.9078672,
      },
      "Đường Kho 6": {
        latitude: 20.7760413,
        longitude: 105.9088159,
      },
      "Đồng Tâm": {
        latitude: 20.7857252,
        longitude: 105.9107096,
      },
    },
    "Văn Phú": {
      "Trần Phú": {
        latitude: 20.8693321,
        longitude: 105.8348002,
      },
      "Đình Yên Phú": {
        latitude: 20.864248,
        longitude: 105.8531184,
      },
    },
    "Vân Tảo": {
      "Nỏ Bạn": {
        latitude: 20.871835,
        longitude: 105.8970137,
      },
      "Đt 427": {
        latitude: 20.8671056,
        longitude: 105.8957292,
      },
      "Đông Vân": {
        latitude: 20.8619636,
        longitude: 105.8964215,
      },
    },
    "Văn Tự": {
      "Ba Đình": {
        latitude: 20.78703,
        longitude: 105.8945931,
      },
      "Liên Thôn": {
        latitude: 20.7843801,
        longitude: 105.8873591,
      },
      "Pháp Vân Cầu Giẽ": {
        latitude: 20.8582262,
        longitude: 105.8814553,
      },
      "Quốc Lộ 1a": {
        latitude: 20.8126405,
        longitude: 105.8834064,
      },
      "Sau Nghè": {
        latitude: 20.7838308,
        longitude: 105.8929413,
      },
      "Thôn An Định": {
        latitude: 20.796751,
        longitude: 105.8868611,
      },
      "Văn Tự": {
        latitude: 20.7924024,
        longitude: 105.879313,
      },
    },
  },
  "Ứng Hòa": {
    "Cao Thành": {
      "Đt 429b": {
        latitude: 20.785177,
        longitude: 105.7199778,
      },
    },
    "Đại Cường": {
      "Làng Kim Bồng": {
        latitude: 20.6616859,
        longitude: 105.8675824,
      },
    },
    "Đội Bình": {
      "Làng Thọ Vực": {
        latitude: 20.652028,
        longitude: 105.8172305,
      },
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
    },
    "Đồng Tân": {
      "Đt 428": {
        latitude: 20.7183994,
        longitude: 105.8339324,
      },
    },
    "Hòa Nam": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
    },
    "Hòa Phú": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
    },
    "Hoa Sơn": {
      "Đt 429b": {
        latitude: 20.785177,
        longitude: 105.7199778,
      },
    },
    "Hòa Xá": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
    },
    "Hồng Quang": {
      "Đt 74": {
        latitude: 20.6341352,
        longitude: 105.8065796,
      },
    },
    "Kim Đường": {
      "Làng Cung Thuế": {
        latitude: 20.6753164,
        longitude: 105.8640479,
      },
      "Làng Kim Bồng": {
        latitude: 20.6616859,
        longitude: 105.8675824,
      },
      "Xóm Chùa": {
        latitude: 20.661894,
        longitude: 105.8662647,
      },
    },
    "Liên Bạt": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
    },
    "Lưu Hoàng": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
      "Đt 74": {
        latitude: 20.6341352,
        longitude: 105.8065796,
      },
    },
    "Minh Đức": {
      "Làng Kim Bồng": {
        latitude: 20.6616859,
        longitude: 105.8675824,
      },
      "Đt 428": {
        latitude: 20.7183994,
        longitude: 105.8339324,
      },
    },
    "Phù Lưu": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
    },
    "Phương Tú": {
      "Đt 428": {
        latitude: 20.7183994,
        longitude: 105.8339324,
      },
    },
    "Quảng Phú Cầu": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
    },
    "Trung Tú": {
      "Đt 428": {
        latitude: 20.7183994,
        longitude: 105.8339324,
      },
    },
    "Trường Thịnh": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
      "Đt 429b": {
        latitude: 20.785177,
        longitude: 105.7199778,
      },
    },
    "Vân Đình": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
      "Đt 428": {
        latitude: 20.7183994,
        longitude: 105.8339324,
      },
    },
    "Vạn Thái": {
      "Quốc Lộ 21b": {
        latitude: 20.6920235,
        longitude: 105.7547517,
      },
    },
    "Viên An": {
      "Đt 419": {
        latitude: 20.8079612,
        longitude: 105.7093713,
      },
      "Đt 429": {
        latitude: 20.8051805,
        longitude: 105.7199612,
      },
      "Đt 429b": {
        latitude: 20.785177,
        longitude: 105.7199778,
      },
    },
    "Viên Nội": {
      "Đt 429b": {
        latitude: 20.785177,
        longitude: 105.7199778,
      },
    },
  },
  "Biên Hòa": {
    "Tân Mai": {
      "Tân Mai": {
        latitude: null,
        longitude: null,
      },
    },
  },
};

function get_ward_list(district) {
  console.log(district);
  return Object.keys(location_data[district]);
}

function get_street_list(district, ward) {
  console.log(district, ward, location_data[district][ward]);
  return Object.keys(location_data[district][ward]);
}

function fill_value() {
  let district_element = document.getElementById("district");

  let district =
    district_element.options[district_element.selectedIndex].innerText;
  console.log(district);

  if (district) {
    let ward_element = document.getElementById("ward");
    let street_element = document.getElementById("street");

    let ward_list = get_ward_list(district);
    console.log(ward_list);
    let modified_element_list = [];
    for (let i = 0; i < ward_list.length; i++) {
      let ward = ward_list[i];
      let option = document.createElement("option");
      option.setAttribute("value", ward);
      option.setAttribute("id", `ward-${i}`);
      if (i == 0) {
        option.setAttribute("selected", "selected");
      }

      option.innerText = `${ward}`;
      modified_element_list.push(option);
    }

    ward_element.replaceChildren(...modified_element_list);

    let street_list = get_street_list(district, ward_list[0]);
    modified_element_list = [];
    for (let i = 0; i < street_list.length; i++) {
      let street = street_list[i];
      let option = document.createElement("option");
      option.setAttribute("value", street);
      if (i == 0) {
        option.setAttribute("selected", "selected");
      }
      option.innerText = `${street}`;
      modified_element_list.push(option);
    }

    street_element.replaceChildren(...modified_element_list);
  }

  district_element.onchange = function () {
    let district =
      document.getElementById("district").options[
        district_element.selectedIndex
      ].innerText;

    if (district) {
      let ward_element = document.getElementById("ward");
      let street_element = document.getElementById("street");

      let ward_list = get_ward_list(district);
      let modified_element_list = [];
      for (let i = 0; i < ward_list.length; i++) {
        let ward = ward_list[i];
        let option = document.createElement("option");
        option.setAttribute("value", ward);
        option.setAttribute("id", `ward-${i}`);
        if (i == 0) {
          option.setAttribute("selected", "selected");
        }
        option.innerText = `${ward}`;
        modified_element_list.push(option);
      }

      ward_element.replaceChildren(...modified_element_list);

      let street_list = get_street_list(district, ward_list[0]);
      modified_element_list = [];
      for (let i = 0; i < street_list.length; i++) {
        let street = street_list[i];
        let option = document.createElement("option");
        option.setAttribute("value", street);
        if (i == 0) {
          option.setAttribute("selected", "selected");
        }
        option.innerText = `${street}`;
        modified_element_list.push(option);
      }

      street_element.replaceChildren(...modified_element_list);
    }
  };
  let ward_element = document.getElementById("ward");
  let street_element = document.getElementById("street");
  ward_element.onchange = function () {
    let ward =
      document.getElementById("ward").options[ward_element.selectedIndex]
        .innerText;

    let district =
      document.getElementById("district").options[
        district_element.selectedIndex
      ].innerText;

    if (ward) {
      let street_list = get_street_list(district, ward);
      modified_element_list = [];
      for (let i = 0; i < street_list.length; i++) {
        let street = street_list[i];
        let option = document.createElement("option");
        option.setAttribute("value", street);
        if (i == 0) {
          option.setAttribute("selected", "selected");
        }
        option.innerText = `${street}`;
        modified_element_list.push(option);
      }

      street_element.replaceChildren(...modified_element_list);
    }
  };
}

function clear_results() {
  results.innerHTML = "";
}

function clear_everything() {
  data = [];
  clear_screen();
  display();
}

function clear_screen() {
  results.innerHTML = "";
}

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

function submit_request() {
  clear_screen();
  add_screen("Making request to server");

  const form_data = extract_form_data();
  add_screen(JSON.stringify(form_data));

  postData("/predict", form_data).then((res) => {
    add_screen(JSON.stringify(res));
    display();
  });

  display();
}

function predictStreetPrice() {
  let form_data = extract_form_data();
  console.log(form_data);
  let geolocation = {
    latitude: location_data[form_data["district"]][form_data["ward"]][form_data["street"]]["latitude"],
    longitude: location_data[form_data["district"]][form_data["ward"]][form_data["street"]]["longitude"],
  };
  form_data["geolocation"] = geolocation;
  form_data = {
    "city": form_data['city'],
    "district": form_data['district'],
    "ward": form_data['ward'],
    "street": form_data['street'],
    "geolocation": form_data['geolocation']

  }
  console.log(form_data);
  postData("http://127.0.0.1:8000//predict-house-with-type-of-alley", {
    data: [form_data],
  })
    .then((data) => data[0]["output"])
    .then((prediction) => {
      const resultsDataElement = buildResults(prediction);
      results.innerHTML = "";
      results.appendChild(resultsDataElement);
    });
}

const form_ids = ["country", "city", "district", "street", "ward"];

function isCharNumber(c) {
  return c >= "0" && c <= "9";
}

const categorical_features = ["country", "city", "district", "street", "ward"];

const integer_features = [];

function isNumeric(num) {
  return !isNaN(num);
}

function extract_form_data() {
  let form_data = {};
  for (let i = 0; i < form_ids.length; i++) {
    if (!isCharNumber(form_ids[i].charAt(0))) {
      form_input = document.querySelector("#" + form_ids[i]);
    }
    if (form_input == null) {
      if (categorical_features.includes(form_ids[i])) {
        form_data[form_ids[i]] = ["NA"];
      } else {
        form_data[form_ids[i]] = [0];
      }
    } else {
      let form_value = form_input.value;
      console.log(form_ids[i], form_value);
      if (isNumeric(form_value)) {
        form_value = parseFloat(form_value);
      }

      form_data[form_ids[i]] = form_value;
    }
  }
  return form_data;
}

const USDFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function buildResults(price) {
  // Create result elements
  const priceElement = document.createElement("div");
  const containerElement = document.createElement("div");
  const yourPriceElement = document.createElement("div");
  const alley1PriceElement = document.createElement("div");
  const alley2PriceElement = document.createElement("div");
  const alley3PriceElement = document.createElement("div");
  const streetHousePriceElement = document.createElement("div");

  // Add relevant classes
  yourPriceElement.classList.add("type-h3");
  alley1PriceElement.classList.add("type-sh6");
  alley2PriceElement.classList.add("type-sh6");
  alley3PriceElement.classList.add("type-sh6");
  streetHousePriceElement.classList.add("type-sh6");

  // containerElement.classList.add('container-fluid');

  // Set inner text for the elements
  yourPriceElement.innerText = "Ước lượng giá:";
  alley1PriceElement.innerText = `${
    price["alleyHousePrice"]["1"]["metadata"]
  }: ${parseInt(price["alleyHousePrice"]["1"]["min"]) * 1.2} tr/m2 - ${parseInt(price["alleyHousePrice"]["1"]["max"]) * 1.2} tr/m2`;
  alley2PriceElement.innerText = `${
    price["alleyHousePrice"]["2"]["metadata"]
  }: ${parseInt(price["alleyHousePrice"]["2"]["min"]) * 1.2} tr/m2 - ${parseInt(price["alleyHousePrice"]["2"]["max"]) * 1.2} tr/m2`;
  alley3PriceElement.innerText = `${
    price["alleyHousePrice"]["3"]["metadata"]
  }: ${parseInt(price["alleyHousePrice"]["3"]["min"]) * 1.2} tr/m2 - ${parseInt(price["alleyHousePrice"]["3"]["max"]) * 1.2} tr/m2`;
  streetHousePriceElement.innerText = `${"Nhà mặt phố"}: ${
    parseInt(price["streetHousePrice"]["min"]) * 1.2
  } tr/m2 - ${
    parseInt(price["streetHousePrice"]["max"]) * 1.2
  } tr/m2`;

  // Add elements to container
  containerElement.appendChild(yourPriceElement);
  containerElement.appendChild(alley1PriceElement);
  containerElement.appendChild(alley2PriceElement);
  containerElement.appendChild(alley3PriceElement);
  containerElement.appendChild(streetHousePriceElement);

  return containerElement;
}

fill_value();

if ($(".side-navigation").length) {
  var closeBtn = $(".close");
  var sideAffix = $(".side-navigation-affix");
  var sideBtn = $("a.navigation-btn");
  var sideNav = $(".side-navigation-large");
  var sideSection = $(".navigation-section");
  var sideTopSpacing = 48;

  if ($(".side-navigation-small").length) {
    sideNav = $(".side-navigation-small");
  }

  var topOffset = sideSection.offset().top - sideTopSpacing;
  var bottomOffset =
    $("body").height() - sideSection.offset().top - sideSection.height();

  sideAffix.affix({
    offset: {
      top: topOffset,
      bottom: bottomOffset,
    },
  });

  sideAffix.width(sideNav.parent().width());

  sideBtn.on("click", function () {
    sideNav.css("display", "block");
    sideSection.css("display", "none");
    sideBtn.css("display", "none");
    $("body").css("overflow", "hidden");
  });
  closeBtn.on("click", function () {
    sideNav.css("display", "");
    sideSection.css("display", "");
    sideBtn.css("display", "inline-block");
    $("body").css("overflow", "");
  });
}

$(function () {
  $('[data-scroll="smooth"] a[href*=#]:not([href=#])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1500
        );

        return false; // prevent default href
      }
    }
  });
});
