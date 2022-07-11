<template>
	<view class="content">
		<image class="top-image" src="../../static/峰会@2x.png" mode=""></image>
		<view class="lap"></view>
		<view class="flex-col" style="margin-top: 20px;">
			<view class="">7.14 9:00 <text class="c-dad7">AM</text> - 7.14 5:00<text class="c-dad7">PM</text></view>
			<view class="" style="margin-top:5px">新加坡-滨海湾金沙会展中心</view>
		</view>
		<view class="flex-col info-name">
			<view class="">Commemorative</view>
			<view class="">NFT</view>
		</view>
		<view class="power">
			Powered by
		</view>
		<image class="meta" src="../../static/mate.png" mode=""></image>
		<view class="flex-col">
			<view class="">
				Web3.0 Decentralized
			</view>
			<view class="">
				Social Network Protocol
			</view>
		</view>
		<view class="btn" @click="handleStart">
			Start creating my NFT
		</view>
		<view class="ok" style="">
			Join our Community to enroll in Beta Test NOW !!!
		</view>
		<uni-link style="color:#29DAD7;font-size:18px;margin-top: 20rpx;" href="http://discord.gg/4smYK9yeHs" text="">discord.gg/4smYK9yeHs</uni-link>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			handleStart() {
				uni.navigateTo({
					url: '/pages/create/index'
				})
			}
		}
	}
</script>

<style>
	.content {
		padding: 30rpx 60rpx 80rpx 60rpx;
		box-sizing: border-box;
		width: 100vw;
		min-height: 100vh;
		background: url(../../static/background.png);
		background-size: 100% 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		color: #ffffff;
		font-size: 24rpx;
	}

	.top-image {
		margin-top: 80rpx;
		height: 236rpx;
		width: 480rpx;
	}

	.lap {
		width: 56rpx;
		height: 2rpx;
		background: #FFFFFF;
		margin-top: 22rpx;
	}

	.c-dad7 {
		color: #29DAD7
	}

	.flex-col {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.ok {
		width: 200px;
		text-align: center;
		margin-top: 20px;
	}

	.info-name {
		font-size: 56rpx;
		margin-top: 80rpx;
	}

	.power {
		font-size: 29rpx;
		color: rgba(182, 175, 237, 0.5);
		margin-top: 60rpx;
	}

	.meta {
		width: 380rpx;
		height: 120rpx;
		margin-top: 20rpx;
	}

	.btn {
		background-color: #29DAD7;
		width: 470rpx;
		height: 88rpx;
		border-radius: 50rpx;
		line-height: 88rpx;
		font-size: 36rpx;
		color: #000000;
		text-align: center;
		margin-top: 60rpx;
	}

	.qr-box {
		border: 2rpx solid #575BFE;
		width: 205rpx;
		height: 205rpx;
		justify-content: center;
		margin-top: 40rpx;
		border-radius: 20rpx;
	}

	.qr {
		width: 156rpx;
		height: 156rpx;
	}

	.download {
		font-size: 28rpx;
		color: #FFFFFF;
		margin-top: 40rpx;
	}

	.here {
		font-size: 36rpx;
		color: #29DAD7;
		margin-top: 20rpx;
		margin-left: 10rpx;
		border-bottom: 2rpx solid #29DAD7;
	}
</style>
