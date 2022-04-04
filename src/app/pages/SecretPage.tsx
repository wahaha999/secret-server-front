import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TableColumn } from "react-data-table-component";
import { Secret } from "../types/data";
import { customQuotesSort } from "../helper/table.helper";
import { getSecret } from "../service/secret.service";
import moment from "moment";
import DataTableBase from "../components/DataTableBase";
import * as Style from "../components/styles";
import { useDispatch, useSelector } from "react-redux";
import { getSecrets } from "../../store/secret/selectors";
import { getAllSecrets } from "../../store/secret";

const DashboardPage = () => {
  const [data, setData] = useState<Secret[]>([]);
  const dispatch = useDispatch();
  const secrets = useSelector(getSecrets);

  const openSecret = useCallback((hash: string) => {
    getSecret(hash).then((res) => {
      alert(res.data);
    });
  }, []);

  const columns: TableColumn<Secret>[] = useMemo(
    () => [
      {
        name: "Secret Text",
        selector: (row) => row.secretText,
        maxWidth: "unset !important",
        sortable: true,
      },
      {
        name: "Expire time",
        selector: (row) => moment(row.expireAt).format("DD/MM/YYYY hh:mm"),
        sortable: true,
        style: {
          maxWidth: "unset !important",
          marginLeft: "10px",
          padding: "0.7rem 0 !important",
        },
      },
      {
        name: "Created time",
        selector: (row) => moment(row.createdAt).format("DD/MM/YYYY hh:mm"),
        sortable: true,
        style: {
          maxWidth: "unset !important",
          marginLeft: "10px",
          padding: "0.7rem 0 !important",
        },
      },
      {
        name: "Actions",
        cell: (row) => (
          <span className="show-secret" onClick={() => openSecret(row.hash)}>
            Show
          </span>
        ),
        style: {
          maxWidth: "unset !important",
          marginLeft: "10px",
        },
      },
    ],
    [openSecret]
  );

  useEffect(() => {
    setData(secrets);
  }, [secrets]);

  useEffect(() => {
    dispatch(getAllSecrets());
  }, []);

  return (
    <Style.Container>
      <Style.ContainerBody>
        <DataTableBase
          columns={columns}
          data={data}
          progressPending={false}
          sortFunction={customQuotesSort}
        />
      </Style.ContainerBody>
    </Style.Container>
  );
};

export default DashboardPage;
