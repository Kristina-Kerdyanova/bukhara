import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

.image-gallery-icon {

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: rgba(179, 212, 252);
      .image-gallery-svg {
        transform: scale(1.1);
      }
    }
  }

  &:focus {
    // a11y support
    outline: 2px solid rgba(179, 212, 252);
  }
}


.image-gallery-bullet {
  &:focus {
    background: rgba(179, 212, 252);
    border: 1px solid rgba(179, 212, 252);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(179, 212, 252);
      border: 1px solid rgba(179, 212, 252);
    }

    &.active:hover {
      background: rgba(179, 212, 252);
    }
  }
}


.image-gallery-thumbnail {
  &.active,
  &:focus {
    outline: none;
    border: 4px solid rgba(179, 212, 252);

    @media (max-width: 768px) {
      border: 3px solid rgba(179, 212, 252);
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      outline: none;
      border: 4px solid rgba(179, 212, 252);

      @media (max-width: 768px) {
        border: 3px solid rgba(179, 212, 252);
      }
    }
  }
}

.list {
  /* opacity: 0; */
  transition: opacity 0.5s;
}

.list-active {
  opacity: 1;
  transition: opacity 1s;
}

.header {
  background-color: #ffffff8a;
}

.active-link {
  color: rgb(155, 165, 173);
  font-weight: 600;
  color: #337ab7;
  text-decoration: none;
  /* cursor: default; */

  @media (max-width: 550px) {
    font-size: 20px;
    padding: 5px;
  }
}

.inactive-link {
  color: #337ab7;
  text-decoration: none;
  font-weight: 600;
  transition: all 1s;

  &:hover {
    cursor: pointer;
    color: rgb(155 165 173);
  }

  @media (max-width: 550px) {
    font-size: 20px;
    padding: 5px;
  }

}

.button-active {
  transform: rotate(90deg);
}

.menu-active {
  top: 0;
}

.modal-active {
  display: flex;
}
`;
