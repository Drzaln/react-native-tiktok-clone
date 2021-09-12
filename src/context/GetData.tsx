import React, {useState, useEffect} from 'react';

interface image {
  medium: string;
}

export interface images {
  id: number;
  src: image;
}

type ContextType = {
  imageDatas: images[];
  isLoading: boolean;
  _getDataList: () => void;
};

const initialState = {
  imageDatas: [],
  isLoading: false,
  isError: false,
  setImageDatas: () => {},
  setIsLoading: () => {},
  setIsError: () => {},
  _getDataList: () => {},
};

export const GetDataContext = React.createContext<ContextType>(initialState);

export const {Provider: GetDataProvider, Consumer: GetDataConsumer} =
  GetDataContext;

export const GetDataController: React.FC<React.ReactNode> = ({children}) => {
  const [imageDatas, setImageDatas] = useState<images[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const _getDataList = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=animal&page=${page}`,
        {
          method: 'GET',
          headers: {
            Authorization:
              '563492ad6f91700001000001278f22b003be4a01a8ad978afc5103e0',
          },
        },
      );
      const getDataList = await response.json();
      setIsLoading(false);
      setImageDatas([...imageDatas, ...getDataList.photos]);
      setPage(prev => prev + 1);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    _getDataList();
  }, []);

  const getDataValue = React.useMemo(
    () => ({
      imageDatas,
      isLoading,
      isError,
      setImageDatas,
      setIsLoading,
      setIsError,
      _getDataList,
    }),
    [imageDatas, isLoading, isError],
  );

  return <GetDataProvider value={getDataValue}>{children}</GetDataProvider>;
};
