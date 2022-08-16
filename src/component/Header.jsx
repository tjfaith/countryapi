export default function Header(){
    return (
        <div className="shadow-lg h-16 py-5 flex justify-between px-12 bg-white">
        <h3>Where in the world?</h3>
        <div className="flex">
          <img src="./src/assets/icon/icon.svg" alt="" />
          <span className="ml-3">Dark mode</span>
        </div>
      </div>
    )
}