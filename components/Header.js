import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import { Button, Block, NavBar, Text, theme, Button as GaButton } from 'galio-framework';
import Icon from './Icon';
import Input from './Input';
import Tabs from './Tabs';
import nowTheme from '../constants/Theme';

var focused =1;

const { height, width } = Dimensions.get('window');
const iPhoneX = () =>
  Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);
const BellButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate('Notifications')}
  >
    <Icon
      family="NowExtra"
      size={16}
      name="bulb"
      color={nowTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={[styles.notify, { backgroundColor: nowTheme.COLORS[isWhite ? 'WHITE' : 'PRIMARY'] }]} />
  </TouchableOpacity>
);
const BasketButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Cart')}>
    <Icon
      family="NowExtra"
      size={16}
      name="basket2x"
      color={nowTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);
class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };
  renderRight = () => {
    const { white, title, navigation } = this.props;
    
    if (title === 'Title') {
      return [
        <BellButton key="chat-title" navigation={navigation} isWhite={white} />,
        <BasketButton key="basket-title" navigation={navigation} isWhite={white} />
      ];
    }
    switch (title) {
      case 'Home':
        return [
          <BellButton key="chat-home" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-home" navigation={navigation} isWhite={white} />
        ];
      case 'Deals':
        return [
          <BellButton key="chat-categories" navigation={navigation} />,
          <BasketButton key="basket-categories" navigation={navigation} />
        ];
      case 'Categories':
        return [
          <BellButton key="chat-categories" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-categories" navigation={navigation} isWhite={white} />
        ];
      case 'Category':
        return [
          <BellButton key="chat-deals" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-deals" navigation={navigation} isWhite={white} />
        ];
      case 'Profile':
        return [
          <BellButton key="chat-profile" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-deals" navigation={navigation} isWhite={white} />
        ];
      case 'Account':
        return [
          <BellButton key="chat-profile" navigation={navigation} />,
          <BasketButton key="basket-deals" navigation={navigation} />
        ];
      case 'Product':
        return [
          <BellButton key="chat-profile" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-product" navigation={navigation} isWhite={white} />
        ];
      case 'Search':
        return [
          <BellButton key="chat-search" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-search" navigation={navigation} isWhite={white} />
        ];
      case 'Settings':
        return [
          <BellButton key="chat-search" navigation={navigation} isWhite={white} />,
          <BasketButton key="basket-search" navigation={navigation} isWhite={white} />
        ];
      default:
        break;
    }
  };
  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="What are you looking for?"
        placeholderTextColor={'#8898AA'}
        onFocus={() => navigation.navigate('Search')}
        iconContent={
          <Icon size={16} color={theme.COLORS.MUTED} name="zoom-bold2x" family="NowExtra" />
        }
      />
    );
  };
  renderOptions = () => {
    const { navigation, optionLeft, optionRight } = this.props;


    const containerStyles1 = [
      styles.defaultStyle,
      focused==1? [styles.activeStyle, styles.shadow1] : styles.tab
    ];
    const containerStyles2 = [
      styles.defaultStyle,
      focused==2 ? [styles.activeStyle, styles.shadow1] : styles.tab
    ];
    const containerStyles3 = [
      styles.defaultStyle,
      focused==3 ? [styles.activeStyle,styles.shadow1]  : styles.tab
    ];
    const tabtitle1 = [
      focused==1 ? [styles.selectedtab] : styles.tabTitle
    ];
    const tabtitle2 = [
      focused==2 ? [styles.selectedtab] : styles.tabTitle
    ];
    const tabtitle3 = [
      focused==3 ? [styles.selectedtab]  : styles.tabTitle
    ];
    return (
      <Block row style={styles.options}>
        <Button
          shadowless
          style={[styles.tab, styles.divider]}
          onPress={() => navigation.navigate('Dashboard')}
          style={containerStyles1}
        
          onPress={() => {
            focused=1
            navigation.navigate('Dashboard');

          }}
        >
          <Block row middle>
            <Icon
              name="single"
              family="NowExtra"
              size={18}
              style={{ paddingRight: 8 }}
              style={tabtitle1}
              color={nowTheme.COLORS.HEADER}
            />
            <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}/>
            <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={tabtitle1}>
              {optionLeft || 'Local'}
            </Text>
          </Block>
        </Button>
      
        <Button shadowless /* style={styles.tab} */ style={containerStyles3} onPress={() => {
          focused=3
          navigation.navigate('District');

        }}>
          <Block row middle>
            <Icon
              size={18}
              name="map"
              family="FontAwesome5 (solid)"
              style={{ paddingRight: 8 }}
              style={tabtitle3 }
              color={nowTheme.COLORS.HEADER}
            />
            <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}/>
            <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={tabtitle3}>
              {optionRight || 'District'}
            </Text>
          </Block>
        </Button>
        <Button shadowless /* style={styles.tab} */ style={containerStyles2} onPress={() => {
          focused=2
          navigation.navigate('Global');

        }}>
          <Block row middle>
            <Icon
              size={18}
              name="world2x"
              family="NowExtra"
              style={{ paddingRight: 8 }}
              style={tabtitle2 }
              color={nowTheme.COLORS.HEADER}
            />
            <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={styles.tabTitle}/>
            <Text style={{ fontFamily: 'montserrat-regular' }} size={16} style={tabtitle2}>
              {optionRight || 'Global'}
            </Text>
          </Block>
        </Button>
      </Block>
    );
  };
 
  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    if (!tabs) return null;
    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })}
      />
    );
  };
  renderHeader = () => {
    const { search, options, tabs } = this.props;
    if (search || tabs || options) {
      return (
        <Block center>
         {/*  {search ? this.renderSearch() : null} */}
          {options ? this.renderOptions() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
  };
  render() {
    const {
      back,
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      ...props
    } = this.props;
    const noShadow = ['Search', 'Categories', 'Deals', 'Pro', 'Profile'].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
      transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null
    ];
    const navbarStyles = [styles.navbar, bgColor && { backgroundColor: bgColor }];
    return (
      <Block style={headerStyles}>
        <NavBar
          back={false}
          title={title}
          style={navbarStyles}
          transparent={transparent}
         // right={this.renderRight()}
          rightStyle={{ alignItems: 'center' }}
          left={
            <Icon
              name={back ? 'minimal-left2x' : 'align-left-22x'}
              family="NowExtra"
              size={16}
              onPress={this.handleLeftPress}
              color={iconColor || (white ? nowTheme.COLORS.WHITE : nowTheme.COLORS.ICON)}
            />
          }
          leftStyle={{ paddingVertical: 12, flex: 0.2 }}
          titleStyle={[
            styles.title,
            { color: nowTheme.COLORS[white ? 'WHITE' : 'HEADER'] },
            titleColor && { color: titleColor }
          ]}
          {...props}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  selectedtab:{
    color:"white",
    // paddingRight: 8,
    // paddingVertical: 10,
    // paddingHorizontal: 10,
  },
  defaultStyle: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    color: "white",
    width:"30%",
  },
  activeStyle: {
    //backgroundColor: "#ff7f27",
    borderRadius: 25,
    paddingRight: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: "white",
    width:"30%",
  },
  shadow1: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  },

  button: {
    padding: 12,
    position: 'relative'
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'montserrat-regular'
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 3
  },
  notify: {
    backgroundColor: nowTheme.COLORS.SUCCESS,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12
  },
  header: {
    backgroundColor: theme.COLORS.WHITE
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: nowTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 22,
    elevation: 0
  },
  tabTitle: {
    paddingRight: 8,
    lineHeight: 40,
    fontWeight: '300',
    color: nowTheme.COLORS.HEADER
  },
  social: {
    width: theme.SIZES.BASE * 3.0,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: 'center'
  },
});
export default withNavigation(Header);