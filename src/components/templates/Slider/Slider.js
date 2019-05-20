import React from 'react'
import { Fade } from 'react-slideshow-image'

import Slide1 from 'assets/images/sliders/1.jpg'
import Slide2 from 'assets/images/sliders/2.jpg'
import Slide3 from 'assets/images/sliders/3.jpg'


const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: true
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Slide1})`}}>
              <span>
              مؤسسة  بالبيد التجارية  من اكبر تجار الجملة والتجزئة للمواد الغذائية <br /> في منطقة الشرق الاوسط وشرق اسيا وكذلك افريقيا
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Slide2})`}}>
              <span>
                فريق عمل مؤهل ومتخصص لعمل الخطط الاستراتيجة  <br />يدرس احتياجات و متطلبات الاسواق المحلية والدولية
              </span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${Slide3})`}}>
              <span>
                لخمسين عاما من الخبرة في استيراد وتصدير وتوزيع وتجارة الجملة <br />في المواد الغذائية والمجمدات والكماليات ومواد النظافة والبهارات والهيل والمكسرات داخل وخارج المملكة
              </span>
            </div>
          </div>
        </Fade>
      </div>
    )
}

export default Slideshow
