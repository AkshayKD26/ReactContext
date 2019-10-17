import React, { Fragment } from 'react';
import MyContext from './MyContext';
const Cars = () => (
    <MyContext.Consumer>
        {context => (
            <Fragment>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map(carID => (
                //    { carID}
                    // <Car
                    //     key={carID}
                    //     name={context.cars[carID].name}
                    //     price={context.cars[carID].price}
                    //     incrementPrice={() => context.incrementPrice(carID)}
                    //     decrementPrice={() => context.decrementPrice(carID)}
                    // />
                    // console.log(carID)
                    <div key={carID}>{carID }</div>
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);

export default Cars;