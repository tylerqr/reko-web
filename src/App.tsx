import Button from './button'
import ItemCard from './itemCard'

const App = () => {
    return (
        <div className='flex justify-center items-center flex-wrap h-screen gap-5 bg-grey4'>
          <Button className='' variant="primary">
    Primary
</Button>
<Button className='' variant="secondary">
    Secondary
</Button>
<Button className='' variant="primary-disabled">
    Primary disabled
</Button>
<Button className='' variant="secondary-disabled">
    Secondary disabled
</Button>
<ItemCard
        image="https://assets.clevelandclinic.org/transform/656ec80a-6bbd-4c28-80ef-1745d5c35245/raw-milk-1665672653"
        name="Raw Milk"
        price="3.99/Gallon"
        description="Discover the exceptional quality of our farm-fresh raw milk, a pure and delicious milk that showcases the benefits of pasture-raised cows. High in nutrients and perfect for health-conscious consumers."
        minWidth="250px"
        maxWidth="300px"
        minHeight="350px"
        maxHeight="400px"
      />
        </div>
    )
}

export default App
