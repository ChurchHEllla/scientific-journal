import { Author } from '@/models/articles'

type Props = {
    value: Author
    onChange: (value: Author) => void
    isChange?: boolean
}

export default function AuthorInputs({ value, onChange, isChange = true }: Props) {
    return (
        <div>
            <input
                placeholder='ФИО'
                disabled={!isChange}
                value={value.fullName}
                onChange={(e) =>
                    isChange
                        ? onChange({
                              ...value,
                              fullName: e.target.value,
                          })
                        : null
                }
            />

            <input
                placeholder='Должность'
                disabled={!isChange}
                value={value.bio}
                onChange={(e) =>
                    isChange
                        ? onChange({
                              ...value,
                              bio: e.target.value,
                          })
                        : null
                }
            />

            <input
                type={'email'}
                placeholder='Email'
                disabled={!isChange}
                value={value.email}
                onChange={(e) =>
                    isChange
                        ? onChange({
                              ...value,
                              email: e.target.value,
                          })
                        : null
                }
            />
        </div>
    )
}
