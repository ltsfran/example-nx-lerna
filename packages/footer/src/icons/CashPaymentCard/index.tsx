import React, { forwardRef } from 'react';

export interface Props {
  width?: number;
  height?: number;
  viewBox?: string;
}

export const CashPaymentCard = forwardRef<SVGSVGElement, Props>(({
  width = '100',
  height = '40',
  viewBox = '0 0 100 40',
  ...nextProps
}, ref) => (
  <svg ref={ref} width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" {...nextProps}>
    <path d="M99.9203 37.8571C99.9203 39.0306 98.4064 40 96.5737 40H3.34661C1.51394 40 0 39.0306 0 37.8571V2.14286C0 0.918367 1.51394 0 3.34661 0H96.6534C98.4861 0 100 0.969388 100 2.14286V37.8571H99.9203Z" fill="#F9F9F9"/>
    <path d="M38.6977 18.298C38.6977 18.44 38.6977 18.5819 38.6622 18.6528L38.6267 18.7593C38.4848 19.3624 38.2719 19.8591 37.9526 20.2139C37.6333 20.5687 37.243 20.8171 36.8172 20.959C36.3915 21.1009 35.8593 21.1719 35.2916 21.1719C35.2207 21.1719 35.1497 21.1719 35.0433 21.1719C34.9368 21.1719 34.8659 21.1719 34.7949 21.1719C34.7239 21.1719 34.653 21.1719 34.5465 21.1719C34.4756 21.1719 34.4046 21.1719 34.3692 21.1719L33.9434 23.7264C33.9434 23.7974 33.9079 23.8329 33.8724 23.8683C33.837 23.9038 33.766 23.9393 33.7305 23.9393H32.7016C32.6661 23.9393 32.6307 23.9393 32.5952 23.9038C32.5597 23.8683 32.5597 23.8329 32.5597 23.7974V23.7619L33.8015 16.7724C33.837 16.666 33.8724 16.595 33.9079 16.5595C33.9789 16.5241 34.0498 16.4886 34.1563 16.4531C34.7239 16.3467 35.3981 16.3112 36.1786 16.3112C36.9946 16.3112 37.6333 16.4531 38.059 16.7724C38.5203 17.0917 38.7331 17.553 38.7331 18.1206V18.298H38.6977ZM37.314 18.298C37.314 17.9787 37.2075 17.7658 36.9946 17.6594C36.7818 17.5175 36.427 17.482 35.9657 17.482C35.8238 17.482 35.6819 17.482 35.469 17.482C35.2561 17.482 35.1142 17.5175 35.0433 17.5175L34.6175 19.9301C34.9368 19.9656 35.2561 19.9656 35.54 19.9656C36.0722 19.9656 36.4624 19.8591 36.7463 19.6463C37.0301 19.4334 37.2075 19.1496 37.2785 18.7238L37.314 18.6174C37.2785 18.5464 37.314 18.4045 37.314 18.298Z" fill="black"/>
    <path d="M41.0394 19.2556C40.7555 19.2556 40.5072 19.2911 40.2588 19.3266C40.0105 19.3621 39.7266 19.433 39.4428 19.504C39.3718 19.5395 39.3009 19.5395 39.2654 19.5395C39.1944 19.5395 39.159 19.504 39.159 19.433C39.159 19.3976 39.159 19.3266 39.1944 19.1847L39.3009 18.688C39.3009 18.6525 39.3009 18.617 39.3364 18.5815C39.3364 18.546 39.3718 18.5106 39.4073 18.5106C39.4428 18.4751 39.4783 18.4751 39.5492 18.4396C40.1524 18.2267 40.7555 18.1558 41.3587 18.1558C41.9264 18.1558 42.3876 18.2977 42.6714 18.546C42.9908 18.7944 43.1327 19.1492 43.1327 19.6459C43.1327 19.7878 43.1327 19.9652 43.0972 20.1072L42.5295 23.5487C42.5295 23.6196 42.494 23.6551 42.494 23.6906C42.4586 23.7261 42.4231 23.7261 42.3521 23.7615C42.1038 23.8325 41.8909 23.868 41.749 23.9035C41.6071 23.9389 41.4297 23.9744 41.1813 23.9744C40.9329 23.9744 40.6846 24.0099 40.4007 24.0099C38.9816 24.0099 38.272 23.5487 38.272 22.5907C38.272 22.4488 38.272 22.3069 38.3075 22.1295C38.3429 21.8456 38.4494 21.5973 38.5558 21.3844C38.6622 21.1715 38.8396 21.0296 39.017 20.8877C39.1944 20.7458 39.4783 20.6748 39.7976 20.6039C40.1169 20.5329 40.4717 20.4974 40.9329 20.4974H41.7135C41.7845 20.1072 41.8199 19.8588 41.8199 19.7878C41.8199 19.575 41.749 19.433 41.6425 19.3621C41.5361 19.2911 41.3232 19.2556 41.0394 19.2556ZM41.2877 22.91L41.5716 21.4199H40.8265C40.4362 21.4199 40.1524 21.4909 39.975 21.5973C39.7976 21.7037 39.7266 21.9166 39.6557 22.2004C39.6557 22.2714 39.6202 22.3778 39.6202 22.4488C39.6202 22.6617 39.6912 22.8036 39.8331 22.8746C39.975 22.9455 40.2233 23.0165 40.5427 23.0165C40.862 23.0165 41.1103 22.981 41.2877 22.91Z" fill="black"/>
    <path d="M45.5098 25.9613C45.1905 25.9613 44.8357 25.9258 44.4809 25.8548C44.1261 25.7839 43.8068 25.6774 43.5939 25.571C43.4875 25.5 43.4165 25.4291 43.4165 25.3581V25.2872L43.4875 24.8259C43.5229 24.7195 43.5584 24.6485 43.6294 24.6485C43.6649 24.6485 43.7003 24.6485 43.7358 24.6485C43.9842 24.7195 44.268 24.755 44.6228 24.8259C44.9421 24.8614 45.2614 24.8969 45.5808 24.8969C45.971 24.8969 46.2549 24.8259 46.3968 24.684C46.5742 24.5421 46.6806 24.3292 46.7161 23.9744V23.9035C46.3613 23.9744 46.042 24.0099 45.7936 24.0099C45.155 24.0099 44.6583 23.868 44.268 23.5487C43.8777 23.2294 43.7003 22.7681 43.7003 22.094C43.7003 21.8811 43.7003 21.6683 43.7358 21.4909L43.8777 20.7103C43.9842 20.0717 44.1616 19.575 44.4099 19.2202C44.6583 18.8654 44.9776 18.5815 45.3324 18.4041C45.6872 18.2267 46.1839 18.1558 46.7516 18.1558C47.0709 18.1558 47.4257 18.1913 47.7805 18.2267C48.1353 18.2622 48.4546 18.3332 48.7384 18.4041C48.8094 18.4396 48.8804 18.4396 48.9158 18.4751C48.9513 18.5106 48.9868 18.546 48.9868 18.617V18.6525V18.688L48.0643 23.9389C47.9579 24.4357 47.8515 24.8614 47.6386 25.1453C47.4257 25.4291 47.1773 25.642 46.858 25.7839C46.5032 25.9258 46.042 25.9613 45.5098 25.9613ZM47.5321 19.3266C47.4257 19.2911 47.2838 19.2911 47.1064 19.2556C46.929 19.2556 46.7516 19.2202 46.5742 19.2202C46.2903 19.2202 46.0775 19.2556 45.9001 19.3621C45.7227 19.4685 45.5808 19.6104 45.4743 19.8233C45.3679 20.0362 45.2969 20.32 45.226 20.6393L45.084 21.4199C45.0486 21.7037 45.0131 21.9166 45.0131 22.0585C45.0131 22.3424 45.084 22.5552 45.226 22.6617C45.3679 22.7681 45.5808 22.8746 45.9356 22.8746C46.1839 22.8746 46.5387 22.8391 46.929 22.8036L47.5321 19.3266Z" fill="black"/>
    <path d="M54.3443 20.1427C54.3443 20.3201 54.3443 20.4975 54.3088 20.6749L54.1669 21.4909C53.8475 23.1939 52.8896 24.0099 51.293 24.0099C50.8673 24.0099 50.477 23.9035 50.1931 23.7261C49.8738 23.5487 49.6609 23.3003 49.519 22.981C49.3771 22.6617 49.3062 22.3424 49.3062 21.9521C49.3062 21.7747 49.3062 21.5973 49.3416 21.4554L49.4836 20.6394C49.6255 19.7879 49.9448 19.1492 50.4415 18.759C50.9382 18.3332 51.5768 18.1203 52.3574 18.1203C52.8186 18.1203 53.2089 18.2268 53.4927 18.4042C53.7766 18.5816 54.0249 18.8299 54.1669 19.1138C54.2733 19.4331 54.3443 19.7524 54.3443 20.1427ZM52.996 20.2136C52.996 19.8943 52.9251 19.6814 52.7831 19.504C52.6412 19.3621 52.4284 19.2557 52.109 19.2557C51.7897 19.2557 51.5059 19.3621 51.2575 19.575C51.0092 19.7879 50.8673 20.1427 50.7608 20.6394L50.6189 21.4554C50.5834 21.5973 50.5834 21.7392 50.5834 21.9166C50.5834 22.5198 50.8673 22.8391 51.4704 22.8391C52.18 22.8391 52.6412 22.3779 52.7831 21.4554L52.9251 20.6394C52.996 20.5329 52.996 20.391 52.996 20.2136Z" fill="black"/>
    <path d="M60.4112 16.5945C60.4112 16.63 60.4112 16.6655 60.4112 16.6655L60.3048 17.3041C60.3048 17.3396 60.2693 17.4105 60.1983 17.446C60.1628 17.4815 60.0919 17.517 60.0564 17.517H57.9631C57.6793 17.517 57.4309 17.5879 57.3245 17.6944C57.1826 17.8008 57.0761 18.0492 57.0406 18.3685L56.8632 19.4684H59.6306C59.6661 19.4684 59.7371 19.5038 59.7371 19.5393C59.7371 19.5748 59.7726 19.6103 59.7726 19.6458V19.6812L59.6306 20.4263C59.6306 20.4973 59.5952 20.5327 59.5242 20.5682C59.4887 20.6037 59.4178 20.6392 59.3823 20.6392H56.6149L56.402 21.9519C56.3665 22.0938 56.3665 22.2003 56.3665 22.2712C56.3665 22.4841 56.402 22.626 56.5084 22.697C56.6149 22.768 56.7923 22.8034 57.0406 22.8034H59.1339C59.2404 22.8034 59.2758 22.8389 59.2758 22.9454V22.9808L59.1694 23.6195C59.1694 23.7259 59.063 23.7969 58.9211 23.8323C58.8501 23.8323 58.7437 23.8678 58.6372 23.8678C58.5308 23.9033 58.3534 23.9033 58.1405 23.9033C57.9276 23.9033 57.7502 23.9388 57.6083 23.9388C57.4664 23.9388 57.2535 23.9388 56.9342 23.9388C56.331 23.9388 55.8343 23.7969 55.4795 23.5485C55.1247 23.3001 54.9119 22.8744 54.9119 22.3422C54.9119 22.1648 54.9119 22.0229 54.9473 21.881L55.5505 18.333C55.6215 17.8718 55.7634 17.517 55.9053 17.2331C56.0827 16.9493 56.2601 16.7364 56.473 16.5945C56.6858 16.4526 56.9697 16.3462 57.218 16.3107C57.4664 16.2752 57.8212 16.2397 58.2115 16.2397C58.7437 16.2397 59.1339 16.2397 59.3823 16.2752C59.6306 16.3107 59.879 16.3462 60.1274 16.3816C60.3402 16.4526 60.4112 16.5235 60.4112 16.5945Z" fill="black"/>
    <path d="M64.5267 16.3116L64.4202 16.9148C64.4202 16.9503 64.3848 17.0212 64.3493 17.0567C64.3138 17.0922 64.2783 17.0922 64.2428 17.0922H63.7816C63.6042 17.0922 63.4623 17.0922 63.3913 17.1277C63.3204 17.1631 63.2494 17.2341 63.1785 17.3051C63.143 17.376 63.072 17.5179 63.072 17.6953L62.9656 18.1921H63.9235C64.03 18.1921 64.1009 18.263 64.1009 18.3694V18.4049L63.9945 19.0081C63.9945 19.079 63.959 19.1145 63.9235 19.15C63.8881 19.1855 63.8171 19.221 63.7816 19.221H62.7882L61.9367 24.0107C61.8657 24.4719 61.7238 24.8267 61.5464 25.0396C61.369 25.288 61.1561 25.4299 60.8723 25.5008C60.6239 25.5718 60.2691 25.6073 59.8789 25.6073C59.7369 25.6073 59.5241 25.5718 59.2757 25.5363C59.2402 25.5363 59.2048 25.5008 59.1693 25.5008C59.1338 25.4654 59.1338 25.4299 59.1338 25.3944V25.3589L59.2402 24.7558C59.2757 24.6493 59.3112 24.5784 59.4176 24.5784H59.8789C60.1272 24.5784 60.3046 24.5429 60.3756 24.4719C60.482 24.401 60.553 24.2236 60.5885 23.9752L61.44 19.1855L60.553 19.0436C60.4465 19.0081 60.4111 18.9726 60.4111 18.8662V18.8307L60.482 18.3694C60.482 18.2985 60.5175 18.263 60.553 18.2275C60.5885 18.1921 60.6594 18.1566 60.6949 18.1566H61.5819L61.6883 17.6599C61.7593 17.3051 61.8302 17.0212 61.9722 16.8083C62.0786 16.5955 62.2205 16.4181 62.3979 16.3116C62.5753 16.2052 62.7527 16.1342 62.9656 16.0988C63.1785 16.0633 63.4268 16.0278 63.7461 16.0278C63.8881 16.0278 64.1009 16.0633 64.3493 16.0988C64.3848 16.0988 64.4202 16.1342 64.4557 16.1342C64.4912 16.2407 64.5267 16.2762 64.5267 16.3116Z" fill="black"/>
    <path d="M65.875 24.0099C65.5557 24.0099 65.2364 23.9745 64.988 23.868C64.7396 23.7971 64.4913 23.6551 64.3139 23.4777C64.1365 23.3003 63.9591 23.0875 63.8881 22.8391C63.7817 22.5908 63.7462 22.3069 63.7462 21.9521C63.7462 21.7392 63.7462 21.5264 63.7817 21.349L63.8881 20.7103C64.0655 19.7879 64.3849 19.1138 64.8461 18.7235C65.3428 18.3332 65.9814 18.1203 66.762 18.1203C67.4006 18.1203 67.8973 18.2977 68.2521 18.688C68.6069 19.0783 68.7488 19.575 68.7488 20.1781C68.7488 20.3555 68.7488 20.5329 68.7134 20.7458L68.6424 21.2425C68.6069 21.4199 68.536 21.4909 68.394 21.4909H65.059C65.0235 21.7392 65.0235 21.8457 65.0235 21.9166C65.0235 22.2005 65.0944 22.4488 65.2718 22.5908C65.4492 22.7327 65.7331 22.8391 66.1588 22.8391C66.691 22.8391 67.2587 22.7327 67.9683 22.5198C68.0038 22.5198 68.0038 22.5198 68.0747 22.5198C68.1457 22.5198 68.1812 22.5553 68.1812 22.6262C68.1812 22.6617 68.1812 22.6617 68.1812 22.6972L68.0747 23.3358C68.0747 23.4068 68.0392 23.4423 68.0038 23.4777C67.9683 23.5132 67.8973 23.5487 67.7909 23.5842C67.6135 23.6551 67.4361 23.7261 67.2587 23.7616C67.0813 23.7971 66.8684 23.868 66.6201 23.9035C66.3362 24.0099 66.0879 24.0099 65.875 24.0099ZM67.4361 20.2136C67.4361 19.9298 67.3651 19.6814 67.2232 19.5395C67.0813 19.3976 66.8684 19.2912 66.5846 19.2912C65.875 19.2912 65.4138 19.7169 65.2718 20.5684H67.4361C67.4361 20.4265 67.4361 20.2846 67.4361 20.2136Z" fill="black"/>
    <path d="M71.1259 24.0099C70.842 24.0099 70.5937 23.9745 70.3453 23.868C70.097 23.7616 69.9196 23.6551 69.7422 23.4777C69.5648 23.3003 69.4228 23.0875 69.3519 22.8391C69.2454 22.5908 69.21 22.3424 69.21 22.0586C69.21 21.9166 69.21 21.7392 69.2454 21.5264L69.4228 20.5684C69.5293 19.9653 69.7422 19.4686 69.9905 19.1138C70.2389 18.759 70.5582 18.4751 70.913 18.3332C71.2678 18.1913 71.6935 18.1203 72.1193 18.1203C72.545 18.1203 73.0063 18.2268 73.432 18.4396C73.5385 18.5106 73.6094 18.5816 73.6094 18.6525V18.688C73.6094 18.688 73.6094 18.688 73.6094 18.7235L73.503 19.3266C73.503 19.4331 73.432 19.504 73.3256 19.504C73.2901 19.504 73.2546 19.504 73.2546 19.504C72.7579 19.3621 72.3676 19.2912 72.0838 19.2912C71.729 19.2912 71.4452 19.3976 71.2323 19.575C71.0194 19.7879 70.8775 20.1072 70.7711 20.6039L70.5937 21.5618C70.5582 21.7747 70.5582 21.9521 70.5582 22.0586C70.5582 22.3424 70.6291 22.5553 70.7711 22.6972C70.913 22.8391 71.1259 22.9101 71.4452 22.9101C71.729 22.9101 72.1548 22.8391 72.687 22.6617C72.7224 22.6617 72.7224 22.6617 72.7934 22.6617C72.8644 22.6617 72.8998 22.6972 72.8998 22.7681C72.8998 22.8036 72.8998 22.8036 72.8998 22.8391L72.7934 23.5132C72.7934 23.5842 72.7579 23.6197 72.7224 23.6551C72.687 23.6906 72.616 23.7261 72.545 23.7616C72.3676 23.8325 72.1902 23.9035 71.9419 23.939C71.6226 24.0099 71.3742 24.0099 71.1259 24.0099Z" fill="black"/>
    <path d="M77.5123 18.3686L77.4059 19.0072C77.4059 19.0427 77.3704 19.1137 77.2995 19.1492C77.264 19.1846 77.193 19.2201 77.1575 19.2201H76.2351L75.6674 22.4133C75.6319 22.5907 75.6319 22.6971 75.6319 22.7681C75.6319 22.839 75.6674 22.91 75.7029 22.9455C75.7384 22.981 75.8448 22.981 75.9867 22.981H76.5189C76.6254 22.981 76.6963 23.0164 76.6963 23.0874V23.1229L76.5899 23.7615C76.5544 23.8679 76.4834 23.9389 76.377 23.9389C76.0932 23.9744 75.8448 24.0099 75.6674 24.0099C75.2062 24.0099 74.8514 23.9389 74.6385 23.7615C74.4256 23.5841 74.2837 23.3003 74.2837 22.91C74.2837 22.7681 74.2837 22.6262 74.3192 22.4133L74.8869 19.2201L73.9644 19.0782C73.8579 19.0782 73.787 19.0072 73.787 18.9008V18.8653L73.8579 18.4041C73.8579 18.3331 73.8934 18.2977 73.9289 18.2622C73.9644 18.2267 74.0353 18.1912 74.0708 18.1912H75.0288L75.1707 17.3397C75.2062 17.2333 75.2771 17.1623 75.419 17.1268L76.377 16.9494H76.4125C76.5189 16.9494 76.5544 16.9849 76.5544 17.0559V17.1623L76.377 18.2267H77.2995C77.3349 18.2267 77.4059 18.2267 77.4059 18.2622C77.5123 18.2977 77.5123 18.3331 77.5123 18.3686Z" fill="black"/>
    <path d="M79.4637 18.3686L78.5413 23.726C78.5413 23.797 78.5058 23.8324 78.4348 23.8679C78.3993 23.9034 78.3284 23.9389 78.2929 23.9389H77.3704C77.335 23.9389 77.2995 23.9389 77.264 23.9034C77.2285 23.8679 77.2285 23.8324 77.2285 23.797V23.7615L78.151 18.4396C78.151 18.3686 78.1865 18.3331 78.2219 18.2976C78.2574 18.2622 78.3284 18.2267 78.3639 18.2267H79.2863C79.4282 18.1912 79.4637 18.2622 79.4637 18.3686ZM79.8895 16.3108L79.7121 17.2333C79.7121 17.3042 79.6766 17.3397 79.6411 17.3752C79.6056 17.4106 79.5347 17.4461 79.4992 17.4461H78.5058C78.4703 17.4461 78.4348 17.4461 78.3639 17.4106C78.3284 17.3752 78.2929 17.3397 78.2929 17.3042V17.2687L78.4703 16.3817C78.4703 16.3463 78.5058 16.2753 78.5767 16.2398C78.6122 16.2043 78.6832 16.1689 78.7187 16.1689H79.7121C79.8185 16.1334 79.8895 16.2043 79.8895 16.3108Z" fill="black"/>
    <path d="M85.1758 18.3338C85.1758 18.3692 85.1758 18.4047 85.1404 18.4402L83.0471 23.0525C82.9051 23.4073 82.6923 23.6557 82.4439 23.7976C82.1955 23.9395 81.9117 24.0105 81.6279 24.0105C80.9538 24.0105 80.599 23.6912 80.528 23.0525L80.0668 18.4402V18.4047C80.0668 18.3338 80.1023 18.2983 80.1377 18.2628C80.1732 18.2273 80.2087 18.1918 80.2797 18.1918H81.2731C81.3795 18.1918 81.4505 18.2628 81.4505 18.4047L81.6634 22.6623C81.6634 22.8397 81.7343 22.9106 81.8053 22.9106C81.8762 22.9106 81.9827 22.8397 82.0536 22.6623L83.7921 18.4047C83.8276 18.2628 83.934 18.1918 84.0405 18.1918H85.1049C85.1403 18.1918 85.1758 18.2628 85.1758 18.3338Z" fill="black"/>
    <path d="M89.8237 20.1427C89.8237 20.3201 89.8237 20.4975 89.7883 20.6749L89.6463 21.4909C89.327 23.1939 88.3691 24.0099 86.7725 24.0099C86.3467 24.0099 85.9565 23.9035 85.6726 23.7261C85.3533 23.5487 85.1404 23.3003 84.9985 22.981C84.8566 22.6617 84.7856 22.3424 84.7856 21.9521C84.7856 21.7747 84.7856 21.5973 84.8211 21.4554L84.963 20.6394C85.105 19.7879 85.4243 19.1492 85.921 18.759C86.4177 18.3332 87.0563 18.1203 87.8369 18.1203C88.2981 18.1203 88.6884 18.2268 88.9722 18.4042C89.2561 18.5816 89.5044 18.8299 89.6463 19.1138C89.7528 19.4331 89.8237 19.7524 89.8237 20.1427ZM88.4755 20.2136C88.4755 19.8943 88.4046 19.6814 88.2626 19.504C88.1207 19.3621 87.9078 19.2557 87.5885 19.2557C87.2692 19.2557 86.9854 19.3621 86.737 19.575C86.4887 19.7879 86.3467 20.1427 86.2403 20.6394L86.0984 21.4554C86.0629 21.5973 86.0629 21.7392 86.0629 21.9166C86.0629 22.5198 86.3467 22.8391 86.9499 22.8391C87.6595 22.8391 88.1207 22.3779 88.2626 21.4554L88.4046 20.6394C88.44 20.5329 88.4755 20.391 88.4755 20.2136Z" fill="black"/>
    <path d="M21.8092 12.621C18.5451 10.8116 15.6003 9.78265 13.9328 9.78265C13.4715 9.78265 13.0813 9.85361 12.8329 10.031C11.4137 10.9535 10.5267 16.5238 10.8461 22.4489C11.1299 27.1676 12.0524 29.6867 12.8329 30.077C14.2521 30.7511 19.2902 28.8352 24.2573 25.713C28.5149 23.0875 30.3953 20.9942 30.3953 20.1427C30.3953 18.5461 26.6345 15.2465 21.8092 12.621Z" fill="#FFCC00"/>
    <path d="M22.1996 11.912C20.4611 10.9895 14.6069 7.97376 12.4072 9.35746C10.2075 10.7766 9.81719 17.979 10.0655 22.5204C10.2075 24.7201 10.7042 29.9356 12.5136 30.7871C12.7975 30.929 13.1877 31 13.6135 31C16.2035 31 20.9223 28.7648 24.7186 26.3877C26.67 25.1814 31.1759 22.1301 31.1759 20.1433C31.1759 17.8726 26.5281 14.2891 22.1996 11.912ZM24.2929 25.7135C19.2902 28.8357 14.2876 30.7871 12.8684 30.0775C12.0879 29.6873 11.1299 27.2037 10.8816 22.4494C10.5268 16.5243 11.4138 10.954 12.833 10.0316C13.0813 9.85418 13.4716 9.78322 13.9328 9.78322C15.6004 9.78322 18.5452 10.8121 21.8093 12.6216C26.6345 15.2471 30.3953 18.5467 30.3953 20.1433C30.3953 20.9948 28.5149 23.0881 24.2929 25.7135Z" fill="white"/>
    <path d="M23.193 16.0268C22.4124 15.5301 21.2771 15.2817 19.8579 15.2817C18.5097 15.2817 17.3034 15.3527 16.2744 15.4946C16.097 15.5301 15.9196 15.5656 15.8132 15.6365C15.7068 15.7075 15.6358 15.8139 15.6003 15.9559L15.3165 17.3396H19.2192L19.4321 16.0623L21.9867 19.149L18.4387 22.2003L18.6516 20.7811H14.6779L13.4716 26.6707V26.7416C13.4716 26.8126 13.507 26.8836 13.5425 26.919C13.578 26.9545 13.649 26.99 13.7554 26.99H15.5649C15.6713 26.99 15.7422 26.9545 15.8132 26.919C15.8842 26.8481 15.9551 26.7771 15.9551 26.7062L16.7712 23.1582C16.8421 23.1582 16.9486 23.1582 17.055 23.1582C17.1969 23.1582 17.3388 23.1582 17.4807 23.1937C17.6227 23.1937 17.7646 23.1937 17.942 23.2292C18.1194 23.2292 18.2613 23.2292 18.3677 23.2292C19.3612 23.2292 20.2482 23.0872 21.0287 22.9098C23.4768 22.4131 24.3638 19.965 24.3638 18.0846C24.3993 17.1976 24.009 16.488 23.193 16.0268Z" fill="black"/>
  </svg>

));

CashPaymentCard.displayName = 'CashPaymentCard';

export default CashPaymentCard;