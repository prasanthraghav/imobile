import React from "react";
// import { MobileView } from "react-device-detect";
import ordinal from "ordinal";
import phImg from "../images/person-placeholder-image-transparent-hd-png-download.png";

function Card({ data }) {
  const { phone, sms, mail, tag, priority, firstName, lastName, photo } = data;
  return (
    <div className="flex">
      <div>
        <img
          src={photo ? photo : phImg}
          alt={`${firstName} ${lastName}`}
          width="60px"
          height="60px"
          className="rounded-full"
        />
      </div>
      <div className="ml-4 flex-1">
        <p className="text-xl mb-4">
          {firstName} <span className="font-bold">{lastName}</span> ({tag})
        </p>
        {mail && (
          <div className="mb-2 cursor-pointer">
            <a href={`mailto:${mail}`}>
              <i className="fa fa-envelope-o text-red-500"></i> {mail}
            </a>
          </div>
        )}
        {sms && (
          <div className="mb-2  cursor-pointer">
            <a href={`sms:${sms}`}>
              <i className="fa fa-comment text-yellow-400"></i> Instant Message
            </a>
          </div>
        )}
        {phone && (
          <div className="mb-2  cursor-pointer">
            <a href={`tel:${phone}`}>
              <i className="fa fa-phone-square text-green-400"></i>
              <span className="font-bold m-2">{phone}</span>
            </a>
          </div>
        )}
        {/* <MobileView>
          {sms && (
            <div className="mb-2">
              <a href={`sms:${sms}`}>
                <i className="fa fa-comment text-yellow-400"></i> Instant
                Message
              </a>
            </div>
          )}
          {phone && (
            <div className="mb-2">
              <a href={`tel:${phone}`}>
                <i className="fa fa-phone-square text-green-400"></i>
                <span className="font-bold m-2">{phone}</span>
              </a>
            </div>
          )}
        </MobileView> */}
      </div>
      <div className="text-sm font-light">{ordinal(priority)}</div>
    </div>
  );
}

export default Card;
