export const  appMixin = {
	data () {
},
mounted() {
},
methods:{
/**
	 * 格式化金额
	 * @param {*} val 值
	 * @param {*} beforeSuffix 前缀
	 * @param {*} afterSuffix 后缀
	 */
	APP_formatMoneyFiletr(val, beforeSuffix = '', afterSuffix = '') {
		let str = '-'
		if (!val) {
			str = '0.00'
		} else {
			try {
				var myNumeral = numeral(val)
				str = myNumeral.format('0,0.00')
			} catch (error) {
				throw new Error(val + '不正确')
			}
		}
		if (beforeSuffix) {
			str = beforeSuffix + str
		}
		if (afterSuffix) {
			str = str + afterSuffix
		}

		return str
	},
},


}


export default appMixin