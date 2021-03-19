/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-cycle
import Footer from '../../commons/Footer';
import Modal from '../../commons/Modal';
// import { SEO } from '../../commons/SEO';
import Header from '../../commons/Header';
import { Box } from '../../commons/foundation/layout/Box';
import FormContato from '../../patterns/FormContato';

export const WebsitePageContext = React.createContext({
  toggleModalContato: () => {},
  setCurrentCard: () => {},
  getCurrentCard: () => {},
});

export default function WebsitePageWrapper({
  children,
  // seoProps,
  pageBoxProps,
}) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentCard, setCurrentCard] = React.useState('state inicial');

  const toggleModalContato = () => setIsModalOpen(!isModalOpen);
  const getCurrentCardData = () => currentCard;
  const setCurrentCardData = (props) => setCurrentCard(props);

  const contextProps = {
    toggleModalContato,
    getCurrentCardData,
    setCurrentCardData,
  };

  return (
    <WebsitePageContext.Provider value={contextProps}>
      {/* <SEO {...seoProps} /> */}

      <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        {...pageBoxProps}>
        <Header />

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {(modalProps) => <FormContato modalProps={modalProps} />}
        </Modal>

        {children}

        <Footer colorWrapper="white" />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),

  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
