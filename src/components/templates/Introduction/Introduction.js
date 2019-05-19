import React from 'react'
import Brand from 'assets/images/brand.png'

const Introduction = () => (
  <div>
    <img style={style} src={Brand} />
    <p>
      تعتبر مؤسسة محمد سعيد محمد بالبيد التجارية الآن من اكبر تجار الجملة والتجزئة للمواد الغذائية بشكل عام في منطقة الشرق الاوسط وشرق اسيا وكذلك افريقيا وبشكل خاص في المملكة العربية السعودية وهي في المرتبة الثالثة.
    </p>
    <p>
      يتوفر لدى مؤسسة محمد سعيد محمد بالبيد التجارية فريق عمل مؤهل ومتخصص لعمل الخطط الاستراتيجة وهذا الفريق يدرس احتياجات و متطلبات الاسواق المحلية والدولية وبناءا على هذه الاحتياجات توضع الخطط السنوية لتلبية المتطلبات وكذلك التوسع في مجالات مختلفة. كما ان فريق العمل مسئول عن اعداد السياسة العامة التي تحدد المسؤليات والواجبات لكل ادارة في المؤسسة ومن ضمن السياسة العامة خطة التدريب السنوية لمنسوبي مؤسسة محمد سعيد محمد بالبيد التجارية لكل التخصصات ومنها على سبيل المثال صحة البيئة ، إجراءات السلامة ، التسويق ، الدعاية والاعلان.
    </p>
  </div>
)

const style = {
  display: 'inline-block',
  float: 'right',
  borderRadius: '10px',
  overflow: 'hidden',
  marginLeft: '15px',
}

export default Introduction
