import telephoneImg from '../image/telephone-symbol.png';

const HomeView = () => (
    <div className="HomeView">
        <div className="HomeViewImgBlock">
            <img src={telephoneImg} alt="" width="150" />
        </div>
        <h1 className="HomeViewText">
            Welcome to the "Contacts" application!
        </h1>
    </div>
)
export default HomeView;