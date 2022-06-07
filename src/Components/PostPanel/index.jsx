import { useEffect, useRef, useState } from 'react'
import Pagination from '../Pagination'
import postsData from '../Data'
import { timeFormat, viewsCountFormat } from '../TimeCountUtil'
import './style.css'

const pageLimit = 10

const PostPanel = () => {
    const [modalPos, setModalPos] = useState({ x: 0, y: 0 })
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [modalContent, setModalContent] = useState({})
    const [pagination, setPagination] = useState(1)
    const [pageablePosts, setPageablePosts] = useState([])
    const ref = useRef(null)

    const handleClickOpenModal = (post, event) => {
        const postModalElement = ref.current
        postModalElement.style.transition = 'none'

        setModalPos({ x: event.clientX, y: event.clientY })
        setIsOpenModal(true)
        setModalContent(post)

        postModalElement.style.top = event.clientY + 'px';
        postModalElement.style.left = event.clientX + 'px';

        setTimeout(() => {
            postModalElement.classList.remove('close');
            postModalElement.style.transition = 'all .4s';
            postModalElement.classList.add('open');
            postModalElement.style.top = '50%';
            postModalElement.style.left = '50%';
        }, 5)
    }

    const handleClickCloseModal = () => {
        const postModalElement = ref.current
        const { x, y } = modalPos
        setIsOpenModal(false)

        postModalElement.classList.remove('open')
        postModalElement.classList.add('close')
        postModalElement.style.top = y + 'px';
        postModalElement.style.left = x + 'px';
    }

    const handlePagination = (pageNumber) => {
        setPagination(pageNumber)
    }

    useEffect(() => {
        document.onkeyup = e => {
            if (e.key === 'Escape') {
                handleClickCloseModal()
            }
        }
    }, [])

    useEffect(() => {
        const posts = []
        const dataLen = postsData?.length

        for (let i = (pagination - 1) * pageLimit; i < dataLen; i++) {
            posts.push(postsData[i])

            if (i === pagination * pageLimit - 1) break
        }

        setPageablePosts(posts)
    }, [pagination])

    console.log(isOpenModal);
    return (
        <div className="post-panel">
            <div className="posts-wrapper">
                {
                    pageablePosts?.map((post, index) => (
                        <div className="post" key={post.id}>
                            <div className="post-image-wrapper">
                                <div className="post-image">
                                    <img
                                        loading="lazy"
                                        src={post.imgUrl}
                                        alt={post.title}
                                    />
                                    <div
                                        className="post-image-open-btn"
                                        onClick={event => handleClickOpenModal(post, event)}
                                    >
                                        <i className="icon white-icon open-outline"></i>
                                    </div>
                                </div>
                            </div>
                            <h4 className="title">
                                {post.title}
                            </h4>
                            <div className="time-views">
                                <div className="time">
                                    {timeFormat(post.createTime)}
                                </div>
                                <div className="views">
                                    <i className="icon black-icon eye-outline"></i>
                                    <span className="views-count">
                                        {viewsCountFormat(post.views)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Pagination
                count={Math.ceil(postsData.length / 10)}
                currentPage={pagination}
            />

            <div
                className='post-modal close'
                ref={ref}
            >
                <div
                    className="modal-close-icon"
                    onClick={handleClickCloseModal}
                ></div>
                <div className="modal-container">
                    <img
                        src={modalContent?.imgUrl}
                        alt={modalContent?.title}
                        loading='lazy'
                    />
                    <div className="tags-time-views">
                        <div className="hashtags">
                            {
                                modalContent?.hashtags?.map((hashtag, index) => (
                                    <a href="#" key={index + hashtag}>
                                        {hashtag}
                                    </a>
                                ))
                            }
                        </div>
                        <div className="time">
                            {timeFormat(modalContent?.createTime)}
                        </div>
                        <div className="views">
                            <i className="icon white-icon eye-outline"></i>
                            <span>{modalContent?.views}</span>
                        </div>
                    </div>
                    <h3 className="title">
                        {modalContent?.title}
                    </h3>
                    <div>
                        {
                            modalContent?.description?.map((content, index) => (
                                <p
                                    className="text-content"
                                    key={index + '-content'}
                                >
                                    {content}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostPanel