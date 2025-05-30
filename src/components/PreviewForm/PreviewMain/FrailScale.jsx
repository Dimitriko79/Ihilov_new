import PropTypes from "prop-types";
import {checkEnglishWords} from "../../../helpers/checkEnglishWords.js";

const FrailScale = ({data, classes}) => {
    const {name_category, children} = data;

    return (
        <div className={`${classes.preview_main_frail_scale}`}>
            <p><strong>{name_category}</strong></p>
            <ul>
                {children.map((item, i) => {
                    return (
                        <li key={i} style={{direction: checkEnglishWords(item.name_category) ? "ltr" : "rtl"}}>
                            <span>{`${item.name_category}: ${item.value}`}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

FrailScale.propTypes = {
    data: PropTypes.shape({
        children: PropTypes.arrayOf(
            PropTypes.shape({
                name_category: PropTypes.string.isRequired,
                value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
            })
        ).isRequired,
        name_category: PropTypes.string.isRequired,
    }).isRequired,
    classes: PropTypes.object.isRequired,
};

export default FrailScale;