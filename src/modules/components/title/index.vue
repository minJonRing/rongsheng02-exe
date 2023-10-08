<template>
	<div class="title">
		<div class="icon">
			<div class="transform">
				<div class="b"></div>
				<div class="s s1"></div>
				<div class="s s2"></div>
				<div class="s s3"></div>
				<div class="s s4"></div>
			</div>
		</div>
		<div class="label">
			<div class="cn">{{ cn }}</div>
			<div class="en">{{ en }}</div>
		</div>
	</div>
</template>
  
<script>
export default {
	name: 'Title',
	props: {
		cn: {
			type: String,
			default: '中文'
		},
		en: {
			type: String,
			default: 'endlish'
		}
	}
}
</script>
  
<style lang="scss" scoped>
.title {
	display: flex;
	align-items: center;
	justify-content: center;

	.icon {
		width: 100px;
		height: 100px;

		.transform {
			position: relative;
			width: 100%;
			height: 100%;
			transform-origin: center center;
			transform: rotate(45deg);

			&::before {
				content: "";
				position: absolute;
				top: 25px;
				left: 25px;
				width: 50px;
				height: 50px;
				border: 5px rgba(193, 46, 26, .3) solid;
			}

			&::after {
				content: "";
				position: absolute;
				top: 32px;
				left: 32px;
				width: 36px;
				height: 36px;
				background-color: rgba(193, 46, 26, .3);
			}

			.s {
				position: absolute;
				width: 34px;
				height: 34px;
				background-color: rgba(193, 46, 26, .2);

				&.s1 {
					top: 14px;
					left: 14px;
				}

				&.s2 {
					top: 14px;
					left: 52px;
				}

				&.s3 {
					top: 52px;
					left: 52px;
				}

				&.s4 {
					top: 52px;
					left: 14px;
				}
			}
		}
	}

	.label {
		position: relative;
		margin-left: 10px;
		transform: matrix(1, 0, 0, 1, 0, -2);

		.cn {
			font-size: 48px;
			color: #C12E1A;
			line-height: 1.3;
			font-weight: bold;
			letter-spacing: 2px;
		}

		.en {
			position: absolute;
			width: 100%;
			text-align: center;
			color: #C12E1A;
			font-size: 13px;

		}
	}
}
</style>