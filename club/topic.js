var topic = [
    "奶油明太子蟹肉義大利麵",
    "碳烤肋眼牛排附香草奶油",
    "酥炸蟹肉餅＋蟹肉濃湯",
	"香草烤海鱸魚",
    "西西里提拉米蘇",
    "焦糖香蕉可麗餅"
];

var startDate = new Date();

function setMonthAndDay(startMonth, startDay)
{
    console.log("[setMonthAndDay]");
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1, startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

//setMonthAndDay(8,31);
