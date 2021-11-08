function arrFilter(data, frame, value) {
  //筛选数据
  return (arr = data.filter(function (item) {
    return item.frame == value;
  }));
}

//数组去重
// let obj = {}
// let data = getGoodsData.reduce((a, b) => {
//     obj[b.goods_id] ? "" : obj[b.goods_id] = true && a.push(b)
//     return a
// }, [])
