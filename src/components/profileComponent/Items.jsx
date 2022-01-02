import { useFetch } from "./useFetch";
import React, { useState } from "react";
import "./Items.css";

const Items = (props) => {
  const [...items] = props.results.held_items;
  const itemsUrlArr = [];
  for (const { ...name } of Object.values(items)) {
    itemsUrlArr.push({ itemHeld: name.item.url });
  }
  if (items.length > 0) {
    return (
      <div className="Items pe-4 ps-4">
        <h5 className="stat-heading pb-2">items held</h5>
        {itemsUrlArr.map((item, index) => {
          const { data, loading } = useFetch(item.itemHeld);
          if (!loading) {
            const { ...itemData } = data.data;
            return (
              <div className="row" key={index}>
                <div className="col-4">
                  <div className="card berry">
                    <img
                      src={itemData.sprites.default}
                      className="img-fluid item"
                      alt={itemData.name}
                    />
                    <div className="type-details">{itemData.name}</div>
                    <div className="details">item id: {itemData.id}</div>
                  </div>
                </div>
                <div className="col-8 item-details">
                  <div className="card berry-dets">
                    <div className="row">
                      <div className="col-6 item-titles">
                        <ul>
                          <li>category:</li>
                          <li>cost:</li>
                          <li>fling effect:</li>
                          <li>fling power:</li>
                          <li>baby trigger:</li>
                        </ul>
                      </div>
                      <div className="col-6 item-values">
                        <ul>
                          <li>{itemData.category.name}</li>
                          <li>{itemData.cost}</li>
                          <li>{itemData.fling_effect?.name || "n/a"}</li>
                          <li>{itemData.fling_power || "n/a"}</li>
                          <li>{itemData.baby_trigger_for || "no"}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item-description pb-3">
                  {itemData.effect_entries[0].effect || "no description"}
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="Items">
        <h5 className="stat-heading pt-4">items held</h5>
        <p>- {props.results.name} does not hold any items</p>
      </div>
    );
  }
};

export default Items;
