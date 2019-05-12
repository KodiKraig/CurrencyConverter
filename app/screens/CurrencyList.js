import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { FlatList, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

class CurrencyList extends React.Component {

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
  };

  handlePress = (currency) => {
    console.log('row press');

    // Change the currency depending on which one was selected
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency))
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency))
    }

    // Go back to the previous screen
    this.props.navigation.goBack(null);
  };

  render() {
    let comparisonCurrency = this.props.baseCurrency;
    if (this.props.navigation.state.params.type === 'quote') {
      comparisonCurrency = this.props.quoteCurrency;
    }

    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="default" translucent={false}/>
        <FlatList
            data={currencies}
            renderItem={({ item }) => (
                <ListItem
                    text={item}
                    selected={item === comparisonCurrency}
                    onPress={() => this.handlePress(item)}
                />
            )}
            keyExtractor={item => item}
            ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
  };
};

export default connect(mapStateToProps)(CurrencyList);

