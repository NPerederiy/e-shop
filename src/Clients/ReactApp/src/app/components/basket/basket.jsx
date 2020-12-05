import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import BasketItem from '../basket-item';
import './basket.scss';

const handleClearAction = () => {
    console.log('clear');

}

const handleMakeOrderAction = () => {
    console.log('ordering');
}

const testItems = [
    {
        id: 0,
        name: 'Клавиатура Apple Magic Keyboard RU+Numeric Keypad (White) MQ052RS/A',
        price: '5199',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/0/d/0d3b423126eedb0a1e72941da3a25c91.jpg',
        count: 1
    },
    {
        id: 1,
        name: 'Клавиатура Apple Magic Keyboard RU (Space Grey) MRMH2',
        price: '5399',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/d/a/daaeb5392dd2597f0aeeee0cbfe6a6bf.jpg',
        count: 1
    },
    {
        id: 2,
        name: 'Клавиатура игровая GamePro GK1500 (Black)',
        price: '1499',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/c/1/c176df3bf68359eca64da298ded8689e.jpg',
        count: 1
    },
    {
        id: 5,
        name: 'Игровая клавиатура Razer Black Widow X Chroma Mercury Edition (RZ03-01762000-R3M1)',
        price: '3199',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/1/f/1fc1d398a0c00dc193d119ce0ff46e35.jpg',
        discount: '2999',
        count: 2
    },
    {
        id: 6,
        name: 'Игровая клавиатура Razer Huntsman mini Red Switch (RZ03-03390200-R3M1)',
        price: '3999',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/0/1/014ad9203cae6644956356a7b580dc63.jpg',
        count: 1
    },
    {
        id: 7,
        name: 'Игровая клавиатура Razer Huntsman mini Purple Switch (RZ03-03390100-R3M1)',
        price: '3199',
        img: 'https://i.citrus.ua/imgcache/size_800/uploads/shop/0/1/014ad9203cae6644956356a7b580dc63.jpg',
        discount: '3799',
        count: 1
    },
    {
        id: -1,
        name: 'Lorem Ipsum Dolor Sit Amet',
        price: '18650',
        count: 1
    }
]

const Basket = ({
    items = testItems
}) => {
    const [totalPrice, settotalPrice] = React.useState(0);
    React.useEffect(() => {
        calcTotalPrice()
    }, [items])

    const calcTotalPrice = () => {
        let price = 0;

        items.forEach(item => {
            price += item.discount ? item.count * item.discount : item.count * item.price;
        })

        settotalPrice(price);
    }

    return (
        <Box className='basket-popper-container'>
            <Box>
                {items ? (
                    <Box id=''>
                        {items.map(item => (
                            <BasketItem
                                key={item.id}
                                className='basket-popper-item'
                                {...item}
                            />
                        ))}
                    </Box>
                ) : (
                        <>The basket is empty</>
                    )}
            </Box>
            <Box className='basket-popper-footer stick-to-bottom'>
                <Box className='basket-popper-total-price'>Total price:
                    <Box component='span' className='price'>
                        {totalPrice}
                    </Box>
                </Box>
                <Box className='basket-popper-button-row'>
                    <Button
                        variant='contained'
                        size='large'
                        onClick={handleClearAction}
                    >
                        Clear
                    </Button>
                    <Button
                        className='basket-popper-make-order-button'
                        variant='contained'
                        size='large'
                        onClick={handleMakeOrderAction}
                    >
                        Make order
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Basket;