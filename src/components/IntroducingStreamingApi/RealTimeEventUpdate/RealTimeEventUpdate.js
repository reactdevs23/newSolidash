import React from "react";
import { FiPlus } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

import { LuInfo } from "react-icons/lu";

import styles from "./RealTimeEventUpdate.module.css";

const RealTimeEventUpdate = () => {
  const data = [
    {
      icon: <FiPlus className={styles.icon} />,
      info: "<span>0x0001</span> sent 100 ethers <span>on Ethereum Network</span>",
    },
    {
      icon: <LuInfo className={styles.icon} />,
      info: "<span>0x0001</span> deployed a contract <span>on BSC network</span>",
    },
    {
      icon: <FaCheck className={[styles.icon, styles.checkedIcon].join(" ")} />,
      info: "<span>0x0001</span> recieved 100 USDT <span>on Polygon Network</span>",
    },
    {
      icon: <FaCheck className={[styles.icon, styles.checkedIcon].join(" ")} />,
      info: "<span>0x0001</span> sent an NFT <span>on Optimism Network</span>",
    },
    {
      icon: <FiPlus className={styles.icon} />,
      info: "<span>0x0001</span> swapped ETH for DAI <span>on Base Network</span>",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
        <h4 className={styles.title}>Real-time events update</h4>
        <p className={styles.info}>
          Get notified of blockchain transactions as they happen in real time!
        </p>
      </div>
      <div className={styles.listContainer}>
        {data.map((el, i) => (
          <div className={styles.list} key={i}>
            <div className={styles.iconContainer}>{el.icon}</div>
            <p
              className={[styles.info, styles.updates].join(" ")}
              dangerouslySetInnerHTML={{ __html: el.info }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RealTimeEventUpdate;
