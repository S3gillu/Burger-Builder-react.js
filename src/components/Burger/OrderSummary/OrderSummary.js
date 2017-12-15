import React,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render(){

        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransfrom: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A Delicious Burger With Following Ingredients :</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price : {this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button> &nbsp;
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }

}

export default OrderSummary;