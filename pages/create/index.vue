<template>
	<view class="create">
		<view class="nav">
			Create Commemorative NFT
			<image class="back" @click="handleBack" src="../../static/back.png" mode=""></image>
		</view>
		<view class="main">
			<view class="title">
				<view class="">
					Upload picture of your NFT
				</view>
				<image class="icon" src="../../static/*.png" mode=""></image>
			</view>
			<u-upload @afterRead="afterRead">
				<view class="upload-box" :style="`width:${uploadWidth}px`">
					<image src="../../static/plus.png" mode="widthFix" style="width: 30px;height: 30px;"></image>
				</view>
			</u-upload>
			<view class="title">
				<view class="">
					NAME
				</view>
				<image class="icon" src="../../static/*.png" mode=""></image>
			</view>
			<input class="creat-input" placeholder="NAME" type="text" v-model="name" />
			<view class="title">
				<view class="">
					EMAIL
				</view>
				<image class="icon" src="../../static/*.png" mode=""></image>
			</view>
			<view class="tip">
				For us to work with you on sending your NFT to your wallet
			</view>
			<input class="creat-input" placeholder="EMAIL" type="text" v-model="email" />
			<view class="title">
				<view class="">
					Wallet Address <text class="tip">(optional)</text>
				</view>
			</view>
			<view class="tip">
				For us to work with you on sending your NFT to your wallet
			</view>
			<textarea class="creat-input" style="height: 75px;" v-model="wallet" placeholder="Wallet Address" />
			<view class="btn" @click="handleCreate">
				Create my NFT
			</view>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				title: 'Hello',
				windowWidth: 0,
				name: "",
				email: "",
				photo: "",
				wallet: ""
			}
		},
		onLoad() {
			const {
				windowWidth
			} = uni.getSystemInfoSync()
			this.uploadWidth = windowWidth - 40
			console.log(this.$BASE_URL)
		},
		methods: {
			handleBack() {
				uni.navigateBack({
					delta:1
				})
			},
			afterRead({
				file
			}) {
				uni.uploadFile({
					url: `${this.$BASE_URL}/upload`, // 仅为示例，非真实的接口地址
					filePath: file.url,
					name: 'file',
					success: (res) => {
						const response = res.data
						if (response.success) {
							this.photo = msg
						} else {
							this.$refs.uToast.show({
								message: response.msg
							})
						}
					},
					fail: (err) => {
						this.$refs.uToast.show({
							message: 'picture upload failed'
						})
					}
				})
			},
			handleCreate() {
				let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
				let timestamp = new Date().getTime()
				if (!this.photo) {
					this.$refs.uToast.show({
						message: 'please upload picture'
					})
					return
				}
				if (!this.name) {
					this.$refs.uToast.show({
						message: 'name cannot be empty'
					})
					return
				}
				if (!this.email) {
					this.$refs.uToast.show({
						message: 'email cannot be empty'
					})
					return
				}					
				if(!reg.test(this.email)){
					this.$refs.uToast.show({
						message: 'email error'
					})
					return
				}
				if(timestamp > 1657727999000){
					this.$refs.uToast.show({
						message: 'Disabled after the 13th'
					})
					return
				}
				const data = {
					photo: this.photo,
					name: this.name,
					email: this.email,
					wallet: this.wallet
				}
				axios({
					method: 'post',
					url: `${this.$BASE_URL}/create`,
					data
				}).then(res => {
					const response = res.data
					if (response.success) {
						this.$refs.uToast.show({
							message: 'create NFT successfully '
						})
					} else {
						this.$refs.uToast.show({
							message: 'create NFT failly'
						})
					}
				}).catch(err => {
					this.$refs.uToast.show({
						message: 'create NFT failly'
					})
				})
			}
		}
	}
</script>

<style>
	.create {
		width: 100vw;
		min-height: 100vh;
		background-color: #000000;
		color: #ffffff;
		font-size: 24rpx;
	}

	.main {
		padding: 40rpx;
		box-sizing: border-box;
	}

	.back {
		position: absolute;
		top: 24rpx;
		left: 30rpx;
		width: 40rpx;
		height: 40rpx;
	}

	.nav {
		line-height: 88rpx;
		height: 88rpx;
		font-size: 34rpx;
		font-weight: bold;
		text-align: center;
		position: relative;
		background-color: #111717;
	}

	.btn {
		background-color: #29DAD7;
		width: 100%;
		height: 88rpx;
		border-radius: 50rpx;
		line-height: 88rpx;
		font-size: 36rpx;
		color: #000000;
		text-align: center;
		margin-top: 60rpx;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: baseline;
		font-weight: bold;
		font-size: 32rpx;
		margin-top: 40rpx;
	}

	.icon {
		width: 12rpx;
		height: 12rpx;
		margin-left: 10rpx;
	}

	.tip {
		font-size: 28rpx;
		color: #8E8E92
	}

	.upload-box {
		height: 250px;
		display: flex;
		flex-direction: row;
		justify-content: center !important;
		align-items: center;
		margin-top: 30rpx;
		background-color: #111717;
	}

	.creat-input {
		height: 88rpx;
		border-radius: 24rpx;
		background: #111717;
		font-size: 28rpx;
		width: 100%;
		margin-top: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
	}
</style>
