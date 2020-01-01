import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Service.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { requestSearch } from "store/actions/Info";

const Search = ({ match }) => {
    const dispatch = useDispatch();
    let searchs = useSelector(state => state.clubReducer.search, []);

    useEffect(() => {
        dispatch(requestSearch(match.params.text));
    }, []);

    return (
        <div className="service-wrap">
            <div className="head">
                <div className="text">"{match.params.text}"에 대한 검색결과</div>
            </div>
            <div className="content">
                {searchs.count === 0
                    ? "검색결과가 존재하지 않습니다."
                    : searchs.results &&
                      searchs.results.map(search => {
                          return (
                              <div>
                                  <div>{search.title}</div>
                                  <div>{search.content}</div>
                              </div>
                          );
                      })}
            </div>
        </div>
    );
};

export default Search;
