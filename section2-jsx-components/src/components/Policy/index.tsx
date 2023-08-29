import styles from "./Policy.module.css";

function Policy(){
    return (
        <ul className={styles.policy}>
            <PolicyItem src="../public/images/guarantee.svg" alt="guarantee" cntStrong="Bộ sản phẩm gồm:" cnt="Hộp, Sách hướng dẫn, Cáp, Cây lấy sim" />
            <PolicyItem src="../public/images/compensation.svg" alt="compensation" cntStrong="Bảo Hành:" cnt="Chính hãng 12 tháng" />
            <PolicyItem src="../public/images/refund.svg" alt="refund" cntStrong="Đổi trả:" cnt="Hư gì đổi nấy 12 tháng" />
        </ul>
    )
}
type PolicyItemProp = {
    src: string,
    alt: string,
    cntStrong: string,
    cnt: string
}
function PolicyItem({src = '', alt = '', cntStrong = '', cnt = ''}: PolicyItemProp){
    return (
        <>
            <li>
                <img width="20" height="20" src={src} alt={alt} />
                <strong>{cntStrong}</strong> {cnt}
            </li>
        </>
    )
}
export default Policy