import PropTypes from "prop-types";
import React, { Component } from "react";
import Iframe from "react-iframe";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Dropdown,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! ExplorePageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
// const ExplorePageHeading = ({ mobile }) => (
//   <Container text>
//     {/* <Image src="https://codeforsanfrancisco.org/img/uploads/screen-shot-2019-01-23-at-10.12.33-pm.png" /> */}
//   </Container>
// );

// ExplorePageHeading.propTypes = {
//   mobile: PropTypes.bool
// };

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 50, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" href="/">
                  Home
                </Menu.Item>
                <Menu.Item as="a" href="/about">
                  About
                </Menu.Item>
                <Menu.Item as="a" href="/explore" active>
                  Explore
                </Menu.Item>
                <Dropdown item text="Apps">
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as="a"
                      href="https://apps.apple.com/us/app/lane-breach/id1447775781"
                    >
                      iOS
                    </Dropdown.Item>
                    <Dropdown.Item as="a" href="https://app.lanebreach.org">
                      Android
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Container>
            </Menu>
            {/* <ExplorePageHeading /> */}
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" href="/">
            Home
          </Menu.Item>
          <Menu.Item as="a" href="/about">
            About
          </Menu.Item>
          <Menu.Item as="a" href="/explore" active>
            Explore
          </Menu.Item>
          <Menu.Item
            as="a"
            href="https://apps.apple.com/us/app/lane-breach/id1447775781"
          >
            iOS app
          </Menu.Item>
          <Menu.Item as="a" href="https://app.lanebreach.org">
            Web app
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 40, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            {/* <ExplorePageHeading mobile /> */}
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const Explore = () => (
  <ResponsiveContainer>
    <Iframe
      float="right"
      url="https://datastudio.google.com/embed/reporting/143a8WOiZiJuYTYUUHscE-Bd-sv-ttk9d/page/mMot"
      width="1200px"
      height="900px"
      id="dataStudio"
      frameborder="0"
      className="dataStudioClass"
      style="border:0"
      allowfullscreen
      display="initial"
      position="relative"
    />
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export { Explore };
