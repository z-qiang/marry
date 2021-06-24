// pages/video/video.js
Page({
  // 发送弹幕
  videoContext:null,
  inputValue:'',
  onReady:function(){
    this.videoContext = wx.createVideoContext('myVideo');
  },
  bindInputBlur:function(e){
    this.inputValue = e.detail.value;
  },
  bindSendDanmu:function(e){
    this.videoContext.sendDanmu({    //sendDanmu方法发送弹幕
      text:this.inputValue,
      color:"#f90"
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    src:'http://localhost:3000/期待爱.mp4',
    danmuList:[
      {text:'第1s出现的弹幕',color:'#ff0000',time:1},
      {text:'第2s出现的弹幕',color:'#ff0000',time:3},
    ],
    movieList:[
      {create_time:'2018-7-25 19:55:54',title:'交换余生',src:'http://localhost:3000/林俊杰-交换余生.mp4'},
      {create_time:'2018-7-25 22:55:54',title:'丹宁执着',src:'http://localhost:3000/丹宁执着.mp4'},
      {create_time:'2018-7-25 06:55:54',title:'起风了',src:'http://localhost:3000/起风了.mp4'}
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})