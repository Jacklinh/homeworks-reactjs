import styles from "./ProductAttrs.module.css"

function ProductAttrs({currentName}:{currentName: string}){
    return (
        <div className={styles.product_attrs}>
            <div className={styles.attr_block}>
                <ProductAttrItem className={styles.attr_name} label="Màu Sắc" />
                <ProductAttrItem className={currentName !== ' ' ? `${styles.attr_item} ${styles[currentName]}` : styles.attr_item} label="Đen" />
                <ProductAttrItem className={styles.attr_item} label="Hồng" />
                <ProductAttrItem className={styles.attr_item} label="Xanh" />
            </div>
        </div>
    )
}
function ProductAttrItem(props:{className: string , label: string}){
    return (
        <>
            <span className={props.className}>{props.label}</span>
        </>
    )
}

export default ProductAttrs