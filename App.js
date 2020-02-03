import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {Entypo, FontAwesome, Ionicons} from "@expo/vector-icons";
import {Header} from "./components/Header";
import {Score} from "./components/Score";
import {Card} from './components/Card';
import {shuffle} from 'lodash';

const STYLE = {
  CONTAINER: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff'
  },
  ROW: {
    flex: 1,
    flexDirection: 'row'
  },
  BODY: {
    flex: 18,
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20
  }
};

const CONTENT = {
  BUTTON_TITLE: 'Rest',
  BUTTON_COLOR: '#008cfa',
};

export default class App extends Component {
  constructor(props){
    super(props);
    this.renderCards = this.renderCards.bind(this);
    this.restCard = this.restCard.bind(this);
    let sources = {
      'fontawesome': FontAwesome,
      'entypo': Entypo,
      'ionicons': Ionicons,
    };
    let cards = [
      {
        src: 'fontawesome',
        name: 'heart',
        color: 'red'
      },
      {
        src: 'entypo',
        name: 'feather',
        color: '#7d4b12'
      },
      {
        src: 'entypo',
        name: 'flashlight',
        color: '#f7911f'
      },
      {
        src: 'entypo',
        name: 'flower',
        color: '#37b24d'
      },
      {
        src: 'entypo',
        name: 'moon',
        color: '#ffd43b'
      },
      {
        src: 'entypo',
        name: 'youtube',
        color: '#ff0000'
      },
      {
        src: 'entypo',
        name: 'shop',
        color: '#5f5f5f'
      },
      {
        src: 'fontawesome',
        name: 'github',
        color: '#24292e'
      },
      {
        src: 'fontawesome',
        name: 'skype',
        color: '#1686d9'
      },
      {
        src: 'fontawesome',
        name: 'send',
        color: '#1c7cd6'
      },
      {
        src: 'ionicons',
        name: 'ios-magnet',
        color: '#d61c1c'
      },
      {
        src: 'ionicons',
        name: 'logo-facebook',
        color: '#3c5b9b'
      },
    ];
    let clone = JSON.parse(JSON.stringify(cards));
    this.cards = cards.concat(clone);
    this.cards.map((obj) => {
      obj.id = Math.random().toString(36).substring(7);
      obj.src = sources[obj.src];
      obj.isOpen = false;
    });
    this.cards = shuffle(cards);
    this.state = {
      cards: this.cards,
      score: 0,
      currentSelection: [],
      selectedPairs: [],
    }
  }

  restCard = () => {
    const cardsRest = this.state.cards.map((obj) => {
      obj.isOpen = false;
      return obj
    });
    this.setState({
      score: 0,
      currentSelection: [],
      selectedPairs: [],
      cards:cardsRest
    })
  };

  getRowContents = (cards) => {
    let contentsR = [];
    let contents = [];
    let count = 0;
    cards.forEach((item) => {
      count += 1;
      contents.push(item);
      if( count === 4 ) {
        contentsR.push(contents);
        count = 0;
        contents = []
      }
    });
    return contentsR
  };

  renderRow = () => {
    let contents = this.getRowContents(this.state.cards);
    return contents.map((cards, index) => {
      return (
          <View
              key={index}
              style={STYLE.ROW}
          >
            {this.renderCards(cards)}
          </View>
      )})
  };

  clickCard = (id) => {
    let stateScore = this.state.score;
    let arrSelectedPairs = this.state.selectedPairs;
    let arrCurrentSelection = this.state.currentSelection;
    let index = this.state.cards.findIndex((card) => (card.id === id));
    let cards = this.state.cards;
    if(!cards[index].isOpen && arrSelectedPairs.indexOf(cards[index].name) === -1) {
      cards[index].isOpen = true;
      arrCurrentSelection.push({
        index:index,
        name: cards[index].name
      })
    }
    if(arrCurrentSelection === 2) {
      if(arrCurrentSelection[0].name === arrCurrentSelection[1].name) {
        stateScore +=1;
        arrSelectedPairs.push(arrCards[index].name)
      } else {
        arrCards[currentSelection[0].index].isOpen = false;
        setTimeout(() => {
          arrCards[index].isOpen = false;
          setCards(arrCards)
        }, 500)
      }
      arrCurrentSelection = []
    }
    this.setState({
      score: stateScore,
      cards: cards,
      currentSelection: arrCurrentSelection
    });
  };

  renderCards = (cards) => {
    return (
        cards.map((card, i) => {
          return (
              <Card
                  key={i}
                  src={card.src}
                  name={card.name}
                  color={card.color}
                  isOpen={card.isOpen}
                  clickCard={this.clickCard.bind(this, card.id)}
              />
          )
        })
    )
  };
  render(){
    return (
        <View style={STYLE.CONTAINER}>
          <Header/>
          <View style={STYLE.BODY}>
            {this.renderRow.call(this)}
          </View>
          <Score score={this.state.score}/>
          <Button
              onPress={this.restCard}
              title={CONTENT.BUTTON_TITLE}
              color={CONTENT.BUTTON_COLOR}
          />
        </View>
    )
  }
};
