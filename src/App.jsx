// Styling
import './App.css'

// Assets
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import ourStory from './assets/our_story.png'

// Components
import Button from "./components/button/Button.jsx";
import ProductCard from "./components/productcard/ProductCard.jsx";
import Tile from "./components/tile/Tile.jsx";

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button isDisabled={false}>to the collection</Button>
                <Button isDisabled={false}>shop all bags</Button>
                <Button isDisabled={true}>pre-orders</Button>
            </nav>
            <main>
                <ProductCard
                    name={"The handy bag"}
                    price={400}
                    label={"Best Seller"}
                    imageSrc={bag1}
                />

                <ProductCard
                    name={"The stylish bag"}
                    price={250}
                    label={"Best Seller"}
                    imageSrc={bag2}
                />

                <ProductCard
                    name={"The simple bag"}
                    price={300}
                    label={"New Collection"}
                    imageSrc={bag3}
                />

                <ProductCard
                    name={"The trendy bag"}
                    price={400}
                    label={"New Collection"}
                    imageSrc={bag4}
                />
            </main>
            <footer>
                <Tile>
                    <h2>The brand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloremque impedit labore
                        nulla numquam quia quis quo sequi tempore veritatis!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi dolore dolorem fuga
                        hic impedit nemo quaerat quam repudiandae similique.</p>
                </Tile>
                <Tile>
                    <img src={brand} alt="photo with logo"/>
                </Tile>
                <Tile>
                    <img src={ourStory} alt="photo of two women hugging"/>
                </Tile>
                <Tile>
                    <h2>Our Story</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eos iure nisi qui. Commodi
                        magni minus provident. Dignissimos error ex, explicabo nam nisi qui sed tempora? Amet explicabo
                        hic placeat!</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
