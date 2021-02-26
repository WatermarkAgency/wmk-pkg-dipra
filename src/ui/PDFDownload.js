import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { H4 } from "../typography";

const PDFImage = styled.img`
  margin-bottom: -20px;
  margin-top: 8px;
`;

const JoomlaPdfIcon = styled.div`
  background: url("https://www.dipra.org/media/com_phocadownload/images/mime/16/icon-pdf.png")
    0 center no-repeat;
`;

const DipraPdf = ({ image, title, link, heading }) => {
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
              <div className="pd-filename phocadownloadfile phoca-dl-file-box-mod">
                <JoomlaPdfIcon className="pd-document16">
                  <a href={link} target="_self">
                    {title}
                  </a>
                </JoomlaPdfIcon>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DipraPdf;
