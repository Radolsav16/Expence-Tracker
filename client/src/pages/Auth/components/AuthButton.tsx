const AuthButton:React.FC = ({label}) => {
    return(
        <>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                {label}
              </button>
        </>
    )
}

export default AuthButton;