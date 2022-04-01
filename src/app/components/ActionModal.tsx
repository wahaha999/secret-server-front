import React, { FC, useState, useEffect } from "react";
import { ReactComponent as Close } from "../../assets/icons/Close.svg";
import { createSecret } from "../service/secret.service";
import * as Style from "./styles";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getAllSecrets } from "../../store/secret";

type Props = {
  isShow: boolean;
  onHide: () => void;
};

const ActionModal: FC<Props> = ({ isShow, onHide }) => {
  let defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate());

  const [secret, setSecret] = useState<string>("");
  const [expireAt, setExpireAt] = useState<Date>(defaultDate);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (secret === "") return;

    const payload = {
      secretText: secret,
      expireAt: expireAt,
    };

    createSecret(payload)
      .then((res) => {
        toast.success(res.data);
        dispatch(getAllSecrets());
        onHide();
      })
      .catch((error) => {
        toast.error("error");
      });
  };

  useEffect(() => {
    setSecret("");
  }, []);

  return (
    <Style.Modal show={isShow}>
      <Style.ModalBackground></Style.ModalBackground>
      <Style.ModalDialog>
        <Style.ModalContent>
          <Style.ModalHeader>
            <h3>Create Secret</h3>
            <Close onClick={onHide} />
          </Style.ModalHeader>
          <Style.ModalBody>
            <Style.FormGroup>
              <label className="required">
                Secret Text <span>*</span>
              </label>
              <Style.Input
                type="text"
                placeholder="Enter secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
            </Style.FormGroup>
            <Style.FormGroup>
              <label className="required">
                Expire time <span>*</span>
              </label>
              <Style.Input
                type="date"
                placeholder="Enter Description"
                value={expireAt.toLocaleDateString("en-CA")}
                onChange={(e) => setExpireAt(new Date(e.target.value))}
              />
            </Style.FormGroup>
          </Style.ModalBody>
          <Style.ModalFooter>
            <Style.CancelButton onClick={onHide}>Cancel</Style.CancelButton>
            <Style.UpdateButton onClick={handleSubmit}>Save</Style.UpdateButton>
          </Style.ModalFooter>
        </Style.ModalContent>
      </Style.ModalDialog>
    </Style.Modal>
  );
};

export { ActionModal };
