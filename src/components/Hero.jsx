import { useContext, useRef } from 'react';
import { HeaderContext } from '../pages/Home';

export function Hero() {
  const searchInputRef = useRef(null);
  const { searchCourses } = useContext(HeaderContext);

  return (
    <div className="bg-red-200">
      <div className="mx-auto flex max-w-main flex-col py-28">
        <h1 className="text-4xl font-semibold">Search for degree programmes</h1>
        <form
          className="mt-7 flex items-center"
          onSubmit={(e) => searchCourses(e, searchInputRef.current.value)}
        >
          <label className="flex-grow">
            <input
              type="text"
              name="q"
              className="w-full ring"
              ref={searchInputRef}
            />
          </label>

          <button className="ml-5 bg-blue-200 px-5 py-2">Find</button>
        </form>
      </div>
    </div>
  );
}
