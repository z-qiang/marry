// pages/wedding/wedding.js
Page({
  bgm:null,
  music_url:"//music.163.com/outchain/player?type=2&id=1501098099",
  music_coverImgUrl:"/pages/images/故事.jpg",
  onReady:function(){
    this.bgm = wx.getBackgroundAudioManager();
    this.bgm.title = "将故事写成我们",
    this.bgm.epname = "将故事写成我们",
    this.bgm.singer = "JJ Lin",
    this.bgm.coverImgUrl = "/pages/images/故事.jpg";
    this.bgm.onCanplay( ()=> {
      this.bgm.pause();
    });
    this.bgm.src = "//music.163.com/outchain/player?type=2&id=1501098099&auto=1&height=66";
  },
  play:function(e){
    if(this.data.isPlayingMusic){
      this.bgm.pause();
    }else{
      this.bgm.play();
    };
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  },
  // 拨打电话
  callGroom:function(){
    wx.makePhoneCall({phoneNumber:'18720926527'});
  },
  callBride:function(){
    wx.makePhoneCall({phoneNumber:'18720926527'})
  },


  /**
   * 页面的初始数据
   */
  data: {

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