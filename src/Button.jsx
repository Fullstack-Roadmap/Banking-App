import PropTypes from 'prop-types';

const Button = ({ text, textColor, buttonColor}) => {
  return (
    <button
      className={`
        px-[0.8rem] py-[0.4rem] rounded-md z text-[0.35rem] md:text-[0.45rem] border border-[green]
      `}
      style={{ 
        backgroundColor: buttonColor,
        color: textColor,
        borderRadius: '2rem',
       }}
    >
      {text}
    </button>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  buttonColor: PropTypes.string
}

Button.defaultProps = {
  textColor: 'white',
  buttonColor: 'green',
};

export default Button