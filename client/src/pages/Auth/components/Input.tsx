const Input:React.FC = ({label,type,name,placeholder,onChangeHandler,value}) =>{
    return(
         <div>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                <input
                  id={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={onChangeHandler}
                  value={value}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
                />
              </div>
    )
}

export default Input;