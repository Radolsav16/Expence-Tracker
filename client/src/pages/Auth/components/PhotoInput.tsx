import { UserCircleIcon } from '@heroicons/react/24/solid'


const PhotoInput:React.FC = () => {
    return(
        <>
         <div className="mb-8 flex flex-col items-center">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-900 mb-2">
                Photo
              </label>
              <div className="flex items-center gap-x-3">
                <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                <button
                  type="button"
                  className="rounded-md bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div>
        </>
    )
}

export default PhotoInput;