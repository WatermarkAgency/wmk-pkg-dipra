import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { H4 } from "../typography";
import PropTypes from "prop-types";

const PDFImage = styled.img`
  margin-bottom: -20px;
  margin-top: 8px;
`;

const JoomlaPdfIcon = styled.div`
  background: url("${({ icon }) => icon}") 0 center no-repeat;
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: url(${({ icon }) => icon});
  background-origin: padding-box;
  background-position-x: 0px;
  background-position-y: 50%;
  background-size : auto;
  color: rgb(31, 62, 79);
  display: block;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: 16px;
  line-height: 16px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 20px;
  padding-right: 0px;
  padding-top: 0px;
  text-size-adjust: 100%;
`;

const JoomlaPdfLink = styled.div`
  border-bottom-color: rgba(0, 0, 0, 0) transparent;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(31, 62, 79);
  display: block;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: 16px;
  line-height: 25.6px;
  margin-bottom: 5px;
  margin-left: 0px;
  margin-right: 5px;
  margin-top: 5px;
  padding-bottom: 3px;
  padding-left: 0px;
  padding-right: 5px;
  padding-top: 3px;
  text-size-adjust: 100%;
`;

const JoomlaAnchor = styled.a`
  cursor: pointer;
  display: inline;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 16px;
  height: auto;
  line-height: 16px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-decoration-color: rgb(132, 196, 71);
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-thickness: auto;
  text-size-adjust: 100%;
`;

const DipraPdf = ({ image, title, link, heading, icon }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row className="flex-column">
            {heading ? (
              <Col>
                <H4>{heading}</H4>
              </Col>
            ) : null}
            <Col>
              <a href={link} target="_self">
                <PDFImage src={image} alt={"PDF Download of " + title} />
              </a>
            </Col>
            <Col>
              <JoomlaPdfLink>
                <JoomlaPdfIcon>
                  <JoomlaAnchor href={link} target="_self">
                    {title}
                  </JoomlaAnchor>
                </JoomlaPdfIcon>
              </JoomlaPdfLink>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DipraPdf;

DipraPdf.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  heading: PropTypes.string,
  icon: PropTypes.string,
};

DipraPdf.defaultProps = {
  icon: "https://dipra.org/media/com_phocadownload/images/mime/16/icon-pdf.png",
};
