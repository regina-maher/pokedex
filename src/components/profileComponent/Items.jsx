import { useFetch } from "./useFetch";
import React, { useContext } from "react";
import "./Items.css";
import { ResultsContext } from "../../ResultsContext";

const Items = (props) => {
  const { results } = useContext(ResultsContext);
  const [...items] = results.data.held_items;
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
            const itemDetails = [];
            const createItemDetails = ({
              baby_trigger_for,
              category,
              cost,
              fling_effect,
              fling_power,
            }) => {
              itemDetails.push(
                { title: "category", value: category.name.replace("-", " ") },
                {
                  title: "cost",
                  value: cost,
                },
                {
                  title: "fling effect",
                  value: fling_effect || "n/a",
                },
                {
                  title: "fling power",
                  value: fling_power || "n/a",
                },
                {
                  title: "baby trigger",
                  value: baby_trigger_for || "no",
                }
              );
            };
            createItemDetails(itemData);
            console.log(itemDetails);
            return (
              <div className="row" key={index}>
                <hr />
                <div className="item-description pb-3">
                  {itemData.effect_entries[0].effect || "no description"}
                </div>
                <div className="col-4">
                  <div className="card berry">
                    <img
                      src={itemData.sprites.default}
                      className="img-fluid item"
                      alt={itemData.name}
                    />
                    <div className="type-details">
                      {itemData.name.replace("-", " ")}
                    </div>
                    <div className="details">ITEM ID: {itemData.id}</div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="card berry-dets">
                    <div className="row">
                      {itemDetails.map((item, index) => {
                        console.log(item);
                        return (
                          <div key={index} className="d-flex item-details">
                            <div className="col-6 item-title">
                              {item.title}:
                            </div>
                            <div className="col-6 item-value">
                              {/* {item.value.name} */}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
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
        <p>- {results.data.name} does not hold any items</p>
      </div>
    );
  }
};

export default Items;
