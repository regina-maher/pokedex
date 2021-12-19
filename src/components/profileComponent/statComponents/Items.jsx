import { useFetch } from "./useFetch";
import React, { useState } from "react";
import "./Items.css";

const Items = (props) => {
  const [...items] = props.results.held_items;
  const itemsUrlArr = [];
  for (const [key, { ...name }] of Object.entries(items)) {
    itemsUrlArr.push({ itemHeld: name.item.url });
  }
  if (items.length > 0) {
    return (
      <div className="Items">
        <h5 className="stat-heading pt-4">items held</h5>
        <div className="row">
          {itemsUrlArr.map((item, index) => {
            const { data, loading } = useFetch(item.itemHeld);
            if (!loading) {
              const { ...itemData } = data.data;
              console.log(itemData);
              return (
                <div className="row" key={index}>
                  <div className="col-4">
                    <div className="basic-details">{itemData.name}</div>
                    <div className="details">item id: {itemData.id}</div>
                  </div>
                  <div className="col-8 item-details">
                    <ul>
                      <li>
                        <strong>category: </strong> {itemData.category.name}
                      </li>
                      <li>
                        <strong>cost: </strong> {itemData.cost}
                      </li>
                      <li>
                        {itemData.fling_effect && (
                          <span>
                            <strong>fling effect: </strong>
                            {itemData.fling_effect.name}
                          </span>
                        )}
                      </li>
                      <li>
                        {itemData.fling_power && (
                          <span>
                            <strong>fling power: </strong>
                            {itemData.fling_power}
                          </span>
                        )}
                      </li>
                      <li>
                        {itemData.baby_trigger_for && (
                          <span>
                            <strong> baby trigger:</strong>
                            {itemData.baby_trigger_for}
                          </span>
                        )}
                      </li>
                      <li>
                        {itemData.effect_entries[0].effect ??
                          itemData.effect_entries[0].effect}
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Items">
        <h5 className="stat-heading pt-4">items held</h5>
        <p>n/a</p>
      </div>
    );
  }
};

export default Items;
